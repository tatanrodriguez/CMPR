var sl = jQuery.noConflict();
		sl(window).load(function() {
			sl('.flexslider').flexslider({
				animation: "slide",
				controlNav: "thumbnails"
			});
		});