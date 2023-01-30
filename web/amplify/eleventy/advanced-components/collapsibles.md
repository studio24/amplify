---
title: Collapsible containers
---
This is a series of containers, each holding a heading and some content. JavaScript enhances the markup, collapsing all containers and inserting buttons inside the headings to toggle them open/closed. The JavaScript looks for the presence of the data attribute `data-component="collapsibles"` on the outer container and `data-heading="collapsibles"` on the headings.

The component takes inspiration from the [GOV.UK Design System accordion component](https://design-system.service.gov.uk/components/accordion/).

Considerations
--------------

[Buttons shouldn't use the pointer cursor](https://adamsilver.io/articles/buttons-shouldnt-have-a-hand-cursor/), so we need to ensure the buttons have sufficient affordance by other visual means. The icon and show/hide help text help to achieve this, but we can also make use of background-color, border and/or box-shadow styles.

Aligning the button content to the leading edge reduces the risk of it being missed by people using screen magnification software.