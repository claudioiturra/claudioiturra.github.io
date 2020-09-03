(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/103838489_1521059608231821_4502949301790969846_n-246.jpg' : 'images/103838489_1521059608231821_4502949301790969846_n-164.jpg') : 'images/103838489_1521059608231821_4502949301790969846_n-82.jpg');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pasted-image-255.png' : 'images/pasted-image-170.png') : 'images/pasted-image-85.png');
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/anid_rojo_azul-279.png' : 'images/anid_rojo_azul-186.png') : 'images/anid_rojo_azul-93.png');
$('.img-4').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/logolab-291.png' : 'images/logolab-194.png') : 'images/logolab-97.png');
$('.img-5').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-570.png' : 'images/madewithsparkle-380.png') : 'images/madewithsparkle-190.png');};
$(window).resize(r);
r();

});