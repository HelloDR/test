/**
 * Created by 15345 on 2019/1/7.
 */
$("#code").on('click',function () {
    codeButton();
});
function codeButton() {
    var code = $("#code");
    code.attr("disabled", "disabled");
    setTimeout(function () {
        code.css("opacity", "0.8");
    }, 1000);
    var time = 60;
    var set = setInterval(function () {
        code.val("(" + --time + ")秒后重新获取");
        code.css({backgroundColor:'#f6f6f6',color:"#c5c5c5",border:'1px solid #ddd'});
    }, 1000);
    setTimeout(function () {
        code.attr("disabled", false).val("重新获取验证码");
        clearInterval(set);
    }, 60000);
}