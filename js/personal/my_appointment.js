/**
 * Created by 15345 on 2019/1/2.
 */
$(function () {
    /*
    * 取消预约按钮效果
    * */
    var cancel_btn=$(".cancel-btn");
    // 按钮点击事件
    cancel_btn.on('click',function () {
        setButtonStatus($(this));
    });

    /**
     * 按钮状态函数
     * @param btn
     */
    function setButtonStatus(btn) {
        if(btn.text() == "取消预约"){
            btn.text("预约");
        }else if(btn.text() == "预约"){
            btn.text("取消预约");
        }
    }
});