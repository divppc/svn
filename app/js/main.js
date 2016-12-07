$(document).ready(function() {

	$(window).on('load', function () {
		menuToggle();
	});
	$(window).resize(function () {
		menuToggle();
	});

	$('#color-rotator').carousel({
		pause: 'hover'
	});
	$('#country-rotator').carousel({
		pause: 'hover'
	});


	//показ фильтров на моб версии
	$('.filters-toggle').on('click', function () {
		$(this).toggleClass('active');
		$('.catalog-container').toggleClass('blured');
		$('aside.filters').toggleClass('active');
	});

	//количество товаров в карточке
	$('.counter-wrap .less').click(function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counter-wrap .more').click(function () {

        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

	//стрелки слайдера для каждого таба
	$('#main-tabs a').on('click', function () {
		if ($('#main-tabs li:first-child').hasClass('active')) {
			$(".lists-nav#first-tab").css('display', 'none');
			$(".lists-nav#second-tab").css('display', 'block');
		} else {
			$(".lists-nav#first-tab").css('display', 'block');
			$(".lists-nav#second-tab").css('display', 'none');
		}
	});

	//открытое меню на главной
	var menuToggle = function () {		
		if ($(window).width() < 1007 && $(".dropdown-menu").hasClass('opened')) {
			$(".dropdown-menu").removeClass('opened')
		} else if ($(window).width() > 1007 && ($(".dropdown-menu").hasClass('hidden-menu')) == false) {
			$(".dropdown-menu").addClass('opened')
		};	
	};
	


	//слайдер карточки товаров
	$('.bxslider').bxSlider({
	  buildPager: function(slideIndex){
	    switch(slideIndex){
	      case 0:
	        return '<img src="../images/demo/photo-prev.png">';
	      case 1:
	        return '<img src="../images/demo/photo-prev.png">';
	      case 2:
	        return '<img src="../images/demo/photo-prev.png">';
	    }
	  },
	nextText: '>',
	prevText: '<'
	});

	$(".fancybox").fancybox({
		 helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(0, 0, 0, 0.7)'
	            }
	        }
	    }
	});




	var html5Slider = document.getElementById('range');

	noUiSlider.create(html5Slider, {
		start: [ 3000, 20000 ],
		connect: true,
		range: {
			'min': 100,
			'max': 10000
		}
	});
	var inputNumber = document.getElementById('to');
	var outputNumber = document.getElementById('from');

	html5Slider.noUiSlider.on('update', function( values, handle ) {

		var value = values[handle];

		if ( handle ) {
			inputNumber.value = Math.round(value);
		} else {
			outputNumber.value = Math.round(value);
		}
	});

	outputNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([this.value, null]);
	});

	inputNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});
});

