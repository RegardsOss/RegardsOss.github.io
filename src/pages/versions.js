/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {
  useLatestVersion,
  useVersions,
} from '@docusaurus/plugin-content-docs/client';

function Version() {
  const { siteConfig } = useDocusaurusContext();
  const versions = useVersions();
  const latestVersion = useLatestVersion();
  const currentVersion = versions.find((version) => version.name === 'current');

  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== "current"
  );

  return (
    <Layout
      title="Versions"
      description="REGARDS Versions page listing all documented site versions"
    >
      <main className="container margin-vert--lg">
        <h1>REGARDS documentation versions</h1>

        {currentVersion && (
          <div className="margin-bottom--lg">
            <h3 id="latest">Current version (Stable)</h3>
            <p>
              Here you can find the documentation for current released version.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{currentVersion.label}</th>
                  <td>
                    <a href={`${currentVersion.path}/user-guide`}>Documentation</a>
                  </td>
                  <td>
                    <a href={`release-notes/v${currentVersion.label}`}>
                      Release Notes
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past versions (Not maintained anymore)</h3>
            <p>
              Here you can find documentation for previous versions of REGARDS.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <a href={`${version.path}/user-guide`}>Documentation</a>
                    </td>
                    <td>
                      <a href={`release-notes/v${version.label}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Version;
