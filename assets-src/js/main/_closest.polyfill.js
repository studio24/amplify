/**
 * Element.closest polyfill for IE
 * Needed for disclosure widget
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */

if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}