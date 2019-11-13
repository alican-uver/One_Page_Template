//Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    mouseDrag: false,
    nav: true,
});

//Popup

const popup = document.getElementById("popup");
const btnOpen = document.querySelector(".btnOpen");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", open);
btnClose.addEventListener("click", close);




function open(){
    popup.style.display = "block";
    
    
}
function close(){
    popup.style.display = "none";
}
