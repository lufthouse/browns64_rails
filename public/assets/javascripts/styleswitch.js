/* Style Switcher */

window.console = window.console || (function($){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function($){ 
  "use strict";
var styleswitcherstr = ' \
	<h2>Style Switcher <a href="#"></a></h2> \
    <div class="content"> \
    <div class="clear"></div> \
	<select id="switcher-option-layout" name="switcher-option-layout" class="input-block-level nobottommargin">\
    <option value="layout-full">Full Width</option>\
	<option value="layout-boxed">Boxed</option>\
	      </select>\
    <h3>Change Color</h3> \
	<a id="default" class="styleswitch color"></a> \
    <a id="alizarin" class="styleswitch color"></a> \
    <a id="amethyst" class="styleswitch color"></a> \
    <a id="asphalt" class="styleswitch color"></a> \
    <a id="carrot" class="styleswitch color"></a> \
    <a id="concrete" class="styleswitch color"></a> \
    <a id="emerald" class="styleswitch color"></a> \
    <a id="orange" class="styleswitch color"></a> \
	<a id="blue" class="styleswitch color"></a> \
	<h3>Change Background </h3> \
	<div id="switcher-option-pattern" class="switcher-op-selectors clearfix">\
	<a data-url="assets/bg1.jpg" class="styleswitch"><img src="assets/switcher/bg1.gif" alt="Background Image 1" title="Background Image 1" /></a> \
	<a data-url="assets/bg3.jpg" class="styleswitch"><img src="assets/switcher/bg3.gif" alt="Background Image 3" title="Background Image 3" /></a>\
	 <a data-url="assets/bg4.jpg" class="styleswitch"><img src="assets/switcher/bg4.gif" alt="Background Image 4" title="Background Image 4" /></a>\
	<a data-url="assets/bg7.jpg" class="styleswitch"><img src="assets/switcher/bg2.gif" alt="Background Image 2" title="Background Image 2" /></a>\
    <a data-url="assets/bg5.jpg" class="styleswitch"><img src="assets/switcher/bg4.gif" alt="Background Image 4" title="Background Image 4" /></a>\
	<a data-url="assets/bg6.jpg" class="styleswitch"><img src="assets/switcher/bg4.gif" alt="Background Image 4" title="Background Image 4" /></a>\
		                                                     </div>\
   	 </div><!-- End switcher-box --> \
    <div class="clear"></div> \
    </div><!-- End content --> \
	';
	
$(".switcher").prepend( styleswitcherstr );

});


/* Skins Style */
$(document).ready(function($){ 

var cookieName = 'default';

function changeLayout(layout) {
$.cookie(cookieName, layout);
$('head link[data-name=skins]').attr('href', 'css/skins/' + layout + '.css');
}

if( $.cookie(cookieName)) {
changeLayout($.cookie(cookieName));
}

$("#default").click( function(){ $
changeLayout('default');
});



$("#alizarin").click( function(){ $
changeLayout('alizarin');
});
$("#amethyst").click( function(){ $
changeLayout('amethyst');
});
$("#asphalt").click( function(){ $
changeLayout('asphalt');
});
$("#blue").click( function(){ $
changeLayout('blue');
});
$("#carrot").click( function(){ $
changeLayout('carrot');
});
$("#clouds").click( function(){ $
changeLayout('clouds');
});
$("#concrete").click( function(){ $
changeLayout('concrete');
});
$("#emerald").click( function(){ $
changeLayout('emerald');
});
$("#orange").click( function(){ $
changeLayout('orange');
});

 $('#switcher-option-layout').change(function() { 
    
     var switcheropLayout = $(this).val();
        
        if( switcheropLayout == 'layout-boxed' ) {
            $('body').removeClass('stretched');
			} else if( switcheropLayout == 'layout-full' ) {
            $('body').addClass('stretched');
        }
        
        $(window).resize();
  
    });
 
 $('#switcher-option-pattern a').click(function() {
    
        var switcherPatternUrl = $(this).attr('data-url');
        
        var switcheropLayout = $('#switcher-option-layout').val();
        
        if( switcheropLayout == 'layout-full' ) {
            alert('Please select Boxed Layout to Preview Patterns.')
        } else {
            $('body').css( 'background-image', 'url("' + switcherPatternUrl + '")');
            $('body').css( 'background-size', '100% auto');
            $('body').css( 'background-position', '0% 0%');
            $('body').css( 'background-repeat', 'repeat repeat');
        }
    
    });
    
    
    $('#switcher-option-bgimage a').click(function() {
    
        var switcherBgImageUrl = $(this).attr('data-url');
        
        var switcheropLayout = $('#switcher-option-layout').val();
        
        if( switcheropLayout == 'layout-full' ) {
            alert('Please select Boxed Layout to Preview Background Images.')
        } else {
            $('body').css( 'background-image', 'url("' + switcherBgImageUrl + '")');
            $('body').css( 'background-attachment', 'fixed');
            $('body').css( 'background-size', 'auto auto');
            $('body').css( 'background-position', '0% 0%');
            $('body').css( 'background-repeat', 'repeat');
        }
    
    });

});


 
    

/* Reset Switcher */
$(document).ready(function(){ 

// Style Switcher	
$('.switcher').animate({
left: '-200px'
});

$('.switcher h2 a').click(function(e){
e.preventDefault();
var div = $('.switcher');
console.log(div.css('left'));
if (div.css('left') === '-200px') {
$('.switcher').animate({
  left: '0px'
}); 
} else {
$('.switcher').animate({
  left: '-200px'
});
}
})

		 
});						   

