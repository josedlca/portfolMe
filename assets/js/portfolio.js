var nav= document.querySelector(".navigation")
var works= document.querySelector('#works');
var images = document.querySelector('#images');
var arrowUp = document.querySelector('#arrow-up');
var selectNav = document.getElementsByClassName('select-nav');
var bars=document.getElementById("bars");
var altura = nav.offsetTop;
var queryBurguer = window.matchMedia("(max-width:767px)");


/////////////////////////////////////////////////////////////////
//////////////////////////home slider///////////////////////////
///////////////////////////////////////////////////////////////
$(function(){
    $("#images").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:400,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        center:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
$(function(){
    $("#slider .container").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:400,
        loop:true,
        autoplayHoverPause:true,
        // nav:true,
        center:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/////////////////////////////////////////////////////////////////
///////////en que pantalla va a aparecer el burguer/////////////
///////////////////////////////////////////////////////////////
function myFunction(queryBurguer) {
    if (queryBurguer.matches) { 
        bars.style.display='';
        nav.classList.add('desapear');
        works.classList.add('desapear');
        images.classList.remove('desapear');
        deploy();
    } else {
        bars.style.display="none";
        works.classList.remove('desapear');
        images.classList.add('desapear');
    }
}
/////////////////depliega el nav ////////////////////////////////
myFunction(queryBurguer) ;
queryBurguer.addListener(myFunction);
function deploy(){
    bars.addEventListener("click",function(){
        nav.classList.toggle('desapear');
    });
};

///////////////////////////////////////////////////////////////
////////////////////////scrool top////////////////////////////
///////////////////////////////////////////////////////////// 
window.addEventListener('scroll',function(){
    if(window.pageYOffset >altura){
        nav.classList.add('stiky');
    }else{
        nav.classList.remove('stiky');
    }
});
// arrow up function//////////////
arrowUp.classList.add('desapear');
window.addEventListener('scroll',function(){
    if(window.pageYOffset >100){
        arrowUp.classList.remove('desapear');
    }else{
        arrowUp.classList.add('desapear');
    }
});


///////////////////////////////////////////////////////////////
////////////////////////progres bar////////////////////////////
///////////////////////////////////////////////////////////// 
$(function(){
    $("#skills").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width:$(this).attr("aria-valuenow") + "%"
            }, 900);
        });
        this.destroy();
    }, {
        offset:'bottom-in-view'
    });
});