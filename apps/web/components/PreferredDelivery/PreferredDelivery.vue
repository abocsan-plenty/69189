<template>
  <div
    v-if="preferredDeliveryAvailable"
    class="flex flex-col my-6 rounded-md border border-[rgb(255,204,0)]"
    data-testid="preferred-delivery"
  >
    <div class="rounded-md">
      <SfAccordionItem v-model="deliveryAccordionOpen" :summary-class="accordionSummaryClass">
        <template #summary>
          <header class="w-full flex items-center justify-between gap-4">
            <h3 class="font-bold">{{ t('PreferredDelivery.general.wunschpaketTitle') }}</h3>
            <NuxtImg
              ref="img"
              src="/_nuxt-plenty/images/preferredDelivery/plugin-icon.svg"
              alt="DHL logo"
              width="100"
              height="auto"
              loading="lazy"
              class="block rounded-lg bg-[rgb(255,204,0)] p-3 mr-2 sm:mr-4"
            />
          </header>
          <SfIconChevronLeft :class="['text-neutral-500', deliveryAccordionOpen ? 'rotate-90' : '-rotate-90']" />
        </template>

        <div class="px-4 pb-4">
          <div class="mt-3">{{ t('PreferredDelivery.general.wunschpaketIntroduction') }}</div>
          <div>{{ t('PreferredDelivery.general.wunschpaketOptions') }}</div>

          <form novalidate @submit.prevent="validateAndSubmitForm">
            <template v-if="data.day.enabled">
              <div class="mt-3" data-testid="preferred-delivery-day">
                <div class="inline-flex items-center">
                  <label
                    for="wunschtag-title"
                    class="inline-flex items-center flex-row gap-2 select-none font-semibold cursor-pointer"
                  >
                    <SfCheckbox id="wunschtag-title" v-model="data.day.checked" @change="dayCheckboxChange" />
                    {{ t('PreferredDelivery.general.wunschtagTitle') }}
                  </label>
                  <SfTooltip :label="t('PreferredDelivery.general.wunschtagTooltip')" :show-arrow="true" class="ml-1">
                    <SfIconInfo :size="'sm'" />
                  </SfTooltip>
                </div>
              </div>

              <div class="my-2">
                {{
                  t('PreferredDelivery.general.wunschpaketAdditionalCharge', {
                    additionalCharge: data.additionalCharge,
                    currency: currency,
                  })
                }}
              </div>

              <div class="grid gap-1 grid-cols-3 md:grid-cols-6 mt-1">
                <label v-for="(day, index) in data.preferredDays" :key="`preferred-day-${index}`">
                  <input
                    type="radio"
                    class="peer sr-only"
                    :value="day.date"
                    :checked="isDayChecked(index)"
                    @click="handleDayChange(index)"
                  />
                  <span
                    class="h-20 flex flex-col items-center justify-center py-4 px-1 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-50 hover:bg-primary-50 active:border-[rgb(255,204,0)] active:bg-[rgb(255,204,0)] peer-checked:border-[rgb(255,204,0)] peer-checked:bg-[rgb(255,204,0)] peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed select-none"
                  >
                    {{ `${day.dayName} ${day.dayNumber}` }}
                  </span>
                </label>
              </div>
            </template>

            <template v-if="data.location.enabled">
              <div class="mt-4">
                <div class="inline-flex items-center">
                  <label
                    for="wunschort-title"
                    class="inline-flex items-center flex-row gap-2 select-none font-semibold cursor-pointer"
                  >
                    <SfCheckbox
                      id="wunschort-title"
                      v-model="data.location.checked"
                      @change="toggleOption('location')"
                    />
                    {{ t('PreferredDelivery.general.wunschortTitle') }}
                  </label>
                  <SfTooltip :label="t('PreferredDelivery.general.wunschortTooltip')" :show-arrow="true" class="ml-1">
                    <SfIconInfo :size="'sm'" />
                  </SfTooltip>
                </div>
              </div>

              <label for="dhl-drop-off-location" class="mt-4 block text-sm font-medium pb-0.5">
                {{ t('PreferredDelivery.general.preferredDropOffLocation') }}
              </label>
              <SfInput
                id="dhl-drop-off-location"
                v-model="locationValue"
                type="text"
                name="location"
                v-bind="locationValueAttributes"
                :invalid="Boolean(errors['location.value'])"
                :placeholder="t('PreferredDelivery.general.wunschortExample')"
                data-testid="preferred-delivery-location"
              />
              <ErrorMessage as="span" name="location.value" class="flex text-negative-700 text-sm mt-2" />
            </template>

            <template v-if="data.neighbour.enabled">
              <div class="mt-4">
                <div class="inline-flex items-center">
                  <label
                    for="wunschnachbar-title"
                    class="inline-flex items-center flex-row gap-2 select-none font-semibold cursor-pointer"
                  >
                    <SfCheckbox
                      id="wunschnachbar-title"
                      v-model="data.neighbour.checked"
                      @change="toggleOption('neighbour')"
                    />
                    {{ t('PreferredDelivery.general.wunschnachbarTitle') }}
                  </label>
                  <SfTooltip
                    :label="t('PreferredDelivery.general.wunschnachbarTooltip')"
                    :show-arrow="true"
                    class="ml-1"
                  >
                    <SfIconInfo :size="'sm'" />
                  </SfTooltip>
                </div>
              </div>

              <label for="dhl-neighbour-name" class="mt-4 block text-sm font-medium pb-0.5">
                {{ t('PreferredDelivery.general.preferredNeighbourFullName') }}
              </label>
              <SfInput
                id="dhl-neighbour-name"
                v-model="neighbourName"
                type="text"
                name="neighbourName"
                v-bind="neighbourNameAttributes"
                :invalid="Boolean(errors['neighbour.name'])"
                :placeholder="t('PreferredDelivery.general.wunschnachbarExampleName')"
              />
              <ErrorMessage as="span" name="neighbour.name" class="flex text-negative-700 text-sm mt-2" />

              <label for="dhl-neighbour-address" class="mt-4 block text-sm font-medium pb-0.5">
                {{ t('PreferredDelivery.general.preferredNeighbourAddress') }}
              </label>
              <SfInput
                id="dhl-neighbour-address"
                v-model="neighbourAddress"
                type="text"
                name="neighbourAddress"
                v-bind="neighbourAddressAttributes"
                :invalid="Boolean(errors['neighbour.address'])"
                :placeholder="t('PreferredDelivery.general.wunschnachbarExampleAddress')"
              />
              <ErrorMessage as="span" name="neighbour.address" class="flex text-negative-700 text-sm mt-2" />
            </template>

            <UiButton type="submit" variant="secondary" class="mt-4 w-fit" data-testid="preferred-delivery-submit">
              {{ t('PreferredDelivery.general.apply') }}
            </UiButton>
          </form>
        </div>
      </SfAccordionItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddressType } from '@plentymarkets/shop-api';
