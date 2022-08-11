import './_object.assign.polyfill';
import './_closest.polyfill.js';

/**
 * Object for creating double-level navigation menus
 * Inspired by https://github.com/mrwweb/clicky-menus/blob/main/clicky-menus.js
 * Uses event delegation to handle events for improved performance
 * Also manages button for toggling navigation on mobile
 *
 * @param {Element} menu - the top level navigation <ul>
 * @param {Object} options - configuration options for the navigation
 * @param {string} [options.mobileSubmenuDirection=vertical] - direction in which sub menus operate on mobile (vertical or horizontal)
 * @param {number} [options.breakpoint=1024] - pixel value at which the button for toggling the mobile navigation is hidden. Is converted to em.
 */

const navDoubleLevel = function(menu, options) {
    let	container = menu.parentElement;
    let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');

    // Default settings
    let defaults = {
        mobileSubmenuDirection: 'vertical',
        breakpoint: 1024
    };

    // Merge user options into defaults
    let settings = Object.assign({}, defaults, options);

    this.init = function() {
        mobileToggleSetup();
        menuSetup();
        document.addEventListener('click', clickHandler);
        document.addEventListener('keyup', closeOnEscKey);
    }

    function closeSubmenus() {
        let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
        subNavTriggers.forEach(function (trigger) {
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
        } else if (event.target.matches('[data-button="mobile-back"]')) {
            event.target.closest('li').querySelector('[data-trigger="sub-nav"]').setAttribute('aria-expanded', 'false');
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
            let subNavTriggers = Array.prototype.slice.call(menu.querySelectorAll('[data-trigger="sub-nav"]'));
            let result = true;

            for (let i = 0; i < subNavTriggers.length; i++) {
                if (subNavTriggers[i].getAttribute('aria-expanded') === 'true') {
                    result = false;
                    break;
                }
            }

            if (result && mobileToggle.style.display === 'block') {
                mobileToggle.setAttribute('aria-expanded', 'false');
            } else {
                closeSubmenus();
            }
        }
    }

    function mobileToggleSetup() {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.style.display = 'block';

        let mqValue = settings.breakpoint / 16;
        let mq = window.matchMedia('(min-width: ' + mqValue + 'em)');
        mq.addListener(WidthChange);
        WidthChange(mq);

        // Media query change
        function WidthChange(mq) {
            if (!(mq.matches)) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.style.display = 'block';
            } else {
                mobileToggle.setAttribute('aria-expanded', 'true');
                mobileToggle.style.display = 'none';
            }
        }
    }

    function menuSetup() {
        container.setAttribute('id', 'js-click-nav-' + settings.mobileSubmenuDirection);
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
        const icon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true">' +
            '<path class="control-vertical" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />' +
            '<path class="control-horizontal" d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>' +
            '</svg>';
        const button = document.createElement('button');
        button.setAttribute('data-trigger', 'sub-nav');
        const li = document.createElement('li');
        let subMenu = link.nextElementSibling;

        if (null !== link) {
            // copy button attributes and content from link
            button.innerHTML = linkHTML.trim();
            button.innerHTML = button.innerHTML + icon;

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

        if (settings.mobileSubmenuDirection === 'horizontal') {
            // Wrap subMenu in a div and insert a "back" button
            const div = document.createElement('div');
            const backButton = document.createElement('button');
            div.setAttribute('class', 'js-nav__submenu');
            subMenu.parentNode.insertBefore(div, subMenu);
            div.appendChild(subMenu);
            backButton.setAttribute('data-button', 'mobile-back');
            backButton.setAttribute('class', 'button button--ghost');
            backButton.innerHTML = icon + ' Back';
            div.insertBefore(backButton, subMenu);
        }

        return button;
    }

    function setUpAria(submenu, button) {
        const submenuId = submenu.getAttribute('id');
        let id;

        if (null === submenuId) {
            id = 'js-' + button.textContent.trim().replace(/\s+/g, '-').toLowerCase() + '-submenu';
        } else {
            id = submenuId + '-submenu';
        }

        // set button ARIA
        button.setAttribute('aria-controls', id);
        button.setAttribute('aria-expanded', 'false');

        // set submenu ARIA
        submenu.setAttribute('id', id);
    }
}

export {navDoubleLevel};