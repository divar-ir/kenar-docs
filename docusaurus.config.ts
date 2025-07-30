import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type { ThemeConfig } from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const pathPrefix = process.env.PATH_PREFIX ? process.env.PATH_PREFIX : '/kenar-docs/';
const url = process.env.DEPLOY_PRIME_URL ? process.env.DEPLOY_PRIME_URL : 'https://divar-ir.github.io';

const config: Config = {
  title: 'مستندات کنار دیوار',
  tagline: 'مستندات فنی پلتفرم کنار دیوار - راهنمای توسعه‌دهندگان',
  favicon: 'img/favicon.ico',
  future: {
    // Activates the experimental Rust-based toolchain (Rspack/SWC) for significantly faster builds and hot-reloads.
    experimental_faster: true,
    // Enables all upcoming breaking changes for Docusaurus v4, preparing the site for future updates.
    v4: true,
  },
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
        href: 'https://kenar.divar.dev/',
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
            url: 'https://kenar.divar.dev/img/logo.svg',
          },
        },
        inLanguage: 'fa-IR',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://kenar.divar.dev/',
        },
      }),
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', "docusaurus-theme-openapi-docs"],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          kenarDocs: {
            specPath: "static/openapi-v3.yaml",
            outputDir: "docs/openapi-doc",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            },
            baseUrl: "/openapi-doc/",
            downloadUrl:
              "https://raw.githubusercontent.com/divar-ir/kenar-docs/main/static/openapi-v3.yaml",
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
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
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {

            function processItems(docs: any[]) {
              return docs.map(doc => {
                if (doc.sidebarPosition === undefined) {
                  return { ...doc, sidebarPosition: 0 };
                }
                // if (doc.id == "openapi-doc") {
                //   return null
                // }
                return doc;
              }).filter(a => a != null);
            }

            if (args.item.type == 'autogenerated') {
              args.docs = args.docs.filter((doc: { id: string; }) => !doc.id.startsWith("openapi-doc"))
            }

            const sidebarItems = await defaultSidebarItemsGenerator({ ...args, docs: processItems(args.docs) });
            return sidebarItems;
          },
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          routeBasePath: '/', // Serve docs at the site's root
          editUrl: 'https://github.com/divar-ir/kenar-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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

  themeConfig: {
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
        width: 96,
      },
      items: [
        // Add any additional navbar items here
        {
          href: 'https://github.com/divar-ir/kenar-docs',
          label: 'GitHub',
          position: 'left', // Adjust position as needed
        },
        {
          to: '/openapi-doc',
          label: 'مستندات API(Swagger)',
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
      additionalLanguages: [
        'csharp',
        'http',
        'dart',
        'go',
        'http',
        'java',
        'javascript',
        'kotlin',
        'c',
        'objectivec',
        'ocaml',
        'php',
        'powershell',
        'python',
        'r',
        'ruby',
        'rust',
        'swift',
      ],
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
        content: 'https://kenar.divar.dev/img/logo.svg',
      },
      {
        property: 'og:url',
        content: 'https://kenar.divar.dev/',
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
        content: 'https://kenar.divar.dev/img/logo.svg',
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
  } satisfies ThemeConfig,
};

export default config;
