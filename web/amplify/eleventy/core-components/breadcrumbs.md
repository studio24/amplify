---
title: Breadcrumbs
components:
    breadcrumbs:
        type: core-components
        name: breadcrumbs
        data:
            items:
                page1:
                    link: javascript:;
                    text: Home
                page2:
                    link: javascript:;
                    text: Second Page
                page3:
                    link: javascript:;
                    text: This Page
---

{{ pageComponents(components) }}

Considerations
--------------

Note the use of the [center layout helper](https://amplify.studio24.net/amplify/layout-helpers/center.html) and [cluster layout helper](https://amplify.studio24.net/amplify/layout-helpers/cluster.html).

Note how the breadcrumb links meet the requirements of [WCAG Success Criterion 2.5.5: Target Size (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

The `aria-label` attribute has been added to the `nav` element. This is because the main website navigation also uses the `nav` element. Where there are multiple`nav` elements on a single page, all must be given a unique accessible name via `aria-label`.

The current page is indicated by `aria-current="page"`. Following Scott O'Hara's [accessible breadcrumb pattern](https://scottaohara.github.io/a11y_breadcrumbs/) it is fully linked so that users of Assistive Technology can find which is the currently active link.