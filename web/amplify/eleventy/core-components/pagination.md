---
title: Pagination
---

<nav aria-label="Pagination" class="l-cluster pagination">
    <ul class="pagination__list clean-list">
        <li><a href="javascript:;"><span aria-hidden="true">&lt;&lt;</span><span class="visuallyhidden">First page</span></a></li>
        <li><a href="javascript:;">Previous <span class="visuallyhidden">page</span></a></li>
        <li><a href="javascript:;"><span class="visuallyhidden">page</span> 1</a></li>
        <li><a href="#" aria-label="page 2" aria-current="page">2</a></li>
        <li><a href="javascript:;"><span class="visuallyhidden">page</span> 3</a></li>
        <li><a href="javascript:;"><span class="visuallyhidden">page</span> 4</a></li>
        <li><a href="javascript:;"><span class="visuallyhidden">page</span> 5</a></li>
        <li><a class="ellipsis">&#8230;</a></li>
        <li><a href="javascript:;"><span class="visuallyhidden">page</span> 20</a></li>
        <li><a href="javascript:;">Next <span class="visuallyhidden">page</span></a></li>
        <li><a href="javascript:;"><span aria-hidden="true">&gt;&gt;</span><span class="visuallyhidden">Last page</span></a></li>
    </ul>
</nav>

Considerations
--------------

Note the use of the [cluster layout helper](https://amplify.studio24.net/amplify/layout-helpers/cluster.html).

Note how the pagination links meet the requirements of [WCAG Success Criterion 2.5.5: Target Size (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

The `aria-label` attribute has been added to the `nav` element. This is because the main website navigation also uses the `nav` element. Where there are multiple`nav` elements on a single page, all must be given a unique accessible name via `aria-label`.

For all pagination links excluding the current page, `span class="visuallyhidden">page</span` is added to provide additional context to the link wording for users of Assistive Technology.

The current page is indicated by `aria-current="page"`. As per the [breadcrumbs component](https://amplify.studio24.net/amplify/core-components/breadcrumbs.html), it is fully linked so that users of Assistive Technology can find which is the currently active link. The `aria-label`on the current page link provides the same additional context as the visually-hidden span on other pagination links.

The angle bracket characters used within the links for the very first and very last pages are wrapped inside `span aria-hidden="true"` to hide them from assistive technology users. Accessible text labels are added using `span class="visuallyhidden"`.