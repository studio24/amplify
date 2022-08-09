import {exists} from "./main/_exists.helper";

import {cardEnhancement} from "./main/cards";
import {collapsibles} from "./main/collapsibles";
import {disclosureWidget} from "./main/disclosure-widget";
import {formErrorSummary} from "./main/form-error-summary";
import {responsiveTables} from "./main/responsive-tables";
import {navDoubleLevel} from "./main/nav-double-level";

function domLoadedActions() {
	cardEnhancement();
	collapsibles();
	disclosureWidget();
	formErrorSummary();
	responsiveTables();

	/* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
	const navigation = document.querySelector('ul[data-component="nav-double"]');

	if (exists(navigation)) {
		let siteNav = new navDoubleLevel(navigation, {
			mobileSubmenuDirection: 'horizontal'
		});
		siteNav.init();
	}
}

if (document.readyState === 'loading') {
	// Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', domLoadedActions);
} else {
	// `DOMContentLoaded` has already fired
	domLoadedActions();
}

// Tie the responsiveTables function to a resize event, and debounce for performance
var timeout;

window.addEventListener('resize', function (event) {

	// If timer is null, reset it to 66ms and run desired functions.
	// Otherwise, wait until timer is cleared
	if (!timeout) {
		timeout = setTimeout(function () {

			// Reset timeout
			timeout = null;

			// Run our resize functions
			responsiveTables();

		}, 66);
	}

}, false);
