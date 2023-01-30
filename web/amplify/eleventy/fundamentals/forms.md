---
title: Forms
---
The examples on this page show how we manage forms and their fields, and their default styles. Recommendations are based on Adam Silver's article [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/) and the [GOV.UK design system](https://design-system.service.gov.uk/components/).

An [example search form](https://amplify.studio24.net/amplify/core-components/search.html) is available in [core components](https://amplify.studio24.net/amplify/core-components).

[Form error messages](https://amplify.studio24.net/amplify/fundamentals/form-errors.html) are covered separately.

Top tips
--------

-   Every `input` needs a `label`. Do not wrap inputs in labels, put labels above the input.
-   Do not use the `placeholder` attribute on `input` fields.
-   Use [fixed width inputs](https://amplify.studio24.net/amplify/fundamentals/forms.html#fixed-width-inputs) for content that has a specific, known length. Postcode inputs should be postcode-sized, telephone number inputs should be telephone number-sized.
-   Make form fields look like form fields: apply a border and make sure they are empty to begin with. A minimum height of 44 pixels makes them easy to tap on touch screen devices.
-   Make sure any `button` looks like a button. Align them to the left edge of the last input (the right edge for right-to-left languages) where users naturally look for them. Use a verb for button text because the user is doing something, and relate it to what they are doing - avoid generic 'Submit' buttons.
-   [The `select` element should be a last resort](https://www.youtube.com/watch?v=CUkMCQR4TpY) as they're really hard to use. Try radio buttons instead. If there's a long list of options, use JavaScript to enhance the `select` into an [accessible auto-complete field](https://amplify.studio24.net/amplify/advanced-components/accessible-autocomplete.html) (not to be confused with the `autocomplete` attribute).
-   If you have to use a `select`, don't submit a form when its value changes. Select boxes that submit the form automatically when the user selects an option cause problems for keyboard and screen reader users.

### Required fields

It is best practice to only ask questions that are strictly necessary.

In the event that a form contains both optional and required fields, to clearly identify the required fields to all users add `span class="required">(Required)</span` within the `label`.

### How to add hint text

To provide hint text advising how to complete a field, add a `div class="field-hint"`. Check the examples that follow to see where this should be added. The pattern differs slightly for checkbox and radio inputs compared to other input types.

Each instance of `div class="field-hint"` must have a unique ID that is used as the value of the `aria-describedby` attribute that must be added to the associated `input`.

Use the pattern `id="hint-...`, replacing the `...` with your unique wording.

Provide hint text when users are more likely to make a mistake, such as when having to satisfy a complex set of password rules. Error messages should be a last resort. Keep hint text brief and to the point. Do not use long paragraphs and lists.

Dealing with text
-----------------

Name (Required)

E.g. Robin Smith

Email

E.g. robin.smith@example.co.uk

Website address

Password

Must contain 8+ characters with at least 1 number

Your message

### How to make filling in text fields easier

Use the relevant input `type` when asking for email addresses, URLs and passwords.

Adding the `autocomplete` attribute to common fields such as name, address, email etc. can help to speed up the form filling process for users. Here is a [list of valid autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).

Use `autocapitalize="none"`, `autocorrect="off"` and `spellcheck="false"` to stop browsers automatically changing user input on fields that expect grammatically incorrect data, such as email addresses and passwords.

Dealing with numbers
--------------------

Account number

Must be between 6 and 8 numbers long

Phone number

Please include your country code

Number of guest tickets required

### How to make filling in number fields easier

In many cases, it's better to use `input type="text" pattern="[0-9]*" inputmode="numeric"` rather than `input type="number"` when dealing with numbers. Adam Silver has written about [when to use the number input](https://adamsilver.io/articles/form-design-when-to-use-the-number-input/).

For telephone numbers, use the `type="tel"` and `inputmode="tel"` attributes on the `input`.

When asking for payment details, including the `autocomplete` attribute can help users complete their responses more quickly. Older browsers make use of the `name` attribute to achieve the same thing. Here is a list of [payment autofill attributes](https://www.smashingmagazine.com/2017/03/improve-billing-form-ux/).

Dealing with dates and times
----------------------------

Date of arrival

For example 30/05/2021

Date of birth (an example of a memorable date)

For example 20 07 1972

Day

Month

Year

Specify a start time for your meeting

Use UTC and your local time zone

Start time

Time zone

### How to make providing dates and times easier

For dates that the user will already know (e.g. birth dates) and dates that are easy to look up, use a series of simple text inputs. Note the use of `fieldset` and `legend` to group the separate text inputs together.

For other dates, due to inconsistencies with how different browsers and Assistive Technologies interpret `input type="date"`, the current recommendation is to use a simple text input. Provide [hint text](https://amplify.studio24.net/amplify/fundamentals/forms.html#how-to-add-hint-text) to let users know what format to use.

Again, due to inconsistencies with how different browsers and Assistive Technologies interpret `input type="time"`, it is strongly recommended to use a simple text input. The preceding example includes a `select` to help users specify a local timezone.

File input
----------

Choose a file

Checkboxes
----------

Things you like

Select all that apply.

 Chocolate

 Coffee

 Cake

 Chips

Fries or frites, not crisps.

### How to make checkboxes easier to use

Always position checkboxes to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

If required, hint text can be added for the entire checkbox group and/or for individual checkbox items. The preceding example shows how to do this.

Radios
------

Have you changed your name?

This includes changing your family name or spelling your name differently.

 Yes

 No

Hint text for this radio item would go here.

### How to make radios easier to use

Always position radios to the left of their labels (to the right for right-to-left languages). This makes them easier to find, especially for users of screen magnifiers.

Radio buttons cannot be unchecked once they are selected. So if the question is not mandatory, you'll need to include a 'None' or 'Prefer not to say' option.

If required, hint text can be added for the entire radio group and/or for individual radio items. The preceding example shows how to do this.

Segmented options
-----------------

Segmented options (Radio)

We understand that different people enjoy books in different ways, which is why we're giving you lots of options.

 Budget option Copy to explain this option in more detail.

 Value option Copy to explain this option in more detail.

 Expensive option Copy to explain this option in more detail.

The purpose of segmented options is to show all available options outright, rather than hiding them behind a `select`. It can be used with either checkboxes, or with radio buttons as in the preceding example.

The basis of this pattern is the [switcher layout](https://amplify.studio24.net/amplify/layout-helpers/switcher.html). The default styles assume that there are three choices and are optimised for this. In the event of fewer or more choices, you can override the default `min-width` percentage by applying an additional class.

Select
------

Sort by

### Considerations

The `select` element should be a last resort as they're really hard to use. Before using it, try asking users questions which will allow you to present them with fewer options. This should lessen the need for the `select` element, which could be replaced with e.g. radios.

If using the `select` element to determine a change in browsing context (e.g. change to a map display or redirect to a different URL) it **must** be accompanied by a submit button, so that users can confirm their choice and make a correction if needed.

### Accessible auto-complete

A `select` can be enhanced into an [accessible auto-complete](https://amplify.studio24.net/amplify/advanced-components/accessible-autocomplete.html) via JavaScript. Amplify uses the [Accessible autocomplete](https://github.com/alphagov/accessible-autocomplete) NPM package, and there are a number of [example customisations](https://alphagov.github.io/accessible-autocomplete/examples/) which can be followed.

Grouping inputs to line up side-by-side
---------------------------------------

The class `input-group` can be used to align form inputs horizontally with each other, by applying Flexbox behaviour. You can see an example of this in the preceding example for [dealing with times](https://amplify.studio24.net/amplify/fundamentals/forms.html#dealing-with-dates-and-times).

### Considerations

This class should not be used in conjunction with radios or checkboxes. The pattern has not been fully tested with these input types and may not work well on smaller viewports. Furthermore, radios and checkboxes are easier to read and quicker to scan when presented vertically.

Fixed-width inputs
------------------

There is a collection of CSS classes prefixed with `input-width-` which, when added to an `input`, will reduce the maximum width of the input field to better suit the intended contents:

30 character width

20 character width

10 character width

5 character width

4 character width

3 character width

2 character width

Form validation
---------------

The best practice is to validate a form on submission. It is recommended to [avoid default HTML5 form validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html). To turn this off, add the `novalidate` attribute to the `form` element.

It is strongly recommended to visit the GOV.UK Design system for [more details about form validation](https://design-system.service.gov.uk/patterns/validation/#client-side-and-server-side-validation).

### Client side validation

If client side validation is required, here are some suggested JavaScript libraries:

-   [Parsley](https://parsleyjs.org/)
-   [PristineJS](https://pristine.js.org/)

Alternatively, you could roll your own thanks to [Chris Ferdinandi's series on form validation](https://css-tricks.com/form-validation-part-1-constraint-validation-html/).