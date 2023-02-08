---
title: Cover
components:
    coverPrincipal:
        type: layout-helpers
        name: cover
        data:
            example: true
            title: Cover with horizontal centering using a utility class
            body: Here is the principal content
            extraClasses: principal text-39 u-center
    coverNested:
        type: layout-helpers
        name: cover
        data:
            example: true
            title: Cover with a nested center layout for horizontal centering
            body: Here is the principal content
            nested: true
            nestClasses: l-center principal
            extraClasses: text-39
    coverHeaderFooter:
        type: layout-helpers
        name: cover
        data:
            example: true
            title: Cover with optional header and footer content
            body: The principal content
            headerFooter: true
            headerContent: Header content, e.g. a close button
            extraClasses: principal text-39 u-center
            footerContent: Footer content


                
---
The cover layout helper creates a container with a minimum height to hold vertically centered content, ideal for "above the fold" hero blocks and sections needing visual prominence. It uses the classes `l-cover` for the container and `principal` for the content to be centered.

{{ pageComponents(components) }}

### Considerations

By adding a class to "Header" and/or "Footer" we could then use `align-self: flex-end;` to shift them to the far edge of cover.