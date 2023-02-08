---
title: CSS
---
Amplify uses [Sass](http://sass-lang.com/) - specifically the [SCSS syntax](https://sass-lang.com/documentation/syntax) - which is compiled into CSS files. The CSS approach is heavily influenced by Andy Bell's [CUBE CSS](https://cube.fyi/). This has some similarities with the [BEM Methodology](http://getbem.com/) but with a more judicious use of class names.

Architecture
------------

The architecture is split into a series of numbered levels in `src/styles/sass` with each level representing a directory that contains our Sass split out into different [partial files](https://sass-lang.com/guide#topic-4). More generic and wide-reaching styles sit within the lower numbered levels, with specificity increasing with each subsequent level.

[CSS architecture details for developers](https://github.com/studio24/amplify/blob/main/docs/css.md#css-architecture).

Compiling Sass to CSS
---------------------

As mentioned in [browser support](https://amplify.studio24.net/amplify/get-started/browser-support.html), the Sass is compiled into the following CSS stylesheets in `web/dist/styles`:

-   `core.css` and `print.css`, which are served to all browsers
-   `advanced.css`, which is served to supported browsers.

[Sass compilation details for developers](https://github.com/studio24/amplify/blob/main/docs/css.md#compiling-sass-to-css).