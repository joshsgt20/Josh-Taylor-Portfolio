
//Buttons to display menu items//
$(document).ready(function(){
  $("#button1").click(function(){
    $("#FoodItems").toggle();
  });
});

$(document).ready(function(){
  $("#button2").click(function(){
    $("#Drinks").toggle();
  });
});





//javascript for Modal Popups //

    var modalparent = document.getElementsByClassName("Modal");

    // Get the button that opens the modal

    var modal_btn_multi = document.getElementsByClassName("ItemButton");

    // Get the <span> element that closes the modal
    var span_close_multi = document.getElementsByClassName("close_multi");

    // When the user clicks the button, open the modal
    function setDataIndex() {

        for (i = 0; i < modal_btn_multi.length; i++)
        {
            modal_btn_multi[i].setAttribute('data-index', i);
            modalparent[i].setAttribute('data-index', i);
            span_close_multi[i].setAttribute('data-index', i);
        }
    }
    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].onclick = function() {
            var ElementIndex = this.getAttribute('data-index');
            modalparent[ElementIndex].style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span_close_multi[i].onclick = function() {
            var ElementIndex = this.getAttribute('data-index');
            modalparent[ElementIndex].style.display = "none";
        };
    }
    window.onload = function() {
    setDataIndex();
    };

    window.onclick = function(event) {
        if (event.target === modalparent[event.target.getAttribute('data-index')]) {
            modalparent[event.target.getAttribute('data-index')].style.display = "none";
        }


        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

//When a box is clicked, the animation triggers//









  document.querySelectorAll("#button3").forEach(function(DisplayMenuItems) {
      DisplayMenuItems.addEventListener("click", function() {

        gsap.from("#BaconBread", {
          duration: 1.5,
          x: 200,
          opacity: 0,
          delay: 1,
        });

        gsap.from("#Bacon", {
          duration: 1.5,
          x: -200,
          opacity: 0,
          delay: 2,
        });



        gsap.from("#CheeseBread", {
          duration: 1.5,
          x: 200,
          opacity: 0,
          delay: 1,
        });

        gsap.from("#Cheese", {
          duration: 1.5,
          x: -200,
          opacity: 0,
          delay: 2,
        });



        gsap.from("#ChickenBread", {
          duration: 1.5,
          x: 200,
          opacity: 0,
          delay: 1,
        });

        gsap.from("#Chicken", {
          duration: 1.5,
          x: -200,
          opacity: 0,
          delay: 2,
        });


        gsap.from("#FalafelBread", {
          duration: 1.5,
          x: 200,
          opacity: 0,
          delay: 1,
        });

        gsap.from("#Falafel", {
          duration: 1.5,
          x: -200,
          opacity: 0,
          delay: 2,
        });


        gsap.from("#HamBread", {
          duration: 1.5,
          x: 200,
          opacity: 0,
          delay: 1,
        });

        gsap.from("#Ham", {
          duration: 1.5,
          x: -200,
          opacity: 0,
          delay: 2,
        });

        gsap.from("#TunaBread", {
          duration: 1.5,
          x: 200,
          opacity: 0,
          delay: 1,
        });

        gsap.from("#Tuna", {
          duration: 1.5,
          x: -200,
          opacity: 0,
          delay: 2,
        });


        gsap.from(".ProductDescription", {
          duration: 1,
          scale: 0.5,
          opacity: 0,
          stagger: 0.2,
          ease: "back",
          force3D: true,

        });
      });
    });

    document.querySelectorAll("#button4").forEach(function(DisplayMenuItems) {
        DisplayMenuItems.addEventListener("click", function() {


        gsap.from("#AmericanoCoffee", {
          duration: 2,
          height: 0,
          delay: 1,
          ease: "power4",
        });


        gsap.from("#AmericanoSteam", {
          duration: 5,
          delay: 2.5,
          height: 0,
          ease: "power3",
        });



        gsap.from("#LatteCoffee", {
          duration: 2,
          height: 0,
          delay: 1,
          ease: "power4",
        });


        gsap.from("#LatteMilk", {
          duration: 3,
          delay: 2.5,
          height: 0,
          ease: "power4",
        });

        gsap.from("#LatteFoam", {
          duration: 2,
          delay: 4.5,
          height: 0,
          ease: "power2",
        });


                gsap.from("#Chai", {
                  duration: 2,
                  height: 0,
                  delay: 1,
                  ease: "power4",
                });


                gsap.from("#ChaiMilk", {
                  duration: 3,
                  delay: 2.5,
                  height: 0,
                  ease: "power4",
                });

                gsap.from("#HotChoc", {
                  duration: 2,
                  height: 0,
                  delay: 1,
                  ease: "power4",
                });


                gsap.from("#HotChocMilk", {
                  duration: 3,
                  delay: 2.5,
                  height: 0,
                  ease: "power4",
                });

                gsap.from("#HotChocFoam", {
                  duration: 3,
                  delay: 4.5,
                  height: 0,
                  ease: "power4",
                });

                gsap.from("#CappuccinoCoffee", {
                  duration: 2,
                  height: 0,
                  delay: 1,
                  ease: "power2",
                });


                gsap.from("#CappuccinoMilk", {
                  duration: 2,
                  delay: 2.5,
                  height: 0,
                  ease: "power2",
                });

                gsap.from("#CappuccinoFoam", {
                  duration: 3,
                  delay: 4,
                  height: 0,
                  ease: "power4",
                });


                gsap.from("#MochaCoffee", {
                  duration: 1.5,
                  height: 0,
                  delay: 1,
                  ease: "power2",
                });


                gsap.from("#Mocha", {
                  duration: 1.5,
                  delay: 2.5,
                  height: 0,
                  ease: "power2",
                });

                gsap.from("#MochaMilk", {
                  duration: 1.5,
                  delay: 4,
                  height: 0,
                  ease: "power4",
                });

                gsap.from("#MochaCream", {
                  duration: 2,
                  delay: 5,
                  height: 0,
                  ease: "power4",
                });


                gsap.from(".ProductDescription", {
                  duration: 1,
                  scale: 0.5,
                  opacity: 0,
                  stagger: 0.2,
                  ease: "back",
                  force3D: true,

                });


      });
    });

    gsap.from("#button1", {
      duration: 1,
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: "back",
      force3D: true
    });

    gsap.from("#button2", {
      duration: 1,
      scale: 0.5,
      opacity: 0,
      stagger: 0.3,
      ease: "ease",
      force3D: true
    });


    gsap.from(".EasterCakes", {
      duration: 2,
      x: -200,
      opacity: 0,
      ease: "power4",
      force3D: true
    });

    gsap.from(".EasterCakes2", {
      duration: 2,
      x: 200,
      opacity: 0,
      ease: "power4",
      force3D: true
    });

      document.querySelectorAll("#button1").forEach(function(DisplayFoodItems) {
          DisplayFoodItems.addEventListener("click", function() {
        gsap.from("#button3", {
          scale: 0.5,
          opacity: 0,
          stagger: 0.2,
          ease: "back",
          force3D: true
        });

              });
            });

                  document.querySelectorAll("#button2").forEach(function(DisplayDrinkItems) {
                      DisplayDrinkItems.addEventListener("click", function() {
                    gsap.from("#button4", {
                      scale: 0.5,
                      opacity: 0,
                      stagger: 0.2,
                      ease: "back",
                      force3D: true
                    });

                          });
                        });
