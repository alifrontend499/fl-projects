// header fixed
(function () {
    const elemHeaderTopElem = document.querySelector('#header-top');
    const headerElem = document.querySelector('header');
    if (elemHeaderTopElem != null) {
        const offsetTop = elemHeaderTopElem.offsetHeight;
        window.addEventListener('scroll', function () {
            const topPosition = window.pageYOffset || document.documentElement.scrollTop;
            if (topPosition > offsetTop) {
                headerElem.classList.add('active')
            } else {
                headerElem.classList.remove('active')
            }
        })
    }
})();

// mobile menu
(function () {
    const mobileBtnElem = document.querySelector('.header-menu .mobile-menu-btn');
    const mobileOverlayElem = document.querySelector('.header-menu .mobile-menu-overlay');
    const mobileMenuElem = document.querySelector('.header-menu .all-menu');
    if (mobileBtnElem != null && mobileOverlayElem != null && mobileMenuElem != null) {
        // open menu
        mobileBtnElem.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (mobileMenuElem.classList.contains('active')) {
                mobileMenuElem.classList.remove('active')
            } else {
                mobileMenuElem.classList.add('active')
            }
        });

        // close menu
        mobileOverlayElem.addEventListener('click', function (ev) {
            ev.preventDefault();
            mobileMenuElem.classList.remove('active')
        });
    }
})();