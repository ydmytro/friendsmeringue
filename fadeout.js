$(document).ready(function() {
	(function() {
		//settings
		var fadeSpeed = 200, fadeTo = 0.5, topDistance = 30;
		var topbarME = function() { $('#header-fade').fadeTo(fadeSpeed,1); }, topbarML = function() { $('#header-fade').fadeTo(fadeSpeed,fadeTo); };
		var inside = false;
		//do
		$(window).scroll(function() {
			position = $(window).scrollTop();
			if(position > topDistance && !inside) {
				//add events
				topbarML();
				$('#header-fade').bind('mouseenter',topbarME);
				$('#header-fade').bind('mouseleave',topbarML);
				inside = true;
			}
			else if (position < topDistance){
				topbarME();
				$('#header-fade').unbind('mouseenter',topbarME);
				$('#header-fade').unbind('mouseleave',topbarML);
				inside = false;
			}
		});
	})();
});
