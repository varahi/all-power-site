$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav:false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 1,
				nav: false
			},
			1000: {
				items: 1,
				nav: true,
				loop: false,
				margin: 20
			}
		}
	});


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

});


//Parallax
/*
$(document).ready(function(){
	$window = $(window);
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); // Назначаем объект
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
});

document.createElement("article");
document.createElement("section");
 */

/*
$(document).ready(function(){
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
})
*/