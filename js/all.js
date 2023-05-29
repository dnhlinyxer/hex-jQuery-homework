$(document).ready(function () {
    // totop
    function showTotop() {
        // console.log($(this).scrollTop());
        // 向下滾動300px才顯示
        if ( $(this).scrollTop() > 300 ) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    }
    $(window).scroll(showTotop);
    
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
            clickable: true,
        },
    });
});