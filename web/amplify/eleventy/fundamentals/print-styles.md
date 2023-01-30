---
title: Print styles
---
We want our sites to be as accessible as possible, no matter the medium.

Flexbox and CSS Grid layouts are regularly used for component and page layout, but browsers don't always interpret these styles reliably when preparing a page for printing. It's often best to switch the display property to block or inline-block.

We may have hidden content behind disclosure widgets and inside collapsible containers for convenience online, which we need to make sure is visible when a page is printed.

There's often a lot on a web page that doesn't make sense to include when it's printed - think cookie banners, skip links, status messages, navigation, video, tags and categories, pagination, social sharing links etc. Font sizes for items like headings can probably be reduced for print. We can save a lot of paper and ink by considering the print version of our web pages.

Amplify includes a default collection of print styles, but developers must check and add any further styles required for a legible print presentation, especially when adding any new components.
Resources

    CSS: The Perfect Print Stylesheet
    Can you view print stylesheets applied directly in the browser?
    Links List for Print Styles
    A Guide To The State Of Print Stylesheets In 2018
    I totally forgot about print style sheets
    Designing For Print With CSS
