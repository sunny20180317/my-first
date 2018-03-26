$('.lfNav ul li').on('click',function(){
	var index = $(this).index();
	$('wrapPro .rgPro').eq(index).show().siblings().hide();
});
