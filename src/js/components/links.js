/* Links shut down */
;(function(){

    let aboutLink = document.querySelector("#about-link");
    let filterLinks = document.querySelectorAll(".filter__link");

    let arr = [];

    arr.push(aboutLink);

    for(let elem of filterLinks){
        arr.push(elem);
    }

    for (let elem of arr){
        elem.addEventListener("click",function(){
            event.preventDefault();
        });
    }

}());

