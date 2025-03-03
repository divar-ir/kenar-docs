// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'کنار دیوار',
  tagline: '',
  favicon: 'img/favicon.ico', // Update with your favicon path or generate one with the desired emoji

  url: 'https://divar-ir.github.io',
  baseUrl: '/kenar-docs',

  organizationName: 'divar-ir',
  projectName: 'kenar-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

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
          editUrl: 'https://github.com/divar-ir/kenar-docs/tree/main/docs/',
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
    }),
};

export default config;