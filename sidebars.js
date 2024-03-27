/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{
  //    type: 'autogenerated',
  //    dirName: '.'
  //}],

  // But you can create a sidebar manually
  basicInfo: [
    'zakladni-informace',
    'hlavni/pripojeni',
    'hlavni/resource-pack-problemy',
    'hlavni/zakladni-prikazy',
    'hlavni/server-ekonomika',
    {
      type: 'category',
      label: 'Klasické návody',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'hlavni/navody/minecraft-screenshots',
        'hlavni/navody/discord'
      ]
    },
    {
      type: 'category',
      label: 'Návody na pluginy',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'hlavni/navody/pozemky',
        'hlavni/navody/chestshop',
        'hlavni/navody/residence',
        'hlavni/navody/friends-clans',
        'hlavni/navody/truhla-smrti',
        'hlavni/navody/vytah',
        'hlavni/navody/creative-roleplay',
        'hlavni/navody/exp-lahve'
      ],
    },
    'hlavni/mazani-obsahu',
    'hlavni/limity-na-serveru'
  ],
  adminTeam: [
    'admin_team/intro',
    'admin_team/system_trestu',
    'admin_team/delka_unbanu',
    {
      type: 'category',
      label: 'Návody',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'admin_team/ban_system',
        'admin_team/coreprotect',
        'admin_team/grafana_monitoring'
      ]
    },
    'admin_team/cosmetic_itemy'
  ],
  mods: [
    'mods/intro',
    {
      type: 'category',
      label: 'Prominence 2',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'mods/prominence-2/informace',
        'mods/prominence-2/pripojeni',
        'mods/prominence-2/zaklady-hrani'
      ]
    },
  ]
};

module.exports = sidebars;
