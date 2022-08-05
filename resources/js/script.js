$(document).ready(function() {
    
     /* For the sticky navigation */
    
    $('.js--section-about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '62px;'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-about-me').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about-me').offset().top}, 1000);
    });
    
    $('.js--scroll-to-portfolio').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animation on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
       offset: '50%' 
    });
    
     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
       offset: '50%' 
    });
	
	  /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('.ion-navicon-round')) {
            icon.addClass('.ion-close-round');
            icon.removeClass('.ion-navicon-round');
        } else {
            icon.addClass('.ion-navicon-round');
            icon.removeClass('.ion-close-round');
        }        
    });
	
	/* Date */

    let now = new Date().getFullYear();
    let age = now - 1993;
	
    $('.age').text(age);
	

       /* Year */

    let year = new Date().getFullYear();

    $('#year').text(year);
    
});
