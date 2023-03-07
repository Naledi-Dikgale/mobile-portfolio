var hamburgerButton = document.querySelector(".hamburger");

var hamburgerMenu = document.querySelector(".hamburger-menu");

var close = document.querySelector(".close");

var portfolio = document.querySelector("#portfolio-link");
var about = document.querySelector("#about-link");
var contact = document.querySelector("#contact-link");


hamburgerButton.onclick = function () {
  hamburgerMenu.style.display = "block";
}

close.onclick = function () {
  hamburgerMenu.style.display = "none";
}

portfolio.onclick = function () {
  hamburgerMenu.style.display = "none";
}

about.onclick = function () {
  hamburgerMenu.style.display = "none";
}

contact.onclick = function () {
  hamburgerMenu.style.display = "none";
}