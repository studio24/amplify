---
title: Box
---
The box layout helper is a simple container for grouping content within a defined region. It uses the class `l-box`.

Box deliberately treats padding and borders *equally on all sides*.

If your container needs asymmetrical styling, then it's a container with a more specific purpose and *not* a box.

Default box
-----------

Default box, with padding and border

Box without padding
-------------------

Box with no padding

Box without border
------------------

Box with no border

Box without padding or border
-----------------------------

Box with no padding and no border

Considerations
--------------

Because high contrast themes can eliminate `background-color`, the `l-box--no-border` modifier class adds a transparent outline so that the shape of the box remains apparent. Negative `outline-offset` moves the outline inside the box perimeter so that it doesn't impact its overall size.