let menuIcon = document.getElementById("menu-icon");
let navLinks = document.querySelector(".header__nav-links");
let header = document.getElementById("header");
let titleSpans = document.querySelectorAll(
  ".landing__content .content__title span"
);
let portfolio = document.querySelector(".portfolio");
let portfolioBtns = document.querySelectorAll(".portfolio__btns button");
let portfolioImgs = document.querySelectorAll(".portfolio__imgs div");
let counters = document.querySelectorAll(".statistics__card p");
let feedbackBtns = document.querySelectorAll(".feedback__dots span");
let feedbackClients = document.querySelectorAll(".feedback__client");
let scrollYPosition = 0;
let started = false; // StartCount Function Started ? No

// Header Menu Icon When Clicking
menuIcon.addEventListener("click", () => navLinks.classList.toggle("open"));

window.addEventListener("scroll", function () {
  let scrolled = this.scrollY;
  if (scrolled < 100) {
    header.classList.remove("pinned");
    header.classList.add("transparent");
  } else if (scrollYPosition < scrolled) {
    header.classList.remove("pinned");
    header.classList.remove("transparent");
    scrollYPosition = scrolled;
  } else {
    header.classList.add("pinned");
    scrollYPosition = scrolled;
  }
});

// Landing Title Animation
setInterval(function () {
  if (titleSpans[0].classList.contains("stop")) {
    titleSpans[0].classList.remove("stop");
    titleSpans[1].classList.add("stop");
  } else {
    titleSpans[1].classList.remove("stop");
    titleSpans[0].classList.add("stop");
  }
}, 3000);

// Portfolio Images
portfolioBtns.forEach((btn) => {
  btn.addEventListener("click", removeActive);
  btn.addEventListener("click", mangeImgs);
});

function removeActive() {
  portfolioBtns.forEach((btn) => btn.classList.remove("active"));
  this.classList.add("active");
}

function mangeImgs() {
  portfolioImgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(`.${this.dataset.category}`).forEach((el) => {
    el.style.display = "block";
  });
}

// Statistics Counters

window.addEventListener("scroll", function () {
  if (window.scrollY >= portfolio.offsetTop) {
    if (!started)
      counters.forEach((counter) => {
        startCount(counter);
      });
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) clearInterval(count);
  }, 2000 / goal);
}

// Feedback Buttons
feedbackBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    feedbackBtns.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    feedbackClients.forEach((client) => {
      if (client.classList.contains("hide")) {
        client.classList.remove("hide");
      } else {
        client.classList.add("hide");
      }
    });
  })
);


