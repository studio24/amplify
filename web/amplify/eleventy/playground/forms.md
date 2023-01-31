---
title: Forms Playground
components:
    form:
        type: fundamentals
        name: form
        data:
            action: https://www.formbackend.com/f/779e2c554c194098
            method: POST
            fields:
                fullName:
                    name: name
                    label: Name
                    required: true
                    hint: E.g Robin Smith
                    type: text
                    autocomplete: true
                emailAddress:
                    name: email
                    type: email
                    label: Email
                    hint: E.g robin.smith@example.co.uk
                    autocomplete: true
                    autocapitalize: off
                    autocorrect: off
                    spellcheck: off
                    inputmode: email
---
{{ pageComponents(components) }}