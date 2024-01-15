// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import * as prism from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CraftMania Wiki',
  tagline: 'Dinosaurs are cool',
  url: 'https://wiki-new.craftmania.cz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'changelog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'changelog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './changelog',
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CraftMania Wiki',
        logo: {
          alt: 'CraftMania Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'hlavni/pripojeni',
            position: 'left',
            label: 'Základní informace',
          },
          {
            type: 'doc',
            docId: 'admin_team/intro',
            label: 'Admin Team',
            position: 'left',
          },
          {
            label: 'Changelog',
            to: '/changelog',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/hlavni/pripojeni',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CraftMania.cz, Built with Docusaurus.`,
      },
      prism: {
        theme: prism.themes.vsLight ,
        darkTheme: prism.themes.vsDark,
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      }
    }),
};

module.exports = config;
