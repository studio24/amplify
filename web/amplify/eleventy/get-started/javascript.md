---
title: JavaScript
---
Architecture
------------

The architecture takes inspiration from Chris Ferdinandi's [How I structure my vanilla JS projects](https://gomakethings.com/how-i-structure-my-vanilla-js-projects/). Rather than keeping all JavaScript within a single file, code is split across a series of individual files and subdirectories within `src/js` directory. This approach offers two main benefits:

-   It makes the code easier to understand for developers
-   We don't have to load all JavaScript on all pages

[JS architecture details for developers](https://github.com/studio24/amplify/blob/main/docs/javascript.md#javascript-architecture).

Compiling and transpiling
-------------------------

[Webpack](https://webpack.js.org/) concatenates and minifies the JS needed for the project into `web/dist/js`. [Babel](https://babeljs.io/) is used for transpiling the JS into code for our [supported browsers](https://amplify.studio24.net/amplify/get-started/browser-support.html).

[JS build tool details for developers](https://github.com/studio24/amplify/blob/main/docs/javascript.md#javascript-build-tools).