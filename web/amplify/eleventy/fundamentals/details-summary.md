---
title: Details and summary
components:
    detailSummary:
        type: fundamentals
        name: details
        data:
            summary: This is the summary content
            details: |
                    <p>This is the detailed content which is revealed if a user requests to see it</p>
---
The `details` element generates a simple no-JavaScript widget to show/hide content, optionally by selecting its child `summary` element. In non-supporting browsers such as IE11 all content is expanded by default.

{{ pageComponents(components) }}

Considerations
--------------

There is currently no way for `details` to be made to display all of its content by default when printed.