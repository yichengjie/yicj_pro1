// 重置表单
$().ready(function() {
    var validator = $("#signupForm").validate({
        submitHandler:function(form){
            alert("submitted");
            form.submit();
        }
    });

    $("#reset").click(function() {
        console.info('---------------') ;
        validator.resetForm();
    });

});/**
 * Created by Administrator on 2015/11/5.
 */
