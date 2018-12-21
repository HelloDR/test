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
});
