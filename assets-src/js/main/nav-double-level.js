import './_closest.polyfill.js';

/**
 * Object for creating double-level navigation menus
 * Inspired by https://github.com/mrwweb/clicky-menus/blob/main/clicky-menus.js
 */

const navDoubleLevel = function(menu) {
    // DOM element(s)
    let	container = menu.parentElement;
    let currentMenuItem;
    let i;
    let length;

    this.init = function() {
        menuSetup();
        document.addEventListener('click', closeOpenMenu);
        document.addEventListener('keyup', closeOnEscKey);
    }

    /*--------------------------------------------------
     Nav open / close functions
    --------------------------------------------------*/
    function toggleOnMenuClick(event) {
        const button = event.currentTarget;

        // close open menu if there is one
        if (currentMenuItem && button !== currentMenuItem) {
            toggleSubmenu(currentMenuItem);
        }

        toggleSubmenu(button);
    }

    function toggleSubmenu(button) {
        if ('true' === button.getAttribute('aria-expanded')) {
            button.setAttribute('aria-expanded', 'false');
            currentMenuItem = false;
        } else {
            button.setAttribute('aria-expanded', 'true');
            currentMenuItem = button;
        }
    }

    function closeOnEscKey(event) {
        if (event.defaultPrevented) {
            return;
        }

        let key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
            if (null !== event.target.closest('ul[aria-hidden="false"]')) {
                // We're on a child item
                currentMenuItem.focus();
                toggleSubmenu(currentMenuItem);
            } else if ('true' === event.target.getAttribute('aria-expanded')) {
                // We're on a parent item
                toggleSubmenu(currentMenuItem);
            }
        }
    }

    function closeOpenMenu(event) {
        if (currentMenuItem && ! event.target.closest('#' + container.id)) {
            toggleSubmenu(currentMenuItem);
        }
    }

    /*--------------------------------------------------
     Modify menu markup & bind event listeners
    --------------------------------------------------*/
    function menuSetup() {
        const submenus = Array.prototype.slice.call(menu.querySelectorAll('ul'));

        submenus.forEach(function (submenu) {
            const menuItem = submenu.parentElement;

            if ('undefined' !== typeof submenu) {
                let button = convertLinkToButton(menuItem);

                setUpAria(submenu, button);

                // bind event listener to button
                button.addEventListener('click', toggleOnMenuClick);
                // bind event listener to menu
                menu.addEventListener('keyup', closeOnEscKey);
            }
        });
    }

    /**
     * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
     */
    function convertLinkToButton(menuItem) {
        const link = menuItem.getElementsByTagName('a')[0];
        const linkClone = link.cloneNode(true);
        const linkHTML = link.innerHTML;
        const linkAtts = link.attributes;
        const button = document.createElement( 'button' );
        const li = document.createElement('li');
        let subMenu = link.nextElementSibling;

        if (null !== link) {
            // copy button attributes and content from link
            button.innerHTML = linkHTML.trim();

            for (i = 0, length = linkAtts.length; i < length; i++) {
                let attr = linkAtts[i];
                if ('href' !== attr.name) {
                    button.setAttribute(attr.name, attr.value);
                }
            }

            // insert cloned link as first item of submenu list
            li.appendChild(linkClone);
            subMenu.insertBefore(li, subMenu.children[0]);
            menuItem.replaceChild( button, link );
        }

        return button;
    }

    function setUpAria(submenu, button) {
        const submenuId = submenu.getAttribute('id');
        let id;

        if (null === submenuId) {
            id = 'js-' + button.textContent.trim().replace(/\s+/g, '-').toLowerCase() + '-submenu';
        } else {
            id = 'js-' + menuItemId + '-submenu';
        }

        // set button ARIA
        button.setAttribute('aria-controls', id);
        button.setAttribute('aria-expanded', false);

        // set submenu ARIA
        submenu.setAttribute('id', id);
    }
}

export {navDoubleLevel};