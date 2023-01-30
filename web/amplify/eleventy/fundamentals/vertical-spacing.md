---
title: Vertical spacing
---
View typographical spacing on the [typography test page](https://amplify.studio24.net/amplify/design/typography-test.html).

Negative space is an important part of website design (and design in general). It helps to create visual order, and provides room for our eyes to rest between pieces of content.

This section is specifically concerned with vertical spacing between [block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements). Amplify manages this in two ways:

-   Each component that makes up a web page has the class `component` added to its outermost element. Amplify uses the [next-sibling combinator](https://www.w3.org/TR/selectors-3/#adjacent-sibling-combinators) to target this class, adding `margin-top` to all but the very first component in a series to space them apart vertically.

    The code for this resides in [50-core-components/_main.scss](https://github.com/studio24/amplify/blob/main/docs/css.md#css-architecture).

-   Within those components, and anywhere else that vertical spacing is needed between block-level elements, Chris Burnell's [stack mixin](https://chrisburnell.com/article/sassy-lobotomised-owl/) gives us the option to add vertical spacing. As it's a [Sass mixin](https://sass-lang.com/documentation/at-rules/mixin), we can use specified units of measurement at whatever value we choose, and that value can vary depending on the use case and design requirements thanks to the `@include` at-rule.

    The mixin resides in [20-mixins/_stack.scss](https://github.com/studio24/amplify/blob/main/docs/css.md#css-architecture).

The mixin was adapted from Heydon Pickering's [lobotomized owl technique](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/), which developed into the [stack in Every Layout](https://every-layout.dev/layouts/stack/).