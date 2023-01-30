---
title: Typography
---
Review the [typography test page](https://amplify.studio24.net/amplify/design/typography-test.html).

Managing fonts
--------------

Amplify uses Bram Stein's [Font Face Observer](https://fontfaceobserver.com/) NPM package to optimise web font loading and prevent a flash of invisible text (FOIT).

A flash of unstyled text (FOUT) is a better user experience than not being able to read something at all. Instead, we want to [progressively load web fonts](https://www.filamentgroup.com/lab/font-events.html), allowing flashes of unstyled text to happen but minimising the effect.

To achieve this, the default font stack is limited to system fonts - fonts that are installed on a computer, usually included as part of Operating Systems and sometimes bundled with certain programs. If the project requires custom web fonts, we choose system fonts that are similar in appearance to the web font, to minimise FOUT.

Font Face Observer detects when the `@font-face` files are loaded and adds the `fonts-loaded` class to the `html` root element, at which point the web font will be used.

[How to update fonts in Amplify for developers](https://github.com/studio24/amplify/blob/main/docs/fonts.md).

Font sizing and spacing
-----------------------

It's common for designs to use a range of font sizes, with each size coupled to a specific line-height. To ensure consistency, each font size/line-height combination is defined as a [mixin](https://sass-lang.com/documentation/at-rules/mixin).

Each font size mixin is associated with a class using the same naming convention: use the prefix `**text-**` followed by a number representing the font size in pixels. This makes it easy for developers to know which class to use, and allows flexibility to add intermediate sizes if required.

### Example of creating a new mixin

Suppose the design calls for a font size of 20px using a line-height of 26px. This needs to be converted into relative measurements - typically rems and a unitless line-height - for accessibility.

-   Create a mixin called `text-20` in 20-mixins/_font-sizes.scss
-   Inside the mixin, use the `rem` function to convert the 20px into a rem value
-   Divide the line-height figure (26) by the font-size figure (20) to calculate the unitless line-height value for the mixin
-   Create a class called `text-20` in 30-base/_typography.scss and [include](https://sass-lang.com/documentation/at-rules/mixin) the mixin

If the font size/line-height combination will change at a specified viewport breakpoint (e.g. if `h1` or `h2` get larger above a certain viewport size), name it according to the largest font size it will have, e.g. `text-48`.

### Updating existing mixins

Amplify has a range of font size mixins ready to use. If you decide to remove a mixin in favour of a new one, remember to perform a search and replace across the Sass files to prevent errors when compiling the SCSS into CSS.