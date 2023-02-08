---
title: Progress indicator
components:
    progressIndicator:
        type: core-components
        name: progress-indicator
        data:
            steps:
                step1:
                    complete: true
                    number: 1
                    name: Delivery address
                step2:
                    number: 2
                    name: Billing address
                    current: true
                step3:
                    number: 3
                    name: Payment details
                step4:
                    number: 4
                    name: Confirmation
                
---
{{ pageComponents(components) }}

While it is [recommended not to use progress indicators](https://design-system.service.gov.uk/patterns/question-pages/#using-progress-indicators) for forms, Amplify does include one: