// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

const isNetlifyPreview = process.env.IS_NETLIFY === 'true';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'کنار دیوار',
  tagline: 'مستندات فنی پلتفرم کنار دیوار - راهنمای توسعه‌دهندگان',
  favicon: 'img/favicon.ico',

  url: (isNetlifyPreview && process.env.DEPLOY_PRIME_URL) ? process.env.DEPLOY_PRIME_URL : 'https://divar-ir.github.io',
  baseUrl: isNetlifyPreview ? '/' : '/kenar-docs',

  organizationName: 'divar-ir',
  projectName: 'kenar-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Enhanced head tags for better SEO
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'کنار دیوار, API, مستندات, توسعه‌دهنده, دیوار, kenar, divar, documentation, developer, REST API, webhook',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Divar',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'کنار دیوار - مستندات فنی',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:site',
        content: '@divar_ir',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://divar-ir.github.io/kenar-docs/',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/kenar-docs/manifest.json',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/kenar-docs/img/logo.svg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'مستندات فنی کنار دیوار',
        description: 'راهنمای کامل توسعه‌دهندگان برای استفاده از API های کنار دیوار',
        author: {
          '@type': 'Organization',
          name: 'Divar',
          url: 'https://divar.ir/kenar',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Divar',
          logo: {
            '@type': 'ImageObject',
            url: 'https://divar-ir.github.io/kenar-docs/img/logo.svg',
          },
        },
        inLanguage: 'fa-IR',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://divar-ir.github.io/kenar-docs/',
        },
      }),
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'مستندات API',
        route: '/kenar-docs/api-doc',
        configuration: {
          url: '/kenar-docs/openapi-v3.yaml',
          customCss: `.scalar-app {
              direction: ltr;
          }`
        }
      },
    ],
    [
      'docusaurus-biel',
      {
        project: 'mxzem86g2j',
        headerTitle: 'دستیار هوش مصنوعی',
        version: 'latest',
        bielButtonText: 'از هوش مصنوعی بپرس',
      }
    ],
  ],

  // Internationalization settings
  i18n: {
    defaultLocale: 'fa-IR',
    locales: ['fa-IR'],
    localeConfigs: {
      'fa-IR': {
        label: 'پارسی',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve docs at the site's root
          editUrl: 'https://github.com/divar-ir/kenar-docs/edit/master/',
        },
        theme: {
          customCss: './src/css/custom.css', // Your custom CSS file
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-BG3FF4TN87',
          anonymizeIP: true,
        },

      },
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Social card image
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '| مستندات فنی',
        logo: {
          alt: 'کنار دیوار',
          src: 'img/logo.svg',
          width: 64,
        },
        items: [
          // Add any additional navbar items here
          {
            href: 'https://github.com/divar-ir/kenar-docs',
            label: 'GitHub',
            position: 'left', // Adjust position as needed
          },
          {
            href: 'https://divar.ir/kenar',
            label: 'پنل کنار',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [], // Add footer links if needed
        copyright: `${new Date().getFullYear()} © <a href="https://divar.ir/kenar" target="_blank">کنار دیوار</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["http", "json", "yaml"],
      },
      // Enhanced metadata for better SEO
      metadata: [
        {
          name: 'description',
          content: 'مستندات کامل API های کنار دیوار - راهنمای توسعه‌دهندگان برای ادغام با پلتفرم دیوار',
        },
        {
          property: 'og:title',
          content: 'کنار دیوار - مستندات فنی',
        },
        {
          property: 'og:description',
          content: 'مستندات کامل API های کنار دیوار - راهنمای توسعه‌دهندگان برای ادغام با پلتفرم دیوار',
        },
        {
          property: 'og:image',
          content: 'https://divar-ir.github.io/kenar-docs/img/logo.svg',
        },
        {
          property: 'og:url',
          content: 'https://divar-ir.github.io/kenar-docs/',
        },
        {
          property: 'og:locale',
          content: 'fa_IR',
        },
        {
          name: 'twitter:title',
          content: 'کنار دیوار - مستندات فنی',
        },
        {
          name: 'twitter:description',
          content: 'مستندات کامل API های کنار دیوار - راهنمای توسعه‌دهندگان برای ادغام با پلتفرم دیوار',
        },
        {
          name: 'twitter:image',
          content: 'https://divar-ir.github.io/kenar-docs/img/logo.svg',
        },
        {
          name: 'application-name',
          content: 'کنار دیوار',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'کنار دیوار',
        },
        {
          name: 'theme-color',
          content: '#a62626',
        },
        {
          name: 'msapplication-TileColor',
          content: '#a62626',
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: 'V8S0FQWY9Z',
        // Public API key: it is safe to commit it
        apiKey: '467f8b1d6fef16625b8dc39c8513d3e5',

        indexName: 'divar-irio',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'divar.ir/kenar',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {
          facetFilters: ['language:fa', 'version:current'],
          hitsPerPage: 10,
        },

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        // Enhanced search placeholder and translations
        placeholder: 'جستجو در مستندات...',
        translations: {
          button: {
            buttonText: 'جستجو',
            buttonAriaLabel: 'جستجو در مستندات',
          },
          modal: {
            searchBox: {
              resetButtonTitle: 'پاک کردن جستجو',
              resetButtonAriaLabel: 'پاک کردن جستجو',
              cancelButtonText: 'لغو',
              cancelButtonAriaLabel: 'لغو',
              searchInputLabel: 'جستجو',
            },
            startScreen: {
              recentSearchesTitle: 'جستجوهای اخیر',
              noRecentSearchesText: 'جستجوی اخیری وجود ندارد',
              saveRecentSearchButtonTitle: 'ذخیره این جستجو',
              removeRecentSearchButtonTitle: 'حذف این جستجو از تاریخچه',
              favoriteSearchesTitle: 'علاقه‌مندی‌ها',
              removeFavoriteSearchButtonTitle: 'حذف این جستجو از علاقه‌مندی‌ها',
            },
            errorScreen: {
              titleText: 'امکان دریافت نتایج وجود ندارد',
              helpText: 'ممکن است نیاز به بررسی اتصال شبکه داشته باشید.',
            },
            footer: {
              selectText: 'انتخاب',
              selectKeyAriaLabel: 'کلید Enter',
              navigateText: 'حرکت',
              navigateUpKeyAriaLabel: 'کلید بالا',
              navigateDownKeyAriaLabel: 'کلید پایین',
              closeText: 'بستن',
              closeKeyAriaLabel: 'کلید Escape',
              searchByText: 'جستجو توسط',
            },
            noResultsScreen: {
              noResultsText: 'نتیجه‌ای برای',
              suggestedQueryText: 'سعی کنید جستجو کنید',
              reportMissingResultsText: 'آیا معتقدید این جستجو باید نتیجه داشته باشد؟',
              reportMissingResultsLinkText: 'اطلاع دهید',
            },
          },
        },
      },
    }),
};

export default config;
