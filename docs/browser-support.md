# Amplify browser support

* [Default browser support](#default-browser-support)
* [How to update Amplify browser support](#how-to-update-amplify-browser-support)

## Default browser support

Amplify currently supports the range of [browsers recommended by the GOVUK Service Manual](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

### Implementation details

All browser versions load `core.css` - which includes limited enhancements to the user-agent stylesheet for global elements and some simple component styles - and `print.css`.

To load `advanced.css` in just our supported browsers, we implement logic in the `media` attribute of the `link` element for this stylesheet, loading it only in browsers that recognise the properties of that media query. The default media query looks like this:

```HTML
<!--
Print (Edge doesn't apply to print otherwise)
Edge, Chrome 39+, Opera 26+, Safari 9+, iOS 9+, Android ~5+, Android UCBrowser ~11.8+
FF 47+
-->
<link rel="stylesheet" id="advanced-stylesheet" href="/dist/styles/advanced.min.css" media="
only print,
only all and (pointer: fine), only all and (pointer: coarse), only all and (pointer: none),
only all and (min--moz-device-pixel-ratio:0) and (display-mode:browser), (min--moz-device-pixel-ratio:0) and (display-mode:fullscreen)
">
```

The loading of JavaScript is tied to the loading of the advanced CSS. Using `window.matchMedia` we detect when the browser loads the `advanced.css` within the media query. Once the advanced CSS loads, this will cause the JavaScript code to load too. We also change the `no-js` class on `html` to `js`:

```javascript
(function() {
	let linkEl = document.getElementById('advanced-stylesheet');
	if (window.matchMedia && window.matchMedia(linkEl.media).matches) {
		let head = document.querySelector('head');
		// Add main JS
		let jsMain = document.createElement('script');
		jsMain.src = 'path/to/main.js';
		jsMain.defer = true;
		head.appendChild(jsMain);
		// Update classname to show JS is available
		(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);
	}
})();
```

## How to update Amplify browser support

### Browserslist in `package.json`

The `package.json` file in the project root includes a browserslist entry. This is the single source of truth for browser support within Amplify and is referenced by the Autoprefixer NPM package (which adds the necessary vendor prefixes to the CSS files) and by the Babel/Webpack NPM packages (which transpile the JavaScript to support the specified browsers).

### CSS media query in `head` of your web page templates

[Choose the media query most relevant for your needs](https://github.com/Fall-Back/CSS-Mustard-Cut).
