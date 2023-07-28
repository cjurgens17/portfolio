// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");


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

window.addEventListener('load',(event) => {
  createObserver();
});

function createObserver(){
  let target = document.querySelector('#purpose-observed');
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  let observer = new IntersectionObserver(headerCallback, options);
  observer.observe(target);
};

function headerCallback(entries, observer){
  entries.forEach((entry) => {
    console.log('entry', entry)
    if(entry.intersectionRatio >= 0.5){
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}










