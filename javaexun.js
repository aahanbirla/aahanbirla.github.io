$("document").ready(function(){
	var $current = '#_home';
	$(window).scrollTo('#home', 400);
	// $("body").niceScroll().resize();
	$(window).load(function(){
		$(".home").animate({
			opacity:'1.0',
			marginTop:'5%'
		}, 500);
               window.onscroll = function() {
                    var speed = 8.0;
                    document.body.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px" ;
                }
		$("#_home").addClass('active');
		$(".menu ul li:nth-of-type(1)").animate({
				top:'0px'
		}, 100);
		$(".menu ul li:nth-of-type(2)").delay(100).animate({
				top:'0px'
		}, 100);
		$(".menu ul li:nth-of-type(3)").delay(200).animate({
				top:'0px'
		}, 100);
		$(".menu ul li:nth-of-type(4)").delay(300).animate({
				top:'0px'
		}, 100);
		$(".menu ul li:nth-of-type(5)").delay(400).animate({
				top:'0px'
		},100);
		$(".menu ul li").click(function(){
			var $attr = $(this).attr('id');
			$attr = '#'+$attr;
			$($current).removeClass('active');
			$($attr).addClass('active');
			$current = $attr;
			
			var $scroll = $current.replace("#_","#"); 
			$(window).scrollTo($scroll, 400 );
		});
		$("#_home").click(function(){
			$(window).scrollTo($scroll, 400, {offset:-50});
		});
	});
});