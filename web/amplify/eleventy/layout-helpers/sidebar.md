---
title: Sidebar
---
The sidebar layout helper creates a pair of content panels inside a containing element. These two panels stack vertically, until there is enough horizontal space for them to sit alongside each other. One content panel is typically narrower than the other, acting as a "sidebar".

The sidebar layout helper needs an inner flexbox container to hold the two panels. The same negative margin technique used for the [cluster layout](https://amplify.studio24.net/amplify/layout-helpers/cluster.html) creates gutter spacing between the panels.

The point at which the panels sit side-by-side horizontally is determined by a `flex-basis` property on the narrower panel and a `min-width` on the wider panel. As there are **no viewport media queries**, the sidebar layout will nest nicely inside other containers.

Considerations
--------------

It is not recommended to use the sidebar layout helper to create an entire page layout, with a main content area and a sidebar. This is because the technique Amplify uses to manage [responsive tables](https://amplify.studio24.net/amplify/fundamentals/tables.html) has been found not to work if the table sits within the sidebar layout helper.

Default sidebar
---------------

Wide panel

Narrow "sidebar" panel

Using nested containers for spacing content
-------------------------------------------

Wide panel

Narrow "sidebar" panel

Using intrinsic content width for the sidebar
---------------------------------------------

We can choose to not specify a width on the narrow "sidebar" panel (by not declaring a `flex-basis` value) and let the content of the sidebar determine how wide it is. The preceding example shows how to override the default styles by using an additional class and omitting the `sidebar` class.