$(function () {
    'use strict';
    // Banner slider start
    $('.banner_main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.banner_sm_slider_inner',
        speed: 1500,
        autoplay: false,
    });
    $('.banner_sm_slider_inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.banner_main_slider',
        dots: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        arrows: false,
        speed: 1500,
    });

    //Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //service slider
    $('.service_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1500,
    });

    //service slider Mobile Version
    $('.service_slider_mv').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1500,
    });

    //venobox
    $(document).ready(function () {
        $('.venobox').venobox({
            spinner: 'three-bounce',
            spinColor: '#d9b257',
            closeBackground: '#161617',
        });
    });

    //Testimonial Slider
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 1500,
    });

    //manu Fix
    var navoff = $('.main_manu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_manu').addClass('menu_fix');
        } else {
            $('.main_manu').removeClass('menu_fix');
        }

    });








    $(document).ready(function () {

        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller({
            barColor: '#fc6'
        });
        $('#bar4').barfiller({
            barColor: '#900',
            duration: 3000
        });

    });









});
