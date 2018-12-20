/**
 * Created by 15345 on 2018/11/26.
 */
/**
 * 封装getScroll函数,获取页面卷出去的值
 * @returns {{top: (Number|number), left: (Number|number)}} 向上卷出去的值，向左卷出去的值
 */
function getScroll() {
    return{
        top:window.pageYOffset||document.documentElement.scrollTop
        ||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollTop
        ||document.body.scrollTop||0
    };
}
function my$(id) {
    return document.getElementById(id);
}
//注册页面滚动条事件
window.onscroll=function () {
    //页面向上卷出去的高度大于等于topPart的高度
    if(getScroll().top>my$("topBar").offsetHeight){
        //设置导航栏固定
        my$("navBar").className="nav-fixed";
        //设置主体内容的上边距为导航栏的高度
        my$("mainPart").style.marginTop=my$("navContent").offsetHeight+"px";
        my$("category-main").style.top="62px";
        my$("area-main").style.top="62px";
        my$("mask").style.top="63px";
        my$("spinner").style.top="62px";
    }else{//页面向上卷出去的高度小于topPart的高度
        //清除固定
        my$("navBar").className="";
        //设置主体内容的上边距为10
        my$("mainPart").style.marginTop="10px";
        my$("category-main").style.top="190px";
        my$("area-main").style.top="190px";
        my$("spinner").style.top="190px";
        my$("mask").style.top="190px";
    }
};
