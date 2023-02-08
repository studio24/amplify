---
title: Get Started
navItem: true
root: true
markdown: true
navOrder: 1
components:
    note:
        type: core-components
        name: notes
        data:
            title: A living guide
            message: | 
                <p>This is a living guide, running off your project Sass and JavaScript. It starts as the default, clean starter kit. <em>It is not meant to be styled nicely.</em></p>
                <p>As you write your project's Sass and JavaScript, this guide will pick up those changes.</p>
                <p>You can delete this directory <code>(/amplify)</code> if you don't need to refer to these docs or don't want to include it in your finished project.</p>
            type: info
---

{{ pageComponents(components) }}

<div class="component component--text">

1.  Grab an up-to-date copy of Amplify from [GitHub](https://github.com/studio24/amplify)
2.  Copy the following items from Amplify into your project (probably into the theme directory, but it will depend on your project setup):
    -   `/assets-src` directory
    -   `.nvmrc` file - update to the current LTS version
    -   `package.json` and `package-lock.json` files
    -   `svgo.config.js` file
    -   `webpack.config.js` file
3.  Check that the config `from` and `to` paths in `package.json` are correct for your project setup
4.  Check the `context` and `output` paths in `webpack.config.js` are correct for your project setup
5.  Optional: copy the `/amplify` directory into the webroot
6.  Follow the command line instructions to [install project dependencies](https://github.com/studio24/amplify) and check there are no errors when building the front-end assets
7.  Make sure the `html` element in your web page template has an appropriate `lang` attribute and the `no-js` class
8.  Make sure your web page template includes the following (which can be copied from any of the example pages in the `/amplify` directory):
    -   link to the core stylesheet
    -   link to the advanced stylesheet, including the media query to determine which browsers it will be served to
    -   link to the print stylesheet
    -   `script` for the Font Face Observer library in the `head`
    -   another `script` in the `head`, which checks when the desired web font is loaded, adds the `fonts-loaded` class to `html`, adds the main JavaScript file to the `head` and switches the `no-js` class to `js`
    
</div>