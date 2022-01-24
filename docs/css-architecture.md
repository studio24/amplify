# CSS architecture

Sass files sit at `src/styles/sass` and are split across a series of numbered directories. The lower the number the more generic the styles, the higher the number the more explicit. As the directories increase, so does the specificity. If the contents of a directory are not needed, they can be [excluded](compiling-sass-to-css.md#excluding-unwanted-styles). New levels (and files) can be added as required.

## 00-settings

* [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) rules for custom web fonts, which we prefer to self-host.
* [Sass variables](https://sass-lang.com/documentation/variables) which are referenced elsewhere within Amplify:
  * breakpoints for CSS media queries
  * colours
  * typesetting (system fonts, web fonts, monospaced font family, font weights)
* A setting for [debugging CSS layouts](https://github.com/mrmrs/pesticide). Change from `false` to `true` and rebuild the styles to enable.

## 10-functions

[Sass functions](https://sass-lang.com/documentation/values/functions) such as em/rem calculation, unit stripping.

## 20-mixins

[Sass mixins](https://sass-lang.com/documentation/at-rules/mixin) to manage font sizes, CSS media queries and vertical spacing within and between components.

## 30-base

Default styles forming the base of your project, including things like:

* [Normalize](https://necolas.github.io/normalize.css/) reset
* typography
* buttons and links
* lists
* forms and form error messages
* tables

## 40-layout-helpers

Heavily influenced by [Every Layout](https://every-layout.dev/), these are the styles for the basic layout helpers, which can be combined and customised to make a variety of components and page templates.

## 50-core-components

The basic components available for use, un-enhanced by JavaScript.

## 60-advanced-components

Components that are enhanced in some way with JavaScript.

## 70-third-party-plugins

Any functionality that comes from external sources.

## 80-templates

Styles required for specific page templates and/or content types. Note the sub-directory `85-amplify` which holds all the styles needed specifically for the Amplify website.

## 90-utilities

Overrides or helper classes.


[See how Sass is compiled into CSS](compiling-sass-to-css.md).