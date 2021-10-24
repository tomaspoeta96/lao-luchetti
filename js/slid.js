var slider = $('.slider');
var next = $('.btn-next');
var previous = $('.btn-prev');



function sliderSize(containerClass, contentClass){
	var size = contentClass.length;
	containerClass.css('width', (100*size)+'%');
}

function moverD(a){
	slider.animate({
		marginLeft:'-'+100+'%'
	},{duration:a, easing:'linear', queue:true, complete: function(){
		$('.slider section:first').insertAfter('.slider section:last');
		slider.css("margin-left", '-'+0+'%');
	}});
}

function moverDf(){
	slider.animate({
		marginLeft:'-'+100+'%'
	}, 900, function(){
		next.css("pointer-events", "none");
		$('.slider section:first').insertAfter('.slider section:last');
		slider.css("margin-left", '-'+0+'%');
		next.css("pointer-events", "auto");
	});
}

function moverIf(){
	slider.animate({
		marginLeft:0
	}, 900, function(){
		next.css("pointer-events", "none");
		$('.slider section:last').insertBefore('.slider section:first');
		slider.css("margin-left", '-'+100+'%');
		next.css("pointer-events", "auto");
	});
}



$(document).ready(function(){
	var a = document.getElementsByClassName('slider-content');
	sliderSize(slider,a);
	var n = Date.now();
	var newt=0;
	var m = setInterval(function(){
		moverD(19000);
	}, 0);

	slider.hover(function(){
		slider.stop(true, false);
		clearInterval(m);
	}, function(){
		clearInterval(m);
		m = setInterval(function(){
			newt = Date.now() - n;
			if (newt >= 19000){
				n = Date.now();
			}
			moverD(19000-newt);
			if(slider.css('marginLeft')=='0px'){
				slider.stop(true, false);
				clearInterval(m);
				m = setInterval(function(){
					moverD(19000);
				}, 0);	
			}
		}, 0);	
	});
	next.on('click', function(){
		slider.stop(true, false);
		moverDf();
	});

	previous.on('click', function(){
		slider.stop(true, false);
		moverIf();
	});

});

