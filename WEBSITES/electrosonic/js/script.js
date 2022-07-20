$(function () {

    // FUNC | FIXED HEADER
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

    // FUNC | MOBILE HEADER TOGGLE
    (function () {
        // toggling menu
        $(document).on('click', '.mobile-menu-toggle', function (ev) {
            ev.preventDefault();
            if ($(this).hasClass('mml-open')) {
                $('.menu-links').addClass('active');
            } else {
                $('.menu-links').removeClass('active');
            };
        });

        // closing menu on overlay click
        $(document).on('click', '.menu-links', function (ev) {
            ev.preventDefault();
            $(this).removeClass('active');
        });
        // stopping menu from closing on menu click
        $(document).on('click', '.menu-links > .inner', function (ev) {
            ev.stopPropagation();
        });
    })();

    // FUNC | MOBILE FILTER BUTTON
    (function () {
        // toggling menu
        $(document).on('click', '.mobile-filter-btn', function (ev) {
            ev.preventDefault();
            $(this).parent().next('.left-bar').slideToggle(200)
        });
    })();

    // FUNC | MOBILE TAB BUTTON
    (function () {
        // toggling menu
        $(document).on('click', '#nav-tab > .tb-item', function (ev) {
            if ($(window).width() < 768) {
                $('html, body').animate({
                    scrollTop: $('.tab-content').offset().top - (70 + 10)
                });
            }
        });
    })();

});