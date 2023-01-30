---
title: Disclosure widget
---
A simple control whose sole purpose is to hide or show content, this component is inspired by Adrian Roselli's post about [disclosure widgets](https://adrianroselli.com/2020/05/disclosure-widgets.html).

The basic principles demonstrated here can be expanded upon and applied to e.g. off-canvas navigation and [dropdown](https://adrianroselli.com/2019/06/link-disclosure-widget-navigation.html) [site navigation](https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/).

Considerations
--------------

Note that the text content of the button - which gives it an accessible name - does not change. Instead, the state of the button is announced via the `aria-expanded` attribute, which is added via JavaScript. The conventional wisdom is to not change the name of a control while the user is interacting with it - and changing both the name and the state could result in confusing announcements for assistive technology users. You can read more about this in Sarah Higley's post: [Playing with state](https://sarahmhigley.com/writing/playing-with-state/).

Note that we are not using `aria-hidden` on the hidden element. We don't need to, because the element to be hidden directly follows the button to toggle its display in the markup, meaning that we can use the [next-sibling combinator](https://www.w3.org/TR/selectors-3/#adjacent-sibling-combinators) in the CSS to determine whether the content is hidden based on the value of the `aria-expanded` property on the preceding element. Remember, the number one rule for using ARIA in HTML, is to [avoid using ARIA in HTML](https://bitsofco.de/rules-for-using-aria-in-html/).

This approach also helps to ensure a logical reading and focus order for users.