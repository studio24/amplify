<!doctype html>
<html lang="en" class="no-js">

<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Website title</title>

	<link rel="stylesheet" href="dist/styles/core.min.css" media="screen"/>

	<!--
    Print (Edge doesn't apply to print otherwise)
    IE 10, 11
    Edge
    Chrome 29+, Opera 16+, Safari 6.1+, iOS 7+, Android ~4.4+
    FF 29+
    -->
	<link rel="stylesheet" id="advanced-stylesheet" href="dist/styles/advanced.min.css" media="
    only print, screen and (min-width: 1vm),
    only all and (-ms-high-contrast: none), only all and (-ms-high-contrast: active),
    only all and (pointer: fine), only all and (pointer: coarse), only all and (pointer: none),
    only all and (-webkit-min-device-pixel-ratio:0) and (min-color-index:0),
    only all and (min--moz-device-pixel-ratio:0) and (min-resolution: 3e1dpcm)
	">

	<link rel="stylesheet" href="dist/styles/print.min.css" media="print"/>

	<script src="dist/js/libraries/fontfaceobserver.js"></script>

	<script>
		let myFont = new FontFaceObserver('Nunito');

		Promise.all([myFont.load()]).then(function () {
			document.documentElement.className += " fonts-loaded";
		});

		(function() {
			let linkEl = document.getElementById('advanced-stylesheet');
			if (window.matchMedia && window.matchMedia(linkEl.media).matches) {
				let head = document.querySelector('head');
				// Add main JS
				let jsMain = document.createElement('script');
				jsMain.src = 'dist/js/main.min.js';
				jsMain.defer = true;
				head.appendChild(jsMain);
				// Update classname to show JS is available
				(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);
			}
		})();
	</script>


</head>

<body>
<div class="grid-wrap">
	<div class="not-footer">
		<header></header>
		<main id="main">

			<a href="amplify">Learn about Amplify, the Studio 24 starter kit for design and front-end development</a>

		</main>
	</div>
	<footer></footer>
</div>
</body>

</html>