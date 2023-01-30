---
title: Shelves
---
Shelves provide a flexbox framework for arranging groups of items such as [cards](https://amplify.studio24.net/amplify/core-components/cards.html). You might choose to use shelves instead of the [switcher layout helper](https://amplify.studio24.net/amplify/layout-helpers/switcher.html) if:

-   you want to specify the number of items on each shelf in relation to the viewport width rather than the width of the parent container
-   you want to change how many items can fit on a shelf depending on the total number of items, using [CSS quantity queries](https://alistapart.com/article/quantity-queries-for-css/) - use [Quantity Queries Builder](https://quantityqueries.com/) to roll your own quantity queries
-   items don't have to follow a rigid grid pattern and can grow horizontally to fill up the space on a shelf when there are fewer than the maximum possible (much like a cat taking up all the available space)

Heading for the shelves component
---------------------------------

Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

-   ### Cats and the Internet

    Examining the popularity of cat-related media content online.

    [Cats and the Internet: Read more](https://en.wikipedia.org/wiki/Cats_and_the_Internet)

    ![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

-   ### Cats and the Internet

    Examining the popularity of cat-related media content online.

    [Cats and the Internet: Read more](https://en.wikipedia.org/wiki/Cats_and_the_Internet)

    ![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

-   ### Cats and the Internet

    Examining the popularity of cat-related media content online.

    [Cats and the Internet: Read more](https://en.wikipedia.org/wiki/Cats_and_the_Internet)

    ![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

-   ### Cats and the Internet

    Examining the popularity of cat-related media content online.

    [Cats and the Internet: Read more](https://en.wikipedia.org/wiki/Cats_and_the_Internet)

    ![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

-   ### Cats and the Internet

    Examining the popularity of cat-related media content online.

    [Cats and the Internet: Read more](https://en.wikipedia.org/wiki/Cats_and_the_Internet)

    ![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

Considerations
--------------

The example above uses an unordered list to hold the cards. Because the [cards](https://amplify.studio24.net/amplify/core-components/cards.html) pattern uses headings that fit in with the surrounding page hierarchy, `role="presentaton"` is added to the unordered list to reduce the verbosity of announcements for assitive technology users.