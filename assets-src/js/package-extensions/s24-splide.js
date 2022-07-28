/**
 * Customising the Splide carousel for Amplify
 * @see https://github.com/Splidejs/splide
 */

import Splide from "@splidejs/splide";

var elms = document.getElementsByClassName( 'splide' );

// Needed to allow for multiple carousel instances on a page
for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ] ).mount();
}