const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav__link');
let menuOpen = false;

toggleButton.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menu.classList.toggle('active', menuOpen);
  });

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});