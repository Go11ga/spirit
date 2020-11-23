/* Start screen button and nav */
;(function(){

    // DOM Elements
    let cover = document.querySelector("#cover");
    let header = document.querySelector("#header");
    let nav = document.querySelector("#nav");
    let burger = document.querySelector("#burger");
    let introBtn = document.querySelector("#intro-btn");
    let intro = document.querySelector("#intro");
    let elemsToHide = document.querySelectorAll(".elem-hide");

    // Height of intro section
    let introH = intro.scrollHeight; //731

    // Events
    window.addEventListener( "load", pageInit);

    function pageInit(){
        cover.style.height = introH + "px";
    }

    introBtn.addEventListener("click",function(){
        let screenW = document.body.offsetWidth;

        if(screenW > 991){
            nav.classList.toggle("nav--show");
        }else{
            burger.classList.toggle("burger--show");
        }

        if(header.classList.contains("header--height")){
            nav.classList.toggle("nav--show");
        }

        this.classList.toggle("intro__btn--active");

        if(this.classList.contains("intro__btn--active")){
            cover.style.height = "auto";
        }else{
            cover.style.height = introH + "px";
        }
    });

    burger.addEventListener("click",function(){
        nav.classList.toggle("nav--show");
        header.classList.toggle("header--height");
    });

}());









