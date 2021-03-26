///Slideshow JS
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slideshow");
  var Dots = document.getElementsByClassName("Dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < Dots.length; i++) {
    Dots[i].className = Dots[i].className.replace(" background", "");
  }
  slides[slideIndex-1].style.display = "block";
  Dots[slideIndex-1].className += " background";
  setTimeout(showSlides, 8000);
}


//FAQ  JS

$(document).ready(function(RevealFAQ){
  $("#FAQ1").click(function(RevealFAQ){
    $("#Answer1").slideToggle("slow");
  });
});


$(document).ready(function(RevealFAQ){
  $("#FAQ2").click(function(RevealFAQ){
    $("#Answer2").slideToggle("slow");
  });
});


$(document).ready(function(RevealFAQ){
  $("#FAQ3").click(function(RevealFAQ){
    $("#Answer3").slideToggle("slow");
  });
});


$(document).ready(function(RevealFAQ){
  $("#FAQ4").click(function(RevealFAQ){
    $("#Answer4").slideToggle("slow");
  });
});


//Random Generaor

var images = ["SVG's/americano.svg","SVG's/bac & egg.svg","SVG's/capp.svg", "SVG's/chai.svg",
"SVG's/cheese & onion.svg","SVG's/chick & bac.svg","SVG's/falafel & rocket.svg","SVG's/ham & rock.svg",
"SVG's/hot choc.svg","SVG's/latte.svg", "SVG's/mocha.svg","SVG's/tun & sweet.svg"];

function RandomSelect()
{
var random = Math.floor(Math.random() * images.length);
document.getElementById("RewardPicture").src = images[random];
}



document.querySelectorAll("#Reward").forEach(function(Reward) {
    Reward.addEventListener("click", function() {


      gsap.from("#RewardPicture", {
        duration: 1,
        scale: 0.1,
        opacity: 0,
        delay: 0.2,
        stagger: 0.2,
        ease: "power1.inOut",
        force3D: true,
        rotation: 360,
      });
    });
  });


  //Modal Popup for rewarded

  // Get the modal, button that opens it and the X to close it
var modal = document.getElementById("Modal");


var btn = document.getElementById("RewardButton");


var span = document.getElementsByClassName("CloseButton")[0];

//Open modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the X is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when you click anywhere
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



gsap.from(".Images", {
  duration: 2,
  y: 200,
  opacity: 0,
  stagger: 1,
  ease: "power2",
  force3D: true
});

gsap.from(".Caption", {
  duration: 3,
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  ease: "power4",
  force3D: true
});

gsap.from(".FAQ", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  stagger: 0.2,
  ease: "back",
  force3D: true
});
