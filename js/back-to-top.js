jQuery.noConflict();

		var tp = jQuery.noConflict();

		tp('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

		var amountScrolled = 500;

		tp(window).scroll(function() {


			if ( tp(window).scrollTop() > amountScrolled ) {
				tp('a.back-to-top').fadeIn('easeInOut');
			} else {
				tp('a.back-to-top').fadeOut('easeInOut');
			}
		});


		tp('a.back-to-top').click(function() {
			tp('html, body').animate({
				scrollTop: 0
			}, 1500, 'easeInOutExpo');
			return false;
		});