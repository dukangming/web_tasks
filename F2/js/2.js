
/* 避免环境污染*/
(function() {

  var oRight = document.querySelector('.btn-right'),//获取元素
      oLeft = document.querySelector('.btn-left'),
      aImages = document.querySelectorAll('.ban-image img'),
      aTabs = document.querySelectorAll('.tab li'),
      lastIndex = 0;//保存上次下标
      index = 0;//保存下标

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

  /* 跳到指定图片站 */
  aTabs[0].onclick = function() {

    //清除上次样式 (classList.remove();)
    aImages[lastIndex].className = ' ';//清除图片类名
    aTabs[lastIndex].className = ' ';//清除tab类名

    //改变当前下标
    index = 0;

    //设置当前样式
    aImages[index].className = 'on';//给图片添加类名
    aTabs[index].className = 'on';//给tab添加类名
    lastIndex = index;//变成上一任
  }
  aTabs[1].onclick = function() {

    //清除上次样式 (classList.remove();)
    aImages[lastIndex].className = ' ';//清除图片类名
    aTabs[lastIndex].className = ' ';//清除tab类名

    //改变当前下标
    index = 1;

    //设置当前样式
    aImages[index].className = 'on';//给图片添加类名
    aTabs[index].className = 'on';//给tab添加类名
    lastIndex = index;//变成上一任
  }
  aTabs[2].onclick = function() {

    //清除上次样式 (classList.remove();)
    aImages[lastIndex].className = ' ';//清除图片类名
    aTabs[lastIndex].className = ' ';//清除tab类名

    //改变当前下标
    index = 2;

    //设置当前样式
    aImages[index].className = 'on';//给图片添加类名
    aTabs[index].className = 'on';//给tab添加类名
    lastIndex = index;//变成上一任
  }
  aTabs[3].onclick = function() {

    //清除上次样式 (classList.remove();)
    aImages[lastIndex].className = ' ';//清除图片类名
    aTabs[lastIndex].className = ' ';//清除tab类名

    //改变当前下标
    index = 3;

    //设置当前样式
    aImages[index].className = 'on';//给图片添加类名
    aTabs[index].className = 'on';//给tab添加类名
    lastIndex = index;//变成上一任
  }
  aTabs[4].onclick = function() {

    //清除上次样式 (classList.remove();)
    aImages[lastIndex].className = ' ';//清除图片类名
    aTabs[lastIndex].className = ' ';//清除tab类名

    //改变当前下标
    index = 4;

    //设置当前样式
    aImages[index].className = 'on';//给图片添加类名
    aTabs[index].className = 'on';//给tab添加类名
    lastIndex = index;//变成上一任
  }

  /* 触屏滑动 */
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

  /* 自动播放 */
  //自动切换
  function play(){
      timer=setInterval(function(){
          oRight.onclick()
      },3000);
  }
  //停止切换
  function stop(){
      clearInterval(timer)
  }
  container.onmouseover=stop;
  container.onmouseout=play;
  //自动切换
  play();
}) ();
