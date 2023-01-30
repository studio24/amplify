---
title: Pagination
---
Considerations
--------------

Note the use of the [cluster layout helper](https://amplify.studio24.net/amplify/layout-helpers/cluster.html).

Note how the pagination links meet the requirements of [WCAG Success Criterion 2.5.5: Target Size (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

The `aria-label` attribute has been added to the `nav` element. This is because the main website navigation also uses the `nav` element. Where there are multiple`nav` elements on a single page, all must be given a unique accessible name via `aria-label`.

For all pagination links excluding the current page, `span class="visuallyhidden">page</span` is added to provide additional context to the link wording for users of Assistive Technology.

The current page is indicated by `aria-current="page"`. As per the [breadcrumbs component](https://amplify.studio24.net/amplify/core-components/breadcrumbs.html), it is fully linked so that users of Assistive Technology can find which is the currently active link. The `aria-label`on the current page link provides the same additional context as the visually-hidden span on other pagination links.

The angle bracket characters used within the links for the very first and very last pages are wrapped inside `span aria-hidden="true"` to hide them from assistive technology users. Accessible text labels are added using `span class="visuallyhidden"`.