import { SfAccordionItem, SfCheckbox, SfIconChevronLeft, SfIconInfo, SfInput, SfTooltip } from '@storefront-ui/vue';
import { ErrorMessage, useForm } from 'vee-validate';
import type { PreferredOptionTypes } from './types';

const {
  data,
  dayCheckboxChange,
  getPreferredProfiles,
  getPreferredDeliveryServices,
  handleDayChange,
  isDayChecked,
  submitForm,
  validationSchema,
  shippingMethodHasPreferredDelivery,
  preferredDeliveryAvailable,
  currency,
} = usePreferredDelivery();
const { defineField, errors, validate, handleSubmit } = useForm({ validationSchema: validationSchema });
const { checkoutAddress: shippingAddress } = useCheckoutAddress(AddressType.Shipping);
const { t } = useI18n();

onNuxtReady(() => getPreferredProfiles());

const [locationValue, locationValueAttributes] = defineField('location.value');
const [neighbourName, neighbourNameAttributes] = defineField('neighbour.name');
const [neighbourAddress, neighbourAddressAttributes] = defineField('neighbour.address');

const deliveryAccordionOpen = ref(true);

const accordionSummaryClass = computed(() =>
  [
    'w-full p-4 flex justify-between items-center select-none hover:bg-neutral-100 rounded-t-md',
    deliveryAccordionOpen.value ? 'rounded-b-none' : 'rounded-b-md',
  ].join(' '),
);

const resetPreferredOption = (option: PreferredOptionTypes) => {
  data.value[option].checked = false;

  if (option === 'location') {
    locationValue.value = '';
    return;
  }

  neighbourName.value = '';
  neighbourAddress.value = '';
};

const toggleOption = (option: PreferredOptionTypes) => {
  if (!data.value[option].checked) resetPreferredOption(option);

  if (data.value.location.checked && data.value.neighbour.checked)
    resetPreferredOption(option === 'location' ? 'neighbour' : 'location');
};

watch(locationValue, (newLocation) => {
  if (newLocation) {
    resetPreferredOption('neighbour');
    data.value.location.checked = true;
  }
});

watch([neighbourName, neighbourAddress], ([newNeighbourName, newNeighbourAddress]) => {
  if (newNeighbourName || newNeighbourAddress) {
    resetPreferredOption('location');
    data.value.neighbour.checked = true;
  }
});

watch(
  () => shippingAddress.value.zipCode,
  (newZip, oldZip) => {
    if (shippingMethodHasPreferredDelivery.value && newZip !== oldZip) getPreferredDeliveryServices();
  },
);

watch(shippingMethodHasPreferredDelivery, (statusUpdated) => {
  if (statusUpdated) getPreferredDeliveryServices();
});

const validateAndSubmitForm = async () => {
  const formData = await validate();

  if (formData.valid)
    handleSubmit(() => {
      data.value.location.value = locationValue.value as string;
      data.value.neighbour.name = neighbourName.value as string;
      data.value.neighbour.address = neighbourAddress.value as string;
      submitForm();
    })();
};
</script>
