---
title: Buttons and links
components:
    buttons:
        button-normal:
            type: 'fundamentals'
            name: button
            data:
                text: Default button style
                isExample: true
        button-alt:
            type: 'fundamentals'
            name: button
            data:
                type: alt
                text: Alternate button style
                isExample: true
        button-wide:
            type: 'fundamentals'
            name: button
            data:
                type: wide
                text: Wide button style
                isExample: true
        button-wide-alt:
            type: 'fundamentals'
            name: button
            data:
                type: wide-alt
                text: Wide button style
                isExample: true
        button-ghost:
            type: 'fundamentals'
            name: button
            data:
                type: ghost
                text: Ghost button style
                isExample: true
        button-disabled:
            type: 'fundamentals'
            name: button
            data:
                text: This button is disabled
                disabled: true
                isExample: true
    links:
        link-normal:
            type: 'fundamentals'
            name: link
            data:
                type: normal
                url: /
                text: Simple text link
                isExample: true
        link-button:
            type: 'fundamentals'
            name: link
            data:
                type: button
                url: /
                text: Link styled as a button
                isExample: true
        link-button-alt:
            type: 'fundamentals'
            name: link
            data:
                type: button-alt
                url: /
                text: Link with alternate button style
                isExample: true
---
Use a button to help a user carry out an action, such as playing audio/video, toggling a dropdown, opening a modal, etc. If you are navigating a user to a new resource, use a link.

Buttons, and links styled as buttons, need to have sufficient padding to ensure they meet [WCAG Success Criterion 2.5.5: Target Size (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html). This does not apply to links within sentences and paragraphs.

Buttons
-------
{{ pageComponents(components.buttons) }}

### Considerations

Disabled buttons can confuse some people, so only use them if testing shows that they make the user interface easier to understand.

Links
-----

Simple text link

Link styled as a button

Link with alternate button style

### Considerations

Simple text links are given an underline, in addition to any colour treatment, to meet [WCAG Success Criterion 1.4.1: Use of Color (A)](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

Grouping buttons and links
--------------------------

Buttons (and links styled as buttons) can be arranged in groups using the [cluster layout](https://amplify.studio24.net/amplify/layout-helpers/cluster.html):

Primary action Secondary action