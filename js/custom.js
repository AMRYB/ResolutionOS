/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR ResolutionOS               ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
 
 1. revolution slider
 2. accrodion
 3. claint carousel 
 4. gallerylCarousel
 5. masanory
 6. counter number changer
 7. contact form validation
 8. sticky header
 9. gallery
 10. typed plugin
 11. testimonails carousel
 12. testimonails carousel
 13. tool tip activation
 14. single featured hover 
 15. language switcher
 16. about carousel
 17. Testimonials Carousel
 18. Project carousel
 19. Blog Share toggling
 20. Responsive Video
 21. Price Filter
 22. Cart Touch Spin
 23. Video Fancybox
 24. Mobile Nav Toggler
 25. Contact Form Validation
 26. Scroll to top
 27. Style Switcher
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/


	



"use strict"; // Start of use strict



function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper .slider1').length) {
        var Self = $('.rev_slider_wrapper .slider1');
        var slideHeight = Self.data('height');
        jQuery(".slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: { enable: true }
            },
            gridwidth: 1170,
            gridheight: 860
        });
    };
}



if ($('.accordion-box').length) {
            $('.accordion-box .acc-btn').on('click', function() {
                if ($(this).hasClass('active') !== true) {
                    $('.accordion-box .acc-btn').removeClass('active');
                }

                if ($(this).next('.acc-content').is(':visible')) {
                    $(this).removeClass('active');
                    $(this).next('.acc-content').slideUp(500);
                } else {
                    $(this).addClass('active');
                    $('.accordion-box .acc-content').slideUp(500);
                    $(this).next('.acc-content').slideDown(500);
                }
            });
        }


$(".claint-carousel").owlCarousel({
      items:5,
        dots:false,
      loop: true,
     margin:120,
     autoplay:true,
    
     
      autoplayHoverPause:true,
      responsive: {
           0:{
               items:1,
               dots:false
                },
            480:{
                items:2,
                dots:false
                },
            768:{
                 items:3,
                 dots:false
                 },
            1000:{
                  items:5,
                  
                 },
      }
  });

// gallery carousel
function gallerylCarousel() {
    if ($('.our-projects-carousel3').length) {
        $('.our-projects-carousel3').owlCarousel({
            loop: true,
            items: true,
            nav: false,
            navText: false,
            dots: true,
            autoWidth: false,
            autoplay:false
        });
    };
}

$(".our-projects-carousel").owlCarousel({
  items:4,
  autoplay:true,
  loop: true,
  autoplayHoverPause:true,
  responsive: {
       0:{
           items:1,
           dots:false
            },
        480:{
            items:2,
            dots:false
            },
        768:{
             items:3,
             dots:false
             },
        1000:{
              items:4,
              
             },
  }
});  
       
    // isoptop 
function masanory () {
    if ($("#isotop_wrapper").length) {
        var $grid = $('#isotop_wrapper').isotope({
          // options
          itemSelector: '.isotop_item',

        });

        // filter items on button click
        $('.gallery_menu').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

         // change is-checked class on buttons
          $('.gallery_menu').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $( this ).addClass('is-checked');
            });
          });
    };
}
    
 if($('.filter-list').length){
  $('.filter-list').mixItUp({});
 }

function tabsactiver() {

    //Tabs Box
    if($('.tabs-box').length){
        
        //Tabs
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            
            e.preventDefault();
            var target = $($(this).attr('data-tab'));
            
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tab-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tab-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        });
        
    }

}
function featurecarouselactiver() {
    //Featured Carousel Slider
    if($('.featured-carousel').length){
        $('.featured-carousel').bxSlider({
            adaptiveHeight: false,
            auto:false,
            mode:'fade',
            controls: false,
            pause: 500,
            speed: 500,
            pager:false
        });
    }   
    
}  
    

function thmMailchimp() {
    if ($('.mailchimp-form').length) {
        $('.mailchimp-form').each(function() {
            var mailChimpWrapper = $(this);

            mailChimpWrapper.validate({ // initialize the plugin
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                submitHandler: function(form) {
                    // sending value with ajax request
                    $.post($(form).attr('action'), $(form).serialize(), function(response) {
                        $(form).parent().find('.result').append(response);
                        $(form).find('input[type="text"]').val('');
                        $(form).find('input[type="email"]').val('');
                        $(form).find('textarea').val('');
                    });
                    return false;
                }
            });
        });
    };
}

