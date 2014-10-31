document.addEventListener('DOMContentLoaded', function(){
	var windowHeight = window.innerHeight;
	var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );


	//Fix for iOS background-attachment issues
	if(iOS) {
		var header = document.getElementById('header');
		if (header.classList)
			header.classList.add('background-scroll');
		else
			header.className += ' ' + 'background-scroll';
	}

	//Dimm nav background when reaching content and reverse
	window.onscroll = function(){
		var scrollLength = window.pageYOffset;
		var nav = document.getElementById('nav');

		if(scrollLength >= windowHeight-90) {
			if (nav.classList)
				nav.classList.add("nav-background");
		}
		else {
	    if (nav.classList)
	        nav.classList.remove('nav-background');
	    else
	        nav.className = nav.className.replace(new RegExp('(^|\\b)' + className.
						split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	};
});
