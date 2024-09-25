$(document).ready(function ($) {
    "use strict";


    /*
    ==========================================
        Sticky Header 
    ==========================================
    */
	if ($('.sticky-header')) {
		var sticky = new Waypoint.Sticky({
			element: $('.sticky-header')[0],
			stuckClass: 'fixed',
			offset: -200,
		});
	}
    

    // Slider Banner Active
    $(".shop_banner_active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    // Slider Banner Active
    $(".slider_banner_active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    // Slider Banner Active
    $(".advertisement_slider_active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        // navText: [
        //     '<i class="icon fa fa-angle-left"></i>',
        //     '<i class="icon fa fa-angle-right"></i>',
        // ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    $(".advertisement_image_active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    });

    // Hot Sale
    $(".hot_sale_active").owlCarousel({
        loop: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: false,
        autoplay: false,
        autoplayTimeout: false,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    // Hot Sale
    $(".featured_product_active").owlCarousel({
        loop: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: false,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    // Customer Reviews
    $(".customer_reviews_active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            },
        },
    });

    

    // You Might Also Like Active
    $(".you-might-also-like-active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    // People Also Buy Active
    $(".people-also-buy-active").owlCarousel({
        loop: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            800: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    // Recently Viewed Active
    $(".recently-viewed-active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            800: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    // Recently Viewed Active
    $(".view_all_cat_active").owlCarousel({
        loop: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            800: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 6,
            },
        },
    });



    function getVals() {
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName('input');
        let slide1 = parseFloat(slides[0].value);
        let slide2 = parseFloat(slides[1].value);
        if (slide1 > slide2) {
          let tmp = slide2;
          slide2 = slide1;
          slide1 = tmp;
        }
        let displayElement = parent.getElementsByClassName('rangeValues')[0];
        displayElement.innerHTML = '$' + slide1 + ' - $' + slide2;
      }
      
      window.onload = function () {
        let sliderSections = document.getElementsByClassName('range-slider');
        for (let x = 0; x < sliderSections.length; x++) {
          let sliders = sliderSections[x].getElementsByTagName('input');
          for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === 'range') {
              sliders[y].oninput = getVals;
              sliders[y].oninput();
            }
          }
        }
      };


    



}(jQuery));