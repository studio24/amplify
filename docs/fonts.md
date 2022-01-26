# How to update fonts in Amplify

## System fonts

Update the value of the `$font-family` variable in `src/styles/sass/00-settings/_typesetting.scss`. Use quote marks around fonts with white space in their name.

Be sure to include fonts for both Mac OS and Windows - [CSS Font Stack](https://www.cssfontstack.com/) is useful for checking which fonts sre eradily available on different Operating Systems. 

## Web fonts

* Save any web font files using the `woff` and `woff2` formats in `src/fonts`.
* Update the `@font-face` declarations in `src/styles/sass/00-settings/_fonts.scss` to point to the files and rename the `font-family` name.
* Update the value of the `$font-loaded-family` variable in `src/styles/sass/00-settings/_typesetting.scss`.
  * The designer should have picked system fonts that are similar in appearance to the web font, to minimise the flash of unstyled text (FOUT). If for some reason this has not happened use [Font Style Matcher](https://meowni.ca/font-style-matcher/) for comparing web fonts with system fonts.
* Update the Font Face Observer script in the `head` of the page template(s) with the relevant `font-family` name(s) - see [Font Face Observer on GitHub](https://github.com/bramstein/fontfaceobserver) for details, including how to manage multiple font families.

### Improving the experience for return visits

As covered in [How We Load Web Fonts Progressively](https://www.filamentgroup.com/lab/font-events.html#last-step%3A-optimizing-return-visits) it's possible to use a cookie to enable the web font as soon as possible.