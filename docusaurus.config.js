const currentVersion = "1.5.0";

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
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'en',
      },
      fr: {
        label: 'fr',
      },
    },
  },
  themeConfig: {
    navbar: {
      style: "dark",
      title: "REGARDS",
      logo: {
        alt: "Site Logo",
        src: "img/logos/regards-svg/regards-white.svg",
      },
      items: [
        {
          to: "docs/setup",
          activeBasePath: "docs/setup",
          label: "Install",
          position: "left",
        },
        {
          to: "docs/user-guide",
          activeBasePath: "docs/user-guide",
          label: "Manual",
          position: "left",
        },
        {
          to: "docs/development",
          activeBasePath: "docs/development",
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
          to: "roadmap",
          activeBasePath: "roadmap",
          label: "Roadmap",
          position: "right",
        },
        {
          to: "release-notes",
          activeBasePath: "release-notes",
          label: "Release notes",
          position: "right",
        },
        {
          to: "aboutus",
          activeBasePath: "aboutus",
          label: "About us",
          position: "right",
        },
        {
          href: 'https://github.com/RegardsOss/RegardsOss.github.io',
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
              to: "/docs/user-guide",
            },
          ],
        },
        {
          title: "Developpers",
          items: [
            {
              label: "Install",
              href: "/docs/setup",
            },
            {
              label: "Backend",
              href: "/docs/development/backend/architecture/concepts",
            },
            {
              label: "Frontend",
              href: "/docs/development/frontend/introduction/setup",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/RegardsOss/RegardsOss.github.io",
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
        path: "roadmap",
        routeBasePath: 'roadmap',
        sidebarPath: require.resolve("./sidebars_roadmap.js"),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "release-notes",
        path: "release_notes",
        routeBasePath: 'release-notes',
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
  ],
};
