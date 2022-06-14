const currentVersion = "1.8.1";

module.exports = {
  title: "REGARDS",
  tagline: "An opensource software to store and add value to your data.",
  url: "https://RegardsOss.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
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
      apiKey: 'b1cf65426b28724deca84be1c3bbe40f',
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
          docId: 'setup/swarm-quick-setup',
          label: 'Install',
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
              label: "Backend",
              href: "/docs/development/backend/architecture/concepts/",
            },
            {
              label: "Frontend",
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
          lastVersion: "current",
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
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: "#429be3",
          /**
           * Options to pass to override RedocThemeObject
           * @see https://github.com/Redocly/redoc#redoc-theme-object
           */
          redocTheme: {
            spacing: {
              unit: 5,
              sectionVertical: 8,
            },
            menu: {
              arrow: {
                size: '6em'
              }
            },
            typography: {
              fontSize: '16px',
            },
            breakpoints: {
              medium: '130rem'
            }
          },
          /**
          * Options to pass to redoc
          * @see https://github.com/redocly/redoc#redoc-options-object
          */
          redocOptions: {
            hideHostname: true,
            noAutoAuth: true, // Hide auth url
            menuToggle: false, // Double click on item on control won't close it
            pathInMiddlePanel: true, // Put Verb and URL in the center panel
            sortPropsAlphabetically: true, // Props sorted
            // hideSingleRequestSampleTab: true,
            jsonSampleExpandLevel: 1,
            // expandResponses: "800",
            // hideRequestPayloadSample: true,
            scrollYOffset: 100,
          }
        }
      }
    ],
  ],

};
