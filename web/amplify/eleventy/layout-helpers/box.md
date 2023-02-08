---
title: Box
components:
    default:
        type: layout-helpers
        name: box
        data:
            title: Default box
            text: Default box, with padding and border
    noPadding:
        type: layout-helpers
        name: box
        data:
            title: Box without padding
            noPadding: true
            text: Box with no padding
    noBorder:
        type: layout-helpers
        name: box
        data:
            title: Box without border
            noBorder: true
            text: Box with no border
    noBorderNoPadding:
        type: layout-helpers
        name: box
        data:
            title: Box without padding or border
            noBorder: true
            noPadding: true
            text: Box with no padding and no border
---
The box layout helper is a simple container for grouping content within a defined region. It uses the class `l-box`.

Box deliberately treats padding and borders *equally on all sides*.

If your container needs asymmetrical styling, then it's a container with a more specific purpose and *not* a box.

{{ pageComponents(components) }}

Considerations
--------------

Because high contrast themes can eliminate `background-color`, the `l-box--no-border` modifier class adds a transparent outline so that the shape of the box remains apparent. Negative `outline-offset` moves the outline inside the box perimeter so that it doesn't impact its overall size.