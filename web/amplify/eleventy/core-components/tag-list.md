---
title: Tag list
components:
    tagList:
        type: layout-helpers
        name: cluster
        data:
            extraClasses: tag-list
            itemClass: tag
            items:
                item1:
                    link: javascript:;
                    title: Arts and culture
                item2:
                    link: javascript:;
                    title: Education
                item3:
                    link: javascript:;
                    title: Charity and not-for-profit

---

{{ pageComponents(components) }}

Considerations
--------------

Note the use of the [cluster layout helper](https://amplify.studio24.net/amplify/layout-helpers/cluster.html).

Note how the linked tags meet the requirements of [WCAG Success Criterion 2.5.5: Target Size (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

Note the inclusion of visually-hidden text in the linked tags, to provide detail for assistive technology users when browsing out of context, thereby meeting [WCAG Success Criterion 2.4.9: Link Purpose (Link Only) (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html).