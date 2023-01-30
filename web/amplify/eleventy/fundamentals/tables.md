---
title: Tables
---
Example table
-------------

| Column header 1 | Column header 2 | Column header 3 |
| --- | --- | --- |
| Row 1 header | Row 1, cell 2 | Row 1, cell 3 |
| Row 2 header | Row 2, cell 2 | Row 2, cell 3 |

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

Members of the Spice Girls
| First name | Last name | Band name | Date of birth | Place of birth |
| --- | --- | --- | --- | --- |
| Emma | Bunton | Baby | 21 January 1976 | Watford, Hertfordshire |
| Geri | Halliwell | Ginger | 6 August 1972 | London |
| Victoria | Beckham | Posh | 17 April 1974 | Harlow, Essex |
| Melanie | Brown | Scary | 29 May 1975 | Leeds, Yorkshire |
| Melanie | Chisholm | Sporty | 12 January 1974 | Whiston, Merseyside |

### Notes on responsive tables

-   The scrolling behaviour described above will not work if the table sits within a [sidebar layout helper](https://amplify.studio24.net/amplify/layout-helpers/sidebar.html), because the sidebar layout helper tends to allow the table to grow.
-   Unless a `min-width` is set on the `td` elements in the table, the cells will tend to shrink to allow the table to fit the available width, with content wrapping over multiple lines.