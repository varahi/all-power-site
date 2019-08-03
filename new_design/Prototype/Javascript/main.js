jQuery(function($){
// Match Height
	$('.col-md-6, .col-md-4').matchHeight();	
	
// Massonry Grid
  var options = {minMargin: 10, maxMargin: 10, itemSelector: ".grid-gallery-item", firstItemClass: "first-item"};
  $(".grid-gallery-container").rowGrid(options);	
	
// Mask for input phones
   $("#powermail_field_phone").mask("+7(999) 999-9999");
   $("#powermail_field_feedback_phone").mask("+7(999) 999-9999");
   $("#powermail_field_order_phone").mask("+7(999) 999-9999");
	
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
	
//Table headers
	$("tr:first").addClass("table-th");
	$( "tr:odd" ).addClass("tr-odd");
	$( "tr:even" ).addClass("tr-even");
	

// Disable Google map scroll
	$('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready     
	$('#overlay').on("mouseup",function() {          // lock it when mouse up
	$('#map').addClass('scrolloff'); 
	//somehow the mouseup event doesn't get call...
   });
   $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
   	$('#map').removeClass('scrolloff');
   });

   $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
   	$('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
	});	
});
	

//Sticky mmenu
//$(window).load(function(){
//	$(".mmenu-link a").sticky({ topSpacing: 70 });
//});


//Slick Slider
$('.slider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	asNavFor: '.slider-nav-thumbnails',
 });
 $('.slider-nav-thumbnails').slick({
 	slidesToShow: 5,
 	slidesToScroll: 1,
 	asNavFor: '.slider',
 	dots: true,
 	focusOnSelect: true
 });

 // Remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 // Set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});