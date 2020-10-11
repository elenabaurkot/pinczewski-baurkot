$(document).ready(function () {
  // On window scroll, call function stickyNav
  $(window).scroll(stickyNav);
  // sets variable to measure distance from navbar to top of screen
  var distanceToTop = navbar.offsetTop;

  function stickyNav() {
    const navEl = $('#navbar');
    // add the sticky class to the navbar if user scrolls past the distance from the top to the navbar
    if (window.pageYOffset >= distanceToTop) {
      navEl.addClass('sticky');
      // if they scroll back up remove the sticky class so the navbar goes back to regular positioning
    } else if (window.pageYOffset <= distanceToTop) {
      navEl.removeClass('sticky');
    }
  }
});




//  VANILLA JAVASCRIPT
// window.onscroll = stickyNav;

// var distanceToTop = navbar.offsetTop;

// function stickyNav() {
//   const navEl = document.querySelector('#navbar');

//   if (window.pageYOffset >= distanceToTop) {
//     navEl.classList.add('sticky');
//   } else if (window.pageYOffset <= distanceToTop) {
//     navEl.classList.remove('sticky');
//   }
// }
