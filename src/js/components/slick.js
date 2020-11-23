//= ../../../node_modules/slick-carousel/slick/slick.js

/* Slider Slick */
;(function(){

    /* Team slider */
    let team = $("#team");

    team.slick({
        arrows: false,
        dots: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    }
            }
        ]
    });



    /* Clients slider */
    let clients = $("#clients");

    clients.slick({
        arrows: false,
        dots: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                    }
            }
        ]
    });



    /* Testimonials slider */
    let testimonials = $("#testimonials-slider");

    testimonials.slick({
        arrows: false,
        dots: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    });

}());




