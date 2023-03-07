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

// --- popup-window ----

const cardInfo = {
  imageURL: "./assets/tonic.png",
  name: "Tonic",
  company: "CANOPY",
  role: "Back End Dev",
  year: "2015",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
  tech: ["html", "css", "javascript"],
  projectURL: "",
  firstBtnId: "sourceBtn",
  secondBtnId: "demoBtn"
};

const modalContainer = document.querySelector('.modal-container');
const popupCard = document.querySelector('.cards-modal');

const firstCardBtn = document.querySelector('#first-card');

function popup() {
  modalContainer.style.display = 'block';
  popupCard.innerHTML = `
  <h2 class="h-text-name">${cardInfo.name}</h2>

  <img src="${cardInfo.imageURL}" alt="Desktop Project Live Preview" class="project-preview">

  <ul class="skills-list">
    <li class="checkbox"><span class="info-text">${cardInfo.infoText}</span></li>
    <li class="checkbox"><i class="ri-checkbox-blank-circle-fill dots"></i>
      <span class="info-text">${cardInfo.role}</span>
    </li>
    <li class="checkbox"> <i class="ri-checkbox-blank-circle-fill dots"></i>
      <span class="info-text">${cardInfo.year}</span>
    </li>
  </ul>

  <div class="project-info">
    <p class="project-description">${cardInfo.description}</p>

    <ul class="tech-list">
      <li class="project-tech">${cardInfo.tech[0]}</li>
      <li class="project-tech">${cardInfo.tech[1]}</li>
      <li class="project-tech">${cardInfo.tech[2]}</li>
    </ul>
    <button class="outlined-button ${cardInfo.firstBtnId}">See Live</button>
    <button class="outlined-button ${cardInfo.secondBtnId}">See Source</button>

  </div>
`;
}

firstCardBtn.addEventListener('click', popup);
