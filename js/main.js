$(document).ready(function () {
    // $('.header__text-block').slick({
    //     autoplay: true,
    //     infinite: true,
    //     // speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     dots: true,

    // });

    $('.slider').slick({
        autoplay: true,
        speed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.btn-icon-arrow__slider-prev'), //use my custom icon
        nextArrow: $('.btn-icon-arrow__slider-next'), //use my custom icom

    });

});


