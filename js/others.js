(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img-8').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/001p-2880.jpg' : 'images/001p-1920.jpg') : 'images/001p-960.jpg');
$('.img-9').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pasted-image-153.png' : 'images/pasted-image-102.png') : 'images/pasted-image-51.png');
$('.img-10').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pasted-image-213.png' : 'images/pasted-image-142.png') : 'images/pasted-image-71.png');
$('.img-11').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pasted-image-174.png' : 'images/pasted-image-116.png') : 'images/pasted-image-58.png');
$('.img-12').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pasted-image-141.png' : 'images/pasted-image-94.png') : 'images/pasted-image-47.png');
$('.img-13').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/pngegg-165.png' : 'images/pngegg-110.png') : 'images/pngegg-55.png');
$('.img-14').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/madewithsparkle-570.png' : 'images/madewithsparkle-380.png') : 'images/madewithsparkle-190.png');};
$(window).resize(r);
r();

});