/* eslint-disable max-lines */
import type { BlocksList } from '~/components/BlocksNavigationList/types';

export const blocksLists: BlocksList = {
  'image-banner': {
    category: 'image-banner',
    title: 'Image Banner',
    blockName: 'Carousel',
    variations: [
      {
        title: 'Image Banner Left',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/image_banner_left.png',
        template: {
          en: {
            name: 'Carousel',
            type: 'structure',
            meta: { uuid: '11111111-1111-4111-8111-111111111111' },
            configuration: {
              controls: { color: '#000' },
            },
            content: [
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '22222222-2222-4222-8222-222222222222' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.5,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 0.9,
                    pretitle: 'Pretitle',
                    title: 'h1 heading',
                    htmlDescription: 'Text that supports HTML formatting',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'left',
                    background: true,
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '33333333-3333-4333-8333-333333333333' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.75,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 1,
                    pretitle: 'Pretitle',
                    title: 'h1 heading',
                    htmlDescription: 'Text that supports HTML formatting',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'left',
                    background: true,
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
          de: {
            name: 'Carousel',
            type: 'structure',
            meta: { uuid: '44444444-4444-4444-8444-444444444444' },
            configuration: {
              controls: { color: '#000' },
            },
            content: [
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '55555555-5555-4555-8555-555555555555' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.5,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 0.9,
                    pretitle: 'Vortitel',
                    title: 'h1 Titel',
                    subtitle: 'Untertitel',
                    htmlDescription: 'Text mit HTML-Formatierung',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'left',
                    background: true,
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '66666666-6666-4666-8666-666666666666' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.75,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 1,
                    pretitle: 'Vortitel',
                    title: 'h1 Titel',
                    htmlDescription: 'Text mit HTML-Formatierung',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'left',
                    background: true,
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: 'Image Banner Right',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/image_banner_right.png',
        template: {
          en: {
            name: 'Carousel',
            type: 'structure',
            meta: { uuid: '77777777-7777-4777-8777-777777777777' },
            configuration: {
              controls: { color: '#000' },
            },
            content: [
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '88888888-8888-4888-8888-888888888888' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.5,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 0.9,
                    pretitle: 'Pretitle',
                    title: 'h1 heading',
                    htmlDescription: 'Text that supports HTML formatting',
                    textAlignment: 'left',
                    justify: 'bottom',
                    align: 'right',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '99999999-9999-4999-8999-999999999999' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.75,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 1,
                    pretitle: 'Pretitle',
                    title: 'h1 heading',
                    htmlDescription: 'Text that supports HTML formatting',
                    textAlignment: 'left',
                    justify: 'bottom',
                    align: 'right',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
          de: {
            name: 'Carousel',
            type: 'structure',
            meta: { uuid: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa' },
            configuration: {
              controls: { color: '#000' },
            },
            content: [
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.5,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 0.9,
                    pretitle: 'Vortitel',
                    title: 'h1 Titel',
                    subtitle: 'Untertitel',
                    htmlDescription: 'Text mit HTML-Formatierung',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'left',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: 'cccccccc-cccc-4ccc-8ccc-cccccccccccc' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.75,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 1,
                    pretitle: 'Vortitel',
                    title: 'h1 Titel',
                    htmlDescription: 'Text mit HTML-Formatierung',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'left',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: 'Image Banner Center',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/image_banner_center.png',
        template: {
          en: {
            name: 'Carousel',
            type: 'structure',
            meta: { uuid: 'dddddddd-dddd-4ddd-8ddd-dddddddddddd' },
            configuration: {
              controls: { color: '#000' },
            },
            content: [
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: 'eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.5,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 0.9,
                    pretitle: 'Pretitle',
                    title: 'h1 heading',
                    htmlDescription: 'Text that supports HTML formatting',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'center',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: 'ffffffff-ffff-4fff-8fff-ffffffffffff' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.75,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 1,
                    pretitle: 'Pretitle',
                    title: 'h1 title',
                    htmlDescription: 'Text that supports HTML formatting',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'center',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
          de: {
            name: 'Carousel',
            type: 'structure',
            meta: { uuid: '01010101-0101-4011-8011-010101010101' },
            configuration: {
              controls: { color: '#000' },
            },
            content: [
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '12121212-1212-4121-8121-121212121212' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.5,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 0.9,
                    pretitle: 'Vortitel',
                    title: 'h1 Titel',
                    subtitle: 'Untertitel',
                    htmlDescription: 'Text mit HTML-Formatierung',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'center',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Banner',
                type: 'content',
                meta: { uuid: '23232323-2323-4232-8232-232323232323' },
                content: {
                  image: {
                    wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                    alt: '',
                    brightness: 0.75,
                  },
                  text: {
                    color: '#000',
                    bgcolor: '#fff',
                    bgopacity: 1,
                    pretitle: 'Vortitel',
                    title: 'h1 Titel',
                    htmlDescription: 'Text mit HTML-Formatierung',
                    textAlignment: 'left',
                    justify: 'top',
                    align: 'center',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
  'image-with-text': {
    category: 'image-with-text',
    title: 'Image with Text',
    blockName: 'ImageText',
    variations: [
      {
        title: 'Image Right Text',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/image_right_text.png',
        template: {
          en: {
            name: 'MultiGrid',
            type: 'structure',
            meta: { uuid: '34343434-3434-4343-8434-343434343434' },
            configuration: {
              columnWidths: [6, 6],
            },
            content: [
              {
                name: 'Image',
                type: 'content',
                meta: { uuid: '45454545-4545-4455-8455-454545454545' },
                content: {
                  wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  alt: 'alt text',
                },
              },
              {
                name: 'TextCard',
                type: 'content',
                meta: { uuid: '56565656-5656-4565-8565-565656565656' },
                content: {
                  text: {
                    htmlDescription: 'Text that supports HTML formatting',
                    title: 'h2 heading',
                    subtitle: 'subtitle',
                    textAlignment: 'left',
                    color: '#000',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
          de: {
            name: 'MultiGrid',
            type: 'structure',
            meta: { uuid: '67676767-6767-4676-8767-676767676767' },
            configuration: {
              columnWidths: [6, 6],
            },
            content: [
              {
                name: 'Image',
                type: 'content',
                meta: { uuid: '78787878-7878-4787-8787-787878787878' },
                content: {
                  wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  alt: 'Headphones',
                },
              },
              {
                name: 'TextCard',
                type: 'content',
                meta: { uuid: '89898989-8989-4898-8889-898989898989' },
                content: {
                  text: {
                    htmlDescription: 'Text mit HTML-Formatierung',
                    title: 'h2 Titel',
                    subtitle: 'Untertitel',
                    textAlignment: 'left',
                    color: '#000',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: 'Image Left Text',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/image_right_text.png',
        template: {
          en: {
            name: 'MultiGrid',
            type: 'structure',
            meta: { uuid: '9a9a9a9a-9a9a-49a9-89a9-9a9a9a9a9a9a' },
            configuration: {
              columnWidths: [6, 6],
            },
            content: [
              {
                name: 'TextCard',
                type: 'content',
                meta: { uuid: 'bababaab-baba-4bab-8bab-babababababa' },
                content: {
                  text: {
                    htmlDescription: 'Text that supports HTML formatting',
                    title: 'h2 heading',
                    subtitle: 'Subtitle',
                    textAlignment: 'right',
                    color: '#000',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Image',
                type: 'content',
                meta: { uuid: 'cbcbcbcb-cbcb-4bcb-8bcb-cbcbcbcbcbcb' },
                content: {
                  wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  alt: 'Headphones',
                },
              },
            ],
          },
          de: {
            name: 'MultiGrid',
            type: 'structure',
            meta: { uuid: 'dcdcdcdc-dcdc-4cdc-8cdc-dcdcdcdcdcdc' },
            configuration: {
              columnWidths: [6, 6],
            },
            content: [
              {
                name: 'TextCard',
                type: 'content',
                meta: { uuid: 'edededed-eded-4ded-8ded-edededededed' },
                content: {
                  text: {
                    htmlDescription: 'Text mit HTML-Formatierung',
                    title: 'h2 Titel',
                    subtitle: 'Untertitel',
                    textAlignment: 'left',
                    color: '#000',
                  },
                  button: {
                    label: 'Button',
                    link: '/',
                    variant: 'primary',
                  },
                },
              },
              {
                name: 'Image',
                type: 'content',
                meta: { uuid: 'fefefefe-fefe-4fef-8fef-fefefefefefe' },
                content: {
                  wideScreen: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  desktop: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  tablet: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  mobile: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/placeholder-image.png',
                  alt: 'Headphones',
                },
              },
            ],
          },
        },
      },
    ],
  },
  'rich-text': {
    category: 'rich-text',
    title: 'Rich Text',
    blockName: 'TextCard',
    variations: [
      {
        title: 'Rich Text',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/rich_text.png',
        template: {
          en: {
            name: 'TextCard',
            type: 'content',
            meta: { uuid: '01020304-0506-4070-8090-0a0b0c0d0e0f' },
            content: {
              text: {
                htmlDescription: 'Text that supports HTML formatting',
                pretitle: 'Pretitle',
                title: 'h2 heading',
                subtitle: 'Subtitle',
                textAlignment: 'center',
                color: '#000',
              },
              button: {
                buttonText: 'Button',
                link: '/',
                variant: 'primary',
              },
            },
          },
          de: {
            name: 'TextCard',
            type: 'content',
            meta: { uuid: '1a2b3c4d-5e6f-4111-8abc-1234567890ab' },
            content: {
              text: {
                htmlDescription: 'Text mit HTML-Formatierung',
                pretitle: 'Vortitel',
                title: 'h2 Titel',
                subtitle: 'Untertitel',
                textAlignment: 'center',
                color: '#000',
              },
              button: {
                buttonText: 'Buttom',
                link: '/',
                variant: 'primary',
              },
            },
          },
        },
      },
    ],
  },
  'product-galleries': {
    category: 'product-galleries',
    title: 'Products',
    blockName: 'ProductRecommendedProducts',
    variations: [
      {
        title: 'Product Galleries',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/product_galleries.png',
        template: {
          en: {
            name: 'ProductRecommendedProducts',
            type: 'content',
            meta: { uuid: '2b3c4d5e-6f70-4a1b-8c2d-234567890abc' },
            content: {
              text: {
                pretitle: 'Pretitle',
                title: 'h2 heading',
                subtitle: 'Subtitle.',
                htmlDescription: 'Text that supports HTML formatting',
              },
              categoryId: '49',
            },
          },
          de: {
            name: 'ProductRecommendedProducts',
            type: 'content',
            meta: { uuid: '3c4d5e6f-7081-4b2c-8d3e-34567890abcd' },
            content: {
              text: {
                pretitle: 'Vortitel',
                title: 'h2 Titel',
                subtitle: 'Untertitel',
                htmlDescription: 'Text mit HTML-Formatierung',
              },
              categoryId: '49',
            },
          },
        },
      },
    ],
  },
  forms: {
    category: 'forms',
    title: 'Forms',
    blockName: 'NewsletterSubscribe',
    variations: [
      {
        title: 'Forms Preview',
        image: 'https://cdn02.plentymarkets.com/v5vzmmmcb10k/frontend/PWA/Blocks/forms_preview.png',
        template: {
          en: {
            name: 'NewsletterSubscribe',
            type: 'content',
            meta: { uuid: '4d5e6f70-8192-4c3d-8e4f-4567890abcde' },
            content: {
              text: {
                bgColor: '#f5f5f5',
                title: 'Newsletter',
                htmlDescription: 'Text that supports HTML formatting',
              },
              input: {
                displayNameInput: true,
                nameIsRequired: false,
              },
              button: {
                label: 'Subscribe',
              },
            },
          },
          de: {
            name: 'NewsletterSubscribe',
            type: 'content',
            meta: { uuid: '5e6f7081-92a3-4d4e-8f50-567890abcdef' },
            content: {
              text: {
                bgColor: '#f5f5f5',
                title: 'Abonnieren Sie unseren Newsletter',
                htmlDescription: 'Text mit HTML-Formatierung',
              },
              input: {
                displayNameInput: true,
                nameIsRequired: false,
              },
              button: {
                label: 'Newsletter abonnieren',
              },
            },
          },
        },
      },
    ],
  },
};
