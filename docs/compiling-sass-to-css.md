# Compiling Sass to CSS

Amplify uses the [PostCSS](https://github.com/postcss/postcss) and [PostCSS CLI](https://github.com/postcss/postcss-cli) NPM packages to compile Sass files from `src/styles/sass` into three separate stylesheets in `web/dist`:

* `core.css`
* `print.css`
* `advanced.css`

Both `core.css` and `print.css` are served to all browsers. `advanced.css` is only served to our [supported list of browsers](browser-support.md).

## Contents of `core.css`

* Settings, functions and mixins (referenced elsewhere within the CSS)
* Base styles
* Layouts
* Core component styles
* Template-specific styles
* Utility classes

## Contents of `print.css`

Some default print styles are included, but developers must check and add any further styles required for a legible print presentation.

## Contents of `advanced.css`

* Settings, functions and mixins (referenced elsewhere within the CSS)
* Specific styles from Base for hiding and showing items (to allow for extending SASS placeholders within `advanced.css`)
* Advanced component styles
* Third party plugins involving JavaScript

The files `core.scss`, `print.scss` and `advanced.scss` within `src/styles` determine which Sass files will be compiled into the relevant stylesheet. CSS is organised in specificity order, from low to high. The individual Sass partials are included using the [@import directive](https://sass-lang.com/documentation/at-rules/import#partials) in the order denoted by the level in which they reside, remembering the impact of the [CSS cascade](https://wattenberger.com/blog/css-cascade).