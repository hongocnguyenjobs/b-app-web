"use strict";

/* show password */
const owlCarousel = (() => {
    $('.detail-house__owl-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        loop:true,
        nav: false,
        dots: true,
        items: 1,
    })
})();

export default owlCarousel;