$(document).ready(function(){
	var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
	if(iOS)
		$('header').css('background-attachment', 'scroll');
	var windowHeight = $(window).height();
	$(window).scroll(function(){
		var scrollLength = $(window).scrollTop();
		var navHeight = $('nav').height();
		if(scrollLength >= windowHeight-navHeight)
			$('nav').css('background', "rgba(0,0,0,.8)");
		else
			$('nav').css('background', "none");
	});
});
