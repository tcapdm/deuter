$(document).ready(function(){

////	// slick slider
	slick_slider();
	item_slider();
//
////	// Animation
	var controller = new ScrollMagic.Controller();
    $(window).load(function(){
    	var nav_shape = $('.block-nav'),
    		nav_logo = $('.page-logo');
        
        $("#loader-wrapper").fadeOut();
    	TweenLite.from(nav_shape, 1.5, { autoAlpha: 0, top: '-35px', ease: Bounce.easeOut})
    	TweenLite.from(nav_logo, 1, { autoAlpha: 0, rotation: '100', ease:  Back. easeOut.config( 1.7), delay: '0.2'})
    });
    
    // section-top
    var parallax_top = new ScrollMagic.Scene({
        triggerElement: '.slider-bottom',
        triggerHook: 0.6,
        duration: '160%'
    })
    
    .setTween(TweenMax.to('.block-top .item-slider', 0.9, {y: '30%'}))
    .addTo(controller);
    
    
    var win_width = $(window).width();
    
    if(win_width < '768'){
        controller.enabled(false);
    }
    
    $(window).resize(function(){
        location.reload();
    })
    
    // section-mid
    var parallax_mid = new ScrollMagic.Scene({
        triggerElement: '.slider-bottom',
        triggerHook: 0.5,
        duration: '170%'
    })
    .setTween(TweenMax.to('.block-mid', 0.8, {y: '55%'}))
    .addTo(controller);

    //section-bot
    var parallax_bot = new ScrollMagic.Scene({
        triggerElement: '.slider-bottom',
        triggerHook: 0.5,
        duration: '220%'
    })
    .setTween(TweenMax.to('.block-bot', 0.5, {y: '180%'}))
    .addTo(controller);
    
    var bot_slider = new ScrollMagic.Scene({
        triggerElement: '.slider-bottom',
        triggerHook: 0.5,
        duration: '220%'
    })
    .setTween(TweenMax.to('.block-bot .item-slider', 0.4, {y: '-18%'}))
    .addTo(controller);

    // Smoothscroll
    var $window = $(window);
    var scrollTime = 0.7;
    var scrollDistance =460;

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            overwrite: 5
        });

    });
});

function slick_slider(){
	$('.slick-slider').slick({
	  dots: false,
	  infinite: false,
	  arrows: false,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	  ]
  });
}

function item_slider(){
	$('.slider-item').slick({
		  dots: false,
		  infinite: false,
		  arrows: false,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
  		  autoplaySpeed: 3000,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	  });
}