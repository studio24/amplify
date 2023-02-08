---
title: Block link cards
components:
    blockLink:
        type: core-components
        name: cards
        data:
            sectionTitle: A block link card
            boxType: no-border
            heading: Cats and the internet
            body: <p>Examining the popularity of cat-related media content online</p>
            image:
                frameType: 3-2
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
    blockLinkCTA:
        type: core-components
        name: cards
        data:
            sectionTitle: Block link card with call-to-action (CTA)
            boxType: no-border
            heading: Cats and the internet
            body: <p>Examining the popularity of cat-related media content online</p>
            link:
                url: javascript:;
                type: button
                text: Read more
            image:
                frameType: 3-2
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
    blockLinkTags:
        type: core-components
        name: cards
        data:
            sectionTitle: A block link card with tag links
            boxType: no-border
            heading: Cats and the internet
            body: <p>Examining the popularity of cat-related media content online</p>
            image:
                frameType: 3-2
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
            tags:
                tag1:
                    link: https://www.studio24.net/work-sector/arts-and-culture/
                    title: Arts and culture
                tag2:
                    link: https://www.studio24.net/work-sector/education/
                    title: Education
                tag3:
                    link: https://www.studio24.net/work-sector/charity-and-not-for-profit/
                    title: Charity and not-for-profit
---
Cards are used in multiple places. Although the visual appearance may vary, they share two general patterns:

1.  [Simple cards](https://amplify.studio24.net/amplify/core-components/cards.html) with a distinct link that can be selected
2.  Block link cards (covered here) where JavaScript is used to make the entire surface area act as a link

For both types of card, it is important to check that the heading level used fits in with the card's location in the page content hierarchy.

A simple card is enhanced into a block link card by adding the data attribute `data-component="card"`. When this is present, [JavaScript will make the whole card act as a block link](https://css-tricks.com/block-links-the-search-for-a-perfect-solution/).

Do not wrap the contents of a card inside a singular `a` element. This can result in a very verbose experience for screen reader users where the entire contents of the card are announced.

For arranging groups of cards you can use the [switcher layout helper](https://amplify.studio24.net/amplify/layout-helpers/switcher.html) or [shelves component](https://amplify.studio24.net/amplify/core-components/shelves.html) depending on your requirements.

{{ pageComponents(components) }}

Considerations
--------------

Block links work because the JavaScript looks for a link with the class `card__link`. We add this link to the `card__heading` text, to make sure that the link text is descriptive. If the design calls for a visually distinctive CTA, use a simple `div` to hold the text content and `aria-hidden` to hide it from assistive technology.

The preceding example shows that it is possible for a block link card to have one link as the main link while also allowing other specific links (in this case a [list of tags](https://amplify.studio24.net/amplify/core-components/tag-list.html)) to different destinations. JavaScript targets the link with the class `card__link` and identifies this as the main link for the card.

### Neat cards

If the design calls for a row of cards of equal height, irrespective of the amount of text content, you can add the `card--neat` modifier class to the cards. This forces the card to take up 100% of the height of the parent container. It will also push the last child element in the text region to the bottom edge. You can see this in action on the [Amplify home page](https://amplify.studio24.net/amplify/index.html).