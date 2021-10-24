var pslider = $('.prop-slider');
var pnext = $('.prop-btn-next');
var pprevious = $('.prop-btn-prev');



function sliderSize(containerClass, contentClass){
	var size = contentClass.length;
	containerClass.css('width', (100*size)+'%');
}


function moverDf(){
	pslider.animate({
		marginLeft:'-'+100+'%'
	}, 900, function(){
		
		
		$('.prop-slider section:first').insertAfter('.prop-slider section:last');
		pslider.css("margin-left", '-'+0+'%');
		
		
	});
}

function moverIf(){
	pslider.animate({
		marginLeft:0
	}, 900, function(){
		
		
		$('.prop-slider section:last').insertBefore('.prop-slider section:first');
		pslider.css("margin-left", '-'+100+'%');
		

	});
}



$(document).ready(function(){
	var a = document.getElementsByClassName('prop-slider-content');
	sliderSize(pslider,a);
	
	pnext.on('click', function(){
		
		moverDf();
	});

	pprevious.on('click', function(){
		
		moverIf();
	});

});

