(function ($) {
 "use strict";

/*-----------------------------
	Preloader
---------------------------------*/
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");;
    });
    
/*-----------------------------
	Menu Stick
---------------------------------*/
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll < 245) {
        $(".sticker").removeClass("stick");
       }else{
        $(".sticker").addClass("stick");
       }
    });
    
/*----------------------------
    jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
    
    
/*----------------------------
    Toogle Search
------------------------------ */
    // Handle click on toggle search button
    $('.header-search').on('click', function() {
        $('.search').toggleClass('open');
        return false;
    }); 
    
/*----------------------------
    Wow js active
------------------------------ */
    new WOW().init();
    
/*----------------------------
    arrival owl active
------------------------------ */
    $('.arrival-owl').owlCarousel({
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 4,
        responsiveClass:true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:3
            }, 
            992:{
                items:3
            }, 
            1200:{
                items:4
            }
        }        
    });
    
/*----------------------------
    Client owl active
------------------------------ */
    $('.client-owl').owlCarousel({
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 5,
        responsiveClass:true,
        nav:false,
        navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:3
            }, 
            992:{
                items:4
            }, 
            1200:{
                items:5
            }
        }        
    }); 
    
/*--------------------------
    Countdown
---------------------------- */ 
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>Days</div><div class="cdown hours"><span class="counting">%-H</span>Hour</div><div class="cdown minutes"><span class="counting">%M</span>Mint</div><div class="cdown seconds"><span class="counting">%S</span>Secs</div>'));
        });
    });
   
/*----------------------------
 price-slider active
------------------------------ */  
    $( "#slider-range" ).slider({
        range: true,
        min: -80,
        max: 460,
        values: [ 25, 325 ],
        slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );
               	  
/*--------------------------
 Elevatezoom 
---------------------------- */	
    $('#zoom1').elevateZoom({
        gallery:'gallery_01',
        responsive : true, 
        galleryActiveClass: 'active', 
        imageCrossfade: true,
        easing : true,
        cursor: 'default',
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });
    
/*--------------------------
    ScrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
          
/*--------------------------
    Counter Up
---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
    
/*------------------------------------
	Video Player
--------------------------------------*/
    jQuery("#bgndVideo").YTPlayer({
        showControls: false
    });
 
/*------------------------------------
	MailChimp
--------------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });
    
    function mailChimpResponse(resp) {
        
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
            
        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
    
/*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    
/*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        verticalScrolling: true,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        draggable: true,
        arrows: false,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: 
        [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    }); 
    
/*--------------------------------
	Testimonial Slick Carousel
-----------------------------------*/
    $('.testimonial-text-slider-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    
/*------------------------------------
	Testimonial Slick Carousel as Nav
--------------------------------------*/
    $('.testimonial-image-slider-two').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider-two',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 450,
              settings: {
                dots: false,
                slidesToShow: 3,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });  

/*--------------------------
    Circle Chart js
---------------------------- */	
     $('.myStat').circliful({animationstep: 0.2,});
    
/*--------------------------
    Venubox
---------------------------- */	
    $('.venobox').venobox({    
        border: '10px',          
        titleattr: 'data-title',  
        numeratio: true,           
        infinigall: true,        
    }); 
   
/*--------------------------
    Mix It Up
---------------------------- */	
    $('.filter-items').mixItUp();
      
/*--------------------------
    Textillate 
---------------------------- */  
    $('.tlt').textillate({
        loop: true
    });


})(jQuery); 
