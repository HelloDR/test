/**
 * Created by 15345 on 2018/11/20.
 */
$(function () {
    var nav=$(".course-nav").children("div");
    var use_volume=$(".course-nav-list");
    nav.click(function () {
        var index=$(this).index();
        use_volume.eq(index).removeClass("am-hide");
        $(this).addClass("active");
        use_volume.eq(index).siblings().addClass("am-hide");
        $(this).siblings().removeClass("active");
    });
});