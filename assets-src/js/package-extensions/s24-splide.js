/**
 * Customising the Splide carousel for Amplify
 * @see https://github.com/Splidejs/splide
 */

import Splide from "@splidejs/splide";
import {exists} from '../main/_exists.helper';

// Get all carousel instances
var splideArray = Array.prototype.slice.call(document.querySelectorAll('[data-component="carousel"]'));

if (exists(splideArray)) {
    // Loop through them
    splideArray.forEach(function (carousel) {
        new Splide(carousel).mount();
    });
}