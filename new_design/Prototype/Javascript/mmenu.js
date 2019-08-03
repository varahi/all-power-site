$(document).ready(function() {
	
	// Mmenu
	
	$('nav#menu').mmenu({
		//extensions				: [ 'popup' ],
		extensions 	: [ "border-none", "fullscreen" ],
		keyboardNavigation 		: true,
		screenReader 			: true,
		counters				: true,
		navbar 	: {
			title	: '<div class="mm-logo"><a href="/" title="Курорты Краснодарского края" class="navbar-brand"><img src="typo3conf/ext/kraykurortov/Resources/Public/Images/mm-logo.png" width="100" height="100" class="logo" alt="Курорты Краснодарского края" title="Курорты Краснодарского края" ></a></div> Меню'
		},
		offCanvas	: {
			zposition 	: "front",
			position 	: "right"
		},		
		navbars	: [
		   {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			}
		]
	});
	
});
