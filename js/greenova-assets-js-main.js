jQuery(document).ready(function($){
	"use strict";

    /* Scroll to top */
    $('.scrollToTop').on('click',function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });	

	// Swiper Slider
	$(".rt-main-slider-wrapper").each(function () {
		var swiperSlider = $(this).find('.swiper-container');
        var sliderOptions = swiperSlider.data('option');
        var swiper = new Swiper(swiperSlider, sliderOptions);
    });

	// var rtWinWidth = $(this).width();
	
	// if(rtWinWidth > 992) {
	// 	$(".rt-main-slider-wrapper").fadeIn()
	// }

		
	/* Fixing for hover effect at IOS */
	$('*').on('touchstart', function () {
		$(this).trigger('hover');
	}).on('touchend', function () {
		$(this).trigger('hover');
	});
	
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
			$( "body" ).addClass( "not-top" );
			$( "body" ).removeClass( "top" );
        } else {
            $('.scrollToTop').fadeOut();
			$( "body" ).addClass( "top" );
			$( "body" ).removeClass( "not-top" );
        }
    });
	
	window.windowWidth = $(window).width();
	
    /* Nav smooth scroll */
    // $('#site-navigation .menu').onePageNav({
    //     extraOffset: ThemeObj.extraOffset,
    // });

	$('#site-navigation .menu').navpoints({
		updateHash:true
	});
	
 	/* Search Box */
	$(".search-box-area").on('click', '.search-button, .search-close', function(event){
		event.preventDefault();
		if($('.search-text').hasClass('active')){
			$('.search-text, .search-close').removeClass('active');
		}
		else
		{
			$('.search-text, .search-close').addClass('active');
		}
		return false;
	});


	// Mobile Menu
	var mobileMenu = $('.offscreen-navigation .menu');

    if (mobileMenu.length) {
        mobileMenu.children("li").addClass("menu-item-parent");
        mobileMenu.find(".menu-item-has-children > a").on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("opened");
            var n = $(this).next(".sub-menu"),
                s = $(this).closest(".menu-item-parent").find(".sub-menu");
            mobileMenu.find(".sub-menu").not(s).slideUp(250).prev('a').removeClass('opened'), n.slideToggle(250)
        });
        mobileMenu.find('.menu-item:not(.menu-item-has-children) > a').on('click', function (e) {
            $('.rt-slide-nav').slideUp();
            $('body').removeClass('slidemenuon');
        });
    }

	$('.sidebarBtn.circle-btn').on('click', function (e) {
		e.preventDefault();
		$('.overly-sidebar-wrapper').addClass('show');
		$('.offcanvas-menu-btn').addClass('menu-status-open');
	});

	$('.mean-bar .sidebarBtn').on('click', function (e) {
		e.preventDefault();
		if ($('.rt-slide-nav').is(":visible")) {
			$('.rt-slide-nav').slideUp();
			$('body').removeClass('slidemenuon');
		} else {
			$('.rt-slide-nav').slideDown();
			$('body').addClass('slidemenuon');
		}

	});


    /* Header Right Menu */
	var menuArea = $('.additional-menu-area');
    menuArea.on('click', '.side-menu-trigger', function (e) {
    	e.preventDefault();
        $('.sidenav').width(380);
		if(!menuArea.find('> .rt-cover').length){
			menuArea.append("<div class='rt-cover'></div>");
		}
    });
    menuArea.on('click', '.closebtn', function (e) {
        e.preventDefault();
		if(menuArea.find('> .rt-cover').length){
			menuArea.find('> .rt-cover').remove();
		}
        $('.sidenav').width(0);
    });
	
	$(document).on('click', '.rt-cover', function(){
		$(this).remove();
        $('.sidenav').width(0);
	});

    /* Mega Menu */
    $('.site-header .main-navigation ul > li.mega-menu').each(function() {
        // total num of columns
        var items = $(this).find(' > ul.sub-menu > li').length;
        // screen width
        var bodyWidth = $('body').outerWidth();
        // main menu link width
        var parentLinkWidth = $(this).find(' > a').outerWidth();
        // main menu position from left
        var parentLinkpos = $(this).find(' > a').offset().left;

        var width = items * 220;
        var left  = (width/2) - (parentLinkWidth/2);

        var linkleftWidth  = parentLinkpos + (parentLinkWidth/2);
        var linkRightWidth = bodyWidth - ( parentLinkpos + parentLinkWidth );

		if(items < 3) {
			parentLinkpos = 0;
			left = 0;
		}
		
        // exceeds left screen
        if( (width/2)>linkleftWidth ){
            $(this).find(' > ul.sub-menu').css({
                width: width + 'px',
                right: 'inherit',
                left:  '-' + parentLinkpos + 'px'
            });        
        }
        // exceeds right screen
        else if ( (width/2)>linkRightWidth ) {
            $(this).find(' > ul.sub-menu').css({
                width: width + 'px',
                left: 'inherit',
                right:  '-' + linkRightWidth + 'px'
            }); 
        }	
        else {
            $(this).find(' > ul.sub-menu').css({
                width: width + 'px',
                left:  '-' + left + 'px'
            });           
        }
    });
	
    /* Mega Menu for vertical */
    $('.site-header .vert-menu ul > li.mega-menu').each(function() {
        // total num of columns
        var items = $(this).find(' > ul.sub-menu > li').length;
        // screen width
        var bodyWidth = $('body').outerWidth();
        // main menu link width
        var parentLinkWidth = $(this).find(' > a').outerWidth();
        // main menu position from left
        var parentLinkpos = $(this).find(' > a').offset().left;

        var width = items * 220;
        var left  = (width/2) - (parentLinkWidth/2);

        var linkleftWidth  = parentLinkpos + (parentLinkWidth/2);
        var linkRightWidth = bodyWidth - ( parentLinkpos + parentLinkWidth );
		
		$(this).find(' > ul.sub-menu').css({
			width: width + 'px',
			left: '100%',
			top: '0'
		});
    });
	
	/*header content gap*/
	if (windowWidth < 1025) {
		$('#cat-menu-header').addClass('collapse');
		$('#category-menu-area').fadeOut( "fast" );
	}
	
    /* Sticky Menu */
    if ( ThemeObj.stickyMenu == 1 || ThemeObj.stickyMenu == 'on' ) {
		
		$(window).on('scroll', function () {
								
			var s = $('#sticker'),
				w = $('body'),
				h = s.outerHeight(),
				windowpos = $(window).scrollTop(),
				windowWidth = $(window).width(),
				h1 = s.parent('#header-1'),
				h2 = s.parent('#header-2'),
				h3 = s.parent('#header-3'),
				h4 = s.parent('#header-4'),
				h5 = s.parent('#header-5'),
				h6 = s.parent('#header-6'),
				h9 = s.parent('#header-9'),
				h10 = s.parent('#header-10'),
				h11 = s.parent('#header-11'),
				h12 = s.parent('#header-12'),
				h1H = h1.find('.header-top-bar').outerHeight(),
				topBar = s.prev('.header-top-bar'),
				topBarP = w.hasClass('has-topbar'),
				tempMenu;
			if (windowWidth > 991) {
				
				w.css('padding-top', '');
				var topBarH, mBottom = 0;
				
			/*header 1 & header 2 & header 5*/
			if (h1.length || h2.length || h5.length || h9.length) {
				if (topBarP == true) {
				
					topBarH = topBar.outerHeight();
					if (windowpos <= topBarH) {
						if (h1.hasClass('header-fixed') || h2.hasClass('header-fixed') || h5.hasClass('header-fixed') || h9.hasClass('header-fixed')) {
							h1.css('top', '-' + windowpos + 'px');
							h2.css('top', '-' + windowpos + 'px');
							h5.css('top', '-' + windowpos + 'px');
							h9.css('top', '-' + windowpos + 'px');
						}
					}
					
					if (windowpos >= topBarH) {
						if (h1.length || h2.length || h5.length || h9.length) {
							s.addClass('stickp');
							$('.header-fixed').addClass('bottomBorder');
							w.removeClass("stickh");
							w.addClass("non-stickh");
							
						}
						if (h1.length || h2.length || h5.length || h9.length) {
							if (h1.hasClass('header-fixed') || h2.hasClass('header-fixed') || h5.hasClass('header-fixed') || h9.hasClass('header-fixed')) {
								h1.css('top', '-' + topBarH + 'px');
								h2.css('top', '-' + topBarH + 'px');								
								h5.css('top', '-' + topBarH + 'px');
								h9.css('top', '-' + topBarH + 'px');
							} 
						} 
					} else {
						s.removeClass('stickp');
						$('.header-fixed').removeClass('bottomBorder');
						w.removeClass("non-stickh");
						w.addClass("stickh");
					}
				
				} else {
					if (windowpos == 0) {
						if (h1.length || h2.length || h5.length || h9.length) {
							s.addClass('stickp');
							$('.header-fixed').removeClass('bottomBorder');
							w.removeClass("non-stickh");
							w.addClass("stickh");
						}
						if (h1.length || h2.length || h5.length) {
							if (h1.hasClass('header-fixed') || h2.hasClass('header-fixed') || h5.hasClass('header-fixed') || h9.hasClass('header-fixed')) {
								h1.css('top', '-' + topBarH + 'px');
								h2.css('top', '-' + topBarH + 'px');
								h5.css('top', '-' + topBarH + 'px');
								h9.css('top', '-' + topBarH + 'px');
							}
						} 
					} else {
						s.removeClass('stickp');
						$('.header-fixed').addClass('bottomBorder');
						w.removeClass("stickh");
						w.addClass("non-stickh");
					}
				}
			}
			/*header 3*/
			var headerFirstrow = $('.header-firstrow').outerHeight(), h3heightGap;
			if (h3.length) {
				topBarH = topBar.outerHeight();
				h3heightGap = headerFirstrow + topBarH;
				if (windowpos <= h3heightGap) {
					if (h3.hasClass('header-fixed')) {
						h3.css('top', '-' + windowpos + 'px');
					}
				}
			
				if (windowpos >= h3heightGap) {
					if (h3.length) {
						s.addClass('stickp');
						$('.header-fixed').addClass('bottomBorder');
						w.removeClass("non-stickh");
						w.addClass("stickh");
					}
					if (h3.length) {
						if (h3.hasClass('header-fixed')) {
							h3.css('top', '-' + h3heightGap + 'px');
						} else {
							w.css('padding-top', h + 'px');
						}
					} 
				} else {
					s.removeClass('stickp');
					$('.header-fixed').removeClass('bottomBorder');
					w.removeClass("stickh");
					w.addClass("non-stickh");
					if (h3.length) {
						w.css('padding-top', 0);
					}
				}
			}
				
			/*header 4*/
			var headerFirstrow = $('.header-firstrow').outerHeight(), h4heightGap;
			if (h4.length) {
				topBarH = topBar.outerHeight();
				h4heightGap = headerFirstrow + topBarH;
				if (windowpos <= h4heightGap) {
					if (h4.hasClass('header-fixed')) {
						h4.css('top', '-' + windowpos + 'px');
					}
				}
			
				if (windowpos >= h4heightGap) {
					if (h4.length) {
						s.addClass('stickp');
						$('.header-fixed').addClass('bottomBorder');							
						w.removeClass("stickh");
						w.addClass("non-stickh");
					}
					if (h4.length) {
						if (h4.hasClass('header-fixed')) {
							h4.css('top', '-' + h4heightGap + 'px');
						}
					} 
				} else {
					s.removeClass('stickp');
					$('.header-fixed').removeClass('bottomBorder');
					w.removeClass("non-stickh");
					w.addClass("stickh");
				}
			}
								
			/*header 6 and header 10*/
			var headerFirstrow = $('.header-firstrow').outerHeight(), h6heightGap, h10heightGap, h11heightGap, h12heightGap;
			if (h6.length || h10.length || h11.length || h12.length) {
				topBarH = topBar.outerHeight();
				h6heightGap = headerFirstrow + topBarH;
				h10heightGap = headerFirstrow + topBarH;
				h11heightGap = headerFirstrow + topBarH;
				h12heightGap = headerFirstrow + topBarH;
				if (windowpos <= h6heightGap || windowpos <= h10heightGap || windowpos <= h11heightGap || windowpos <= h12heightGap) {
					if (h6.hasClass('header-fixed') || h10.hasClass('header-fixed') || h11.hasClass('header-fixed') || h12.hasClass('header-fixed')) {
						h6.css('top', '-' + windowpos + 'px');
						h10.css('top', '-' + windowpos + 'px');
						h11.css('top', '-' + windowpos + 'px');
						h12.css('top', '-' + windowpos + 'px');
					}
				}
				if (windowpos >= h6heightGap || windowpos >= h10heightGap || windowpos >= h11heightGap || windowpos >= h12heightGap) {
					if (h6.length || h10.length || h11.length || h12.length) {
						s.addClass('stickp');
						w.removeClass("stickh");
						w.addClass("non-stickh");
						$('.header-fixed').addClass('bottomBorder');
					}
					if (h6.length || h10.length || h11.length || h12.length) {
						if (h6.hasClass('header-fixed') || h10.hasClass('header-fixed') || h11.hasClass('header-fixed') || h12.hasClass('header-fixed')) {
							h6.css('top', '-' + h6heightGap + 'px');							
							h10.css('top', '-' + h10heightGap + 'px');							
							h11.css('top', '-' + h11heightGap + 'px');
							h12.css('top', '-' + h12heightGap + 'px');
						} else {
							w.css('padding-top', h + 'px');
						}
					} 
				} else {
					s.removeClass('stickp');
					$('.header-fixed').removeClass('bottomBorder');
					w.removeClass("non-stickh");
					w.addClass("stickh");
					
					if (h6.length || h10.length || h11.length || h12.length) {
						w.css('padding-top', 0);
					}
				}
			}
						
		} 
		
	});
}
		
    /* Owl Custom Nav */
    if (typeof $.fn.owlCarousel == 'function') {
        $(".owl-custom-nav .owl-next").on('click', function() {
            $(this).closest('.owl-wrap').find('.owl-carousel').trigger('next.owl.carousel');
        });
        $(".owl-custom-nav .owl-prev").on('click', function() {
            $(this).closest('.owl-wrap').find('.owl-carousel').trigger('prev.owl.carousel');
        });
		
        $(".rt-owl-carousel").each(function() {
            var options = $(this).data('carousel-options');			
            if ( ThemeObj.rtl == 'yes' ) {
                options['rtl'] = true; //@rtl
            }
            $(this).owlCarousel(options);
        });
		
    }
	
	/*VC JS*/
	/* Counter */
	if ( typeof $.fn.counterUp == 'function') {
		$('.rt-vc-counter .rt-counter , .rt-vc-counter-2 .rt-counter , .rt-vc-counter-3 .rt-counter, .rt-vc-counter-4 .rt-counter').counterUp({
			delay: $(this).data('rtSteps'),
			time: $(this).data('rtSpeed')
		});

		$('.rt-counter-wrapper').each(function(){
			var counterWrap = $(this).find('.rt-counter');
			var counterData = counterWrap.data();
			counterWrap.counterUp({
				delay: counterData.rtSteps,
				time: counterData.rtspeed
			});
		});
	}	
	/* Team Slider 3 Detail*/
    $(".rtin-team-box").on({
        mouseenter: function(){
            var bghover = $(this).data('bghover');
            $(this).find(".rtin-single-team").css('background-color', bghover);
        },
        mouseleave: function(){
            var bgcolor = $(this).data('bgcolor');
            $(this).find(".rtin-single-team").css('background-color', bgcolor);          
        }
    }, this);

	/* Infobox 1 */
    $(".rt-info-text-1").on({
        mouseenter: function(){
			
            var hovercolor = $(this).data('hover');
            $(this).find(".pull-left i").css('color', hovercolor);
			
            var bghovercolor = $(this).data('bghovercolor');
            $(this).find(".pull-left i").css('background-color', bghovercolor);			
			
            var title_hover = $(this).data('title-hover');
            $(this).find(".media-body h3, .media-body h3 a").css('color', title_hover);
        },
		
        mouseleave: function(){			
            var color = $(this).data('color');
            $(this).find(".pull-left i").css('color', color);
			
            $(this).find(".pull-left i").css('background-color', '');	
			
            var title_color = $(this).data('title-color');
            $(this).find(".media-body h3, .media-body h3 a").css('color', title_color);			
        }
    }, this);
	
	/* Infobox 3 */
    $(".rt-info-text-3").on({
        mouseenter: function(){
            var title_hover = $(this).data('title-hover');
            $(this).find(".media-body h3, .media-body h3 a").css('color', title_hover);
        },
        mouseleave: function(){			
            var title_color = $(this).data('title-color');
            $(this).find(".media-body h3, .media-body h3 a").css('color', title_color);			
        }
    }, this);
	
	/* Pricing Box 1 */
    $(".rt-price-table-box1.vc-elem").on({
        mouseenter: function(){
            var bghover = $(this).data('bghover');
            $(this).css('background-color', bghover);
            $(this).find(".rt-btn a , .price-holder , a.pricetable-btn").css('color', bghover);
			
        },
        mouseleave: function(){
            var bgcolor = $(this).data('bgcolor');
            $(this).css('background-color', bgcolor);
            $(this).find(".rt-btn a").css('color', '');          
            $(this).find(".price-holder").css('color', bgcolor);
			$(this).find("a.pricetable-btn").css('color', '#f8f8f8');
        }
    }, this);
	
	/* Infobox 5 */	
	$('.rt-infobox-5').each(function() {
        var $column = $(this).closest('.vc_column-inner');
        var bgcolor = $column.css('background-color');
        var bghover = $(this).data('hover');
        $column.on({
            mouseenter: function(){
                $column.attr('style', 'background-color: '+ bghover +' !important');
            },
            mouseleave: function(){
                $column.attr('style', 'background-color: '+ bgcolor +' !important');
            }
        });
    });
	
	/* Service Box 6 - grid & slider also */
    $(".rt-service-layout-6").on({
        mouseenter: function(){
            var bghover = $(this).data('bghover');
            $(this).css('background-color', bghover);
        },
        mouseleave: function(){
            var bgcolor = $(this).data('bgcolor');
            $(this).css('background-color', bgcolor);
        }
    }, this);	
	
	/* Infobox 11*/
    $(".rt-info-text-11").on({
        mouseenter: function(){
            var title_hover = $(this).data('title-hover');
            $(this).find(".media-body h3, .media-body h3 a").css('color', title_hover);
        },
        mouseleave: function(){			
            var title_color = $(this).data('title-color');
            $(this).find(".media-body h3, .media-body h3 a").css('color', title_color);			
        }
    }, this);
	
    /* Woocommerce Shop change view */
    $('#shop-view-mode li a').on('click',function(){
        $('body').removeClass('product-grid-view').removeClass('product-list-view');

        if ( $(this).closest('li').hasClass('list-view-nav')) {
            $('body').addClass('product-list-view');
            Cookies.set('shopview', 'list');
        }
        else{
            $('body').addClass('product-grid-view');
            Cookies.remove('shopview');
        }
        return false;
    });
	

	// Popup - Used in video
	if ( typeof $.fn.magnificPopup == 'function') {
		$('.rt-video-popup').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}
	
	var $grid = $('.rt-masonry-grid').imagesLoaded( function() {
	$grid.masonry({
			// set itemSelector so .grid-sizer is not used in layout
			itemSelector: '.rt-grid-item',
			// use element for option
			columnWidth: '.rt-grid-sizer',
			percentPosition: true
		});
	});
	
	// Wishlist Icon
	$(document).on('click', '.rdtheme-wishlist-icon',function() {
		if ( $(this).hasClass('rdtheme-add-to-wishlist')) {

			var $obj = $(this),
				productId = $obj.data('product-id'),
				afterTitle = $obj.data('title-after');

			var data = {
				'action' : 'greenova_add_to_wishlist',
				'context' : 'frontend',
				'nonce' : $obj.data('nonce'),
				'add_to_wishlist' : productId,
			};

			$.ajax({
				url : ThemeObj.ajaxurl,
				type : 'POST',
				data : data,
				success : function( data ){
					if ( data['result'] != 'error' ) {
						$obj.find('.wishlist-icon').removeClass('fa-heart-o').addClass('fa-heart').show();
						$obj.removeClass('rdtheme-add-to-wishlist').addClass('rdtheme-remove-from-wishlist');
						$obj.attr('title', afterTitle);
					}
				}
			});

			return false;
		}
	});
	
});

