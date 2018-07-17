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
    /**隐藏显示密码*/
      function hideShowPsw(){
          var demoPassword = document.getElementById("demo_password");
          if (demoPassword.type === "password") {
              demoPassword.type = "text";
          }
          else {
              demoPassword.type = "password";
          }
      }
    /**焦点发生时白变黄*/
      function color_onFunction(x){
        x.style.background="yellow";
      }
    /**焦点失去时黄变白*/
      function color_outFunction(x){
        x.style.background="white";
      }
