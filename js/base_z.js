$(function(){
	$(".item").click(function(){
		if($(this).find("i").hasClass("i-checked-r")){
			$(this).find("i").removeClass("i-checked-r");
		}else{
			$(this).find("i").addClass("i-checked-r");
		}
	});

	//收货地址
	$(".i-delete").click(function(){
		$(this).addClass("i-deleted");
		$(".popup-box").show();
		$(".popup-cover").show();
		$(".btn_yes").click(function(){
			$(".i-deleted").parents("li").remove();
			$(".popup-box").hide();
		    $(".popup-cover").hide();
	    });
	    $(".btn_no").click(function(){
	    	$(".i-delete").removeClass("i-deleted");
	    	$(".popup-box").hide();
		    $(".popup-cover").hide();
	    });
	});
	//下拉框
	$(document).on("each",".select_input .select_text",function(){
		if($(this).next("select").find('option').not(function(){return !this.selected }).length !=0){
		$(this).text( $(this).next("select").find('option').not(function(){ return !this.selected }).text());
		}
	});
	$(document).on("change",".select_input select",function(){
		var _val = $(this).find('option').not(function(){ return !this.selected }).text();
		$(this).parent(".select_input").find(".select_text").text(_val);
	});
	
	//优惠券
	$(".coupon_nav li").click(function(){
		var $i=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".sheet_coupon").eq($i).show().siblings().hide()
	});
	//回到顶部
	$(window).scroll(function(){
        if($(window).scrollTop()>100){
          $("#back_to_top").fadeIn(1000);
        }else{
          $("#back_to_top").fadeOut(1000);
        }
      });
      $("#back_to_top").click(function(){
        $("body,html").animate({scrollTop:0},1000);
        return false;
    });

    //我的足迹
    $(".all_hide").click(function(){
    	$("ul.footprint").hide();
    });
})