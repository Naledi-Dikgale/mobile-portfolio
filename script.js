
var projects = [
  {
      imageURL: "./assets/tonic.png",
      name: "Tonic",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "p1",
      btnId: "btn1"
  },
  {
      imageURL: "./assets/Multi-Post.png",
      name: "Multi-Post Stories",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "p2",
      btnId: "btn2"
  },
  {
      imageURL: "./assets/tonic.png",
      name: "Tonic",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "p3",
      btnId: "btn3"
  },
  {
      imageURL: "./assets/Multi-Post.png",
      name: "Multi-Post Stories",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "p4",
      btnId: "btn4"
  }
];

let hamburger = document.querySelector(".hamburger");
let navlink = document.querySelectorAll(".nav-links");
let portfolio = document.getElementById("portfolio");

navlink.forEach(element => {
  element.onclick = () => {
      nav = document.querySelector(".overall-navi");
      nav.classList.toggle("dropdown");
  }
});
hamburger.onclick = () => {
  nav = document.querySelector(".overall-navi");
  nav.classList.toggle("dropdown");
}
createProject = (html) => {
  let proj = document.createElement('template');

  proj.innerHTML = html.trim();
  return proj.content.firstElementChild;
}
projects.forEach(element => {
  portfolio.appendChild(
      createProject(`
            <div class="portfolio">
          <div class="project">
            <img src="${element.imageURL}" alt="${element.name} Live Preview Image" class="project-preview">
    
            <div class="project-info">
              <h2 class="h-text project-name">${element.name}</h2>
              <ul class="skills-list">
                <li class="checkbox"><span class="info-text">${element.company}</span></li>
                <li class="checkbox"><i class="ri-checkbox-blank-circle-fill dots"></i>
                  <span class="info-text">${element.role}</span>
                </li>
                <li class="checkbox"> <i class="ri-checkbox-blank-circle-fill dots"></i>
                  <span class="info-text">${element.year}</span>
                </li>
              </ul>
              <p class="project-description">${element.description}</p>
              <ul class="tech-list" id = "${element.id}">
              
              </ul>
              <button class="outlined-button btn" id="${element.btnId}">See Project</button>
            </div>
          </div>
        </div>
            `)
  );
})

projects.forEach(element => {
  element.tech.forEach(elem => {
      techStack = createProject(`<li class="project-tech">${elem}</li>`);
      tlist = document.getElementById(`${element.id}`);
      tlist.append(techStack)
  }
  );

  let button = document.getElementById(`${element.btnId}`);

  button.onclick = () => {

      // Display Modal
      let modal = document.querySelector(".modal");

      modal.innerHTML = `
             
                <div class="project">
          <div class="modal-top">
            <div class="modal-title-close">
              <h2 class="h-text project-name">${element.name}</h2><i class="fa-solid fa-xmark close-modal"></i>
              </div>
            <ul class="skills-list">
              <li class="checkbox"><span class="info-text">${element.company}</span></li>
              <li class="checkbox"><i class="ri-checkbox-blank-circle-fill dots"></i>
                <span class="info-text">${element.role}</span>
              </li>
              <li class="checkbox"> <i class="ri-checkbox-blank-circle-fill dots"></i>
                <span class="info-text">${element.year}</span>
              </li>
            </ul>
          
            <img src="${element.imageURL}" alt="${element.name} Live Preview Image" class="project-preview">
    
          <div class="project-info">
    
    
            <p class="project-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quasi eum aut totam, ut odio ipsam doloribus atque molestiae porro repellendus ullam doloremque alias perferendis, ducimus sapiente quod asperiores quas.
            </p></div>
            <ul class="tech-list" id = "modal${element.id}">
    
            </ul>
            <div class="modal-buttons">
              <button class="outlined-button btn"><span>See live</span><i class="ri-edit-circle-line"></i></button><button class="outlined-button btn"><span>See Source</span> <i class="fa-brands fa-github"></i></button>
            </div>
    
          </div>
          </div>
              `
      let modaltech = document.querySelector(`#modal${element.id}`)
      element.tech.forEach(elem => {
          techStack = createProject(`<li class="project-tech">${elem}</li>`);
          modaltech.append(techStack)
      }
      );

      console.log("reached")
      modal.style.display = "block"
      closeModal = document.querySelector(".close-modal");
      closeModal.onclick = () => {
          modal.style.display = "none"
      }
  }
})

var desktopProjects = [
  {
      imageURL: "./assets/project-1.png",
      name: "Tonic",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "d1",
      btnId: "dbtn1"
  },
  {
      imageURL: "./assets/project-2.png",
      name: "Multi-Post Stories",
      company: "CANOPY",
      role: "Full Stack Dev",
      year: "2015",
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "d2",
      btnId: "dbtn2"
  },
  {
      imageURL: "./assets/project-3.png",
      name: "Facebook 360",
      company: "FACEBOOK",
      role: "Full Stack Dev",
      year: "2015",
      description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      tech: ["html", "Ruby on rails", "css", "javascript"],
      projectURL: "",
      id: "d3",
      btnId: "dbtn3"
  },
  {
      imageURL: "./assets/project-4.png",
      name: "Uber Navigation",
      company: "Uber",
      role: "Lead Developer",
      year: "2015",
      description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
      tech: ["html", "Ruby on rails", "css", "javascript"],
      projectURL: "",
      id: "d4",
      btnId: "dbtn4"
  }
];




