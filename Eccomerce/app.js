


function ShowFilters() {
  document.getElementById("FilterProducts").classList.toggle("DisplayFilters");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('DisplayFilters')) {
        openDropdown.classList.remove('DisplayFilters');
      }
    }
  }
}




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



$(document).ready(function(){
  $("#DisplayFilters").click(function(){
    $("#FilterProducts").slideToggle("slow");
  });
});


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "flex"; 
  setTimeout(carousel, 5000); 
}