# JavaScript

## JavaScript architecture

Inspired by Chris Ferdinandi's [How I structure my vanilla JS projects](https://gomakethings.com/how-i-structure-my-vanilla-js-projects/), all JavaScript is found within `src/js`. 

Individual files in this directory are minified into files of the same name, but are kept separate from the main JavaScript file. They are typically used only on specific pages.

This directory also contains the following subdirectories:

### `main`

Contains code that is used on most/all pages across a website. Each distinct piece of functionality is held within its own file. When Amplify's JS build script is run, these files are concatenated together into `web/dist/js/main.js` and `web/dist/js/main.min.js`, which is loaded everywhere.

### `package-extensions`

Contains Amplify's implementations for any third party scripts that are imported from NPM, such as [accessible auto-complete](https://github.com/alphagov/accessible-autocomplete).

## JavaScript build tools

[Webpack](https://webpack.js.org/) is used to compile, transpile and minify JavaScript files. Two files exist in the project root to determine these settings:

* `webpack.config.js` for the non-minified version
* `webpack.config.min.js` for the minified version

@TODO: add notes about Babel setup and transpiling from the browserslist in `package.json`.