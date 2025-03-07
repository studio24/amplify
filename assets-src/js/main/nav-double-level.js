import './_object.assign.polyfill.js';
import './_closest.polyfill.js';

/**
 * Object for creating double-level navigation menus
 * Inspired by https://github.com/mrwweb/clicky-menus/blob/main/clicky-menus.js
 * Uses event delegation to handle events for improved performance, and data attributes for targeting elements
 * Also manages button for toggling navigation on mobile
 *
 * @param {Element} menu - the top level <ul> navigation
 * @param {Object} options - configuration options for the navigation
 * @param {number} [options.breakpoint=1024] - pixel value at which the button for toggling the mobile navigation is hidden. Is converted to em (assumes 16px browser default).
 * @param {boolean} [options.cloneTopLevelLink=true] - whether to copy the link that will be replaced with a button, and add it to the sub menu.
 * @param {boolean} [options.replaceTopLevelLinks=true] - whether to swap the top level link for a button, or add a button after the link
 * @param {string} [options.mobileIcon] - SVG icon used for the button to show/hide the navigation on mobile.
 * @param {string} [options.submenuIcon] - SVG icon used for sub menus and back button.
 * @param {string} [options.submenuDirection=vertical] - direction in which sub menus operate on mobile (vertical, or horizontal with a 'back' button).
 * @param {boolean} [options.submenuIntro=false] - whether the sub menu includes introductory text.
 */

const navDoubleLevel = function(menu, options) {
    let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');

    // Default settings
    let defaults = {
        breakpoint: 1024,
        cloneTopLevelLink: true,
		replaceTopLevelLinks: true,
        mobileIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true" fill="currentColor">' +
                    '<path class="open" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>' +
                    '<path class="close" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>' +
                    '</svg>',
        submenuIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true" fill="currentColor">' +
                     '<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />' +
                     '</svg>',
		submenuDirection: 'vertical',
        submenuIntro: false,
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
            const button = event.target;
            const submenu = button.nextElementSibling;
            if (event.target.matches('[aria-expanded="true"]')) {
                event.target.setAttribute('aria-expanded', 'false');
            } else {
                closeSubmenus();
                event.target.setAttribute('aria-expanded', 'true');
                if (settings.submenuIntro === false) {
                    preventOffScreenSubmenu(submenu);
                }
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

            if (result && mobileToggle.style.display === 'inline-flex') {
                mobileToggle.setAttribute('aria-expanded', 'false');
            } else {
                closeSubmenus();
            }
        }
    }

    function preventOffScreenSubmenu(submenu) {
        const screenWidth =	window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const parent = submenu.parentElement;
        const menuLeftEdge = parent.getBoundingClientRect().left;
        const menuRightEdge = menuLeftEdge + submenu.offsetWidth;

        if (menuRightEdge + 32 > screenWidth) {
            // adding 32 so it's not too close
            submenu.classList.add('js-sub-menu-right');
        }
    }

    function mobileToggleSetup() {
        mobileToggle.innerHTML += settings.mobileIcon;
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.style.display = 'inline-flex';

        let mqValue = settings.breakpoint / 16;
        let mq = window.matchMedia('(min-width: ' + mqValue + 'em)');
        mq.addListener(WidthChange);
        WidthChange(mq);

        // Media query change
        function WidthChange(mq) {
            if (!(mq.matches)) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.style.display = 'inline-flex';
            } else {
                mobileToggle.setAttribute('aria-expanded', 'true');
                mobileToggle.style.display = 'none';
            }
        }
    }

    function menuSetup() {
		if (settings.submenuIntro === true) {
			menu.setAttribute('id','js-click-nav-intro');
		} else if (settings.replaceTopLevelLinks === false) {
			menu.setAttribute('id','js-click-nav-both');
		} else {
			menu.setAttribute('id', 'js-click-nav-' + settings.submenuDirection);
		}

        const subMenuWrappers = Array.prototype.slice.call(menu.querySelectorAll('[data-nav="submenu"]'));

        subMenuWrappers.forEach(function (wrapper) {
            const menuItem = wrapper.parentElement;

            if ('undefined' !== typeof wrapper) {
				if (settings.replaceTopLevelLinks === true) {
					let button = convertLinkToButton(menuItem);
					setUpAria(wrapper, button);
				} else {
					let button = addButtonAfterLink(menuItem);
					setUpAria(wrapper, button);
				}
            }
        });
    }

	function addButtonAfterLink(menuItem) {
		const link = menuItem.getElementsByTagName('a')[0];
		const icon = settings.submenuIcon;
		const button = document.createElement('button');
		let subMenu = link.nextElementSibling.querySelector('ul');
		button.setAttribute('data-trigger', 'sub-nav');
		button.innerHTML = icon + '<span class="visuallyhidden">' + link.textContent +' menu</span>';
		link.after(button);

		if (settings.submenuDirection === 'horizontal') {
			// Insert a "back" button
			const backButton = document.createElement('button');
			backButton.setAttribute('data-button', 'mobile-back');
			backButton.setAttribute('class', 'button button--ghost');
			backButton.innerHTML = icon + ' Back';
			if (settings.submenuIntro === true) {
				subMenu.parentNode.insertBefore(backButton, subMenu.parentNode.children[0]);
			} else subMenu.parentNode.insertBefore(backButton, subMenu);
		}

		return button;
	}

    /**
     * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
     */
    function convertLinkToButton(menuItem) {
        const link = menuItem.getElementsByTagName('a')[0];
        const linkHTML = link.innerHTML;
        const linkAtts = link.attributes;
        const icon = settings.submenuIcon;
        const button = document.createElement('button');
        button.setAttribute('data-trigger', 'sub-nav');
        const li = document.createElement('li');
        let subMenu = link.nextElementSibling.querySelector('ul');

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

            if (settings.cloneTopLevelLink === true) {
                // insert cloned link as first item of submenu list
                const linkClone = link.cloneNode(true);
                li.appendChild(linkClone);
                subMenu.insertBefore(li, subMenu.children[0]);
            }

            menuItem.replaceChild(button, link);
        }

        if (settings.submenuDirection === 'horizontal') {
            // Insert a "back" button
            const backButton = document.createElement('button');
            backButton.setAttribute('data-button', 'mobile-back');
            backButton.setAttribute('class', 'button button--ghost');
            backButton.innerHTML = icon + ' Back';
            if (settings.submenuIntro === true) {
                subMenu.parentNode.insertBefore(backButton, subMenu.parentNode.children[0]);
            } else subMenu.parentNode.insertBefore(backButton, subMenu);
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