module.exports = {
  install: [
    {
      type: "category",
      label: "Installation - Docker Swarm",
      items: [
        "setup/swarm-quick-setup",
        {
          type: "category",
          label: "Advanced setup",
          items: [
            "setup/advanced/advanced-introduction",
            "setup/advanced/microservice-setup",
            "setup/advanced/postgres-database",
            "setup/advanced/optimizations",
            "setup/advanced/ansible-vault",
            "setup/advanced/swarm-mount",
            "setup/advanced/swarm-networks",
            "setup/advanced/regards-https",
          ],
        },
        "setup/swarm-cli",
        "setup/swarm-common-issues",
        {
          type: "category",
          label: "Migrations",
          items: [
            "setup/migration/1.8-to-1.11",
            "setup/migration/1.11-to-1.12",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Playbook Guide",
      items: [
        "setup/ansible-tasks",
        "setup/swarm-setup",
      ],
    },
  ],
  manual: [
    {
      type: "category",
      label: "Overview",
      items: [
        "user-documentation/overview/overview",
        "user-documentation/overview/glossary",
      ],
    },
    {
      type: "category",
      label: "Start with REGARDS concepts",
      items: [
        "user-documentation/z2_concept/tenant-overview",
        "user-documentation/z2_concept/database-overview",
        "user-documentation/z2_concept/configuration-overview",
      ],
    },
    {
      type: "category",
      label: "Administrator configuration",
      items: [
        "user-documentation/global-configuration/global-configuration-introduction",
        "user-documentation/global-configuration/global-configuration-portal",
        "user-documentation/global-configuration/global-configuration-projects",
        "user-documentation/global-configuration/global-configuration-users",
      ],
    },
    {
      type: "category",
      label: "Project configuration",
      items: [
        "user-documentation/project-configuration/project-configuration-introduction",
        "user-documentation/project-configuration/project-configuration-users",
        {
          type: "category",
          label: "Manage authentications",
          items: [
            "user-documentation/project-configuration/project-configuration-users-authentication",
            "user-documentation/project-configuration/project-configuration-users-authentication-openid",
            "user-documentation/project-configuration/project-configuration-users-authentication-ldap",
          ],
        },
        "user-documentation/project-configuration/project-configuration-user-interface",
        "user-documentation/project-configuration/project-configuration-microservices",
        "user-documentation/project-configuration/project-configuration-storages",
      ],
    },

    {
      type: "category",
      label: "Data organization",
      items: [
        "user-documentation/data-organization/data-organization-introduction",
        "user-documentation/data-organization/data-organization-model-configuration",
        "user-documentation/data-organization/data-organization-collections-datasets",
        "user-documentation/data-organization/data-organization-data-access-rights",

      ],
    },
    {
      type: "category",
      label: "Build your scientific archive",
      items: [
        "user-documentation/import-data/import-data-introduction",
        {
          type: "category",
          label: "Build OAIS archive",
          items: [
            "user-documentation/4_1-ingest/oais-files-introduction",
            "user-documentation/4_1-ingest/oais-files-configure-ingestion-chains",
            "user-documentation/4_1-ingest/oais-files-submit-products",
            "user-documentation/4_2-dataprovider/scanned-files-manage-acquisition-chains",
            "user-documentation/4_1-ingest/oais-files-manage-products",
            "user-documentation/4_1-ingest/oais-files-settings",
          ],
        },
        {
          type: "category",
          label: "Build GeoJson Feature archive",
          items: [
            "user-documentation/4_3-fem/fem-introduction",
            "user-documentation/4_3-fem/fem-manage-features",
            "user-documentation/4_3-fem/fem-features-dissemination",
            "user-documentation/4_3-fem/fem-settings",
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Build your catalog",
      items: [
        "user-documentation/crawler/crawler-introduction",
        "user-documentation/crawler/crawler-configure-connection",
        {
          type: "category",
          label: "Configure datasources",
          items: [
            "user-documentation/crawler/crawler-configure-datasources",
            "user-documentation/crawler/crawler-external-databases",
            "user-documentation/crawler/crawler-opensearch",
            "user-documentation/crawler/crawler-aips",
            "user-documentation/crawler/crawler-fem",
          ],
        },
        "user-documentation/crawler/crawler-monitor-crawling",
        "user-documentation/crawler/crawler-reset-catalog",
        "user-documentation/crawler/crawler-elasticsearch-shard",
      ],
    },
    {
      type: "category",
      label: "Browse catalog",
      items: [
        "user-documentation/catalog-consultation/catalog-introduction",
        "user-documentation/catalog-consultation/catalog-configuration",
        "user-documentation/catalog-consultation/catalog-use",
        "user-documentation/catalog-consultation/catalog-toponyms",
        {
          type: "category",
          label: "Interoperability protocols",
          items: [
            "user-documentation/catalog-consultation/catalog-protocols-intro",
            "user-documentation/catalog-consultation/catalog-protocols-opensearch",
            "user-documentation/catalog-consultation/catalog-protocols-stac",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data services",
      items: [
        "user-documentation/data-services/data-services-introduction",
        "user-documentation/data-services/data-services-ui-services",
        "user-documentation/data-services/data-services-processing-services",
      ],
    },
    {
      type: "category",
      label: "Order data",
      items: [
        "user-documentation/order-data/order-introduction",
        "user-documentation/order-data/order-manage-orders",
        "user-documentation/order-data/order-processing",
        "user-documentation/order-data/order-monitor-orders",
        "user-documentation/order-data/order-settings",
      ],
    },
    {
      type: "category",
      label: "Monitoring",
      items: [
        "user-documentation/monitoring/dashboard"
      ],
    }
  ],
  dev: [
    "development/development-manual",
    {
      type: "category",
      label: "Backend",
      items: [
        {
          type: "category",
          label: "Architecture",
          items: [
            "development/backend/architecture/backend-architecture-concepts",
            "development/backend/architecture/backend-architecture-overview",
          ],
        },
        {
          type: "category",
          label: "Framework",
          items: [
            "development/backend/framework/backend-framework-getting-started",
            {
              type: "category",
              label: "Starters",
              items: [
                "development/backend/framework/backend-framework-starters",
                {
                  type: "category",
                  label: "Starters API",
                  items: [
                    "development/backend/framework/starters/backend-framework-starters-amqp-monitoring",
                    "development/backend/framework/starters/backend-framework-starters-amqp",
                    "development/backend/framework/starters/backend-framework-starters-authentication",
                    "development/backend/framework/starters/backend-framework-starters-cloud",
                    "development/backend/framework/starters/backend-framework-starters-encryption",
                    "development/backend/framework/starters/backend-framework-starters-feign",
                    "development/backend/framework/starters/backend-framework-starters-geojson",
                    "development/backend/framework/starters/backend-framework-starters-gson",
                    "development/backend/framework/starters/backend-framework-starters-hateoas",
                    "development/backend/framework/starters/backend-framework-starters-jpa-instance",
                    "development/backend/framework/starters/backend-framework-starters-jpa-multitenant",
                    "development/backend/framework/starters/backend-framework-starters-microservice-core",
                    "development/backend/framework/starters/backend-framework-starters-microservice",
                    "development/backend/framework/starters/backend-framework-starters-module",
                    "development/backend/framework/starters/backend-framework-starters-multitenant",
                    "development/backend/framework/starters/backend-framework-starters-oais",
                    "development/backend/framework/starters/backend-framework-starters-plugins",
                    "development/backend/framework/starters/backend-framework-starters-security",
                    "development/backend/framework/starters/backend-framework-starters-staf",
                    "development/backend/framework/starters/backend-framework-starters-swagger",
                    "development/backend/framework/starters/backend-framework-starters-web-socket",
                  ],
                },
              ],
            },
            "development/backend/framework/modules/backend-framework-modules-jobs",
            "development/backend/framework/backend-framework-dev-microservice",
            {
              type: "category",
              label: "Plugins",
              items: [
                "development/backend/framework/modules/backend-framework-modules-plugins",
                "development/backend/framework/backend-framework-dev-plugin",
                "development/backend/regards/common/api/backend-framework-plugins-api",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Services",
          items: [
            "development/backend/regards/backend-services-overview",
            {
              type: "category",
              label: "Authentication",
              items: [
                "development/backend/regards/authentication/backend-authentication-overview",
                {
                  type: "category",
                  label: "API Guides",
                  items: [
                    "development/backend/regards/authentication/api-guides/backend-authentication-token-curl",
                  ],
                },
                {
                  type: "category",
                  label: "Contributors guides",
                  items: [
                    "development/backend/regards/authentication/contributor-guides/backend-authentication-plugins",
                  ],
                },
                "development/backend/regards/authentication/backend-authentication-api-swagger",
              ],
            },
            {
              type: "category",
              label: "Admin project",
              items: [
                "development/backend/regards/admin/backend-admin-overview",
                "development/backend/regards/admin/api/backend-admin-api",
                "development/backend/regards/admin/backend-admin-api-swagger",
                "development/backend/regards/admin/backend-admin-instance-api-swagger",
              ],
            },
            {
              type: "category",
              label: "Access project",
              items: [
                "development/backend/regards/access/backend-access-overview",
                "development/backend/regards/access/api/backend-access-api",
                "development/backend/regards/access/backend-access-project-api-swagger",
                "development/backend/regards/access/backend-access-instance-api-swagger",
              ],
            },
            {
              type: "category",
              label: "Catalog",
              items: [
                "development/backend/regards/catalog/backend-catalog-overview",
                "development/backend/regards/catalog/backend-catalog-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/catalog/api/backend-catalog-search-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/catalog/plugins/backend-catalog-service-plugins",
                    "development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",
                  ],
                },
                "development/backend/regards/catalog/events/backend-catalog-events",
              ],
            },
            {
              type: "category",
              label: "Data management",
              items: [
                "development/backend/regards/dam/backend-dam-overview",
                "development/backend/regards/dam/backend-dam-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/dam/api/backend-dam-access-rights-api",
                    "development/backend/regards/dam/api/backend-dam-attachment-api",
                    "development/backend/regards/dam/api/backend-dam-collection-api",
                    "development/backend/regards/dam/api/backend-dam-dataset-api",
                    "development/backend/regards/dam/api/backend-dam-datasource-api",
                    "development/backend/regards/dam/api/backend-dam-model-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/dam/plugins/backend-dam-data-access-plugins",
                    "development/backend/regards/dam/plugins/backend-dam-computed-attribute-plugins",
                    "development/backend/regards/dam/plugins/backend-dam-datasource-plugins",
                  ],
                },
                "development/backend/regards/dam/events/backend-dam-events",
                "development/backend/regards/dam/backend-dam-geo",
              ],
            },
            {
              type: "category",
              label: "Feature manager",
              items: [
                "development/backend/regards/fem/backend-fem-overview",
                "development/backend/regards/fem/backend-fem-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/fem/api/backend-fem-configuration-api",
                    "development/backend/regards/fem/api/backend-fem-rest-api",
                    "development/backend/regards/fem/api/backend-fem-amqp-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/fem/plugins/backend-fem-feature-factory-plugins",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Notifier",
              items: [
                "development/backend/regards/notifier/backend-notifier-overview",
                "development/backend/regards/notifier/backend-notifier-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/notifier/api/backend-notifier-api",
                    "development/backend/regards/notifier/api/backend-notifier-configuration-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/notifier/plugins/backend-notifier-plugins",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Data provider",
              items: [
                "development/backend/regards/dataprovider/backend-dataprovider-overview",
                "development/backend/regards/dataprovider/backend-dataprovider-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/dataprovider/api/backend-dataprovider-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/dataprovider/plugins/backend-dataprovider-post-processing-plugin",
                    "development/backend/regards/dataprovider/plugins/backend-dataprovider-product-plugin",
                    "development/backend/regards/dataprovider/plugins/backend-dataprovider-scan-plugin",
                    "development/backend/regards/dataprovider/plugins/backend-dataprovider-sip-generation-plugin",
                    "development/backend/regards/dataprovider/plugins/backend-dataprovider-validation-plugin",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Ingest",
              items: [
                "development/backend/regards/ingest/backend-ingest-overview",
                "development/backend/regards/ingest/backend-ingest-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/ingest/api/backend-ingest-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/ingest/plugins/backend-ingest-pre-processing-plugins",
                    "development/backend/regards/ingest/plugins/backend-ingest-validation-plugins",
                    "development/backend/regards/ingest/plugins/backend-ingest-generation-plugins",
                    "development/backend/regards/ingest/plugins/backend-ingest-tagging-plugins",
                    "development/backend/regards/ingest/plugins/backend-ingest-post-processing-plugins",
                  ],
                },
                "development/backend/regards/ingest/events/backend-ingest-events",
              ],
            },
            {
              type: "category",
              label: "Order",
              items: [
                "development/backend/regards/order/backend-order-overview",
                "development/backend/regards/order/backend-order-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/order/api/backend-order-basket-api",
                    "development/backend/regards/order/api/backend-order-api",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Processing",
              items: [
                "development/backend/regards/processing/backend-processing-overview",
                "development/backend/regards/processing/backend-processing-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/processing/api/backend-processing-process-api",
                    "development/backend/regards/processing/api/backend-processing-batch-api",
                    "development/backend/regards/processing/api/backend-processing-monitoring-api",
                    "development/backend/regards/processing/openapi/backend-processing-open-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/processing/plugins/backend-processing-plugins",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Storage",
              items: [
                "development/backend/regards/storage/backend-storage-overview",
                "development/backend/regards/storage/backend-storage-api-swagger",
                {
                  type: "category",
                  label: "API (legacy)",
                  items: [
                    "development/backend/regards/storage/api/backend-storage-api",
                  ],
                },
                {
                  type: "category",
                  label: "Plugins",
                  items: [
                    "development/backend/regards/storage/plugins/backend-storage-allocation-strategy-plugins",
                    "development/backend/regards/storage/plugins/backend-storage-data-storage-plugins",
                    "development/backend/regards/storage/plugins/backend-storage-security-delegation-plugins",
                  ],
                },
                "development/backend/regards/storage/events/backend-storage-events",
              ],
            },
            {
              type: "category",
              label: "Worker Manager",
              items: [
                "development/backend/regards/worker-manager/backend-worker-manager-overview",
                "development/backend/regards/worker-manager/backend-worker-manager-api-swagger",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Frontend",
      items: [
        {
          type: "category",
          label: "Introduction",
          items: [
            "development/frontend/frontend-introduction-setup",
            "development/frontend/frontend-introduction-ide",
            "development/frontend/frontend-introduction-architecture",
            "development/frontend/frontend-introduction-eslint",
            "development/frontend/frontend-introduction-index",
          ],
        },
        {
          type: "category",
          label: "Data",
          items: [
            "development/frontend/frontend-data-ui",
            "development/frontend/components/frontend-data-clients",
          ],
        },
        {
          type: "category",
          label: "View",
          items: [
            "development/frontend/components/frontend-view-international",
            "development/frontend/components/frontend-view-theme",
            "development/frontend/components/frontend-view-forms",
          ],
        },
        {
          type: "category",
          label: "Packages",
          items: [
            "development/frontend/components/frontend-packages-components",
            {
              type: "category",
              label: "Business components",
              items: [
                "development/frontend/components/frontend-packages-business-components",
                "development/frontend/components/business/frontend-packages-business-components-microservice-plugin",
              ]
            },
            {
              type: "category",
              label: "Lazy modules",
              items: [
                "development/frontend/modules/frontend-packages-lazy-modules",
                "development/frontend/modules/frontend-packages-lazy-modules-authentication",
                "development/frontend/modules/frontend-packages-lazy-modules-embedded-html",
                "development/frontend/modules/frontend-packages-lazy-modules-licenses",
                "development/frontend/modules/frontend-packages-lazy-modules-menu",
                "development/frontend/modules/frontend-packages-lazy-modules-order-cart",
                "development/frontend/modules/frontend-packages-lazy-modules-order-history",
                "development/frontend/modules/frontend-packages-lazy-modules-project-about-page",
                "development/frontend/modules/frontend-packages-lazy-modules-project-list",
                "development/frontend/modules/frontend-packages-lazy-modules-search-graph",
                "development/frontend/modules/frontend-packages-lazy-modules-search-results",
                "development/frontend/modules/frontend-packages-lazy-modules-storage-monitoring"
              ]
            }
          ],
        },
        {
          type: "category",
          label: "Plugins",
          items: [
            "development/frontend/plugins/frontend-plugins",
            "development/frontend/plugins/frontend-criteria-plugins",
            "development/frontend/plugins/frontend-service-plugins",
          ],
        },
        {
          type: "category",
          label: "Configuration",
          items: ["development/frontend/frontend-configuration-layout"],
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "development/tutorials/development-tutorials-overview",
      ]
    },
    {
      type: "category",
      label: "Appendices",
      items: [
        "development/appendices/appendices-oais",
        "development/appendices/appendices-lucene-query",
        "development/appendices/appendices-create-model",
      ],
    },
  ]
};
