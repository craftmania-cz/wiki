// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import * as prism from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CraftMania Wiki',
  tagline: 'Dinosaurs are cool',
  url: 'https://wiki.craftmania.cz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'craftmania', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
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
    ],
    require.resolve('docusaurus-lunr-search'),
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
            docId: 'zakladni-informace',
            position: 'left',
            label: 'Základní informace',
          },
          {
            type: 'doc',
            docId: 'mods/intro',
            position: 'left',
            label: 'Módované servery',
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
            title: 'Wiki',
            items: [
              {
                label: 'Jak se připojit na server',
                to: '/hlavni/pripojeni',
              },
            ],
          },
          {
            title: 'Užitečné odkazy',
            items: [
              {
                label: 'Homepage',
                href: 'https://craftmania.cz',
              },
              {
                label: 'Novinky',
                href: 'https://news.craftmania.cz',
              },
              {
                label: 'Statistiky',
                href: 'https://stats.craftmania.cz',
              },
              {
                label: 'Banlist',
                href: 'https://banlist.craftmania.cz',
              },
            ],
          },
          {
            title: 'Podmínky a kontakt',
            items: [
              {
                label: 'Pravidla serveru',
                href: 'https://craftmania.cz/pravidla/',
              },
              {
                label: 'Obchodní podmínky',
                href: 'https://craftmania.cz/pravidla/obchodni-podminky/',
              },
              {
                label: 'Povolené a zakázané módy',
                href: 'https://craftmania.cz/pravidla/povolene-mody/',
              },
              {
                label: 'Zásady ochrany osobních údajů',
                href: 'https://craftmania.cz/pravidla/zasady-ochrany-osobnich-udaju/',
              },
              {
                label: 'Kontakt',
                href: 'https://craftmania.cz/kontakt/',
              }
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
