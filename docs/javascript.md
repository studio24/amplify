# JavaScript

* [JavaScript architecture](#javascript-architecture)
* [JavaScript build tools](#javascript-build-tools)

## JavaScript architecture

Inspired by Chris Ferdinandi's [How I structure my vanilla JS projects](https://gomakethings.com/how-i-structure-my-vanilla-js-projects/), all JavaScript is found within `assets-src/js`. 

Individual files in this directory are minified into files of the same name, but are kept separate from the main JavaScript file. They are typically used only on specific pages.

This directory also contains the following subdirectories:

### `main`

Contains code that is used on most/all pages across a website. Each distinct piece of functionality is held within its own file. When Amplify's JS build script is run, these files are concatenated together into `web/dist/js/main.js` and `web/dist/js/main.min.js`, which is loaded everywhere.

### `package-extensions`

Contains Amplify's implementations for any third party scripts that are imported from NPM, such as [accessible auto-complete](https://github.com/alphagov/accessible-autocomplete).

## JavaScript build tools

[Vite](https://vite.dev/) is used to compile, transpile and minify JavaScript files. There is a `build-js.mjs` file in the project root which controls this process, bundling each entry point in `assets-src/js` independently. The transpilation target is derived from the `browserslist` field in `package.json`.

Entry files are managed within `package.json` under the `config.entries` field; this means that any new JavaScript file added to the project should be added to this list.

External libraries are also managed within `package.json` under the `config.externals` field. This means that any third party library that need to be referenced should be added to this list. Amplify already had `fontfaceobserver` in this list.