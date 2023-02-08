---
title: Collapsible containers
components:
    collapsibles:
        type: advanced-components
        name: collapsibles
        data:
            panels:
                panel1:
                    title: Panel 1 heading
                    body: <p>This is a paragraph of text.</p><p>Here is another paragraph of text that intentionally contains a lot more words inside it in order to fill the width of the page successfully to check layout and so forth.</p><a href="https://en.wikipedia.org/wiki/Paragraph">Paragraph on Wikipedia</a>
                panel2:
                    title: Panel 2 heading
                    body: <p>This is a paragraph of text.</p><p>Here is another paragraph of text that intentionally contains a lot more words inside it in order to fill the width of the page successfully to check layout and so forth.</p>
                panel3:
                    title: Panel 3 heading
                    body: <p>This is a paragraph of text.</p><p>Here is another paragraph of text that intentionally contains a lot more words inside it in order to fill the width of the page successfully to check layout and so forth.</p>
                panel4:
                    title: Panel 4 heading
                    body: <p>This is a paragraph of text.</p><p>Here is another paragraph of text that intentionally contains a lot more words inside it in order to fill the width of the page successfully to check layout and so forth.</p>
---
This is a series of containers, each holding a heading and some content. JavaScript enhances the markup, collapsing all containers and inserting buttons inside the headings to toggle them open/closed. The JavaScript looks for the presence of the data attribute `data-component="collapsibles"` on the outer container and `data-heading="collapsibles"` on the headings.

The component takes inspiration from the [GOV.UK Design System accordion component](https://design-system.service.gov.uk/components/accordion/).

{{ pageComponents(components) }}

Considerations
--------------

[Buttons shouldn't use the pointer cursor](https://adamsilver.io/articles/buttons-shouldnt-have-a-hand-cursor/), so we need to ensure the buttons have sufficient affordance by other visual means. The icon and show/hide help text help to achieve this, but we can also make use of background-color, border and/or box-shadow styles.

Aligning the button content to the leading edge reduces the risk of it being missed by people using screen magnification software.