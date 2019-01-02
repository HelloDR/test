/**
 * Created by 15345 on 2018/11/19.
 */
$(function () {
    /*
     * 验证码
     */
    $('#mpanel1').codeVerify({
        //常规验证码type=1， 运算验证码type=2
        type : 1,
        //验证码宽度
        width : '130px',
        //验证码高度
        height : '50px',
        codeLength:4
    });

    // 登录方式tab选项卡
    var login_tab = $(".login-tab");
    var login_wrap = $(".login-wrap");
    login_tab.click(function () {
        login_wrap.addClass("am-hide");
        $(this).siblings().find('i').removeClass('active');
        var index = $(this).index();
        login_wrap.eq(index).removeClass("am-hide");
        $(this).find('i').addClass('active');
    });

    // 表单验证
    var true_ele = "<span class='confirmation-true'></span>",// 输入正确时的提示
        false_ele = "<span class='confirmation-false'></span>", // 输入错误时的提示
    // 获取相关的表单元素
        phone = $(".tel-number"),
        pwd = $(".pwd"),
        phone1 = $(".tel-number1"),
    // 忘记密码表单元素
        phone2 = $(".tel-number2"),
        pwd1 = $(".pwd1"),
        confirm_pwd = $(".confirm-pwd"),
    // 注册表单元素
        phone3 = $(".tel-number3"),
        pwd2 = $(".pwd2"),
        confirm_pwd1 = $(".confirm-pwd1"),
    // 机构入住
        institution_name=$(".institution-name");
        teach_course=$(".teach-course");
        institution_tel=$(".institution-tel");
        institution_address=$(".institution-address");
        detail_address=$(".detail-address");
        register_phone=$(".register-phone");
    // 正则表达式
        phone_reg = /^\d{11}$/,// 号码
        tel_reg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/,// 号码
        pwd_reg = /^[A-Za-z0-9_-]{6,11}$/, // 密码
        address_reg=/^[A-Za-z0-9_()\#\-\u4e00-\u9fa5]+$/, // 地址
        company_reg=/^[A-Za-z0-9_()\-\u4e00-\u9fa5]+$/; // 机构名称

    /**
     * 表单验证函数
     * @param ele 要验证的表单元素
     * @param reg 验证该元素的正则表达式
     */
    function checkForm(ele, reg) {
        // 获取表单元素的值
        var txt = ele.val();
        // 添加元素获取焦点的事件
        ele.focus(function () {
            // 判断文本框值是否修改
            if ($(this).val() == txt) {
                $(this).val("");
            }
            // 获取焦点时如果存在含有两次密码输入不一致的提示框，则删除
            ele.parent("p").find("b.pwd-wrong").remove();
        });
        // 添加元素失去焦点事件
        ele.blur(function () {
            var pObj = $(this).parent("p");
            // 验证用户输入的内容是否符合
            if (reg.test($(this).val())) {
                pObj.append(true_ele).children("span.confirmation-false").remove();
                pObj.siblings().children("span.confirmation-false").remove();
            } else {
                $(this).parent("p").append(false_ele).siblings().children("span.confirmation-true").remove();
            }
            // 当用户为输入内容时，使用默认值
            if ($(this).val().length == 0) {
                $(this).val(txt);
            }
        });
    }

    //调用验证函数
    checkForm(phone, phone_reg);
    checkForm(phone1, phone_reg);
    checkForm(pwd, pwd_reg);
    // 忘记密码表单验证
    checkForm(phone2, phone_reg);
    checkForm(pwd1, pwd_reg);
    checkForm(confirm_pwd, pwd_reg);
    // 注册表单验证
    checkForm(phone3, phone_reg);
    checkForm(pwd2, pwd_reg);
    checkForm(confirm_pwd1, pwd_reg);
    // 机构入住表单验证
    checkForm(institution_name, company_reg);
    checkForm(teach_course, company_reg);
    checkForm(institution_tel, tel_reg);
    checkForm(institution_address, address_reg);
    checkForm(detail_address, address_reg);
    checkForm(register_phone, phone_reg);

    // 账号登录提交验证
    $("#form1").submit(function () {
        if (phone_reg.test(phone.val()) && pwd_reg.test(pwd.val())) {
            // 表单验证成功

        } else {
            // 表单验证失败
            return false;
        }
    });

    // 短信登录提交验证
    $("#form2").submit(function () {
        if (phone_reg.test(phone1.val())) {
            // 表单验证成功

        } else {
            // 表单验证失败
            return false;
        }
    });

    // 注册提交验证
    $("#register_form").submit(function () {
        // 表单验证成功
        if (phone_reg.test(phone3.val()) && pwd_reg.test(pwd2.val()) && pwd_reg.test(confirm_pwd1.val())) {
            // 判断两次输入的密码是否一致
            if(pwd2.val() == confirm_pwd1.val()){

            }else{
                pwd2.parent("p").append("<b class='pwd-wrong'>两次输入的密码不一致</b>");
                pwd2.parent("p").find("span").remove();
                confirm_pwd1.parent("p").append("<b class='pwd-wrong'>两次输入的密码不一致</b>");
                confirm_pwd1.parent("p").find("span").remove();
                return false;
            }

        } else {
            // 表单验证失败
            return false;
        }
    });

    // 忘记密码提交验证
    $("#forget_form").submit(function () {
        // 表单验证成功
        if (phone_reg.test(phone2.val()) && pwd_reg.test(pwd1.val()) && pwd_reg.test(confirm_pwd.val())) {
            // 判断两次输入的密码是否一致
            if(pwd1.val() == confirm_pwd.val()){

            }else{
                pwd1.parent("p").append("<b class='pwd-wrong'>两次输入的密码不一致</b>");
                pwd1.parent("p").find("span").remove();
                confirm_pwd.parent("p").append("<b class='pwd-wrong'>两次输入的密码不一致</b>");
                confirm_pwd.parent("p").find("span").remove();
                return false;
            }

        } else {
            // 表单验证失败
            return false;
        }
    });

    // 机构入驻提交验证
    $("#institution_form").submit(function () {
        // 表单验证成功
        if (company_reg.test(institution_name.val()) && company_reg.test(teach_course.val())
            && tel_reg.test(institution_tel.val()) && address_reg.test(institution_address.val())
            && address_reg.test(detail_address.val()) && phone_reg.test(register_phone.val())) {

        } else {
            // 表单验证失败
            return false;
        }
    });
});
