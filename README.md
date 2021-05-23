# Zendesk Tag Tool

This zendesk app has been designed to help agents quickly search through and apply tags from a pre-defined list on Airtable. Once installed, it lives in the Zendesk sidebar in the apps section on new and exsiting tickets.

### Built With:

- [ZCLI (Zendesk Command Line Interface)](https://developer.zendesk.com/apps/docs/developer-guide/zcli)
- [Fuse.js](https://fusejs.io/)
- [Airtable.js](https://github.com/airtable/airtable.js/)
- [Redux](https://redux.js.org/api/api-reference)
- [Webpack](https://webpack.js.org/concepts/)
- [Babel](https://babeljs.io/docs/en/)

### Running locally

To start the app in development mode, run **_zcli apps:server PATH-TO-APP-DIRECTORY_** in terminal:

```console
zcli apps:server ./zendesk-tag-tool
```

You will also want to run webpack in development mode to watch for changes and bundle the app:

```console
yarn run watch
```

Then, add **?zcli_apps=true** to the end of your Zendesk ticket url (for example: http://<subdomain>.zendesk.com/agent/tickets/1?zcli_apps=true)

##### Running locally with settings

To run the server with configured settings, duplicate settings.yml.sample (rename to settings.yml) and include the required variables. Then, run **_yarn run start_** in terminal:

```console
yarn run start
```

## Deploying

To validate the app:

```console
yarn run validate
```

To install to your Zendesk instance from terminal, you will need to modify the .zat.sample file and include your Zendesk subdomain, username, and password. If you are using a token for the password, be sure to include **/token** at the end of your username. Finally, run **_yarn run create_** in terminal:

```console
yarn run create
```

Lastly, to update the app once you have created it inside of your Zendesk instance, you can run **_yarn run update_** in terminal:

```console
yarn run update
```

Or, to create a zip archive for manual upload, run:

```console
yarn run package
```

### Bugs / Improvements

Submit issues by creating a [Github Issue](https://github.com/marshallhahn/zendesk-tag-tool/issues/new)

### License

Copyright (c) 2021, Marshall B. Hahn
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE file in the root directory of this source tree.
