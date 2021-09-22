const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: 1,
  opacity: 0,
  y: -200,
  stagger: 0.5,
  delay: 0.2
})

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.5,
  opacity: 1,
  x: -150,
  stagger: 0.2
})

gsap.from('.animate-img', {
  scrollTrigger: '.animate-img',
  duration: 2,
  opacity: 0,
  x: 500,
  stagger: 0.5
})

gsap.from('.animate-membership', {
  scrollTrigger: '.animate-membership',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.2,
  delay: 0.5
})

gsap.from('.animate-team', {
  scrollTrigger: '.animate-team',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.5,
  delay: 0.4
})

gsap.from('.animate-email', {
  scrollTrigger: '.animate-email',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.5,
  delay: 0.4
})

gsap.from('.animate-footer', {
  scrollTrigger: '.animate-footer',
  duration: 1,
  opacity: 0,
  y: 100,
  stagger: 0.4,
  delay: 0.2
})