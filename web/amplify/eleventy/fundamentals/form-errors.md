---
title: Form error messages
components:
    errorNote:
        note:
            type: core-components
            name: notes
            data:
                title: There is a problem
                message: | 
                    <ul class="clean-list" role="list">
                        <li><a href="#name">Enter a name</a></li>
                        <li><a href="#message">Enter a message</a></li>
                        <li><a href="#account-number">Enter an account-number</a></li>
                        <li><a href="#arrival-date">Enter an arrival date</a></li>
                        <li><a href="#start-time">Enter a start time</a></li>
                        <li><a href="#date-of-birth">Enter a date of birth</a></li>
                        <li><a href="#file">The file must be 2MB or smaller</a></li>
                        <li><a href="#pets">Select yes if you do own pets</a></li>
                        <li><a href="#segmented-option">Choose a segmented option</a></li>
                        <li><a href="#things-you-like">Choose at least one item you like</a></li>
                        <li><a href="#preferred-day">Choose your preferred day</a></li>
                    </ul>
                type: error
    errorForms:
        textErrors:
            inputs:
                type: fundamentals
                name: form
                data:
                    example: true
                    fields:
                        name:
                            label: Name
                            name: name
                            required: true
                            error:
                                message: Enter a name
                            type: text
                        message:
                            label: Your message
                            name: message
                            type: textarea
                            error:
                                message: Enter a message
        numbersErrors:
            inputs:
                type: fundamentals
                name: form
                data:
                    example: true
                    fields:
                        accountNumber:
                            label: Account number
                            hint: Must be between 6 and 8 numbers long
                            name: account-number
                            type: text
                            class: input-width-10
                            maxlength: 8
                            inputmode: numeric
                            error:
                                message: Enter an account number
        dateErrors:
            inputs:
                type: fundamentals
                name: form
                data:
                    example: true
                    fields:
                        arrivalDate:
                            label: Date of arrival
                            hint: For example 30/05/2021
                            name: arrival-date
                            type: text
                            class: input-width-10
                            error:
                                message: Enter an arrival date
                        dateOfBirth:
                            label: Date of birth (an example of a memorable date)
                            hint: For example 20 07 1972
                            hintClass: u-no-margin-top
                            type: fieldset
                            itemWrapClass: memorable-date
                            error:
                                message: Enter a date of birth
                            fields:
                                day:
                                    label: Day
                                    name: bday-day
                                    type: text
                                    class: input-width-2
                                    autocomplete: true
                                    inputmode: numeric
                                    minNum: 0
                                    maxNum: 31
                                month:
                                    label: Month
                                    name: bday-month
                                    type: text
                                    class: input-width-2
                                    autocomplete: true
                                    inputmode: numeric
                                    minNum: 1
                                    maxNum: 12
                                year:
                                    label: Year
                                    name: bday-year
                                    type: text
                                    class: input-width-4
                                    autocomplete: true
                                    inputmode: numeric
                                    minNum: 1900
                                    maxNum: 2050
                        meetingTime:
                            label: Specify a start time for your meeting
                            hint: Use UTC and your local time
                            hintClass: u-no-margin-top
                            type: fieldset
                            itemWrapClass: memorable-date
                            isGroup: true
                            error:
                                message: Enter a start time
                            fields:
                                time:
                                    label: Start Time
                                    name: meeting-time
                                    class: input-width-5
                                    type: text
                                timeZone:
                                    label: Time zone
                                    name: timezone
                                    type: select
                                    options:
                                        option1:
                                            value: UTC-12:00
                                            title: UTC-12:00
                                        option2:
                                            value: UTC-11:00
                                            title: UTC-11:00
                                        option3:
                                            value: UTC-10:00
                                            title: UTC-10:00
                                        option4:
                                            value: UTC-09:30
                                            title: UTC-09:30
                                        option5:
                                            value: UTC-09:00
                                            title: UTC-09:00
                                        option6:
                                            value: UTC-08:00
                                            title: UTC-08:00
                                        option7:
                                            value: UTC-07:00
                                            title: UTC-07:00
                                        option8:
                                            value: UTC-06:00
                                            title: UTC-06:00
                                        option9:
                                            value: UTC-05:00
                                            title: UTC-05:00
                                        option10:
                                            value: UTC-04:00
                                            title: UTC-04:00
                                        option11:
                                            value: UTC-03:30
                                            title: UTC-03:30
                                        option12:
                                            value: UTC-03:00
                                            title: UTC-03:00
                                        option13:
                                            value: UTC-02:00
                                            title: UTC-02:00
                                        option14:
                                            value: UTC-01:00
                                            title: UTC-01:00
                                        option15:
                                            value: UTC-00:00
                                            title: UTC-00:00
                                            selected: true
                                        option16:
                                            value: UTC+01:00
                                            title: UTC+01:00
                                        option17:
                                            value: UTC+02:00
                                            title: UTC+02:00
                                        option18:
                                            value: UTC+03:00
                                            title: UTC+03:00
                                        option19:
                                            value: UTC+03:30
                                            title: UTC+03:30
                                        option20:
                                            value: UTC+04:00
                                            title: UTC+04:00
                                        option21:
                                            value: UTC+04:30
                                            title: UTC+04:30
                                        option22:
                                            value: UTC+05:00
                                            title: UTC+05:00
                                        option23:
                                            value: UTC+05:30
                                            title: UTC+05:30
                                        option24:
                                            value: UTC+05:45
                                            title: UTC+05:45
                                        option25:
                                            value: UTC+06:00
                                            title: UTC+06:00
                                        option26:
                                            value: UTC+07:00
                                            title: UTC+07:00
                                        option27:
                                            value: UTC+08:00
                                            title: UTC+08:00
                                        option28:
                                            value: UTC+08:45
                                            title: UTC+08:45
                                        option29:
                                            value: UTC+09:30
                                            title: UTC+09:30
                                        option30:
                                            value: UTC+10:00
                                            title: UTC+10:00
                                        option31:
                                            value: UTC+10:30
                                            title: UTC+10:30
                                        option32:
                                            value: UTC+11:00
                                            title: UTC+11:00
                                        option33:
                                            value: UTC+12:00
                                            title: UTC+12:00
                                        option34:
                                            value: UTC+12:45
                                            title: UTC+12:45
                                        option35:
                                            value: UTC+13:00
                                            title: UTC+13:00
                                        option36:
                                            value: UTC+14:00
                                            title: UTC+14:00
        otherErrors:
            inputs:
                type: fundamentals
                name: form
                data:
                    example: true
                    fields:
                        file:
                            label: Choose a file
                            name: file
                            type: file
                            error:
                                message: The file must be 2MB or smaller
                        radios:
                            type: fieldset
                            label: Do you own any pets?
                            name: pets
                            error:
                                message: Select yes if you do own pets
                            fields:
                                yes:
                                    label: Yes
                                    name: pets_yes
                                    type: radio
                                    initialValue: yes
                                no:
                                    label: No
                                    name: pets_no
                                    type: radio
                                    initialValue: no
                                noComment:
                                    label: Prefer not to say
                                    name: pets_no-comment
                                    type: radio
                                    initialValue: no-comment
                        segments:
                            type: fieldset
                            label: Segmented options (Radio)
                            name: segmented-options
                            hint: We understand that different people enjoy books in differeny ways, which is why we're giving you lots of options.
                            isSegmentedGroup: true
                            error:
                                message: Choose an option
                            fields:
                                segment1:
                                    name: segmented-option-1
                                    class: input--radio
                                    type: radio
                                    segmentTitle: Budget option
                                    segmentBody: Copy to explain this option in more detail
                                segment2:
                                    name: segmented-option-2
                                    class: input--radio
                                    type: radio
                                    checked: true
                                    segmentTitle: Value option
                                    segmentBody: Copy to explain this option in more detail
                                segment3:
                                    name: segmented-option-3
                                    class: input--radio
                                    type: radio
                                    segmentTitle: Expensive option
                                    segmentBody: Copy to explain this option in more detail
                        checkboxes:
                            type: fieldset
                            label: Things you like
                            hint: Select all that apply
                            name: things-you-like
                            error:
                                message: Choose at least one item
                            fields:
                                chocolate:
                                    label: Chocolate
                                    name: chocolate
                                    type: checkbox
                                    appearance: base
                                coffee:
                                    label: Coffee
                                    name: coffee
                                    type: checkbox
                                    appearance: base
                                cake:
                                    label: Cake
                                    name: cake
                                    type: checkbox
                                    appearance: base
                                chips:
                                    label: Chips
                                    name: chips
                                    type: checkbox
                                    appearance: base
                        preferredDay:
                            type: select
                            label: Preferred day of appointment
                            name: preferred-day
                            error:
                                message: Choose your preferred day
                            options:
                                option1:
                                    value: monday
                                    title: Monday
                                option2:
                                    value: tuesday
                                    title: Tuesday
                                option3:
                                    value: wednesday
                                    title: Wednesday
                                option4:
                                    value: thursday
                                    title: Thursday
                                option5:
                                    value: friday
                                    title: Friday
                                option6:
                                    value: saturday
                                    title: Saturday
                                option7:
                                    value: sunday
                                    title: Sunday

                    
