$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({full_width: true});
  $('.carousel').carousel('next');
  $('.carousel').carousel('next', 3); // Move next n times.
  // Previous slide
  $('.carousel').carousel('prev');
  $('.carousel').carousel('prev', 4); // Move prev n times.
  // Set to nth slide
  $('.carousel').carousel('set', 4);
  $('.carousel').carousel({time_constant:300});
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.tooltipped').tooltip({delay: 50});
});
