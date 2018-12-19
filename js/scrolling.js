jQuery.noConflict();
		jQuery(function() {

			jQuery('div#menu a').bind('click',function(event){
				var $anchor = jQuery (this);

				jQuery('html, body').stop().animate({
					scrollTop: jQuery ($anchor.attr('href')).offset().top
				}, 1500,'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                });
		});