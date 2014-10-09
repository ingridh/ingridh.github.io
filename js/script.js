$(document).ready(function(){
	$("#toggle").toggle(function() {
		$("#content").css({"-webkit-transform": "translateX(300px)"});
	}, function() {
		$("#content").css({"-webkit-transform": "translateX(0px)"});
	});

	// $("#toggle").toggle(function() { 
	// 	$("#sidebar").css({"background": "#2D2C2C"});
	// }, function() {
	// 	$("#sidebar").css({"background": "#834B9D"});
	// });

	//to switch sidebar colors
    
});



