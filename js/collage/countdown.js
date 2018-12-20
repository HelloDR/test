/**
 * Created by 15345 on 2018/11/15.
 */
// 倒计时
$(function () {
    /**
     * 入参第一个为时间字符串，第二个参数为模式选择，如果传入'day'，按天数倒计时到秒，不传值，按小时精确到秒
     * @param timeStr
     * @param item
     */
    function timer(timeStr,item){
        setInterval(function(){
            var nowTime = new Date(timeStr) - new Date;
            var minutes = parseInt(nowTime / 1000 / 60 % 60, 10);//计算剩余的分钟
            var seconds = parseInt(nowTime / 1000 % 60, 10);//计算剩余的秒数
            minutes = checkTime(minutes);
            seconds = checkTime(seconds);
            if(item==='day'){
                var days = parseInt(nowTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
                var hours = parseInt(nowTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
                days = checkTime(days);
                hours = checkTime(hours);
                $("#count_day").text(days);
                $("#count_hour").text(hours);
                $("#count_minute").text(minutes);
                $("#count_second").text(seconds);
            }else{
                var hours = parseInt(nowTime / ( 1000 * 60 * 60), 10); //计算剩余的小时
                hours = checkTime(hours);
                $("#count_hour").text(hours);
                $("#count_minute").text(minutes);
                $("#count_second").text(seconds);
            }
        },1000);
    }
    function checkTime(i) { //将0-9的数字前面加上0，例1变为01
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    timer('2018-12-20 00:00:00','day');
});
