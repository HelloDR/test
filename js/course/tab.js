/**
 * Created by 15345 on 2018/11/27.
 */
//  选项卡效果
$(function () {
    var tab=$("#tab").children("li"),
        tab_content=$("#tab-content").children("div");
    tab.click(function () {
        var index=$(this).index();
        tab_content.eq(index).removeClass("am-hide");
        $(this).children("i").addClass("now");
        tab_content.eq(index).siblings().addClass("am-hide");
        $(this).siblings().children("i").removeClass("now");
    });
});
