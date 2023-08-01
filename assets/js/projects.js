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

//adding animation for inersectionObserverAPI
window.addEventListener('load',(event) => {
  createObserver(document.querySelector('#purpose-observed'), purposeOptions, purposeCallback);
  createObserver(document.querySelector('#technology-observed'), technologyOptions, technologyCallback);
  createObserver(document.querySelector('#p1-observed'), p1Options, p1Callback);
  createObserver(document.querySelector('#p2-observed'), p2Options, p2Callback);
  createObserver(document.querySelector('#p3-observed'), p3Options, p3Callback);
  createObserver(document.querySelector('#p4-observed'), p4Options, p4Callback);
  createObserver(document.querySelector('#lessons-observed'), lessonsOptions, lessonsCallback);
  createObserver(document.querySelector('#footer-observed'), footerOptions, footerCallback);
});

//modularized function to make Observers
function createObserver(target, options, callback){
  let observer = new IntersectionObserver(callback, options);
  observer.observe(target);
}

//options for intersectionObseverAPI
let purposeOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

let technologyOptions = {
  root: null,
  rootMargin: '96px',
  threshold: 0.50
}

let p1Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.80
}

let p2Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.90
}

let p3Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.60
}

let p4Options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.80
}

let lessonsOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.39
}

let footerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.70
}

//Unique callbacks for intersectionObserverAPI
function purposeCallback(entries, observer){
  entries.forEach((entry) => {
    console.log('entry', entry)
    if(entry.intersectionRatio >= 0.5){
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}

function technologyCallback(entries, observer){
  entries.forEach((entry) => {
    console.log('entry',entry);
    if(entry.intersectionRatio >= 0.50){
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}

function p1Callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .80){
      entry.target.style.transform = 'translateY(-15%)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}

function p2Callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .90){
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  })
}

function p3Callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .60){
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  })
}

function p4Callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .80){
      entry.target.style.transform = 'translateY(15%)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  })
}

function lessonsCallback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .39){
      entry.target.style.transform = 'translateX(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}

function footerCallback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .70){
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}














