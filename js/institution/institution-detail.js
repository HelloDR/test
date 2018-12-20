/**
 * Created by 15345 on 2018/12/7.
 */
$(function () {
    // 查看更多团购
    $("#more_collage").on('click',function () {
        if($(this).text() == "查看更多团购∨"){
            $(this).text("查看更多团购∧");
            $(".more-collage").show(100);
        }else{
            $(this).text("查看更多团购∨");
            $(".more-collage").hide(100);
        }
    });
    
    // 选项卡切换
    $("#photo").addClass('am-hide');
    $("#tab_ul").children().on('click',function () {
        var tabWrap=$("#tab_wrap"),
            index=$(this).index();
            th=$(this);
        tabWrap.children('div').eq(index).removeClass('am-hide');
        th.append('<i class="now"></i>');
        th.siblings().children('i.now').remove();
        th.siblings().css({color:'#000'});
        tabWrap.children('div').eq(index).siblings().addClass('am-hide');
    });
});
