---
title: Hide and show items inclusively
---
Scott O'Hara's article, [Inclusively Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html), is highly recommended reading. The following summarises that advice.

Hiding items from everybody
---------------------------

To temporarily hide items from all users until needed:

-   Use the CSS display property `display: none;` to remove items completely from the DOM.
    -   Note that if CSS is unavailable the items will no longer be hidden.
-   Use the `hidden` HTML attribute, which will work even if CSS is unavailable.
    -   Note that this can be overridden by any CSS which alters the value of the display property.
-   Use the CSS display property `visibility: hidden;`, especially if you wish to transition the change from hidden to visible.
    -   Note that, while the item is hidden, it retains the space that it occupies within the DOM. It is best paired with other CSS properties that negate this, e.g. `position: absolute;`. This is ideal for e.g. off-canvas navigation.

Visually hiding items
---------------------

Use the `visuallyhidden` CSS class to hide an item visually but leave it accessible to Assistive Technology.

Hiding items from Assistive Technology
--------------------------------------

Use the `aria-hidden="true"` HTML attribute to hide items from Assistive Technology. This will not be overridden by any CSS. Note that it should not be used on focusable elements.