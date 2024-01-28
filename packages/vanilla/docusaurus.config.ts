import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import pluginConfig from './flavor.config';
import * as pt from 'path';

// create navbar dropdown items from plugin config
const navbarDropdownItems = {
  type: 'dropdown',
  label: 'Bundled Plugins',
  to: 'developer/plugins',
  activeBaseRegex: 'developer/plugins',
  docsPluginId: 'developer',
  items: pluginConfig.plugins.map((plugin) => {
    return {
      type: 'doc',
      docId: `plugins/${plugin.name.replace('/', '-')}/index`,
      label: `${plugin.name}`,
      docsPluginId: 'developer',
    };
  }),
};

const navbarItems = pluginConfig.packages.map((pkg) => {
  return {
    type: 'doc',
    docId: `${pkg.name.replace('/', '-')}/index`,
    label: `${pkg.name}`,
    docsPluginId: 'developer',
  };
});

const flavor = pluginConfig.flavor;

// generate typedoc plugin instances for each package //
const packageTypeDocConfig = pluginConfig.packages.map((pkg) => {
  return [
    'docusaurus-plugin-typedoc',
    {
      id: pkg.name,
      entryPoints: `${pkg.path}/src`,
      tsconfig: `${pkg.path}/tsconfig.json`,
      out: `../developer/${pkg.name.replace('/', '-')}`,
    },
  ];
});

const pluginTypeDocConfig = pluginConfig.plugins.map((plugin) => {
  return [
    'docusaurus-plugin-typedoc',
    {
      id: plugin.name,
      entryPoints: [`node_modules/${plugin.name}`],
      entryPointStrategy: 'packages',
    },
  ];
});

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'developer',
          path: 'developer',
          routeBasePath: 'developer',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          //  customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'user',
        path: 'user',
        routeBasePath: 'user',

        // ... other options
      },
    ],
    ...packageTypeDocConfig,
    // ...pluginTypeDocConfig,
    // typedocs for each package
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      /*  logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      }, */
      items: [
        {
          type: 'doc',
          docId: 'guides/index',
          label: 'Guides',
          position: 'left',
          docsPluginId: 'developer',
        },
        ...navbarItems,
        navbarDropdownItems,
        {
          type: 'docsVersion',
          label: flavor,
          position: 'right',
          docsPluginId: 'developer',
        },
        {
          type: 'docsVersion',
          label: flavor,
          position: 'right',
          docsPluginId: 'user',
        },

        {
          type: 'dropdown',
          label: 'Developer Docs',
          position: 'right',
          docsPluginId: 'developer',
          items: [
            {
              label: 'Developer Docs',
              href: '/developer',
              docsPluginId: 'developer',
            },
            {
              label: 'User Docs',
              href: '/user/guides',
              docsPluginId: 'developer',
            },
          ],
        },

        {
          type: 'dropdown',
          label: 'User Docs',
          position: 'right',
          docsPluginId: 'user',
          items: [
            {
              label: 'User Docs',
              href: '/user/guides',
              docsPluginId: 'user',
            },
            {
              label: 'Developer Docs',
              href: '/developer',
              docsPluginId: 'user',
            },
          ],
        },
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
              to: '/docs/intro',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
