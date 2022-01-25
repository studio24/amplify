# CSS

## CSS architecture

Sass files sit at `src/styles/sass` and are split across a series of numbered directories. The lower the number the more generic the styles, the higher the number the more explicit. As the directories increase, so does the specificity. If the contents of a directory are not needed, they can be [excluded](#excluding-unwanted-styles). New levels (and files) can be added as required.

### 00-settings

* [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) rules for custom web fonts, which we prefer to self-host.
* [Sass variables](https://sass-lang.com/documentation/variables) which are referenced elsewhere within Amplify:
    * breakpoints for CSS media queries
    * colours
    * typesetting (system fonts, web fonts, monospaced font family, font weights)
* A setting for [debugging CSS layouts](https://github.com/mrmrs/pesticide). Change from `false` to `true` and rebuild the styles to enable.

### 10-functions

[Sass functions](https://sass-lang.com/documentation/values/functions) such as em/rem calculation, unit stripping

### 20-mixins

[Sass mixins](https://sass-lang.com/documentation/at-rules/mixin) to manage font sizes, CSS media queries and vertical spacing within and between components.

### 30-base

Default styles forming the base of your project, including things like:

* [Normalize](https://necolas.github.io/normalize.css/) reset
* typography
* buttons and links
* lists
* forms and form error messages
* tables

### 40-layout-helpers

Heavily influenced by [Every Layout](https://every-layout.dev/), these are the styles for the basic layout helpers, which can be combined and customised to make a variety of components and page templates.

### 50-core-components

The basic components available for use, un-enhanced by JavaScript.

### 60-advanced-components

Components that are enhanced in some way with JavaScript.

### 70-third-party-plugins

Styles for any functionality that comes from external sources.

### 80-templates

Styles required for specific page templates and/or content types. Note the sub-directory `85-amplify` which holds all the styles needed specifically for the Amplify website.

### 90-utilities

Overrides or helper classes.

## Compiling Sass to CSS

Amplify uses the Node implementation of [Dart Sass](https://sass-lang.com/dart-sass) to parse .scss files in `src/styles/sass` into three CSS stylesheets in `web/dist/styles`:

* `core.css`
* `print.css`
* `advanced.css`

[PostCSS](https://github.com/postcss/postcss), [PostCSS CLI](https://github.com/postcss/postcss-cli) and [Autoprefixer](https://github.com/postcss/autoprefixer) NPM packages add any vendor prefixes which may be required for our [supported list of browsers](browser-support.md) and produce minified versions of these stylesheets.

Both `core.css` and `print.css` are served to all browsers. `advanced.css` is only served to supported browsers.

The files `core.scss`, `print.scss` and `advanced.scss` within `src/styles` determine which Sass files will be compiled into the relevant CSS stylesheet. The individual Sass partials are included using the [@import directive](https://sass-lang.com/documentation/at-rules/import#partials) in the order denoted by the level in which they reside, remembering the impact of the [CSS cascade](https://wattenberger.com/blog/css-cascade).

### Contents of `core.scss`

* Settings, functions and mixins (referenced elsewhere within the CSS)
* Base styles
* Layouts
* Core component styles
* Template-specific styles
* Utility classes

### Contents of `print.scss`

Some default print styles are included, but **developers must check and add any further styles required** for a legible print presentation.

### Contents of `advanced.scss`

* Settings, functions and mixins (referenced elsewhere within the CSS)
* Specific styles from Base for hiding and showing items (to allow for extending SASS placeholders within `advanced.css`)
* Advanced component styles
* Third party plugins involving JavaScript

### Excluding unwanted styles

Any entry within these files that is commented out will not be part of the compiled CSS. It's recommended to do this, rather than deleting Sass partials from `src/styles/sass`.