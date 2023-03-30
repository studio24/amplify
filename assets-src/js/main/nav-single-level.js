import './_object.assign.polyfill';

/**
 * Object for creating single-level navigation menus
 * Manages button for toggling navigation on mobile
 * Uses event delegation to handle events for improved performance
 *
 * @param {Element} menu - the top level navigation <ul>
 * @param {Object} options - configuration options for the navigation
 * @param {number} [options.breakpoint=1024] - pixel value at which the button for toggling the mobile navigation is hidden. Is converted to em.
 * @param {string} [options.mobileIcon] - SVG icon used for the button to show/hide the navigation on mobile.
 */

const navSingleLevel = function(menu, options) {
	let	container = menu.parentElement;
	let mobileToggle = document.querySelector('[data-trigger="mobile-nav"]');

	// Default settings
	let defaults = {
		breakpoint: 1024,
		mobileIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="icon icon--24" focusable="false" aria-hidden="true" fill="currentColor">' +
			'<path class="open" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>' +
			'<path class="close" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>' +
			'</svg>'
	};

	// Merge user options into defaults
	let settings = Object.assign({}, defaults, options);

	this.init = function() {
		mobileToggleSetup();
		document.addEventListener('click', clickHandler);
		document.addEventListener('keyup', closeOnEscKey);
	}

	function clickHandler(event) {
		if (event.target.matches('[data-trigger="mobile-nav"]')) {
			if (event.target.matches('[aria-expanded="true"]')) {
				event.target.setAttribute('aria-expanded', 'false');
			} else {
				event.target.setAttribute('aria-expanded', 'true');
			}
		}
	}

	function closeOnEscKey(event) {
		if (event.defaultPrevented) {
			return;
		}

		let key = event.key || event.keyCode;

		if (key === 'Escape' || key === 'Esc' || key === 27) {
			if (mobileToggle.style.display === 'inline-flex') {
				mobileToggle.setAttribute('aria-expanded', 'false');
			}
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
}

export {navSingleLevel};