/**
 * Created by 15345 on 2018/11/23.
 */
// 我的收藏选项卡切换
$(function () {
    var collect=$(".collect"),
        collect_list=$(".collect-list");
    collect.click(function () {
        var index=$(this).index();
        collect_list.eq(index).removeClass("am-hide");
        $(this).addClass("nav-active");
        collect_list.eq(index).siblings().addClass("am-hide");
        $(this).siblings().removeClass("nav-active");
    });
});
