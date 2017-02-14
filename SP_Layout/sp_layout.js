$(function(){
	$('.overture').each(function(){
		var $slides = $(this).find('img'),
	        slideCount = $slides.length,
	        currentIndex = 0;

	    $slides.eq(currentIndex).fadeIn();

	    setInterval(showNextSlide, 6000);

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
})
function scrollToThere(){
		$('.overture').scrollTo();
}