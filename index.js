// clouds animations

let clouds = document.querySelector(".clouds");
let home = document.querySelector(".home-section");

home.addEventListener("mousemove", function(e) {
    let x = -e.clientX * .02;
    let y = -e.clientY * .1;
    clouds.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("scroll", function(e) {
    clouds.style.top = 10 + window.scrollY * -1.15 + "px";
});

// Check out button tilt effect

let homeButton = document.querySelector(".home-button")

homeButton.addEventListener("mousemove", function(e) {
    let turnY = -(e.offsetX - homeButton.clientWidth / 2) * .25;
    let turnX = -(e.offsetY - homeButton.clientHeight / 2) * 1.2;

    homeButton.style.transform = `perspective(800px)  translate(0, 10px) scale(1.3) rotateY(${turnY}deg) rotateX(${turnX}deg)`;
    document.querySelector("#special").style.transform = "translateZ(40px)";
});

homeButton.addEventListener("mouseleave", function(e) {
    let turn = 0;
    homeButton.style.transform = `rotateY(${turn}deg)`;
})