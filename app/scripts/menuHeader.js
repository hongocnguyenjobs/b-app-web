"use strict";

/* Main menu */
const menuHeader = (() => {
    // Menu mobile to desktop when resize screen
    let resize;
    $(window).resize(function () {
        clearTimeout(resize);
        resize = setTimeout(function () {
            let w = $(window).width();
            if (w >= 768) {
                let menu = $('#headerMobileMenu');
                if (menu.hasClass('active')) {
                    menu.removeClass('active ');
                    $('body').removeClass('m-lock-y');
                }
            }
        }, 300);
    });

    // Menu mobile
    $('#callHeaderMobileMenu').click(function () {
        let menu = $('#headerMobileMenu');
        if (!menu.hasClass('active')) {
            menu.addClass('active ');
            $('body').addClass('m-lock-y');
        } else {
            menu.removeClass('active ');
            $('body').removeClass('m-lock-y');
        }
    });
})();

export default menuHeader;