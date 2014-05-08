'use strict';

/*! waitForImages jQuery Plugin 2013-07-20 */
!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);

function captionFix(){
	$('.col-1, .col-2').each(function(){
		var imgWidth = $(this).find('img').width();
		$(this).find('.caption').css('width', imgWidth);
	});

	$('.site').each(function(){
		var vidHeight = $(this).find('video').height();
		$(this).css('height', vidHeight);
		console.log(vidHeight);
	});
}

$('body').waitForImages(function() {
	console.log('waitForImages');
	captionFix();
});

$(window).on('resize', function(){
	console.log('resize');
	captionFix();
});

$(document).ready(function(){
	console.log('ready');captionFix();
	setTimeout(function(){
		$('body').removeClass('hidden');
	}, 2000);
	setTimeout(function(){
		$('#logo').addClass('opaque');
		
		$('#logo').on('click', function(e){
			e.preventDefault();
			if (!$('#info').hasClass('open')) {
				$('#info').addClass('open').fadeIn('fast');
			} else {
				$('#info').removeClass('open').fadeOut('fast');
			}
		});
	}, 3000);

	$('.col-1, .col-2').hover(function(){
		$(this).find('.caption').addClass('opaque');
	}, function(){
		$(this).find('.caption').removeClass('opaque');
	});


});

$(window).load(function(){
	console.log('load');
	setTimeout(function(){
		captionFix();
	}, 100);
	
});