---
title: Frame
components:
    frame16-9:
        type: layout-helpers
        name: frame
        data:
            example: true
            title: "16:9 aspect ratio"
            aspectRatio: "16:9"
            image:
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
                caption: "An example of the 16:9 frame modifier"
    frame3-2:
        type: layout-helpers
        name: frame
        data:
            example: true
            title: "3:2 aspect ratio"
            aspectRatio: "3:2"
            image:
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
                caption: "An example of the 3:2 frame modifier"
    frame4-3:
        type: layout-helpers
        name: frame
        data:
            example: true
            title: "4:3 aspect ratio"
            aspectRatio: "4:3"
            image:
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
                caption: "An example of the 4:3 frame modifier"
    frameSquare:
        type: layout-helpers
        name: frame
        data:
            example: true
            title: square aspect ratio
            aspectRatio: square
            image:
                url: https://amplify.studio24.net/dist/images/jpg-cat-1.jpg
                altText: A cat with green eyes looking directly at the camera
                caption: An example of the square frame modifier
---
The frame layout helper is useful for cropping media (images and video) to a specific aspect ratio. It uses the class `l-frame` and additional modifier classes for pre-defined aspect ratios. These modifier classes determine the amount of vertical padding on the frame, which then acts as a window onto the content inside.

{{ pageComponents(components) }}

Considerations
--------------

### Figure/figcaption use

If using `figure` with `figcaption`, make sure to apply the `l-frame` class to an inner `div` or `picture` rather than directly to the `figure` to avoid obscuring the `figcaption`.

### Internet Explorer/non-Chromium Edge

The default frame layout uses `object-fit: cover` for images and videos. This is not supported in Internet Explorer or Edge prior to version 16 and in Edge 16-18 it is only supported on images. However, the Chromium Edge browser, which does support object-fit, is now available to systems as far back as Windows 7.

If you need broader support you may prefer to forgo `object-fit` and adapt your instance of the frame to rely on absolute positioning of the contents and hiding any overflow.