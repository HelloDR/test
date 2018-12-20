/**
 * Created by 15345 on 2018/11/12.
 */
//遮罩层
$(function () {
    function Scroll() {
        var myScroll_1,myScroll_2,myScroll_3,myScroll_4,myScroll_5;
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
            capture: false,
            passive: false
        } : false);
        // 主页内容
        myScroll_1 = new IScroll('.wrapper');
        myScroll_2 = new IScroll('#category-right');
        myScroll_3 = new IScroll('#category-left',{
            scrollbars: true,
            mouseWheel: false,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            scrollY: true,
            probeType: 2,
            bindToWrapper: true,
            click: true,
            taps:true
        });
        myScroll_4 = new IScroll('#area_left',{
            scrollbars: true,
            mouseWheel: false,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            scrollY: true,
            probeType: 2,
            bindToWrapper: true,
            click: true,
            taps:true
        });
        myScroll_5 = new IScroll('#area_right');
    }
    // 获取导航栏下的tab文字
    var $p=$(".nav p");
    // 获取所有的tab内容
    var $down_list=$(".down-list");
    // 为nav上的每一元素注册点击事件
    $p.click(function () {
        // 先隐藏所有的下拉列表内容
        //$down_list.hide();
        var $this=$(this);
        // 获取当前点击元素的索引
        var index=$this.index();
        // 设置当前点击元素索引对应的列表内容隐藏/显示
        $down_list.eq(index).toggle();
        // 调用区域滚动函数
        Scroll();
        $down_list.eq(index).siblings().hide();
    });
    // 为遮罩层注册点击事件
    $("#filter").click(function () {
        $(".down-list").hide();
    });
    // 为遮罩层注册点击事件
    $("#mask").click(function () {
        // 设置遮罩层的父级元素隐藏/显示
        $(this).parent("div#comprehensive-main").toggle();
    });

    // 类别tab内容切换
    var category_left=$("#wrapper_ul").children("ul").children("li");
    var category_box=$(".category-box");
    // 区域tab内容切换
    var area_category_left=$("#area_ul").children("ul").children("li");
    var area_category_box=$(".area-category-box");
    // 类别列表内容点击事件
    category_left.click(function () {
        var index=$(this).index();
        category_box.eq(index).removeClass("am-hide");
        $(this).addClass("now");
        category_box.eq(index).siblings().addClass("am-hide");
        $(this).siblings().removeClass("now");
        // 调用区域滚动函数
        Scroll();
    });
    // 区域列表内容点击事件
    area_category_left.click(function () {
        var index=$(this).index();
        area_category_box.eq(index).removeClass("am-hide");
        $(this).addClass("now");
        area_category_box.eq(index).siblings().addClass("am-hide");
        $(this).siblings().removeClass("now");
        // 调用区域滚动函数
        Scroll();
    });
});

