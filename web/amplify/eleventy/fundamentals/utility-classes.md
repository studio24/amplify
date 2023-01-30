---
title: Utility Classes
---
A utility class applies a single rule or a very simple, universal pattern.

In Amplify, utility classes are used as overrides or helper classes. As such, they could apply to any element and in any context, to do exactly the same thing each time. They are always prefixed with u-, e.g. u-float-left or u-full-width.

Utility classes are organised into groups with a similar purpose or remit, as detailed below. If you have a requirement that you feel would be best covered by a utility class that does not yet exist, feel free to add to the current selection.
Alignments

For floating items and overriding default text alignment:

    u-float-left
    u-float-right
    u-text-center
    u-text-left
    u-text-right
    u-text-left-from-lap
    u-text-center-from-lap
    u-text-right-from-lap

The final three classes in the preceding list are linked to a specific breakpoint width, as defined in 00-settings.
Clearfix

Forces an element to self-clear its children. Amplify uses this as a Sass placeholder selector - also known as a ‘silent class’ - which can be extended using the @extend directive to avoid cluttering up the CSS or requiring the use of the class within the markup.
Layout

Use the class u-full-width to create a full-width container inside a limited width parent.

Use the class u-center to horizontally centre a block-level item.
Margins

For removing all margins or just the top margin from an element. Double specificity in the classnames avoids the use of !important.

    u-no-margin.u-no-margin
    u-no-margin-top.u-no-margin-top
