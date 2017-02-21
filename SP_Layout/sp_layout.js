$(function(){
	$('.overture').each(function(){
		var $slides = $(this).find('img'),
	        slideCount = $slides.length,
	        currentIndex = 0;

	    $slides.eq(currentIndex).fadeIn();

	    setInterval(showNextSlide, 5000);

	    function showNextSlide(){
	    	var nextIndex = (currentIndex + 1) % slideCount;
	    	$slides.eq(currentIndex).fadeOut();
	    	if(currentIndex == 0){
	    		$('.overture-start').hide();
	    	}
	    	$slides.eq(nextIndex).fadeIn();
	    	currentIndex = nextIndex;
	    	if(currentIndex == 0){
	    		$('.overture-start').show();
	    	}
	    }
	})
	$('.ff-img').hover(function(){
		//load img's alt to li element
		$(this).append("<div><p>" + $(this).children('img').attr('alt') + "</p></div>");
		$(this).children('div').fadeIn(400);
		$(this).children('div').children('p').animate({top: '0px'}, 400);
	}, function(){
		$(this).children('div').fadeOut(400);
		$(this).children('div').children('p').animate({top: '10px'}, 400, function(){ 
																			$(this).parent('div').remove();
																		});
	});
	$('.hover-area').hover(function(){
		$(this).parent('.relationship-container').children('.travel-content').css('border', '10px solid #ff7f50');
		$(this).parent('.relationship-container').children('.travel-content').css('color', '#ff7f50');
		$(this).parent('.relationship-container').children('.travel-content').css('top', '0px');
		$(this).parent('.relationship-container').children('.travel-content').children('.travel-content-button').children('div').css({transform: 'rotateX(0deg)'});
	}, function(){
		$(this).parent('.relationship-container').children('.travel-content').css('border', '10px solid rgba(0, 0, 0, 0)');
		$(this).parent('.relationship-container').children('.travel-content').css('color', '#2f4f4f');
		$(this).parent('.relationship-container').children('.travel-content').css('top', '50px');
		$(this).parent('.relationship-container').children('.travel-content').children('.travel-content-button').children('div').css({transform: 'rotateX(90deg)'});
	});
	$('.play-button-hover-area').hover(function(){
		$(this).parent('.play-button').children('.circle').css('background-color', '#ff7f50');
		$(this).parent('.play-button').children('.circle').css('top', '0px');
		$(this).parent('.play-button').children('.circle').css('left', '0px');
		$(this).parent('.play-button').children('.circle').css('padding-top', '28.5px');
		$(this).parent('.play-button').children('.circle').css('width', '80px');
		$(this).parent('.play-button').children('.circle').css('height', '80px');
	}, function(){
		$(this).parent('.play-button').children('.circle').css('background-color', '#dc143c');
		$(this).parent('.play-button').children('.circle').css('top', '5px');
		$(this).parent('.play-button').children('.circle').css('left', '5px');
		$(this).parent('.play-button').children('.circle').css('padding-top', '23.5px');
		$(this).parent('.play-button').children('.circle').css('width', '70px');
		$(this).parent('.play-button').children('.circle').css('height', '70px');
	});
})

