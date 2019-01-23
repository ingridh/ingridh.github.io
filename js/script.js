$( document ).ready(function() {
	$(window).resize(function() {
        document.getElementById(('work')).style.marginBottom = String(window.innerHeight-350) +'px';
    }).resize();

	var titles = [
	'MongoDB',
    'Azimo',
    'lightcapture',
    'keep designing',
    ''
	];

	var subtitle = [
	"Currently at",
	"I worked at",
	"I designed",
	"I would love to",
	""
	];

	$(window).scroll(function(){
	    var pos = $(this).scrollTop();
		if (($("#mongo").offset().top - $(window).scrollTop() < 150) && ($("#mongo").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[0]);
			$('.werk').text(titles[0]);
		}
		if  (($("#azimo").offset().top - $(window).scrollTop() < 150) && ($("#azimo").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[1]);
			$('.werk').text(titles[1]);
		} 
		if  (($("#lightcapture").offset().top - $(window).scrollTop() < 150) && ($("#lightcapture").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[2]);
			$('.werk').text(titles[2]);
		}
		if  (($("#contact").offset().top - $(window).scrollTop() < 150) && ($("#contact").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[3]);
			$('.werk').text(titles[3]);
		}
		if  (($("#links").offset().top - $(window).scrollTop() < 250) && ($("#links").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').hide();
			$('.werk').hide();
		} else {
			$('.smalltitle').show();
			$('.werk').show();
		}
	});



});
