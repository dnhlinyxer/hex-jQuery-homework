$(document).ready(function () {
    // totop
    $('.totop a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1500);
    });

    // navbar dropdownlist
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('.dropdown').removeClass('active');
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find('.dropdown-list').slideUp();
    });
    // lightbox
    lightbox.option({
        'resizeDuration': 1000,
        'positionFromTop': 200,
    });

    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 2000,
        },
        effect: 'fade',
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "bullets",
            clickable: true, // not working?
        },
    });
});