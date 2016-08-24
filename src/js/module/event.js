
;$(function(){
    //1.激活ios不兼容CSS的active
    document.body.addEventListener('touchstart', function () {});
    //表单选中
    $('.ui-form-item').find('input').focus(function () {
        $(this).parent().addClass('focus');
    })
    $('.ui-form-item').find('input').blur(function () {
        $(this).parent().removeClass('focus');
    })
});
