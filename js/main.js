$(document).ready(function(){
	var windowHeight = $(window).height();
	$('header').css('height', windowHeight);
	$(window).scroll(function(){
		var scrollLength = $(window).scrollTop();
		var navHeight = $('nav').height();
		if(scrollLength >= windowHeight-navHeight)
			$('nav').css('background', "rgba(0,0,0,.8)");
		else
			$('nav').css('background', "none");
	});
});
