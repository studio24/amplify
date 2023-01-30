---
title: Images
---
Image optimisation
------------------

SVGs are optimised as part of Amplify's asset building process, but **`jpeg/jpg`, `png` and `gif` files are not optimised**. This is because:

-   Node/JS tools are not the most efficient way of optimising images
-   the most popular NPM package for optimising images is not actively supported and introduces security vulnerabilities
-   most image assets added to Amplify are unlikely to change very often, e.g. logos, making it inefficient to process them each time we want to build front-end assets.

**You must double-check that image assets are optimised** and, if not, use a tool such as the [ImageOptim](https://imageoptim.com/mac) Mac app or a web service such as [Tiny PNG](https://tinypng.com/) to do so. If you are not sure, use [Lighthouse](https://developers.google.com/web/tools/lighthouse/) to check the web pages - this should highlight any image assets that require attention.

Using `img` and `svg`
---------------------

This section is about how to accessibly markup the `img` and `svg` elements depending on the context in which they are used. The [image component](https://amplify.studio24.net/amplify/core-components/image-component.html) is covered separately.

Scott O'Hara's article, [Contextually marking up accessible images and SVGs](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html), is highly recommended reading. The following summarises that advice.

### Using the `img` element

#### Alternative text

Every instance of `img` must include the `alt` attribute in order to meet [WCAG Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html).

If the image is decorative it can be left blank. Otherwise, `alt` requires a text value explaining the nature of the image for users of Assistive Technology. This [alt decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) is helpful for determining whether and how to provide alternative text.

##### Images with SVG source file

For the range of browsers currently supported by Amplify, it is recommended to include `role="img"` on `img` where the source file is SVG. Without it, some versions of Safari and iOS will skip over the image entirely and not announce the image or the alternative text.

#### Using the `img` element within links

-   Where an image is included within a link that also contains a visible text label, treat the image as decorative and provide an empty `alt` attribute.
-   Where a link contains an image without any visible text, use the value of the image's `alt` attribute to give the link an accessible name. There is no need to combine this with `aria-label` or visually-hidden text; that can lead to duplicate announcements by screen readers.

#### Using the `img` element within buttons

-   Where an image is included within a button that also contains a visible text label, treat the image as decorative and provide an empty `alt` attribute.
-   Where a button contains an image without any visible text, use a child `span` with the `visuallyhidden` class to give it an accessible name. Read more about [how to hide and show items](https://amplify.studio24.net/amplify/fundamentals/hide-and-show.html).

### Using the `svg` element

Always include width and height attributes as part of the SVG markup. This prevents the SVG from expanding to fill the whole page if the CSS doesn't load.

#### Prevent unwanted SVG focus

Always add `focusable="false"` to the `svg` element to [stop IE11 from allowing the Tab key to navigate into the SVG](http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4).

#### Informative SVGs

Add the `role="img"` attribute and use `aria-label` to provide an accessible name. This is useful for e.g. SVG logos.

To prevent redundant screen reader announcements:

-   add `aria-hidden="true"` to any `use` elements within the SVG
-   where an SVG is fully inlined within the markup, add `aria-hidden="true"` to any `path` or other direct child of `svg` if they contain no information that should be made accessible

#### Decorative SVGs

Any `svg` that does not add important information to a document should be considered decorative and have `aria-hidden="true"` added to it.

#### Using the `svg` element within links and buttons

-   If the link or button has a visible text label, making sure that the `svg` includes the `aria-hidden="true"` and `focusable="false"` attributes is enough.
-   Where the link or button does not include a visible text label, use a child `span` with the `visuallyhidden` class to give it an accessible name. Read more about [how to hide and show items](https://amplify.studio24.net/amplify/fundamentals/hide-and-show.html).