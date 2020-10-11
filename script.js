window.onscroll = stickyNav;

var distanceToTop = navbar.offsetTop;

function stickyNav() {
  const nav = document.querySelector('#navbar');

  if (window.pageYOffset >= distanceToTop) {
    nav.classList.add('sticky');
  } else if (window.pageYOffset <= distanceToTop) {
    nav.classList.remove('sticky');
  }
}
