# Compiling Sass to CSS

Amplify uses the Node implementation of [Dart Sass](https://sass-lang.com/dart-sass) to parse .scss files in `src/styles/sass` into three CSS stylesheets in `web/dist`:

* `core.css`
* `print.css`
* `advanced.css`

[PostCSS](https://github.com/postcss/postcss), [PostCSS CLI](https://github.com/postcss/postcss-cli) and [Autoprefixer](https://github.com/postcss/autoprefixer) NPM packages add any vendor prefixes which may be required for our [supported list of browsers](browser-support.md) and produce minified versions of these stylesheets.

Both `core.css` and `print.css` are served to all browsers. `advanced.css` is only served to supported browsers.

The files `core.scss`, `print.scss` and `advanced.scss` within `src/styles` determine which Sass files will be compiled into the relevant CSS stylesheet. The individual Sass partials are included using the [@import directive](https://sass-lang.com/documentation/at-rules/import#partials) in the order denoted by the level in which they reside, remembering the impact of the [CSS cascade](https://wattenberger.com/blog/css-cascade).

## Excluding unwanted styles

Any entry within these files that is commented out will not be part of the compiled CSS. It's recommended to do this, rather than deleting Sass partials from `src/styles/sass`.

## Contents of `core.scss`

* Settings, functions and mixins (referenced elsewhere within the CSS)
* Base styles
* Layouts
* Core component styles
* Template-specific styles
* Utility classes

## Contents of `print.scss`

Some default print styles are included, but developers must check and add any further styles required for a legible print presentation.

## Contents of `advanced.scss`

* Settings, functions and mixins (referenced elsewhere within the CSS)
* Specific styles from Base for hiding and showing items (to allow for extending SASS placeholders within `advanced.css`)
* Advanced component styles
* Third party plugins involving JavaScript