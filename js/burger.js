$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu,.header__list,.header__connection,.header__scroll').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

