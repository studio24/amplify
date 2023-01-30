---
title: Frame
---
The frame layout helper is useful for cropping media (images and video) to a specific aspect ratio. It uses the class `l-frame` and additional modifier classes for pre-defined aspect ratios. These modifier classes determine the amount of vertical padding on the frame, which then acts as a window onto the content inside.

16:9 aspect ratio
-----------------

![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

An example of the 16:9 frame modifier

3:2 aspect ratio
----------------

![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

An example of the 3:2 frame modifier

4:3 aspect ratio
----------------

![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

An example of the 4:3 frame modifier

Square aspect ratio
-------------------

![](https://amplify.studio24.net/dist/images/jpg-cat-1.jpg)

An example of the square frame modifier

Considerations
--------------

### Figure/figcaption use

If using `figure` with `figcaption`, make sure to apply the `l-frame` class to an inner `div` or `picture` rather than directly to the `figure` to avoid obscuring the `figcaption`.

### Internet Explorer/non-Chromium Edge

The default frame layout uses `object-fit: cover` for images and videos. This is not supported in Internet Explorer or Edge prior to version 16 and in Edge 16-18 it is only supported on images. However, the Chromium Edge browser, which does support object-fit, is now available to systems as far back as Windows 7.

If you need broader support you may prefer to forgo `object-fit` and adapt your instance of the frame to rely on absolute positioning of the contents and hiding any overflow.