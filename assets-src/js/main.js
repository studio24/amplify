import {exists} from "./main/_exists.helper";
import {cardEnhancement} from "./main/cards";
import {disclosureWidget} from "./main/disclosure-widget";
import {formErrorSummary} from "./main/form-error-summary";
import {responsiveTables} from "./main/responsive-tables";
import {sortableTable} from "./main/sortable-tables";

function domLoadedActions() {
	cardEnhancement();
	disclosureWidget();
	formErrorSummary();
	responsiveTables();
	sortableTable();

	/* Create a navSingleLevel object and initiate single-level navigation for a <ul> with the correct data-component attribute */
	const navExampleSingle = document.querySelector('ul[data-component="nav-single"]');

	if (exists(navExampleSingle)) {
		let siteNav = new navSingleLevel(navExampleSingle, {
			breakpoint: 768,
		});
		siteNav.init();
	}

	/* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
	const navExampleDouble = document.querySelector('ul[data-component="nav-double"]');

	if (exists(navExampleDouble)) {
		let siteNav = new navDoubleLevel(navExampleDouble, {
			breakpoint: 768,
			submenuDirection: 'horizontal',
		});
		siteNav.init();
	}

	/* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
	const navDoubleIntro = document.querySelector('ul[data-component="nav-double-intro"]');

	if (exists(navDoubleIntro)) {
		let siteNav = new navDoubleLevel(navDoubleIntro, {
			breakpoint: 768,
			cloneTopLevelLink: false,
			submenuDirection: 'horizontal',
			submenuIntro: true
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
