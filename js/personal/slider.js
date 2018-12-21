/**
 * Created by 15345 on 2018/11/12.
 */
/**
 * 轮播图
 */
// $(function () {
//     var $slider = $('#demo-slider-0');
//     var counter = 0;
//     var getSlide = function () {
//         counter++;
//         return '<li><img src="http://s.amazeui.org/media/i/demos/bing-' +
//             (Math.floor(Math.random() * 4) + 1) + '.jpg" />' +
//             '<div class="am-slider-desc">动态插入的 slide ' + counter + '</div></li>';
//     };
//
//     $('.js-demo-slider-btn').on('click', function () {
//         var action = this.getAttribute('data-action');
//         if (action === 'add') {
//             $slider.flexslider('addSlide', getSlide());
//         } else {
//             var count = $slider.flexslider('count');
//             count > 1 && $slider.flexslider('removeSlide', $slider.flexslider('count') - 1);
//         }
//     });
//
// });
// 轮播图配置
$('#banner').flexslider({
    directionNav: false,            // Boolean: 是否创建上/下一个按钮（previous/next）
    playAfterPaused: 1000,          // Integer: ms 用户停止操作多长时间以后重新开始自动播放
    slideshowSpeed: 2000          // Integer: ms 滚动间隔时间
});