(function($){
    "use strict";

// Window Load+Resize
   $(window).on('load resize', function () {
		var windowWidth = $(window).width();
		if (windowWidth > 992) {
			var w = $('body'),
			Hh1 = $('.header-area'),
			Hh1slider = Hh1.parents('body').find("#header-area-space"),	
			isAdmin = $( "body" ).hasClass( "admin-bar" ),
			adminBarHeight,
			totalHeight,
			topBarP = w.hasClass('has-topbar'),
			mHeightL,
			mHeight;
			if (isAdmin == true){
			adminBarHeight = 32;
			} else {
			adminBarHeight = 0;
			}

			if(Hh1.length){

			mHeightL = $('body .header-area').outerHeight();

			if ( mHeightL == 0 ) {				
				if ( topBarP ) {
					mHeight = 136;
				} else {
					mHeight = 96;
				}
			} else {
				mHeight = mHeightL;
			}
			totalHeight = mHeight - adminBarHeight;
			Hh1slider.css("margin-top", totalHeight + 'px');
			}
		} else {
			var Hh1 = $('.header-area'),
			Hh1slider = Hh1.parents('body').find("#header-area-space"),	
			isAdmin = $( "body" ).hasClass( "admin-bar" ),
			adminBarHeight,
			totalHeight,
			mHeight;
			if (isAdmin == true){
			adminBarHeight = 32;
			} else {
			adminBarHeight = 0;
			}
			if(Hh1.length){
			mHeight = $('body .header-area').outerHeight();
			totalHeight = mHeight - adminBarHeight;
			Hh1slider.css("margin-top", 0 + 'px');
			}
		}

        // Define the maximum height for mobile menu
        var wHeight = $(window).height();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('max-height', wHeight + 'px');
		
		var maxHeight = 0;

		$(".service3-box-right.rt-info-text-4 , .rt-info-text-7 .service-box ").each(function(){
		   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
		});

		$(".wpb_wrapper .service3-box-right.rt-info-text-4").height(maxHeight);
		$(".wpb_wrapper .rt-info-text-7 .service-box").height(maxHeight);
		
    });

    // Window Load
    $(window).on('load', function () {
        // Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });

		$('#meanmenu .menu').navpoints({
			updateHash:true,
			extraOffset: ThemeObj.extraOffsetMobile,
			end: function() {
                $('.meanclose').trigger('click');
            } 
		});

		$('#site-navigation .menu').navpoints({
			updateHash:true
		});
		
		/* Project - Isotope initialization */
		var $container = $('#inner-isotope');
		if ($container.length > 0) {

			// Isotope initialization
			var $isotope = $container.find('.featuredContainer, .featuredContainer2 , .featuredContainerrr, .featuredContainer3').isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});

			// Isotope filter
			$container.find('.rt-portfolio-tab').on('click', 'a', function () {

				var $this = $(this);
				$this.parent('.rt-portfolio-tab').find('a').removeClass('current');
				$this.addClass('current');
				var selector = $this.attr('data-filter');
				$isotope.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;

			});
		}
		
    });

})(jQuery);