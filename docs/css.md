# CSS

* [CSS architecture](#css-architecture)
* [Compiling Sass to CSS](#compiling-sass-to-css)

## CSS architecture

Sass files sit at `assets-src/styles/sass` and are split across a series of numbered directories. The lower the number the more generic the styles, the higher the number the more explicit. As the directories increase, so does the specificity. If the contents of a directory are not needed, they can be [excluded](#excluding-unwanted-styles). New levels (and files) can be added as required.

### 00-settings
[`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) rules for custom web fonts, which we prefer to self-host.

### 10-settings
* [Sass variables](https://sass-lang.com/documentation/variables) which are referenced elsewhere within Amplify:
    * breakpoints for CSS media queries
    * colours
    * typesetting (system fonts, web fonts, monospaced font family, font weights)
* A setting for [debugging CSS layouts](https://github.com/mrmrs/pesticide). Change from `false` to `true` and rebuild the styles to enable.

### 20-tools

* [Sass functions](https://sass-lang.com/documentation/values/functions) such as em/rem calculation, removing units to return a plain number value.
* [Sass mixins](https://sass-lang.com/documentation/at-rules/mixin) to manage font sizes, viewport media queries and vertical spacing within and between components.

### 30-base

Default styles forming the base of your project, including global styles like:

* typography and spacing
* buttons and links
* lists
* forms and form error messages
* tables

This is also where the [starter print styles](#contents-of-printscss) live.

### 40-layout-helpers

Heavily influenced by [Every Layout](https://every-layout.dev/), these are styles for the basic layout helpers, which can be combined and customised to make a variety of components and page templates.

### 50-core-components

The basic components available for use, as they will appear in the absence of any JavaScript.

### 60-advanced-components

Components that are enhanced in some way with JavaScript.

### 65-advanced-navigation

Styles needed for the various JS-enhanced [navigation patterns provided by Amplify](https://amplify.studio24.net/amplify/advanced-components/navigation/).

### 70-vendor-src

Styles for any functionality coming from external, third party sources.

### 75-vendor-overrides

Amplify overrides to vendor styles.

### 80-templates

If your project requires styles for specific page templates and/or content types, you should create this directory and add those styles here. Note the directory `85-amplify` which holds all the styles specific to the [Amplify website](https://amplify.studio24.net/amplify/). 

### 90-utilities

Targeted override and helper classes.

## Linting Sass

Amplify uses [Stylelint](https://stylelint.io/) to help us avoid errors and enforce conventions in our CSS. Visit that site for detailed documentation.

If Stylelint encounters any errors that it cannot automatically fix, they will be highlighted in the terminal window and the Sass compilation step will not run. You must then either manually resolve the errors (preferred), or tell Stylelint to [ignore the problematic code](https://stylelint.io/user-guide/ignore-code).

**If you have to ignore code for a valid reason, you _must_ specify the reason within the ignore comment.** You are encouraged to discuss with another developer before ignoring code.

**Do not modify the underlying Stylelint rulesets** found in the `stylelint.config.js` config file without first discussing with the developers responsible for maintaining Amplify.

## Compiling Sass to CSS

Amplify uses the Node implementation of [Dart Sass](https://sass-lang.com/dart-sass) to parse .scss files in `assets-src/styles/sass` into three CSS stylesheets in `web/dist/styles`:

* `core.css`
* `print.css`
* `advanced.css`

[PostCSS](https://github.com/postcss/postcss), [PostCSS CLI](https://github.com/postcss/postcss-cli) and [Autoprefixer](https://github.com/postcss/autoprefixer) NPM packages add any vendor prefixes which may be required for our [supported list of browsers](browser-support.md) and produce minified versions of these stylesheets.

Both `core.css` and `print.css` are served to all browsers. `advanced.css` is only served to supported browsers.

The files `core.scss`, `print.scss` and `advanced.scss` within `assets-src/styles` determine which Sass files will be compiled into the relevant CSS stylesheet. The individual Sass partials are included using the [@import directive](https://sass-lang.com/documentation/at-rules/import#partials) in the order denoted by the level in which they reside, remembering the impact of the [CSS cascade](https://wattenberger.com/blog/css-cascade). Any partials found to be unnecessary for a specific project - such as those needed for the Amplify site - should be commented out, to reduce the size of the compiled CSS files.

### Contents of `core.scss`

* Reset and base styles
* Layouts
* Core component styles
* Template-specific styles
* Utility classes

### Contents of `print.scss`

Some default print styles are included, but **developers must check and add any further styles required** for a legible print presentation.

### Contents of `advanced.scss`

* Advanced component styles
* Vendor (third party) styles relating to JavaScript enhancements
* Amplify overrides to vendor styles

### Excluding unwanted styles

Any entry within these files that is commented out will not be part of the compiled CSS. It's suggested to do this, rather than deleting Sass partials from `assets-src/styles/sass`.