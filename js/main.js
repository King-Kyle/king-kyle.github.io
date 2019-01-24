
/* ===================================================================
 * # MENU SCROLL SPY
 *
 * ------------------------------------------------------------------- */


 (function() {
   'use strict';

   var section = document.querySelectorAll(".section");
   var sections = {};
   var i = 0;

   Array.prototype.forEach.call(section, function(e) {
     sections[e.id] = e.offsetTop;
   });

   window.onscroll = function() {
     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

     for (i in sections) {
       if (sections[i] <= scrollPosition) {
         document.querySelector('.active').setAttribute('class', ' ');
         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
       }
     }
   };
 })();


/* ===================================================================
 * # SMOOTH SCROLL
 *
 * ------------------------------------------------------------------- */


 jQuery(document).ready(function($) {

    $('.smoothscroll').on('click',function (e) {
 	    e.preventDefault();

 	    var target = this.hash,
 	    $target = $(target);

 	    $('html, body').stop().animate({
 	        'scrollTop': $target.offset().top
 	    }, 800, 'swing', function () {
 	        window.location.hash = target;
 	    });
 	});

 });

 /* ===================================================================
  * # HIDE SCROLL AT FOOTER
  *
  * ------------------------------------------------------------------- */


  jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
      if (jQuery('body').height() <= (jQuery(window).height() + jQuery(window).scrollTop())) {
        jQuery('.home-scroll').fadeOut("slow");
      } else {
        jQuery(".home-scroll").fadeIn("slow");
      }
    });
  });


/* ===================================================================
 * # LINK UNDERLINE ZIG-ZAG
 *
 * ------------------------------------------------------------------- */


 var width = $('.underline').width();

 var steps = 8;
 var height = 6;
 var step_size = width/steps;

 var d_animated = ['M0', '1'];
 var d_normal = ['M0', '1'];

 for (var i=1; i<=steps; i++) {
   d_normal.push(step_size*(-0.5 + i), 1, step_size*i, 1);
   d_animated.push(step_size*(-0.5 + i), height, step_size*i, 1);
 }

 $(document).ready(function() {
   $('.underline--path').attr('d', d_normal.join(' '));

   $('.link').hover(function() {
     $('.underline--animation').attr({from: d_normal.join(' '), to: d_animated.join(' ')})
     $('.underline--animation')[0].beginElement();
   }, function() {
     $('.underline--animation').attr({to: d_normal.join(' '), from: d_animated.join(' ')})
     $('.underline--animation')[0].beginElement();
   });
 });
