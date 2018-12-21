/**
 * Created by 15345 on 2018/12/21.
 */
// 选项卡切换
$(function () {
    var nav=$(".tab-item");
    var use_volume=$(".tab-content");
    nav.click(function () {
        var index=$(this).index();
        use_volume.eq(index).removeClass("am-hide");
        $(this).addClass("active");
        use_volume.eq(index).siblings().addClass("am-hide");
        $(this).siblings().removeClass("active");
    });
});
