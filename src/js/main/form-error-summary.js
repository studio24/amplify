var formErrorSummary = (function () {

	let errorSummary = document.querySelector('[data-component="error-summary"]');

	if (exists(errorSummary)) {

		errorSummary.focus();

	}

})();

export {formErrorSummary};