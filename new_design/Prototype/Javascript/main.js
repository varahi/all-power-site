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
	})
})