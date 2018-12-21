/**
 * Created by 15345 on 2018/11/27.
 */
// 底部选项卡切换
// $("#photo").addClass('am-hide');
// 为tab下面的所有li注册点击事件
$("#tab_ul").children().on('click',function () {
     // 获取所有tab里内容
    var tabWrap=$("#tab_wrap"),
        // 获取用户当前所点击li的下标
        index=$(this).index();
        th=$(this);
    // 将当前所点击的li对应在tabWrap下的div显示
    tabWrap.children('div').eq(index).removeClass('am-hide');
    // 当前li加下划线
    th.append('<i class="now"></i>');
    // 当前li的兄弟元素li里的下划线去掉
    th.siblings().children('i.now').remove();
    // 将当前所点击的li对应在tabWrap下的div兄弟元素隐藏
    tabWrap.children('div').eq(index).siblings().addClass('am-hide');
});