---
title: Tables
components:
    exampleTable:
        table:
            type: fundamentals
            name: table
            data:
                title: Example table
                headings:
                    header1:
                        text: Column header 1
                    header2:
                        text: Column header 2
                    header3:
                        text: Column header 3
                rows:
                    row1:
                        heading: Row 1 header
                        columns:
                            col1:
                                text: Row 1, Cell 2
                            col2:
                                text: Row 1, Cell 3
                    row2:
                        heading: Row 2 header
                        columns:
                            col1:
                                text: Row 2, Cell 2
                            col2:
                                text: Row 2, Cell 3
    spiceTable:
        table:
            type: fundamentals
            name: table
            data:
                hasWrapper: true
                captionId: unique-caption-id
                title: Member of the Spice Girls
                headings:
                    firstName:
                        text: First name
                    lastName:
                        text: Last name
                    bandName:
                        text: Band name
                    dateOfBirth:
                        text: Date of birth
                    placeOfBirth:
                        text: Place of birth
                rows:
                    emma:
                        columns:
                            firstName:
                                text: Emma
                            lastName:
                                text: Bunton
                            bandName:
                                text: Baby
                            dateOfBirth:
                                text: 21 January 1976
                            placeOfBirth:
                                text: Watford, Hertfordshire
                    geri:
                        columns:
                            firstName:
                                text: Geri
                            lastName:
                                text: Halliwell
                            bandName:
                                text: Ginger
                            dateOfBirth:
                                text: 21 January 1972
                            placeOfBirth:
                                text: London
                    victoria:
                        columns:
                            firstName:
                                text: Victoria
                            lastName:
                                text: Beckham
                            bandName:
                                text: Posh
                            dateOfBirth:
                                text: 17 April 1974
                            placeOfBirth:
                                text: Harlow, Essex
                    melb:
                        columns:
                            firstName:
                                text: Melanie
                            lastName:
                                text: Brown
                            bandName:
                                text: Scary
                            dateOfBirth:
                                text: 29 May 1975
                            placeOfBirth:
                                text: Leeds, Yorkshire
                    melc:
                        columns:
                            firstName:
                                text: Melanie
                            lastName:
                                text: Chisholm
                            bandName:
                                text: Sporty
                            dateOfBirth:
                                text: 12 January 1974
                            placeOfBirth:
                                text: Whiston, Merseyside

---

{{ pageComponents(components.exampleTable) }}

Considerations
--------------

The table markup must include column and/or row headers (`th`). Some screen readers that encounter a table without headers will treat it as a 'layout table' and communicate it quite differently.

Use the attributes `scope="col"` and `scope="row"` to differentiate between column and row headers respectively.

Where there are both column and row headers, do not leave the first header cell empty as this can produce unexpected behaviour.

Use a `caption` to label the table correctly. A heading element can be used within the caption if desired.

Responsive tables
-----------------

The grid structure of data tables must remain intact, no matter the available space. If there are many columns, the result may be horizontal scrolling. Based on the advice in Adrian Roselli's article [Under-Engineered Responsive Tables](https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html), the basic table markup then needs to be amended as follows:

-   Wrap the table in a `div` with the data-attribute `data-component="table-wrap"`, and the attribute `tabindex="0"` so that keyboard users can scroll it.

-   Add the following attributes to the wrapping `div`: `tabindex="0"` and `role="region"`

-   Add a unique ID to the `caption` and add `aria-labelledby` to the wrapping `div` with the caption ID as the value. This will correctly label what is now an interactive `div`.

-   A JavaScript enhancement checks whether the wrapper has any overflow. If there is no overflow, the `tabindex`, `role` and `aria-labelledby` attributes are all removed; but they need to exist in the base markup in case JavaScript is not available.

{{ pageComponents(components.spiceTable) }}

### Notes on responsive tables

-   The scrolling behaviour described above will not work if the table sits within a [sidebar layout helper](https://amplify.studio24.net/amplify/layout-helpers/sidebar.html), because the sidebar layout helper tends to allow the table to grow.
-   Unless a `min-width` is set on the `td` elements in the table, the cells will tend to shrink to allow the table to fit the available width, with content wrapping over multiple lines.