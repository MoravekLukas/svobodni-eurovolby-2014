function detectmob() {
	if (window.innerWidth <= 950 && window.innerHeight <= 700) {
		return true;
	} else {
		return false;
	}
}

function NopseOnScroll() {
	var window_pos = window.pageYOffset;
	$('.slide').each(function(){
		slideMe($(this), window_pos);
	});
}

function NopseAnchorAction() {
	$('.slide').each(function (index) {
		if ($(this).css('position') == "fixed") {
			var el = $(this);
			el.css({"position":"absolute", "top":el.index() * 100 + "vh"});
		}
	});
}

if(!detectmob()){
	 function slideMe(el, window_pos) {
	  //Set the fixed position on slides when we scroll past them.
	  if (el.index() > 0){
	   el.css({"position":"absolute", "top":el.index() * 100 + "vh"});
	   if(window_pos > el.offset().top) {
		  el.css({"position":"fixed", "top":"0"});
	   }
	  }
	 }
	 
	
	 
	$(function() {
		$('.slide').each(function(){
			if ($(this).index() > 0){
				$(this).css({"position":"absolute", "top":$(this).index() * 100 + "vh"});
			}
		});

		$('.vcenter').each(function(){
			$(this).css({"margin-top":(($(this).parent().height() - $(this).height())/2)});
		});

		$(window).scroll(function() {
			NopseOnScroll();
		});
	});
}