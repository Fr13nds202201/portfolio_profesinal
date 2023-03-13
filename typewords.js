//############ toggle icon narvar  #################
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//############ escritura typed  #################

var type = new Typed(".multiple-text",{
    strings:["Frontend Developer", "Autodidact","Creative"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var type1 = new Typed(".heading", {
    strings:["My `<span>Skills</span>`"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var type2 = new Typed(".project", {
    strings:["Lates `<span>Projects</span>`"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
var type3 = new Typed(".contact__me", {
    strings:["Contact `<span>me !</span>`"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})



//############ Scroll Section Active link#################
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll=()=>{
//     sections.array.forEach(element => {
        
//     });
// }

//############  remove toggle icon and navbar when click link #################


