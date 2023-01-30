---
title: Cluster
---
The cluster layout helper suits any group of elements that differ in length, are liable to wrap and need even spacing between them, e.g. lists of tags or groups of buttons. It uses the class `l-cluster`.

Cluster needs an inner flexbox container - in the following example it's provided by the `ul`. Flexbox gives us control of the alignment of items inside.

The cluster items - `li` in this example - sit within this container. Each item has a margin on all sides.

The flexbox container has a negative margin of the same size as the cluster items, creating even spacing between them. `overflow: hidden;` is used to tidy up the edges.

-   Item One
-   Item Two
-   Item Three
-   Item Four
-   Item Five
-   Item Six
-   Item Seven
-   Item Eight
-   Item Nine
-   Item Ten