// DROPDOWN MENU

const hamburgerBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburgerBtn.addEventListener('click', () => {
  navBar.classList.toggle('opened');
  if (navBar.classList.contains('opened')) {
    document.documentElement.classList.add('scroll-disabled');
    document.documentElement.classList.add('layer');
  } else {
    document.documentElement.classList.remove('scroll-disabled');
    document.documentElement.classList.remove('layer');
  }
})
//

// NAV-BAR FIXED
const header = document.querySelector('.header');
const headerHeight = 568;
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > headerHeight && window.innerWidth <= 1366) {
    navBar.classList.add('nav-bar--fixed');
  } else {
    navBar.classList.remove('nav-bar--fixed');
  }
})
//

// DISABLE DROPDOWN MENU WHILE RESIZE WINDOW;
const desktop = window.matchMedia("(min-width: 1366px)");
const checkDesktop = (e) => {
  if (e.matches) {
    navBar.classList.remove('opened');
    navBar.classList.remove('nav-bar--fixed');
    document.documentElement.classList.remove('scroll-disabled');
    document.documentElement.classList.remove('layer');
  }
}
desktop.addListener(checkDesktop);
//