function priceFilter() {
    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 200
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function(values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    };
}

function thmOwlCarousel() {
    if ($('.related-project-carousel').length) {
        $('.related-project-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 2,
                    autoWidth: false
                },
                1000: {
                    items: 3,
                    autoWidth: false
                },
                1200: {
                    items: 3,
                    autoWidth: false
                },
                1400: {
                    items: 3,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.latest-project-carousel').length) {
        $('.latest-project-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 2,
                    autoWidth: false
                },
                768: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 4,
                    autoWidth: false
                },
                1200: {
                    items: 4,
                    autoWidth: false
                },
                1400: {
                    items: 5,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.testimonila-home-carousel').length) {
        $('.testimonila-home-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.highlight-wrapper .owl-carousel').length) {
        $('.highlight-wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 2,
                    autoWidth: false
                },
                1000: {
                    items: 3,
                    autoWidth: false
                },
                1200: {
                    items: 4,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.area-content.owl-carousel').length) {
        $('.area-content.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 3,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.single-service-feature-carousel').length) {
        $('.single-service-feature-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };

    if ($('.single-service-img-carousel').length) {
        $('.single-service-img-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: true,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.testimonial-widget-carousel').length) {
        $('.testimonial-widget-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 1,
                    autoWidth: false
                }
            }
        });
    };
}

function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}




function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}








function thmbxSlider() {
    if ($('.feature-carousel-box').length) {
        $('.feature-carousel-box').bxSlider({
            mode: 'vertical',
            auto: true,
            autoControls: false,
            controls: false,
            pause: 3000,
            slideMargin: 0
        });
    }
}


function thmMasterSliderStaff() {
    if ($('.testimonial-about-carousel').length) {
        var slider = new MasterSlider();
        slider.setup('masterslider', {
            loop: true,
            width: 80,
            height: 80,
            speed: 20,
            view: 'fadeBasic',
            preload: 'all',
            space: 20,
            wheel: true
        });
        slider.control('arrows');
        slider.control('slideinfo', { insertTo: '#staff-info' });
    };
}
thmMasterSliderStaff();

function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('fadeIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
            $('.scroll-to-top').fadeIn(500);
        }
        else if($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}


function thmLightBox() {
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
}

function thmCounter() {
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };
}

function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}

function contactFormValidation() {
    if ($('.contact-form').not('[data-contact-status=unconfigured]').length) {
        $('.contact-form').not('[data-contact-status=unconfigured]').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).find('.form-result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }
}

function thmVideoPopup() {
    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    };
}

function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

function mobileNavToggle () {
    if ($('.header .header-navigation.navbar .navbar-nav .sub-menu').length) {
        $('.header .header-navigation.navbar .navbar-nav .sub-menu').parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        $('.header .header-navigation.navbar .navbar-nav .sub-nav-toggler').on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    };
}

//Preloader
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(500).fadeOut(500);
    }
}



    //Image Slider
    if ($('.image-slider').length) {
        $('.image-slider').owlCarousel({
            loop:true,
              nav : true,
              smartSpeed : 1000,
              autoplay: 7000,
              responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                },
                1400:{
                    items:1
                }
            }
        });         
    }













// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        revolutionSliderActiver();
        thmMailchimp();
        priceFilter();
        thmOwlCarousel();
        cartTouchSpin();

        thmLightBox();
        thmCounter();
        thmScrollAnim();
        contactFormValidation();
        scrollToTarget();
        thmVideoPopup();
        mobileNavToggle();
        gallerylCarousel();

        
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        tabsactiver();
        featurecarouselactiver();
        thmbxSlider();
        galleryMasonaryLayout();
        masanory();
        prealoader();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
    })(jQuery);
});

// No endpoint has been provided. Keep unconfigured forms local and never imply delivery.
document.querySelectorAll('[data-contact-status="unconfigured"]').forEach(function (form) {
    form.addEventListener('submit', function (event) { event.preventDefault(); });
});
