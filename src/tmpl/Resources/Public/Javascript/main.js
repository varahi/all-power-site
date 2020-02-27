$(document).ready(function() {

	// Parallax
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // создаем объект
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
			// Присваиваем значение background-position
			var coords = 'center '+ yPos + 'px';
			// Создаем эффект Parallax Scrolling
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	// Diasble right click menu
	//$(this).bind("contextmenu", function(e) {
	//	e.preventDefault();
	//});

	// To Top
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

});
