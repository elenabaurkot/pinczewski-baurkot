window.onscroll = stickyNav;

function stickyNav() {
  const nav = document.querySelector('#navbar');
  nav.classList.add('sticky');
}
