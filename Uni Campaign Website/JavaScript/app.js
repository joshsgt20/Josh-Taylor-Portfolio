let menuOut = false;

toggleMenu = () => {
  let menu = document.getElementById("Menu");
  if (menuOut) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
  menuOut = !menuOut;
};

delayNavigation = evt => {
  evt.preventDefault();
  setTimeout(() => {
    window.location.href = evt.target.getAttribute("href");
  }, 400);
};

document.getElementById("menuButton").addEventListener("click", toggleMenu);
let menuLinks = document.querySelectorAll(".SideMenuLink a");
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", delayNavigation);
  menuLinks[i].addEventListener("click", toggleMenu);
}



const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
