---
title: Browser Support
---
Amplify supports the range of [browsers recommended by the GOVUK Service Manual](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

Inspired by the [Springer Nature Frontend Playbook](https://github.com/springernature/frontend-playbook/blob/main/practices/graded-browser-support.md), all browsers are served semantic HTML and minimal CSS as defined in `core.css` and `print.css`, but only supported browsers are served the `advanced.css` and any JavaScript files that are needed.

It is inefficient for developers and website performance (and therefore users) to attempt to make advanced CSS and JavaScript work in older browsers. **Essential user journeys must remain accessible to all users**, irrespective of their browser, but users of supported browsers will have a more interactive and visually pleasing experience.

Implementing browser support
----------------------------

Amplify uses the '[cutting the mustard](http://www.zeldman.com/2015/09/01/youre-welcome-cutting-the-mustard-then-and-now/)' progressive enhancement technique. This involves using feature detection in order to determine which browsers will receive the fully-enhanced experience and which ones will receive only the core experience.

By [cutting the mustard with CSS media queries](https://www.sitepoint.com/cutting-the-mustard-with-css-media-queries/), users of supported browsers will have the best possible experience even if JavaScript is not available.

[Implementation details for developers](https://github.com/studio24/amplify/blob/main/docs/browser-support.md).

### Changing the supported browsers

If your browser support needs differ, you must make the following updates:

-   the browserslist in `package.json`
-   the CSS media query in `head` of your web page templates.

[How to update Amplify browser support](https://github.com/studio24/amplify/blob/main/docs/browser-support.md).