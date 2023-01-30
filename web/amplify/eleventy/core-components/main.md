---
title: Main
---
A few notes on `main`, which contains the main contents of a web page.

-   There should only be a single instance of `main` that does not have the `hidden` attribute applied to it.
-   In Amplify, `main` uses the same principles as the [center layout helper](https://amplify.studio24.net/amplify/layout-helpers/center.html) to add some minimum space between its contents and the edges of the parent element or viewport. Inspect this page in your web browser to see it in action.
-   Although it has a set maximum width, the utility class `u-full-width` can be applied to a child item of `main` to make it extend full width beyond the borders of `main`.