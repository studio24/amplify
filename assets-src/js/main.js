import {exists} from "./main/_exists.helper.js";

import {cardEnhancement} from "./main/cards.js";
import {collapsibles} from "./main/collapsibles.js";
import {disclosureWidget} from "./main/disclosure-widget.js";
import {formErrorSummary} from "./main/form-error-summary.js";
import {navSingleLevel} from "./main/nav-single-level.js";
import {navDoubleLevel} from "./main/nav-double-level.js";

function domLoadedActions() {
	cardEnhancement();
	collapsibles();
	disclosureWidget();
	formErrorSummary();

	/* Create a navSingleLevel object and initiate single-level navigation for a <ul> with the correct data-component attribute */
	const navExampleSingle = document.querySelector('[data-component="nav-single"]');

	if (exists(navExampleSingle)) {
		let siteNav = new navSingleLevel(navExampleSingle, {
			breakpoint: 768,
		});
		siteNav.init();
	}

	/* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
	const navExampleDouble = document.querySelector('[data-component="nav-double"]');

	if (exists(navExampleDouble)) {
		let siteNav = new navDoubleLevel(navExampleDouble, {
			breakpoint: 768,
			submenuDirection: 'horizontal',
		});
		siteNav.init();
	}

	/* Create a navDoubleLevel object and initiate double-level navigation for a <ul> with the correct data-component attribute */
	const navDoubleIntro = document.querySelector('[data-component="nav-double-intro"]');

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
