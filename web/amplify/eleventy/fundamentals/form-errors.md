---
title: Form error messages
---
To notify a user of an error with their form submission:

1.  Prefix the word "Error:" to the document's `title`. It's the first thing announced by screen readers when the page loads.
2.  Place an error summary at the top of the page
3.  Add an error message to each problematic input

There is a problem
------------------

-   [Enter a name](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#name)
-   [Enter a message](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#message)
-   [Enter an account number](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#account-number)
-   [Enter an arrival date](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#arrival-date)
-   [Enter a start time](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#meeting-time)
-   [Enter a date of birth](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#bday-day)
-   [The file must be 2MB or smaller](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#file)
-   [Select yes if you do own pets](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#pets_yes)
-   [Choose a segmented option](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#segmented-option-1)
-   [Choose at least one item you like](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#chocolate)
-   [Choose your preferred day](https://amplify.studio24.net/amplify/fundamentals/form-errors.html#day)

Page title
==========

Example form showcasing error messages
--------------------------------------

### Dealing with text

Name (Required) Error: Enter a name

E.g. Robin Smith

Your message (Required) Error: Enter a message

### Dealing with numbers

Account number (Required) Error: Enter an account number

Must be between 6 and 8 numbers long

### Dealing with dates and times

Date of arrival (Required) Error: Enter an arrival date

For example 30/05/2021

Date of birth (Required) (an example of a memorable date) Error: Enter a date of birth

For example 20 07 1972

Day

Month

Year

Specify a start time for your meeting Error: Enter a start time

Use UTC and your local time zone

Start time

Time zone

### Other input types

Upload an image Error: The file must be 2MB or smaller

Maximum file size 2MB

Do you own any pets? (Required) Error: Select yes if you do own pets

 Yes

 No

 Prefer not to say

Segmented options (Radio) Error: Choose an option

We understand that different people enjoy books in different ways, which is why we're giving you lots of options.

 Budget option Copy to explain this option in more detail.

 Value option Copy to explain this option in more detail.

 Expensive option Copy to explain this option in more detail.

Things you like Error: Choose at least one item

 Chocolate

 Coffee

 Cake

 Chips

Preferred day of appointment Error: Choose your preferred day

Error summary considerations
----------------------------

The error summary should be at the top of the `main` element. If the page includes breadcrumbs or a back link, place it after these, but before the `h1`. The error summary must contain the heading 'There is a problem'.

Keyboard focus needs to move to the error summary, hence the addition of `tabindex="-1"`. JavaScript is included to shift focus if an error summary is present.

Each item in the summary list must link to the field with the validation error. Use the same wording for the error in both the error summary and the problematic field.

Error message considerations
----------------------------

In the event of a validation error, the error message should explain what went wrong and how to fix it. Keep the wording clear and concise.

To help screen reader users, the error message includes a visually hidden 'Error:' before the error message.