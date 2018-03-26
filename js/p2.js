// JavaScript Document
  $(function () {
        
       
        //tab切换
        var tabBox = function (tabTit, tabContent, childContent) {
            $(tabContent).find(childContent).hide();
            $(tabTit).find('li:first').addClass('xx-hover');
            $(tabContent).find(childContent).eq(0).show();

            $(tabTit).find('li').on('click', function () {
                $(this).addClass('xx-hover').siblings().removeClass('xx-hover');
                var index = $(this).index();
                $(tabContent).children().eq(index).show().siblings().hide();
            });
        }
        //显示隐藏方法
        var shBox = function (arrowId, Wrap, childBox) {
            $(arrowId).on('tap', function () {
                if ($(this).hasClass('r-down')) {
                    $(this).removeClass('r-down').addClass('r-up');
                }
                else {
                    $(this).addClass('r-down').removeClass('r-up');
                }
                $(this).closest(Wrap).find(childBox).toggle();
            });
        }


        tabBox("#tabs", "#content", "ul.ulDec");
        shBox("#arrow1", "#wrap1", "#childBox1");
        shBox("#arrow2", "#wrap2", "#childBox2");
		shBox("#arrow0", "#wrap0", "#childBox0");
		tabBox("#tabs","#content",".orBox");
		tabBox("#tabs","#content",".keBox");

        //减
        $('a.a-jian').each(function (index, element) {
            $(this).on('tap', function () {
                var val = parseInt($(this).next().val());
                if (val > 0) {
                    $(this).next().val(val - 1);
                }
            });
        });
        //加
        $('a.a-jia').each(function (index, element) {
            $(this).on('tap', function () {
                var val = parseInt($(this).prev().val());
                $(this).prev().val(val + 1);
            });
        });
    });