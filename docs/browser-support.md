# Amplify browser support

## Default browser support

Amplify currently supports the range of [browsers recommended by the GOVUK Service Manual](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

## How to update Amplify browser support

### Browserslist in `package.json`

The `package.json` file in the project root includes a browserslist entry. This is the single source of truth for browser support within Amplify and is referenced by the Autoprefixer NPM package (which adds the necessary vendor prefixes to the CSS files) and by the Babel/Webpack NPM packages (which transpile the JavaScript to support the specified browsers).

### CSS media query in `head`

[Choose the media query most relevant for your needs](https://github.com/Fall-Back/CSS-Mustard-Cut).