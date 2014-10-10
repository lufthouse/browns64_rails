var $ = jQuery.noConflict();

function image_preload(selector, parameters) {
    "use strict";
    var params = {
        delay: 250,
        transition: 400,
        easing: 'linear'
    };
    $.extend(params, parameters);

    $(selector).each(function() {
        'use strict';
        var image = $(this);
        image.css({
            visibility: 'hidden',
            opacity: 0,
            display: 'block'
        });
        image.wrap('<span class="preloader" />');
        image.one("load", function(evt) {
            $(this).delay(params.delay).css({
                visibility: 'visible'
            }).animate({
                opacity: 1
            }, params.transition, params.easing, function() {
                $(this).unwrap('<span class="preloader" />');
            });
        }).each(function() {
            if (this.complete) $(this).trigger("load");
        });
    });
}


function tab_widget(tabid) {
    "use strict";

    var $sidebarWidgets = $('.sidebar-widgets-wrap');
    var $footerWidgets = $('.footer-widgets-wrap');

    $(tabid + " .tab_content").hide();
    $(tabid + " ul.tabs li:first").addClass("active").show();
    $(tabid + " .tab_content:first").show();
    $(tabid + " ul.tabs li").click(function() {

        $(tabid + " ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(tabid + " .tab_content").hide();
        var activeTab = $(this).find("a").attr("data-href");
        var $selectTab = $(this);
        $(activeTab).fadeIn(600, function() {
            if ($selectTab.parent().parent().hasClass("side-tabs")) {
                if ($(window).width() < 768) {
                    if ($().scrollTo) {
                        jQuery.scrollTo(activeTab, 400, {
                            offset: -20
                        });
                    }
                }
            }
        });
        return false;

    });

}


jQuery(document).ready(function($) {

   $(window).scroll(function() {
        "use strict";
        if ($(this).scrollTop() > 450) {
            $('#gotoTop').fadeIn();
        } else {
            $('#gotoTop').fadeOut();
        }
    });


    $('#gotoTop').click(function() {
        "use strict";
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });



    // Siblings Fader

    siblingsFader = function() {
        "use strict";
        $(".siblings_fade,.flickr_badge_image").hover(function() {
            $(this).siblings().stop().fadeTo(400, 0.5);
        }, function() {
            $(this).siblings().stop().fadeTo(400, 1);
        });
    };
    siblingsFader();


    // Images Preload

    image_preload('.portfolio-image:not(.port-gallery) img');


    // Image Fade

    imgFade = function() {
		 "use strict";
        $('.image_fade').hover(function() {
            $(this).filter(':not(:animated)').animate({
                opacity: 0.6
            }, 400);
        }, function() {
            $(this).animate({
                opacity: 1
            }, 400);
        });
    };
    imgFade();


    // Toggles

    $(".togglec").hide();

    $(".togglet").click(function() {
        "use strict";
        $(this).toggleClass("toggleta").next(".togglec").slideToggle("normal");
        return true;

    });


    // Pricing Tables

    $('.pricing-defines').each(function() {
        "use strict";
        var pricingDefinesTop = $(this).next().find('.pricing-features').position();

        var pricingDefinesParentHeight = $(this).next().outerHeight();

        $(this).find('.pricing-features').css('margin-top', (pricingDefinesTop.top - 1) + 'px');

        $(this).find('.pricing-inner').css('height', (pricingDefinesParentHeight - 1) + 'px');

    });


    // Accordions

    $('.acc_content').hide(); //Hide/close all containers
    $('.acctitle:first').addClass('acctitlec').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

    //On Click
    $('.acctitle').click(function() {
		 "use strict";						  
        if ($(this).next().is(':hidden')) { //If immediate next container is closed...
            $('.acctitle').removeClass('acctitlec').next().slideUp("normal"); //Remove all "active" state and slide up the immediate next container
            $(this).toggleClass('acctitlec').next().slideDown("normal"); //Add "active" state to clicked trigger and slide down the immediate next container
        }
        return false; //Prevent the browser jump to the link anchor
    });


    // Portfolio Hoverlay

    imgHoverlay = function() {
		 "use strict";
        $('.portfolio-item,#portfolio-related-items li').hover(function() {
            $(this).find('.portfolio-overlay').filter(':not(:animated)').animate({
                opacity: 'show'
            }, 400);
        }, function() {
            $(this).find('.portfolio-overlay').animate({
                opacity: 'hide'
            }, 400);
        });
    };
    imgHoverlay();


    // FitVids

    if ($().fitVids) {
        $("#content,#footer,#slider:not(.layerslider-wrap)").fitVids({
            customSelector: "iframe[src^='http://www.dailymotion.com/embed']"
        });
    }


    // prettyPhoto

    if ($().prettyPhoto) {

        initprettyPhoto = function() {
             "use strict";
            $("a[data-rel^='prettyPhoto']").prettyPhoto({
                theme: 'light_square'
            });

        };
        initprettyPhoto();

    }


    // Mobile Menu

    if ($().mobileMenu) {
        $('#primary-menu > ul').mobileMenu();
    }


    // UniForm

    // if( $().uniform ) { $("#primary-menu select").uniform({selectClass: 'rs-menu'}); }


    // Anchor Link Scroll

    $("a[data-scrollto]").click(function() {
         "use strict";
        var divScrollToAnchor = $(this).attr('data-scrollto');

        if ($().scrollTo) {
            jQuery.scrollTo($(divScrollToAnchor), 400, {
                offset: -20
            });
        }

        return false;

    });


    // Testimonials

    if ($().carouFredSel) {

        $('.testimonials').each(function() {
               "use strict";
            var testimonialLeftKey = $(this).parent('.testimonial-scroller').attr('data-prev');
            var testimonialRightKey = $(this).parent('.testimonial-scroller').attr('data-next');
            var testimonialSpeed = $(this).parent('.testimonial-scroller').attr('data-speed');

            if (!testimonialSpeed) {
                testimonialSpeed = 300;
            }

            $(this).carouFredSel({
                circular: true,
                responsive: true,
                auto: false,
                items: 1,
                scroll: {
                    items: "page",
                    fx: "fade",
                    duration: Number(testimonialSpeed),
                    wipe: true
                },
                prev: {
                    button: testimonialLeftKey,
                    key: "left"
                },
                next: {
                    button: testimonialRightKey,
                    key: "right"
                }
            });

        });

    }
});


$(window).load(function() {
    "use strict";
    $('#pageLoader').fadeOut(800, function() {
        $(this).remove();
    });


    siblingsFader();

});

$(".accordion-group .accordion-toggle").live('click', function() {
     "use strict";
    var $self = $(this).parent().parent();
    if ($self.find('.accordion-heading').hasClass('in_head')) {
        $self.parent().find('.accordion-heading').removeClass('in_head');
    } else {
        $self.parent().find('.accordion-heading').removeClass('in_head');
        $self.find('.accordion-heading').addClass('in_head');
    }
});

jQuery(document).ready(function() {
    "use strict";
    /* team */
    jQuery(".team-link").click(function() {
        var dataid = jQuery(this).data("id");
        var datastr = "#" + dataid;
        jQuery(".team-blanck .it").css("display", "none");
        jQuery(".team-blanck").find(datastr).css("display", "block");
        return false;
    });

    jQuery('.social-networks > li > a')
        .hover(function() {
            jQuery(this).parent().find('span').stop().animate({
                bottom: '35px',
                opacity: 1
            }, {
                duration: 350
            })
        }, function() {
            jQuery(this).parent().find('span').stop().animate({
                bottom: '40px',
                opacity: 0
            }, {
                duration: 350
            })
        });

});

$(document).ready(function() {
    "use strict";
    $('a.openmenu').on('click', function() {
        $("ul.close").toggleClass('open');
    });
});

if (screen.width < 500) { 
$(function() {
   "use strict";
    $('ul.menu').each(function() {
        var $select = $('<select onChange="window.location.replace(this.options[this.selectedIndex].value)" />');

        $(this).find('a').each(function() {
            var $option = $('<option />');
            $option.attr('value', $(this).attr('href')).html($(this).html());
            $select.append($option);
        });

        $(this).replaceWith($select);
    });
});

}
