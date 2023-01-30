---
title: Simple cards
---
Cards are used in multiple places. Although the visual appearance may vary, they share two general patterns:

1.  Simple cards (covered here) with a distinct link that can be selected
2.  [Block link cards](https://amplify.studio24.net/amplify/advanced-components/cards.html), where JavaScript is used to make the entire surface area act as a link

For both types of card, it is important to check that the heading level used fits in with the card's location in the page content hierarchy.

For arranging groups of cards you can use the [switcher layout helper](https://amplify.studio24.net/amplify/layout-helpers/switcher.html) or [shelves component](https://amplify.studio24.net/amplify/core-components/shelves.html) depending on your requirements.

A simple card
-------------

### Cats and the Internet

Examining the popularity of cat-related media content online.

[Cats and the Internet: Read more](https://en.wikipedia.org/wiki/Cats_and_the_Internet)

![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

Considerations
--------------

Note the use of the [frame layout helper](https://amplify.studio24.net/amplify/layout-helpers/frame.html) for the card image and the [box layout helper](https://amplify.studio24.net/amplify/layout-helpers/box.html) for the card text.

In the markup, the card text is first in the source order to prioritise it over the image. Flexbox is used to place the image ahead of the card text visually, via the `order` property.

Where generic link text is used visually, this is enhanced for Assistive Technology users with the `span class="visuallyhidden"` providing descriptive link text to meet [WCAG Success Criterion 2.4.9: Link Purpose (Link Only) (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html).

### Neat cards

If the design calls for a row of cards of equal height, irrespective of the amount of text content, you can add the `card--neat` modifier class to the cards. This forces the card to take up 100% of the height of the parent container. It will also push the last child element in the text region to the bottom edge. You can see this in action on the [Amplify home page](https://amplify.studio24.net/amplify/index.html).