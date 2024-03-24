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

//Slide show starts here
const slider = document.querySelector('.container');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
})

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;

    slider.scrollLeft = scrollLeft - walk;
})