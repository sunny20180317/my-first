
$(function(){
	$('#fix-box').find('a').each(function(){
		$(this).on('tap',function(){
			$(this).addClass('gbHover').siblings().removeClass('gbHover');
			event.stopPropagation();
		})
	});	

	//点击菜单，显示固定盒子
	$('#menu').on('tap',function(){
		$('#fix-box').is(':visible')?$('#fix-box').hide():$('#fix-box').css('display','flex');
		$('#fix-box').is(':visible')?$('#tabs').css("top","2.479rem"):$('#tabs').css('top','1.173rem'); 	
		conh();
	});
	//头部高度
	

	function conh()
	{
		var h = $('#gdTop').height();
		$('.con-kind').css('padding-top',h);
	}
	conh();

});