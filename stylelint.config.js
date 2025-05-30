/** @type {import('stylelint').Config}
 *
 * Starting rulesets:
 * - https://stylelint.io/user-guide/rules
 * - https://github.com/stylelint-scss/stylelint-scss?tab=readme-ov-file#list-of-rules
 *
 * Certain rules have been completely disabled (see comments below)
 *
 * Plugins:
 * - https://github.com/hudochenkov/stylelint-order/
 *
 * A custom regex-based rule has been added to allow classes using BEM syntax.
 * Modified from https://github.com/humanmade/coding-standards/issues/193#issuecomment-1405099508
 * to support our BEM implementation (which is a bit less strict than some)
 *
 * A custom regex-based rule has been added to allow using _ to create pseudo private CSS custom properties
 * Based on https://stackoverflow.com/questions/76501969/need-a-custom-stylelint-rule-or-plugin-that-keeps-kebab-case-but-allows-wp
 * */
export default {
	extends: ["stylelint-config-standard-scss"],
	"plugins": ["stylelint-order"],
	"rules": {
		/** Disabled rules */
		"color-hex-length": null,
		"comment-whitespace-inside": null,
		"no-duplicate-selectors": null,
		"scss/at-extend-no-missing-placeholder": null,
		"scss/dollar-variable-colon-space-after": null,
		"scss/dollar-variable-empty-line-before": null,
		"scss/dollar-variable-pattern": null,
		"scss/double-slash-comment-empty-line-before": null,
		/** Disallow pixel units for specific CSS properties */
		"declaration-property-unit-disallowed-list": {
			"font-size": ["px"],
			"line-height": ["px"]
		},
		/** Limit CSS nesting */
		"max-nesting-depth": 3,
		/** Specify our preferred way of ordering declarations */
		"order/order": [
			"custom-properties",
			"declarations"
		],
		/** Follow A-Z ordering of properties */
		"order/properties-alphabetical-order": true,
		/** Selector class pattern must match [BEM CSS](https://en.bem.info/methodology/css) */
		"selector-class-pattern": [
			"^[a-z]([-]?[a-z0-9]+)*((__)?(--)?[a-z0-9]([-]?[a-z0-9]+)*)*$",
			{
				/** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
				resolveNestedSelectors: true,
				/** Custom message */
				message: function expected(selectorValue) {
					return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
				},
			},
		],
		"custom-property-pattern": [
			"^(_)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$", {
				message: (name) => `Expected custom property name "${name}" to be kebab-case with an optional "_" for pseudo private custom properties`,
			},
		],
	}
};