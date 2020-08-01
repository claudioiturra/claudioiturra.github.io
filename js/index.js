(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-297.png' : 'images/madewithsparkle-198.png') : 'images/madewithsparkle-99.png');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/001p-2880.jpg' : 'images/001p-1920.jpg') : 'images/001p-960.jpg');
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/103838489_1521059608231821_4502949301790969846_n-246.jpg' : 'images/103838489_1521059608231821_4502949301790969846_n-164.jpg') : 'images/103838489_1521059608231821_4502949301790969846_n-82.jpg');
$('.img-4').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pasted-image-357.png' : 'images/pasted-image-238.png') : 'images/pasted-image-119.png');
$('.img-5').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/anid_rojo_azul-420.png' : 'images/anid_rojo_azul-280.png') : 'images/anid_rojo_azul-140.png');
$('.img-6').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logolab-387.png' : 'images/logolab-258.png') : 'images/logolab-129.png');
$('.img-7').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logo-copas-s-a-420.png' : 'images/logo-copas-s-a-280.png') : 'images/logo-copas-s-a-140.png');};
$(window).resize(r);
r();

});