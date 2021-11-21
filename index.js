// clouds animations

let clouds = document.querySelector(".clouds");
let home = document.querySelector(".home-section");

// Clouds move

home.addEventListener("mousemove", function (e) {
  let x = -e.clientX * 0.02;
  let y = -e.clientY * 0.1;
  clouds.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("scroll", function (e) {
  clouds.style.top = 10 + window.scrollY * -1.15 + "px";
});

// Check out button tilt effect
/*

let homeButton = document.querySelector(".home-button");

homeButton.addEventListener("mousemove", function(e) {
    let turnY = -(e.offsetX - homeButton.clientWidth / 2) * .25;
    let turnX = (e.offsetY - homeButton.clientHeight / 2);

    homeButton.style.transform = `perspective(1000px)  translate(0, 10px) scale(1.3) rotateY(${turnY}deg) rotateX(${turnX}deg)`;
    document.querySelector("#special").style.transform = "translateZ(40px)";
});

homeButton.addEventListener("mouseleave", function(e) {
    let turn = 0;
    homeButton.style.transform = `rotateY(${turn}deg)`;
});
*/

// menu bar drop down

let menuButton = document.querySelector("#menu-button");
let menu = document.querySelectorAll(".drop-down-menu .tabs");
menuButton.addEventListener("mouseover", function (e) {
  menu.forEach((menu_item) => {
    menu_item.classList.add("active");
  });
});

menu.forEach(function (menu_item) {
  menu_item.addEventListener("mouseover", function () {
    menu.forEach((menu_item) => {
      menu_item.classList.add("active");
    });
  });

  menu_item.addEventListener("mouseleave", function () {
    menu.forEach((menu_item) => {
      menu_item.classList.remove("active");
    });
  });
});

const projects = document.querySelectorAll(".project");
console.log(projects);
projects.forEach((project_item) => {
  project_item.setAttribute("data-tilt", "data-tilt");
  project_item.setAttribute("data-tilt-scale", "1.1");
  project_item.setAttribute("data-tilt-scale", "1.1");
});
