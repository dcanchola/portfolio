//Scrollspy smooth scrolling
$('body').scrollspy({target: ".navbar", offset: 50}); 

$("#navbar-collapse a").on('click', function(event) {
	event.preventDefault();

	//stores current hash
	var hash = this.hash;

	$('html, body').animate({
		scrollTop:$(hash).offset().top
	}, 800, function(){

		window.location.hash = hash;
	});

});

$(".btn-default").on('click', function(event) {
	event.preventDefault();

	var hash = this.hash;

	$('html, body').animate({
		scrollTop:$(hash).offset().top
	}, 800, function(){

		window.location.hash = hash;
	});
});

window.onload = function() {
	handleResponsiveNavStyle();
	hoverDivRatios();
	$(window).resize(function(){
   		handleResponsiveNavStyle();
   		hoverDivRatios();
	});
	document.addEventListener("scroll", navStyleOnScroll);
}

/*get value of body container overflow styles to detect what device media query we're in
function detectDeviceMediaQuery() {
	var bodyContainer = document.querySelector('#bodyContainer');
	var bodyContainerStyle = getComputedStyle(bodyContainer, null).getPropertyValue('overflow');
	return bodyContainerStyle;
}*/

//handle navigation placement for responsive devices
function handleResponsiveNavStyle() {
	var nav = document.querySelector('.navbar');

	if(window.innerWidth < 992 /*|| detectDeviceMediaQuery() == "hidden"*/) {
		nav.classList.add("navbar-fixed-top");
	}
	if(window.innerWidth >= 992 /*&& detectDeviceMediaQuery() == "visible"*/) {
		if(nav.classList.contains("navbar-fixed-top")) {
			nav.classList.remove("navbar-fixed-top");
		}
	}
}

//snap navigation on scroll
function navStyleOnScroll() {
	if(window.innerWidth >= 992) {
		var findActive = document.querySelector(".nav .active");
		if(findActive != null /*|| detectDeviceMediaQuery() =="hidden"*/) {
			var getNav = document.querySelector(".navbar");
			getNav.classList.add("navbar-fixed-top");
			getNav.style.top = "0px";
		}
		if(findActive == null /*&& detectDeviceMediaQuery() == "visible"*/) {
			var getNav = document.querySelector(".navbar");
			getNav.classList.remove("navbar-fixed-top");
			getNav.style.top = "auto";
		}
	}
}

//handle ratios of portfolio hover divs against their respective images
function hoverDivRatios() {
	var hoverDiv = $('.hover');
	var getLinks = $('.hoverDiv a');
	var getImg = $('.hoverDiv a img');
	handleRatios(getImg, getLinks);
	handleRatios(getImg, hoverDiv);
}

function handleRatios(elementToHandle1, elementToHandle2) {
	$.each(elementToHandle1, function() {
		var imgWidth = $(this).width();
		var imgHeight = $(this).height();
		$.each(elementToHandle2, function() {
			var itemWidth = $(this).css("width", imgWidth);
			var itemHeight = $(this).css("height", imgHeight);
		});
	});
}


