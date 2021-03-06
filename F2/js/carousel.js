
/* 为插件定义私有作用域，防止外部代码访问插件内部以及插件污染全局变量*/
(function() {


  var oRight = document.querySelector('.btn-right'),//获取元素
      oLeft = document.querySelector('.btn-left'),
      aImages = document.querySelectorAll('.ban-image img'),
      aTabs = document.querySelectorAll('.tab li'),
      lastIndex = 0,//保存上次下标
      index = 0,//保存下标
      speed = 3000,//自定义速度
      swipe = true,//定义是否可触屏滑动
      auto = true;//定义是否可自动播放


  /* 左右点击轮播*/
  oRight.onclick = function next() {

      //清除上次样式 (classList.remove();)
      aImages[lastIndex].className = ' ';//清除图片类名
      aTabs[lastIndex].className = ' ';//清除tab类名

      //改变当前下标
      index++;
      if(index >= aImages.length)  index = 0;

      //设置当前样式
      aImages[index].className = 'on';//给图片添加类名
      aTabs[index].className = 'on';//给tab添加类名
      lastIndex = index;//变成上一任
  }
  oLeft.onclick = function prev() {

      //清除上次样式 (classList.remove();)
      aImages[lastIndex].className = ' ';//清除图片类名
      aTabs[lastIndex].className = ' ';//清除tab类名

      //改变当前下标
      index--;
      if(index < 0)  index = aImages.length-1;

      //设置当前样式
      aImages[index].className = 'on';//给图片添加类名
      aTabs[index].className = 'on';//给tab添加类名
      lastIndex = index;//变成上一任
  }

  /*跳转到指定图片*/
  window.onload = function(){
      var oul = document.getElementById("oul");
      oul.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLocaleLowerCase() == 'li'){
          //清除上次样式 (classList.remove();)
          aImages[lastIndex].className = ' ';//清除图片类名
          aTabs[lastIndex].className = ' ';//清除tab类名

          //改变当前下标
          index = target.id;

          //设置当前样式
          aImages[index].className = 'on';//给图片添加类名
          aTabs[index].className = 'on';//给tab添加类名
          lastIndex = index;//变成上一任
          }
      }
  }



  /* 触屏滑动 */
  if (swipe) {
    $(".banner").on("swipeleft",function(){
      //清除上次样式 (classList.remove();)
      aImages[lastIndex].className = ' ';//清除图片类名
      aTabs[lastIndex].className = ' ';//清除tab类名

      //改变当前下标
      index++;
      if(index >= aImages.length)  index = 0;

      //设置当前样式
      aImages[index].className = 'on';//给图片添加类名
      aTabs[index].className = 'on';//给tab添加类名
      lastIndex = index;//变成上一任
    });
    $(".banner").on("swiperight",function(){
      //清除上次样式 (classList.remove();)
      aImages[lastIndex].className = ' ';//清除图片类名
      aTabs[lastIndex].className = ' ';//清除tab类名

      //改变当前下标
      index--;
      if(index < 0)  index = aImages.length-1;

      //设置当前样式
      aImages[index].className = 'on';//给图片添加类名
      aTabs[index].className = 'on';//给tab添加类名
      lastIndex = index;//变成上一任
    });
  }



  /* 自动播放 */
  if (auto) {
    //自动切换
    function play(){
        timer=setInterval(function(){
            oRight.onclick()
        },speed);
    }
    //停止切换
    function stop(){
        clearInterval(timer)
    }
    container.onmouseover=stop;
    container.onmouseout=play;
    //自动切换
    play();
  }
}) ();





// /* 跳到指定图片站 */
// aTabs[0].onclick = function() {
//
//   //清除上次样式 (classList.remove();)
//   aImages[lastIndex].className = ' ';//清除图片类名
//   aTabs[lastIndex].className = ' ';//清除tab类名
//
//   //改变当前下标
//   index = 0;
//
//   //设置当前样式
//   aImages[index].className = 'on';//给图片添加类名
//   aTabs[index].className = 'on';//给tab添加类名
//   lastIndex = index;//变成上一任
// }
// aTabs[1].onclick = function() {
//
//   //清除上次样式 (classList.remove();)
//   aImages[lastIndex].className = ' ';//清除图片类名
//   aTabs[lastIndex].className = ' ';//清除tab类名
//
//   //改变当前下标
//   index = 1;
//
//   //设置当前样式
//   aImages[index].className = 'on';//给图片添加类名
//   aTabs[index].className = 'on';//给tab添加类名
//   lastIndex = index;//变成上一任
// }
// aTabs[2].onclick = function() {
//
//   //清除上次样式 (classList.remove();)
//   aImages[lastIndex].className = ' ';//清除图片类名
//   aTabs[lastIndex].className = ' ';//清除tab类名
//
//   //改变当前下标
//   index = 2;
//
//   //设置当前样式
//   aImages[index].className = 'on';//给图片添加类名
//   aTabs[index].className = 'on';//给tab添加类名
//   lastIndex = index;//变成上一任
// }
// aTabs[3].onclick = function() {
//
//   //清除上次样式 (classList.remove();)
//   aImages[lastIndex].className = ' ';//清除图片类名
//   aTabs[lastIndex].className = ' ';//清除tab类名
//
//   //改变当前下标
//   index = 3;
//
//   //设置当前样式
//   aImages[index].className = 'on';//给图片添加类名
//   aTabs[index].className = 'on';//给tab添加类名
//   lastIndex = index;//变成上一任
// }
// aTabs[4].onclick = function() {
//
//   //清除上次样式 (classList.remove();)
//   aImages[lastIndex].className = ' ';//清除图片类名
//   aTabs[lastIndex].className = ' ';//清除tab类名
//
//   //改变当前下标
//   index = 4;
//
//   //设置当前样式
//   aImages[index].className = 'on';//给图片添加类名
//   aTabs[index].className = 'on';//给tab添加类名
//   lastIndex = index;//变成上一任
// }
