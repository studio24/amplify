---
title: Home
layout: homepage.njk
root: true
templateEngineOverride: 'njk,md'
components:
    cover:
        type: layout-helpers
        name: cover
        data:
            lead: true
            title: Amplify
            body: Welcome to the Studio 24 starter kit for design and front-end development
    cards:
        type: core-components
        name: cards
        data:
            type: neat
            extraClass: teasers
            cards:
                card1: 
                    heading: Fundamentals
                    body: <p>Understand how Amplify handles the fundamentals, e.g. colours, typography, buttons/links, lists, tables, forms, spacing and print styles.</p>
                    link:
                        url: /fundamentals
                        text: Browse fundamentals
                card2:
                    heading: Core components
                    body: <p>Examples of commonly required components, such as breadcrumbs and pagination.</p>
                    link:
                        url: /core-components
                        text: Browse core components
                card3:    
                    heading: Advanced components
                    body: <p>Examples of components with JavaScript enhancements, such as collapsible content.</p>
                    link:
                        url: /advanced-components
                        text: Browse advanced components
                card4:
                    heading: Layout Helpers
                    body: <p>Understand how Amplify handles the fundamentals, e.g. colours, typography, buttons/links, lists, tables, forms, spacing and print styles.</p>
                    link:
                      url: /fundamentals
                      text: Browse fundamentals
---
{{ pageComponents(components) }}
