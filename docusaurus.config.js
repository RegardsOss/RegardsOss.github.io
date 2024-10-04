// Indicates the version of /docs /releases_notes.. folders
const currentVersion = "1.16";
// Indicates the version displayed by default while browsing on the website
// Default value: "current"
// You can provide the last version to create a next version unreleased
// if currentVersion is 1.14.0, you can write here 1.13.0 and 1.14.0 will be unreleased and hide by default
const stableVersion = "current";

module.exports = {
  title: "REGARDS",
  tagline: "An opensource software to store and add value to your data.",
  url: "https://RegardsOss.github.io/",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  // cannot be used with redocusaurus yet: https://github.com/rohit-gohri/redocusaurus/issues/321
  onBrokenAnchors: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logos/regards-png/regards-favicon.png",
  organizationName: "RegardsOss",
  projectName: "RegardsOss.github.io",
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'en',
      }
    },
  },
  themeConfig: {
    algolia: {
      appId: 'BP0ACDVAUR',
      apiKey: 'd232ff7a6dff6f9c3ad4894ee7c66403',
      indexName: 'regardsoss',
      // Do not mix cross-version search results
      contextualSearch: true,
    },
    navbar: {
      style: "dark",
      title: "REGARDS",
      logo: {
        alt: "Site Logo",
        src: "img/logos/regards-svg/regards-white.svg",
      },
      items: [
        {
          type: 'doc',
          docId: 'overview/functional-overview/overview',
          label: 'Overview',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'user-documentation/overview/overview',
          label: "Manual",
          position: "left",
        },
        {
          type: 'doc',
          docId: 'setup/swarm/swarm-quick-setup',
          label: 'Install',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'development/development-manual',
          label: "Developers",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "All versions",
            },
          ],
        },
        {
          to: "roadmap/",
          activeBasePath: "roadmap/",
          label: "Roadmap",
          position: "right",
        },
        {
          to: "release-notes/",
          activeBasePath: "release-notes/",
          label: "Release notes",
          position: "right",
        },
        {
          to: "aboutus/",
          activeBasePath: "aboutus/",
          label: "About us",
          position: "right",
        },
        {
          href: 'https://github.com/RegardsOss/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Users",
          items: [
            {
              label: "Manual",
              to: "/docs/user-guide/",
            },
          ],
        },
        {
          title: "Developpers",
          items: [
            {
              label: "Install",
              href: "/docs/setup/",
            },
            {
              label: "Web UI",
              href: "/docs/development/frontend/introduction/setup/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/RegardsOss/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} REGARDS, OSS. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "roadmap",
        path: "roadmap/",
        routeBasePath: 'roadmap/',
        sidebarPath: require.resolve("./sidebars_roadmap.js"),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "release-notes",
        path: "release_notes/",
        routeBasePath: 'release-notes/',
        sidebarPath: require.resolve("./sidebars_release_notes.js"),
        remarkPlugins: [require("remark-import-partial")],
      }
    ]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/RegardsOss/RegardsOss.github.io/edit/master",
          remarkPlugins: [require("remark-import-partial")],
          lastVersion: `${stableVersion}`,
          versions: {
            current: {
              label: `${currentVersion}`
            }
          }

        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
      }
    ],
  ],

};
