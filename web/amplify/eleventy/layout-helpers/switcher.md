---
title: Switcher
---
The switcher layout helper switches the alignment of items from horizontal to vertical at a given, container-based breakpoint. It's a good choice for situations where each child item should be considered of equal importance and has an equal width. You will find an example of the switcher on the [Amplify home page](https://amplify.studio24.net/amplify/index.html).

As with the [cluster](https://amplify.studio24.net/amplify/layout-helpers/cluster.html) and [sidebar](https://amplify.studio24.net/amplify/layout-helpers/sidebar.html) layouts, an inner flexbox container holds the switcher items, and the negative margin technique to create gutter spacing between items.

As there are **no viewport media queries**, the switcher will nest nicely inside other containers.

Item 1

Item 2

Item 3

Considerations
--------------

The default switcher layout behaves as follows:

-   When the inner flexbox container is less than 690px wide, the child items sit vertically.
-   Otherwise, the child items sit horizontally.
-   The number of columns in a row is two (determined by the `min-width` percentage used on the child items).

For gutter spacing, apply padding to the flex items and an equal negative margin to the flex container. This will double up, so use half the intended value.

Use an additional class to override the default behaviour.