/**
 * Customising the Splide carousel for Amplify
 * @see https://github.com/Splidejs/splide
 */

import Splide from "@splidejs/splide";

// Get all carousel instances
var splideArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="carousel"]'));

if (splideArray) {
    // Loop through them
    splideArray.forEach(function (carousel) {
        new Splide(carousel).mount();
    });
}