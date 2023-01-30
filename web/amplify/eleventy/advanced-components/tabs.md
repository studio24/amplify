---
title: Tabbed sections
---
We use the [Tabby](https://github.com/cferdinandi/tabby) NPM package to generate tabbed content sections (not because it sounds like a type of cat). It progressively enhances a linked list of content into tabbed navigation.

-   [Grumpy Cat](https://amplify.studio24.net/amplify/advanced-components/tabs.html#grumpy-cat)
-   [Lil Bub](https://amplify.studio24.net/amplify/advanced-components/tabs.html#lil-bub)
-   [Maru](https://amplify.studio24.net/amplify/advanced-components/tabs.html#maru)

Grumpy Cat
----------

[Grumpy Cat](https://en.wikipedia.org/wiki/Grumpy_Cat) was a notable Internet cat, known and nicknamed for her permanently grumpy facial features.

Considerations
--------------

The default implementation uses `overflow-x: auto;` on the list of tabs, so that if the width of the tablist is greater than the container/viewport width they will scroll horizontally. This is the same principle that Brad Taunt suggests in his post about [replacing hamburger menus with sausage links](https://tdarb.org/hamburger-menu-alternative/).

In the absence of a visible scrollbar, you will need to make sure that there are sufficient visual cues to users that content has been cut off and can be scrolled. You could [use linear gradients to help add visual affordance of scrolling](https://bbc.github.io/gel/components/data-tables/#indicating-scroll-functionality-visually), or else you might choose to add further scripting to detect when the element is scrolled all the way to either side, and add start or end classes for styling.