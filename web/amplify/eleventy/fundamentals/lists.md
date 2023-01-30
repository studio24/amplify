---
title: Lists
---
Use lists to make blocks of text easier to read, and to break information into manageable chunks.

Unordered lists
---------------

-   Level 1 list item 1
-   Level 1 list item 2
-   Level 1 list item 3
    -   Level 2 list item 1
    -   Level 2 list item 2
    -   Level 2 list item 3
-   Level 1 list item 4
-   Level 1 list item 5
-   Level 1 list item 6

Ordered lists
-------------

1.  Level 1 list item 1
2.  Level 1 list item 2
3.  Level 1 list item 3
    1.  Level 2 list item 1
    2.  Level 2 list item 2
    3.  Level 2 list item 3
4.  Level 1 list item 4
5.  Level 1 list item 5
6.  Level 1 list item 6

Clean list
----------

-   Level 1 list item 1
-   Level 1 list item 2
-   Level 1 list item 3
-   Level 1 list item 4
-   Level 1 list item 5
-   Level 1 list item 6

### Considerations

As noted by Scott O'Hara, the CSS used for the `clean-list` class to remove the markers also [removes the list semantics in Webkit browsers](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html). If the list semantics are important for your users, add `role="list"` to restore them.

Description lists - default styling
-----------------------------------

Term

Description

Term

Description

Term

Description

Term

Description

For a more tabulated style, add the `grid` class to the `dl` element:

Description lists - grid styling
--------------------------------

Term

Description

Term

Description

Term

Description

Term

Description