function AnimateMenu(x) {
  x.classList.toggle("change");
}



var menu = document.querySelector(".MobileMenu")
var ham = document.querySelector(".Hamburger")
var menuIcon = document.querySelector(".MobileMenuLink")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".MobileMenuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)




let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove',cursor)

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link =>{
    link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove('link-grow');
    link.classList.remove("hovered-link");
    });

    link.addEventListener('mouseover', () =>{
        mouseCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
        });
})


const WelcomeLinks = document.querySelector('.WelcomeLinks');
const Slider = document.querySelector('.Slider');
const Logo = document.querySelector('#Title');
const Nav = document.querySelector('#Menu');
const Welcome = document.querySelector('.Welcome');
const Hamburger = document.querySelector('.Hamburger');
const Intro = document.querySelector('.Intro_Text');


const tl = new TimelineMax();

tl.fromTo(Slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
.fromTo(Welcome, 1, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "=0")
.fromTo(Intro, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0")
.fromTo(WelcomeLinks, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0")
.fromTo(Logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=2")
.fromTo(Nav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=2.5")
.fromTo(Hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=2")

