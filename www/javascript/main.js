$( document ).ready(function(){
	// side-bar navigation
	$(".button-collapse").sideNav();	
});


// navigation
document.addEventListener('scroll', function() {
	$('.brand-logo').css('visibility', scrollY > 160 ? 'visible' : 'hidden');
});
