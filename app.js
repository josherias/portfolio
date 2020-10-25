const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navItems = document.querySelector(".nav-items");
  const navListItem = document.querySelectorAll(".nav-list-item");

  burger.addEventListener("click", () => {
    //toggle slide class
    navItems.classList.toggle("nav-active");

    //add animation to navlistitems
    navListItem.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //bureger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

/// -----------------------------------------------------------------  ///

const text = document.querySelector(".showcase-heading");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
timer = setInterval(function () {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;

  if (char === splitText.length) {
    complete();
    return;
  }
}, 100);

function complete() {
  clearInterval(timer);
  timer = null;
}

/// -----------------------------------------------------------------  ///

//scrollview animation

function scrollappear(target) {
  const skillSection = document.querySelector(target);
  const skillPosition = skillSection.getBoundingClientRect().top; //get height of section from top
  const screenPosition = window.innerHeight; //het window height

  if (skillPosition < screenPosition) {
    skillSection.classList.add("fade");
  } else {
    skillSection.classList.remove("fade");
  }
}

window.addEventListener("scroll", () => {
  scrollappear(".skills-wrapper-text");
  scrollappear(".skills-wrapper-icons");
  scrollappear(".footer-wrapper");
});
