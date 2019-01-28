 /* ===================================================================
 * # MENU UI
 *
 * ------------------------------------------------------------------- */

 // SHOW/HIDE NAV

 // Hide Header on on scroll down
 var didScroll;
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = $('header').outerHeight();

 $(window).scroll(function(event){
     didScroll = true;
 });

 setInterval(function() {
     if (didScroll) {
         hasScrolled();
         didScroll = false;
     }
 }, 250);

 function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if(Math.abs(lastScrollTop - st) <= delta)
         return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st > lastScrollTop && st > navbarHeight){
         // Scroll Down
         $('header').removeClass('show-nav').addClass('hide-nav');
         $('.nav-toggle').removeClass('open');
         $('.menu-left').removeClass('collapse');
     } else {
         // Scroll Up
         if(st + $(window).height() < $(document).height()) {
             $('header').removeClass('hide-nav').addClass('show-nav');
         }
     }

     lastScrollTop = st;
 }

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
