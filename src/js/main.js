const hamburgerBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('opened');
})