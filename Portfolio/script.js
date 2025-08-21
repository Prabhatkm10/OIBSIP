// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollProgress = document.querySelector(".scroll-progress");
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = progress + "%";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Bird animation
const bird = document.querySelector(".bird");
let mouseX = 0;
let mouseY = 0;
let birdX = window.innerWidth / 2;
let birdY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener("scroll", () => {
  const scrollPercentage =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  birdX =
    50 + (window.innerWidth - 100) * Math.sin(scrollPercentage * Math.PI * 4);
  birdY = 50 + (window.innerHeight - 100) * scrollPercentage;
});

function animateBird() {
  const targetX = mouseX || birdX;
  const targetY = mouseY || birdY;

  birdX += (targetX - birdX) * 0.1;
  birdY += (targetY - birdY) * 0.1;

  bird.style.left = birdX + "px";
  bird.style.top = birdY + "px";

  // Rotate bird based on movement direction
  const angle = (Math.atan2(targetY - birdY, targetX - birdX) * 180) / Math.PI;
  bird.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(animateBird);
}

animateBird();

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-out";
  observer.observe(section);
});

// Parallax effect for background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.body;
  const speed = scrolled * 0.5;
  parallax.style.backgroundPosition = `center ${speed}px`;
});
// Background changer
function changeBackground() {
  const bg = document.querySelector(".background");
  bg.style.backgroundImage = `url("https://picsum.photos/1920/1080?random&t=${Date.now()}")`;
}

// Change every 5 seconds
setInterval(changeBackground, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");

  document.addEventListener("mousemove", (e) => {
    if (bird) {
      bird.style.left = `${e.clientX}px`;
      bird.style.top = `${e.clientY}px`;
    }
  });
});
