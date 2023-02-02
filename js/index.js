$(document).ready(function(){
// hero-slider
$('#home').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: ['Prev','Next'],
    items:1,
    dots: false,
    smartSpeed: 1000,
    responsive:{
        0:{
         
        },
        600:{
         
        },
        1000:{
         
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    
})
});
//  navbar
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})