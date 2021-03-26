
window.onscroll = function() {KeepAtTop()};

var header = document.getElementById("myHeader","control");
var topmenu = header.offsetTop;

function KeepAtTop() {
  if (window.pageYOffset > topmenu) {
    header.classList.add("topmenu");
  } else {
    header.classList.remove("topmenu");
  }
}


function openNav() {
  document.getElementById("Sidenav").style.width = "15vw";
  document.getElementById("SideBarContainer").style.marginLeft = "15vw";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("SideBarContainer").style.marginLeft= "0";
}


gsap.from("#LogoCoffee", {
  duration: 3,
  delay: 0.5,
  height: 0,
  ease: "power4",
  repeat: 10000,
  yoyo: true,
  repeatDelay: 0.5,

});
