---
title: Image Component
components:
    image:
        type: core-components
        name: image-component
        data:
            url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
            altText: A cat with green eyes looking directly at the camera
            aspectRatio: "16:9"
            caption: <p>The figcaption is not a replacement for the image's <code>alt</code> attribute. It should be used for providing relevant supporting content.</p>
---

{{ pageComponents(components) }}

Considerations
--------------

Note the use of the [frame layout](https://amplify.studio24.net/amplify/layout-helpers/frame.html), to create the desired aspect ratio, and the `loading="lazy"` attribute on `img` for native lazy-loading.

### Alternative text

Every instance of `img` [must include the `alt` attribute](https://amplify.studio24.net/amplify/fundamentals/images.html). This [alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) is helpful for determining whether and how to provide alternative text.