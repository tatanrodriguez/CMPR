$(window).on('load', function() { // makes sure the whole site is loaded 
		  $('#status').delay(8000).fadeOut(); // will first fade out the loading animation 
		  $('#preloader').delay(8000).slideUp( 800); // will fade out the white DIV that covers the website. 
		  $('body').delay(350).css({'overflow':'visible'});
		})