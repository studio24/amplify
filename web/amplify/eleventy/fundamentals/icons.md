---
title: Icons
---

The default `icon` class uses the relative em unit and is ideal for using icons inline with text, adapting the icon size to the font size of the parent element. The default size is `0.75em` which works well with custom SVGs and [Material Design icons](https://fonts.google.com/icons?selected=Material+Icons). If your project calls for using [Font Awesome icons](https://github.com/FortAwesome/Font-Awesome) you may want to bump this up to `1em`.

For SVG icons, always include width and height attributes as part of the markup to stop them from expanding to fill the whole page if the CSS doesn't load. Setting `fill="currentColor"` will make sure that an icon within a link or button picks up it's colour from the link or button styles - including hover and focus states. This dynamic colour change makes SVG icons easier to manage if branding needs to change in the future.

The icon can easily sit before or after the text, using natural word spacing:

Pets

Pets

Controlling icon spacing
------------------------

If you want control over the amount of space between the icon and text, add either the `with-icon--before` or `with-icon--after` class to the parent element. This applies inline-flex and alignment styles to help things line up nicely, and uses margin for the spacing. It also handles right-to-left text if applicable. Choose the class which reflects the correct order of icon and text.

Icon sizing
-----------

If you need more control over the size of the icon, use a similar approach to that used for [font sizing](https://amplify.studio24.net/amplify/fundamentals/typography.html). Amplify includes the `icon--24` class, which uses the `rem` unit for an icon equivalent to 24px width/height. If the design calls for additional size options, create classes in 30-base/_icons.scss using the prefix `**icon-**` followed by a number representing the font size in pixels.

Inline SVGs and SVG sprites
---------------------------

The preceding examples show how to include icons as inline SVGs. The benefits of doing this are:

-   It eliminates a separate HTTP request
-   SVGs added as background images as part of an icon font may not show properly for high contrast mode users
-   We have full CSS control of the SVG in terms of colour, animations/transitions and manipulating paths.

However, inline SVGs are not cached. An alternative is to [use the `use` element of SVG to reference code from an external file](https://css-tricks.com/svg-use-with-external-reference-take-2/), which the browser can cache. [CSS styling is still possible](https://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/), although it has some limitations - be sure to add an extra class and target this in the CSS.

### Considerations for Internet Explorer

There is no Internet Explorer support for using SVGs with `use` and an external source. A JavaScript workaround - [SVG for Everybody](https://github.com/jonathantneal/svg4everybody) - is available if support for this browser is important, but in this scenario it's simpler to just use inline SVGs.