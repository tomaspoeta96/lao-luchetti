var slider1 = $('.slider1');
var next1 = $('.btn-next1');
var previous1 = $('.btn-prev1');

$(document).ready(function(){
	var a = document.getElementsByClassName('slider1-content');
	sliderSize(slider1, a);
	next1.on('click', function(){
		moverDf1();
	});

	previous1.on('click', function(){
		moverIf1();
	});

});

function moverDf1(){
	slider1.animate({
		marginLeft:'-'+100+'%'
	}, 900, function(){
		next1.css("pointer-events", "none");
		$('.slider1 section:first').insertAfter('.slider1 section:last');
		slider1.css("margin-left", '-'+0+'%');
		next1.css("pointer-events", "auto");
	});
}

function moverIf1(){
	slider1.animate({
		marginLeft:0
	}, 900, function(){
		previous1.css("pointer-events", "none");
		$('.slider1 section:last').insertBefore('.slider1 section:first');
		slider1.css("margin-left", '-'+100+'%');
		previous1.css("pointer-events", "auto");
	});
}