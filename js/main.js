$(document).ready(function(){
	var windowHeight = $(window).height();
	var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

	if(iOS)
		$('header').css('background-attachment', 'scroll');

	//Dimm nav background when reaching content and reverse
	$(window).scroll(function(){
		var scrollLength = $(window).scrollTop();
		if(scrollLength >= windowHeight-90)
			$('nav').css('background', "rgba(0,0,0,.8)");
		else
			$('nav').css('background', "none");
	});
});
