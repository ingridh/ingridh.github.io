$( document ).ready(function() {
	$(window).resize(function() {
        document.getElementById(('work')).style.marginBottom = String(window.innerHeight-350) +'px';
    }).resize();

	var titles = [
    'Azimo',
    'MongoDB',
    'frog Design',
    'a drone app',
    'IoT with Samsung',
    'the NextDoor app',
    'digital devices',
    'keep designing',
    ''
	];

	var subtitle = [
	"I'm currently working at",
	"I worked at",
	"I designed",
	"I redesigned",
	"I explored",
	"I built",
	"I would love to",
	""
	];

	$(window).scroll(function(){
	    var pos = $(this).scrollTop();
		if (($("#azimo").offset().top - $(window).scrollTop() < 150) && ($("#azimo").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[0]);
			$('.werk').text(titles[0]);
		}
		if  (($("#mongo").offset().top - $(window).scrollTop() < 150) && ($("#mongo").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[1]);
			$('.werk').text(titles[1]);
		} 
		if  (($("#frog").offset().top - $(window).scrollTop() < 150) && ($("#frog").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[1]);
			$('.werk').text(titles[2]);
		}
		if  (($("#cs160").offset().top - $(window).scrollTop() < 150) && ($("#cs160").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[2]);
			$('.werk').text(titles[3]);
		}
		if  (($("#iot").offset().top - $(window).scrollTop() < 150) && ($("#iot").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[4]);
			$('.werk').text(titles[4]);
		}
		if  (($("#nextdoor").offset().top - $(window).scrollTop() < 150) && ($("#nextdoor").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[3]);
			$('.werk').text(titles[5]);
		}
		if  (($("#contact").offset().top - $(window).scrollTop() < 150) && ($("#contact").offset().top - $(window).scrollTop() > 0)) {
			$('.smalltitle').text(subtitle[6]);
			$('.werk').text(titles[7]);
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
