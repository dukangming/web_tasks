$(document).on('focus','input',function(){
	$(this).siblings('label').animate({top:'-=30px',opacity:'0.5'});
})
.on('focusout','input',function(){
	$(this).siblings('label').animate({top:'+=30',opacity:'1.0'});
})
/**显示隐藏密码*/
function hideShowPsw(){
    var demoPassword = document.getElementById("demo_password");
    if (demoPassword.type === "password") {
        demoPassword.type = "text";
    }
    else {
        demoPassword.type = "password";
    }
}
function formSubmit(){
document.loginInfo.submit();
}
/**radio取消（参考网上）*/
  $(function(){
      $('input:radio').click(function(){
          var domName = $(this).attr('name');
          var $radio = $(this);
          if ($radio.data('waschecked') === true){
              $radio.prop('checked', false);
              $("input:radio[name='" + domName + "']").data('waschecked',false);
          }
          else {
              $radio.prop('checked', true);
              $("input:radio[name='" + domName + "']").data('waschecked',false);
              $radio.data('waschecked', true);
          }
      });
  });
