import {exists} from "./main/_exists.helper";
import {cardEnhancement} from "./main/cards";
import {collapsibles} from "./main/collapsibles";
import {disclosureWidget} from "./main/disclosure-widget";
import {formErrorSummary} from "./main/form-error-summary";
import {responsiveTables} from "./main/responsive-tables";
import {sortTable} from "./main/sortable-tables";

function domLoadedActions() {
	cardEnhancement();
	collapsibles();
	disclosureWidget();
	formErrorSummary();
	
	/* Create sortable table */ 
	const tables = [...document.querySelectorAll('table[data-component="sortable-table"]')];
	if (exists(tables)) {
		tables.forEach(table => sortTable(table));
	}
	// Needs to fire last as sortTable func may change table width
	// Otherwise, only resize event create responsive table 
	responsiveTables();
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
