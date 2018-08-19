##目录结构

<br>project里面放的最开始的vue和vue.cli
<br>在project里建项目模板--me-project
<br>模板研究了好久，index.html是个入口页面，里面app组件需要在main.js里注册，等等
<br>后来发现写的只需要是components/HelloWorld.vue和App.vue
<br>由于写.vue文件什么提示补充都没有，于是先写在1.html中再copy到HelloWorld.vue

##介绍

<br>项目都在F3/project/me-project中
<br>项目主要参考链接 https://github.com/liyue2/vue-slider-third/blob/master/src/components/HelloWorld.vue
<br>大部分参考的这个，但是他没有注释，很多是自己的理解然后写下来并加上了注释，有几个地方还没看懂，就没有写。
<br>现在项目还有几个问题需要解决
<br>1.最小化页面再打开会出现无线滚动？？？？？
<br>2.不同图片适应会出现问题
<br>3.针对那个不同图片适应出现问题，试着将600改为其他数,在页面检查中有时会出现jpg格式变成txet/html，不显示图片
<br>
<br>
<br>中间遇到巨坑的一个问题，一npm run dev就报错，错误说的天花乱坠，怎么都运行不了，后来发现是vue运行条件过于苛刻，将这句注释掉就ok了


```
//...(config.dev.useEslint ? [createLintingRule()] : []),
```


<br>
<br>vue中引入图片方式


```
<li v-for="(item, index) in sliders" :key="index">
  <img :src="item.img" alt="">
</li>

sliders:[
  //添加图片
  {
    img:'../../static/img/1.jpg'
  },
  {
    img:'../../static/img/2.jpg'
  },
  {
    img:'../../static/img/3.jpg'
  },
  {
    img:'../../static/img/4.jpg'
  },
  {
    img:'../../static/img/5.jpg'
  }
],
```

<br>
<br>
<br>左右翻图
<br>
<br>

```
move(offset, direction) {
    direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600 //向左向右移动判定，从而使下面圆点进行移动
    if (this.currentIndex > 5) this.currentIndex = 1 //到两头之后移动解决办法
    if (this.currentIndex < 1) this.currentIndex = 5
    const destination = this.distance + offset * direction //确定如何移动
    this.animate(destination, direction) //过渡动画
},
```


<br>
<br>
<br>过渡动画
<br>
<br>

```
// 过渡动画
animate(des, direc) {
  const temp = window.setInterval(() => {
    if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
      this.distance += 30 * direc
    }
    else {
      window.clearInterval(temp)
      this.distance = des
      if (des < -3000) this.distance = -600
      if (des > -600) this.distance = -3000
    }
  }, 20)
},
```


<br>
<br>
<br>点击跳转
<br>
<br>


```
// 点击跳转
jump(index) {
  const direction = index - this.currentIndex >= 0 ? -1 : 1 //判断左右
  const offset = Math.abs(index - this.currentIndex) * 600  //计算需要跳转多少个图片
  const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed //设置跳转速度
  this.move(offset, direction, jumpSpeed)
},
```


<br>
<br>
<br>自动播放
<br>
<br>


```
// 自动播放
play() {
  if (this.timer) {
    window.clearInterval(this.timer)
    this.timer = null
  }
  this.timer = window.setInterval(() => {
    this.move(600, -1, this.speed)
  }, 4000)
},
// 停止自动播放
stop() {
  window.clearInterval(this.timer)
  this.timer = null
}
```


<br>
<br>
<br>自定义插件


```
props: {
    isAutoPlay: { //是否自动播放
      type: Boolean,
      default: true
    },
    isSpeed: { //移动速度
      type: Number,
      default: 30
    }
},
```


<br>
<br>
<br>
