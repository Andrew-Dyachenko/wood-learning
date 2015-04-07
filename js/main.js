$(document).ready(function () {
	$('#photo-gallery .item').nivoLightbox();

	function equalHeight () {
	    var biggestHeight = 0;
	    $('#photo-gallery .item img').each(function () {
	        if($(this).height() > biggestHeight) {
	            biggestHeight = $(this).height();  
	        }  
	    });
	    $('#photo-gallery .item').height(biggestHeight); 
	}
	
	$(window).resize(function () {
		$('#photo-gallery .item').removeAttr('style');
		equalHeight();
	});

	$('#photo-gallery .item').removeAttr('style');
	equalHeight();
	var counter = 0;
	var interval = setInterval(function(){
		if ($('#photo-gallery .item').height() == 0 && counter <= 10) {
			$('#photo-gallery .item').removeAttr('style');
			equalHeight();
			counter++;
		}
		else {
			clearInterval(interval);
		}
		console.log('int');
	}, 1000);
});