/* Header move */
;(function(){

    let header = document.querySelector('#header');

    window.addEventListener('scroll',function(){
        if(window.pageYOffset >= header.offsetHeight){
            header.classList.add('header--active');
        }else{
            header.classList.remove('header--active');
        }
    });

}());