let dportfolio = document.getElementById("project-cards-desktop");


createProject = (html) => {
  let proj = document.createElement('template');

  proj.innerHTML = html.trim();
  return proj.content.firstElementChild;
}
desktopProjects.forEach((element, index) => {
  if (index % 2 == 0) {
      dportfolio.appendChild(

          createProject(`
              <div class="project">
      <img src="${element.imageURL}" alt="Desktop Project Live Preview 2" class="project-preview">

      <div class="project-info">
        <h2 class="h-text-name">${element.name}</h2>

        <ul class="skills-list">
          <li class="checkbox"><span class="info-text">${element.company}</span></li>
          <li class="checkbox"><i class="ri-checkbox-blank-circle-fill dots"></i>
            <span class="info-text">${element.role}</span>
          </li>
          <li class="checkbox"> <i class="ri-checkbox-blank-circle-fill dots"></i>
            <span class="info-text">${element.year}</span>
          </li>
        </ul>

        <p class="project-description">${element.description}</p>

        <ul class="tech-list" id="${element.id}">
          
        </ul>
        <button class="outlined-button btn" id="${element.btnId}">See Project</button>

      </div>
    </div>
              `)
      );
  } else {
      dportfolio.appendChild(

          createProject(`
            <div class="project card-2">
    <img src="${element.imageURL}" alt="Desktop Project Live Preview 2" class="project-preview">

    <div class="project-info">
      <h2 class="h-text-name">${element.name}</h2>

      <ul class="skills-list">
        <li class="checkbox"><span class="info-text">${element.company}</span></li>
        <li class="checkbox"><i class="ri-checkbox-blank-circle-fill dots"></i>
          <span class="info-text">${element.role}</span>
        </li>
        <li class="checkbox"> <i class="ri-checkbox-blank-circle-fill dots"></i>
          <span class="info-text">${element.year}</span>
        </li>
      </ul>

      <p class="project-description">${element.description}</p>

      <ul class="tech-list" id="${element.id}">
      
      </ul>
      <button class="outlined-button btn" id="${element.btnId}">See Project</button>

    </div>
  </div>
            `)
      );
  }
})

desktopProjects.forEach(element => {
  element.tech.forEach(elem => {
      techStack = createProject(`<li class="project-tech">${elem}</li>`);
      tlist = document.getElementById(`${element.id}`);
      tlist.append(techStack)
  }
  );

  let button = document.getElementById(`${element.btnId}`);

  button.onclick = () => {

      // Display Modal
      let modal = document.querySelector(".modal");

      modal.innerHTML = `
                <div class="modal-desk">
          <div class="modal-top">
            <div class="modal-title-close">
              <h2 class="h-text project-name">${element.name}</h2><i class="fa-solid fa-xmark close-modal"></i>
              </div>
            <ul class="skills-list">
              <li class="checkbox"><span class="info-text">${element.company}</span></li>
              <li class="checkbox"><i class="ri-checkbox-blank-circle-fill dots"></i>
                <span class="info-text">${element.role}</span>
              </li>
              <li class="checkbox"> <i class="ri-checkbox-blank-circle-fill dots"></i>
                <span class="info-text">${element.year}</span>
              </li>
            </ul>
          </div>
            <img src="${element.imageURL}" alt="${element.name} Live Preview Image" class="desk-modal-img">
     
          <div class="d-modal-info ">
    
    <div class="d-p-info">
            <p class="project-description">${element.description}</p>
            <div class="tech-and-buttons">
                  <ul class="tech-list" id = "modal${element.id}">
          
                  </ul>
                  <div class="modal-buttons d-modal-btns">
                      <button class="outlined-button btn"><span>See live</span><i class="ri-edit-circle-line"></i></button><button class="outlined-button btn"><span>See Source</span> <i class="fa-brands fa-github"></i></button>
                  </div>
            </div>
      </div>
      </div>
          
              `
      let modaltech = document.querySelector(`#modal${element.id}`)
      element.tech.forEach(elem => {
          techStack = createProject(`<li class="project-tech">${elem}</li>`);
          modaltech.append(techStack)
      }
      );

      modal.style.display = "flex"
      closeModal = document.querySelector(".close-modal");
      closeModal.onclick = () => {
          modal.style.display = "none"
      }
  }
})

//form validation starts

const contactForm = document.querySelector('.contact-form');
const contactError = document.querySelector('.contact-error');
const emailInput = document.querySelector('#email');


  function submitForm(event){
  if (emailInput.value !== emailInput.value.toLowerCase()){
    contactError.style.display = 'block';
    contactError.style.backgroundColor = 'red';
    contactError.textContent = "Email address should be lowercase";
    event.preventDefault();

  }

  // else {
  //   contactError.style.display = 'block';
  //   contactError.style.backgroundColor = 'green';
  //   contactError.textContent = "Email addressis in lowercase";
  // };
  }
