import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '172'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '810'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'd65'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a22'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '355'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '22a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'eb2'),
    exact: true
  },
  {
    path: '/developer',
    component: ComponentCreator('/developer', '75a'),
    routes: [
      {
        path: '/developer',
        component: ComponentCreator('/developer', '547'),
        routes: [
          {
            path: '/developer',
            component: ComponentCreator('/developer', '850'),
            routes: [
              {
                path: '/developer/@artish-ui/',
                component: ComponentCreator('/developer/@artish-ui/', 'b65'),
                exact: true,
                sidebar: "@artish/ui"
              },
              {
                path: '/developer/@artish-ui/concepts/tokens',
                component: ComponentCreator('/developer/@artish-ui/concepts/tokens', 'e2d'),
                exact: true,
                sidebar: "@artish/ui"
              },
              {
                path: '/developer/@artish-ui/interfaces/UiProps',
                component: ComponentCreator('/developer/@artish-ui/interfaces/UiProps', '5f7'),
                exact: true,
                sidebar: "@artish/ui"
              },
              {
                path: '/developer/@artish-ui/modules',
                component: ComponentCreator('/developer/@artish-ui/modules', '544'),
                exact: true,
                sidebar: "@artish/ui"
              },
              {
                path: '/developer/category/concepts',
                component: ComponentCreator('/developer/category/concepts', '59d'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/category/concepts-1',
                component: ComponentCreator('/developer/category/concepts-1', 'b18'),
                exact: true,
                sidebar: "@artish/ui"
              },
              {
                path: '/developer/category/creating-a-plugin',
                component: ComponentCreator('/developer/category/creating-a-plugin', 'e47'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/category/getting-started',
                component: ComponentCreator('/developer/category/getting-started', '365'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/category/tutorials',
                component: ComponentCreator('/developer/category/tutorials', '69f'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides',
                component: ComponentCreator('/developer/guides', '774'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides/concepts/plugins',
                component: ComponentCreator('/developer/guides/concepts/plugins', 'c89'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides/concepts/services',
                component: ComponentCreator('/developer/guides/concepts/services', 'ed0'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides/intro/basics',
                component: ComponentCreator('/developer/guides/intro/basics', '1d5'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides/intro/dev-env',
                component: ComponentCreator('/developer/guides/intro/dev-env', '727'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides/tutorials/docs/',
                component: ComponentCreator('/developer/guides/tutorials/docs/', '09b'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/guides/tutorials/plugin/generating',
                component: ComponentCreator('/developer/guides/tutorials/plugin/generating', 'af6'),
                exact: true,
                sidebar: "guidesSidebar"
              },
              {
                path: '/developer/plugins',
                component: ComponentCreator('/developer/plugins', '9b0'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/developer/plugins/@uibyme-map/',
                component: ComponentCreator('/developer/plugins/@uibyme-map/', '3ce'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/developer/plugins/@uibyme-map/guide/',
                component: ComponentCreator('/developer/plugins/@uibyme-map/guide/', '0a8'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/developer/plugins/@uibyme-map/guide/layers',
                component: ComponentCreator('/developer/plugins/@uibyme-map/guide/layers', '1ec'),
                exact: true,
                sidebar: "pluginsSidebar"
              },
              {
                path: '/developer/plugins/@uibyme-map/guide/markers',
                component: ComponentCreator('/developer/plugins/@uibyme-map/guide/markers', '4ef'),
                exact: true,
                sidebar: "pluginsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/user',
    component: ComponentCreator('/user', 'acb'),
    routes: [
      {
        path: '/user',
        component: ComponentCreator('/user', '1b2'),
        routes: [
          {
            path: '/user',
            component: ComponentCreator('/user', '27f'),
            routes: [
              {
                path: '/user/',
                component: ComponentCreator('/user/', 'dc1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/user/basics/',
                component: ComponentCreator('/user/basics/', 'ed2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/user/category/basics',
                component: ComponentCreator('/user/category/basics', '847'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8ea'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
