<br>1.命名已经改正
<br>2.
<br>3.定制化程度不高问题：暴露自动播放速度，是否触屏滑动，是否可以自动播放参数，提高可定制化程度
```
speed = 3000,//自定义速度
swipe = true,//定义是否可触屏滑动
auto = true;//定义是否可自动播放
```
<br>4.关于耦合程度较高问题  以及  5.关于事件代理问题  采用事件代理，且改变原来一点击一函数的模式，利用标签id实现跳转到指定图片
```
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
```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>1.能够自动播放：
```
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
```
<br>2.兼容移动端
<br>3.支持触屏滑动：
<br>可以实现但是总要拖好几下才能成功
```
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
```
<br>4.转跳到指定图片
<br>5.采用预编译语言Less书写样式，通过编译生成css文件
<br>6.具有好看的图片切换效果（淡入淡出）
<br>7.为插件定义私有作用域，防止外部代码访问插件内部以及插件污染全局变量
<br>
<br>？？？？webpack打包到main.js文件，但是引入打包后的main.js文件自动轮播速度还有触屏滑动功能异常，还在找其中问题，所以引用的是自己写的2.js
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
