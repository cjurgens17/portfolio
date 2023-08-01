// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//skill rows
let rowTwo = Array.from(document.querySelectorAll('.skill-row2'));
let rowOne = Array.from(document.querySelectorAll('.skill'));

window.addEventListener('load', (event) => {
  createObserver(skills, rowTwo, updateSecondRow);
  createObserver(skills,rowOne,updateFirstRow);
});
//intersection Observer API
function createObserver(options, targets, callback) {
  for (let obs of targets) {
    let observer = new IntersectionObserver(callback, options);
    observer.observe(obs);
  }
}
//options
let skills = {
  root: null,
  rootMargin: '0px',
  threshold: [0.40,0.80]
};

function updateSecondRow(entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.80) {
      console.log(entries);
      rowTwo.forEach((ele, index) => {
        setTimeout(() => {
          ele.style.transform = 'translateX(0)';
          ele.style.opacity = 1;
        }, 500 * index);
      });
      observer.unobserve(entry.target);
    }
  });
}
  

function updateFirstRow(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.40) {
      console.log(entries);
      rowOne.forEach((ele, index) => {
        setTimeout(() => {
          ele.style.transform = 'translateX(0)';
          ele.style.opacity = 1;
        }, 500 * index);
      });
      observer.unobserve(entry.target);
    }
  });
}


    