---
To notify a user of an error with their form submission:

1.  Prefix the word "Error:" to the document's `title`. It's the first thing announced by screen readers when the page loads.
2.  Place an error summary at the top of the page
3.  Add an error message to each problematic input

{{ pageComponents(components.errorNote) }}

Page title
==========

Example form showcasing error messages
--------------------------------------

### Dealing with text

{{ pageComponents(components.errorForms.textErrors) }}

### Dealing with numbers

{{ pageComponents(components.errorForms.numbersErrors) }}

### Dealing with dates and times

{{ pageComponents(components.errorForms.dateErrors) }}

### Other input types

{{ pageComponents(components.errorForms.otherErrors) }}

Error summary considerations
----------------------------

The error summary should be at the top of the `main` element. If the page includes breadcrumbs or a back link, place it after these, but before the `h1`. The error summary must contain the heading 'There is a problem'.

Keyboard focus needs to move to the error summary, hence the addition of `tabindex="-1"`. JavaScript is included to shift focus if an error summary is present.

Each item in the summary list must link to the field with the validation error. Use the same wording for the error in both the error summary and the problematic field.

Error message considerations
----------------------------

In the event of a validation error, the error message should explain what went wrong and how to fix it. Keep the wording clear and concise.

To help screen reader users, the error message includes a visually hidden 'Error:' before the error message.