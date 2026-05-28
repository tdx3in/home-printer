/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a docs menu with the sidebar
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'basics',
        'features',
      ],
    },
    {
      type: 'category',
      label: 'Setup & Configuration',
      collapsed: false,
      items: [
        'install-configure',
        'settings-reference',
      ],
    },
    {
      type: 'category',
      label: 'Maintenance & Support',
      collapsed: false,
      items: [
        'maintenance',
        'troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
