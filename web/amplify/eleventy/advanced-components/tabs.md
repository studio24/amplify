---
title: Tabbed sections
components:
    tabbedSections:
        type: advanced-components
        name: tabs
        data:
            tabs:
                grumpyCat:
                    id: grumpy-cat
                    default: true
                    title: Grumpy Cat
                    body: <p><a href="https://en.wikipedia.org/wiki/Grumpy_Cat">Grumpy Cat</a> was a notable Internet cat, known and nicknamed for her permanently grumpy facial features.</p>
                lilBub:
                    id: lil-bub
                    title: Lil Bub
                    body: <p>Lil Bub was an American celebrity cat known for her unique physical appearance. Born the runt of the litter and with several genetic mutations, she had to be bottle-fed.</p>
                maru:
                    id: maru
                    title: Grumpy Cat
                    body: <p><a href="https://en.wikipedia.org/wiki/Maru_(cat)">Maru</a> is a popular YouTube cat. He previously held the Guiness World Record for the most YouTube video views of an individual animal.</p>

---
We use the [Tabby](https://github.com/cferdinandi/tabby) NPM package to generate tabbed content sections (not because it sounds like a type of cat). It progressively enhances a linked list of content into tabbed navigation.

{{ pageComponents(components) }}

Considerations
--------------

The default implementation uses `overflow-x: auto;` on the list of tabs, so that if the width of the tablist is greater than the container/viewport width they will scroll horizontally. This is the same principle that Brad Taunt suggests in his post about [replacing hamburger menus with sausage links](https://tdarb.org/hamburger-menu-alternative/).

In the absence of a visible scrollbar, you will need to make sure that there are sufficient visual cues to users that content has been cut off and can be scrolled. You could [use linear gradients to help add visual affordance of scrolling](https://bbc.github.io/gel/components/data-tables/#indicating-scroll-functionality-visually), or else you might choose to add further scripting to detect when the element is scrolled all the way to either side, and add start or end classes for styling.