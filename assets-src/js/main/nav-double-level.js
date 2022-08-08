import './_closest.polyfill.js';

/**
 * Object for creating double-level navigation menus
 * Inspired by https://github.com/mrwweb/clicky-menus/blob/main/clicky-menus.js
 * Uses event delegation to handle events for improved performance
 * Also manages button for toggling navigation on mobile
 */

const navDoubleLevel = function(menu) {
    let	container = menu.parentElement;
    let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');

    this.init = function() {
        mobileToggleSetup();
        menuSetup();
        document.addEventListener('click', clickHandler);
        document.addEventListener('keyup', closeOnEscKey);
    }

    function closeSubmenus() {
        let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('button'));
        subNavTriggers.forEach(function (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        });
    }

    function closeAllOpenMenus() {
        let openTrigger = Array.prototype.slice.call(container.querySelectorAll('[aria-expanded="true"]'));
        openTrigger.forEach(function (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        });
    }

    function clickHandler(event) {
        if (event.target.matches('[data-trigger="mobile-nav"]')) {
            if (event.target.matches('[aria-expanded="true"]')) {
                closeSubmenus();
                event.target.setAttribute('aria-expanded', 'false');
            } else {
                event.target.setAttribute('aria-expanded', 'true');
            }
        } else if (event.target.matches('[data-trigger="sub-nav"]')) {
            if (event.target.matches('[aria-expanded="true"]')) {
                event.target.setAttribute('aria-expanded', 'false');
            } else {
                closeSubmenus();
                event.target.setAttribute('aria-expanded', 'true');
            }
        } else {
            closeSubmenus();
        }
    }

    function closeOnEscKey(event) {
        if (event.defaultPrevented) {
            return;
        }

        let key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
            closeAllOpenMenus()
        }
    }

    function mobileToggleSetup() {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.style.display = 'block';

        // Corresponds to $bp-tab-landscape Sass variable (1024px)
        let mq = window.matchMedia('(min-width: 64em)');
        mq.addListener(WidthChange);
        WidthChange(mq);

        // Media query change
        function WidthChange(mq) {
            if (!(mq.matches)) {
                mobileToggle.setAttribute('aria-expanded', 'false');
            } else {
                mobileToggle.setAttribute('aria-expanded', 'true');
            }
        }
    }

    function menuSetup() {
        const submenus = Array.prototype.slice.call(menu.querySelectorAll('ul'));

        submenus.forEach(function (submenu) {
            const menuItem = submenu.parentElement;

            if ('undefined' !== typeof submenu) {
                let button = convertLinkToButton(menuItem);

                setUpAria(submenu, button);
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
        const button = document.createElement('button');
        button.setAttribute('data-trigger', 'sub-nav');
        const li = document.createElement('li');
        let subMenu = link.nextElementSibling;

        if (null !== link) {
            // copy button attributes and content from link
            button.innerHTML = linkHTML.trim();

            for (let i = 0, length = linkAtts.length; i < length; i++) {
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
            id = 'js-' + submenuId + '-submenu';
        }

        // set button ARIA
        button.setAttribute('aria-controls', id);
        button.setAttribute('aria-expanded', false);

        // set submenu ARIA
        submenu.setAttribute('id', id);
    }
}

export {navDoubleLevel};