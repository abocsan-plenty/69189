import type { GooglePayConfig, GooglePayPayPal } from '~/composables/useGooglePay/types';
import type { PayPalGooglePayAllowedPaymentMethod } from '@plentymarkets/shop-api';
import { cartGetters, paypalGetters } from '@plentymarkets/shop-api';

const loadExternalScript = async () => {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://pay.google.com/gp/p/js/pay.js';
    scriptElement.type = 'text/javascript';
    scriptElement.addEventListener('error', reject);
    scriptElement.addEventListener('load', resolve);
    document.head.append(scriptElement);
  });
};

const getPaymentsClient = () => {
  const { config } = usePayPal();

  return new google.payments.api.PaymentsClient({
    environment: config.value ? (paypalGetters.isProduction(config.value) ? 'PRODUCTION' : 'TEST') : 'TEST',
  });
};

export const useGooglePay = () => {
  const state = useState(`useGooglePay`, () => ({
    scriptLoaded: false,
    script: null as GooglePayPayPal | null,
    googleConfig: {} as GooglePayConfig,
    paymentsClient: {} as google.payments.api.PaymentsClient,
    paymentLoading: false,
  }));

  const initialize = async () => {
    const { data: cart } = useCart();
    const currency = computed(() => cartGetters.getCurrency(cart.value) || (useAppConfig().fallbackCurrency as string));
    const { getScript } = usePayPal();
    const script = await getScript(currency.value, true);

    if (!script) return false;

    if (!state.value.scriptLoaded) {
      await loadExternalScript();
      state.value.scriptLoaded = true;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state.value.script = (script as any).Googlepay() as GooglePayPayPal;
    state.value.googleConfig = await state.value.script.config();
    state.value.paymentsClient = getPaymentsClient();

    return true;
  };

  const getGoogleTransactionInfo = () => {
    const { data: cart } = useCart();
    const currency = computed(() => cartGetters.getCurrency(cart.value) || (useAppConfig().fallbackCurrency as string));
    return {
      countryCode: state.value.googleConfig.countryCode,
      currencyCode: currency.value,
      totalPriceStatus: 'FINAL',
      totalPrice: cartGetters.getTotals(cart.value).total.toString(),
    } as google.payments.api.TransactionInfo;
  };

  const getGooglePaymentDataRequest = () => {
    return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: JSON.parse(JSON.stringify(state.value.googleConfig.allowedPaymentMethods)),
      transactionInfo: getGoogleTransactionInfo(),
      merchantInfo: JSON.parse(JSON.stringify(state.value.googleConfig.merchantInfo)),
    } as google.payments.api.PaymentDataRequest;
  };

  const showErrorNotification = (message: string) => {
    useNotification().send({
      type: 'negative',
      message,
    });
    state.value.paymentLoading = false;
  };

  const processPayment = async (paymentData: google.payments.api.PaymentData) => {
    if (!state.value.script) return;
    const localePath = useLocalePath();
    const { createTransaction, getOrder, captureOrder, createPlentyPaymentFromPayPalOrder, createPlentyOrder } =
      usePayPal();
    const { clearCartItems } = useCart();
    const { $i18n } = useNuxtApp();
    const { processingOrder } = useProcessingOrder();
    const { emit } = usePlentyEvent();

    state.value.paymentLoading = true;

    const transaction = await createTransaction({
      type: 'basket',
    });
    if (!transaction || !transaction.id) {
      showErrorNotification($i18n.t('storefrontError.order.createFailed'));
      return;
    }

    let { status } = await state.value.script.confirmOrder({
      orderId: transaction.id,
      paymentMethodData: paymentData.paymentMethodData,
    });

    if (status === 'PAYER_ACTION_REQUIRED') {
      await state.value.script.initiatePayerAction({ orderId: transaction.id });
      const paypalOrder = await getOrder(transaction.id);
      status = paypalOrder?.result?.status || 'ERROR';
    }

    if (status === 'APPROVED') {
      const order = await createPlentyOrder();

      if (!order || !order.order || !order.order.id) {
        showErrorNotification($i18n.t('storefrontError.order.createFailed'));
        return;
      }

      await captureOrder(transaction.id);
      await createPlentyPaymentFromPayPalOrder(transaction.id, order.order.id);

      processingOrder.value = true;
      emit('frontend:orderCreated', order);
      emit('module:clearCart', null);
      clearCartItems();
      navigateTo(localePath(paths.confirmation + '/' + order.order.id + '/' + order.order.accessKey));
      state.value.paymentLoading = false;

      return { transactionState: 'SUCCESS' };
    } else {
      showErrorNotification($i18n.t('errorMessages.paymentFailed'));
      return { transactionState: 'ERROR' };
    }
  };

  const getIsReadyToPayRequest = (): google.payments.api.IsReadyToPayRequest => {
    return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: JSON.parse(JSON.stringify(state.value.googleConfig.allowedPaymentMethods)),
    } as google.payments.api.IsReadyToPayRequest;
  };

  const checkIsEligible = async () => {
    try {
      if (await initialize()) {
        const request = getIsReadyToPayRequest();
        const response = await toRaw(state.value.paymentsClient).isReadyToPay(request);

        if (response.result) {
          await useSdk().plentysystems.doHandleAllowPaymentGooglePay({
            allowedPaymentMethods: toRaw(
              state.value.googleConfig.allowedPaymentMethods,
            ) as PayPalGooglePayAllowedPaymentMethod[],
          });
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  };

  return {
    ...toRefs(state.value),
    initialize,
    getGooglePaymentDataRequest,
    processPayment,
    getIsReadyToPayRequest,
    checkIsEligible,
  };
};
