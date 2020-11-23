/* Smooth scroll */
;(function(){
    // плавная прокрутка для элементов nav
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data("scroll");
        let blockOffset = $(blockId).offset().top - $("#header").outerHeight();

        $(".nav__item").removeClass("nav__item--active");
        $this.addClass("nav__item--active");

        $("html,body").animate({
            scrollTop: blockOffset
        },1000);

    });

    // для элемента home
    $("#nav-item-home").on("click", function(event){
        event.preventDefault();

        $(".nav__item").removeClass("nav__item--active");
        $("#nav-item-home").addClass("nav__item--active");

        $("html,body").animate({
            scrollTop: 0
        },1000);
    });

    // для logo
    $("#header-logo").on("click", function(event){
        event.preventDefault();

        $(".nav__item").removeClass("nav__item--active");

        $("html,body").animate({
            scrollTop: 0
        },1000);
    });

}());

