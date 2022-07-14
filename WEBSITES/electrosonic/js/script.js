$(function () {

    (function () {
        const requiredScrollPos = 100;
        // header class
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > requiredScrollPos) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });
    })();

});