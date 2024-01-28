const config = {
  flavor: 'Vanilla',
  developerDocs: 'static/developer',
  userDocs: 'static/user',
  flavorRoot: 'packages/vanilla',
  // configuration of all plugins used in the site that we want to compile docs for
  packages: [
    /* {
      name: '@artish/api',
      path: 'packages/api',
      docsPath: 'docs',
    }, */
    {
      name: '@artish/ui',
      path: 'packages/ui',
      developerDocs: 'docs/developer',
    },
  ],
  plugins: [
    {
      name: '@uibyme/map',
      path: 'node_modules/@uibyme/map',
      docsPath: 'docs',
      remote: true,
    },
  ],
};

export default config;
