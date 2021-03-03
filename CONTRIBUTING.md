## Where Contributions Go
Submit contributions to https://github.com/RegardsOss/RegardsOss.github.io as a pull request to the `staging` branch.

### Deployment and workflow
* The `staging` branch is the development branch
* The `master` branch is the current production branch

**All development and pull requests should be done against the `staging` branch.**

Deployments to production will be done by site admins, using pull requests from `staging` to `master`.

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Creative commons
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Regards Home page</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://cnes.fr" property="cc:attributionName" rel="cc:attributionURL">CNES</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://RegardsOss.github.io" rel="dct:source">https://RegardsOss.github.io</a>.
