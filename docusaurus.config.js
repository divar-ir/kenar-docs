// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

const isNetlify = process.env.NETLIFY === 'true';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'کنار دیوار',
  tagline: '',
  favicon: 'img/favicon.ico', // Update with your favicon path or generate one with the desired emoji

  url: 'https://divar-ir.github.io',
  baseUrl: isNetlify ? '/' : '/kenar-docs',

  organizationName: 'divar-ir',
  projectName: 'kenar-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'API Doc',
        route: '/kenar-docs/api-doc',
        configuration: {
          url: '/kenar-docs/output.yaml',
          customCss: `.scalar-app {
              direction: ltr;
          }`
        }
      },
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
          editUrl: 'https://github.com/divar-ir/kenar-docs/tree/master/docs/',
        },
        theme: {
          customCss: './src/css/custom.css', // Your custom CSS file
        },
      },
    ],
  ],

  themeConfig:

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
      // Custom metadata for SEO
      metadata: [
        {
          name: 'title',
          content: 'کنار دیوار',
        },
        {
          name: 'description',
          content: 'مستندات فنی کنار دیوار',
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
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
    }),
};

export default config;
