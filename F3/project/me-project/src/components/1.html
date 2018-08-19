
<template>

  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <div class="ban-img">
            <img :src="sliders[sliders.length - 1].img" alt="">
          </div>
        </li>
        <li v-for="(item, index) in sliders" :key="index">
          <img :src="item.img" alt="">
        </li>
        <li>
          <img :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1)">
          <div class="btn-left"> &lt </div>
        </li>
        <li class="right" @click="move(600, -1)">
          <div class="btn-right"> &gt </div>
        </li>
      </ul>
      <ul class="dots">
    <li v-for="(dot, i) in sliders" :key="i"
    :class="{dotted: i === (currentIndex-1)}"
    @click = jump(i+1)>
    </li>
</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
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
  data () {
    return {
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
      currentIndex:1,//定义下标
      distance:-600, //定义每次移动距离
      speed: this.isSpeed  //移动速度
    }
  },
  methods:{
            move(offset, direction) {
                direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600 //向左向右移动判定，从而使下面圆点进行移动
                if (this.currentIndex > 5) this.currentIndex = 1 //到两头之后移动解决办法
                if (this.currentIndex < 1) this.currentIndex = 5
                const destination = this.distance + offset * direction //确定如何移动
                this.animate(destination, direction) //过渡动画
            },
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
            // 点击跳转
            jump(index) {
              const direction = index - this.currentIndex >= 0 ? -1 : 1 //判断左右
              const offset = Math.abs(index - this.currentIndex) * 600  //计算需要跳转多少个图片
              const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed //设置跳转速度
              this.move(offset, direction, jumpSpeed)
            },
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
  },
  computed:{
    // 控制移动
      containerStyle() {
          return {
            transform:`translate3d(${this.distance}px, 0, 0)`
          }
      }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
ol,ul{
  list-style: none;
}
#slider{
  text-align: center;
}
.window{
  position:relative;
  width:600px;
  height:400px;
  margin:0 auto;
  overflow:hidden;
}
.container{
  display:flex;
  position:absolute;
}
.ban-image {
  position: absolute;
  width: 100%;
  height: 100%;
}
.ban-image img {
  width:100%;
  height:100%;
  position: absolute;
}
.btn-left,.btn-right {
  position: absolute;
  top: 50%;
  width: 50px;

  background-color: rgba(0,0,0,0.5);
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
}
.btn-left {
  left: 0;
}
.btn-right {
  right: 0;
}
img{
  user-select: none;
}
.dots{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
  }
.dots li{
  display:inline-block;
  width:15px;
  height:15px;
  margin:0 3px;
  border:1px solid white;
  border-radius:50%;
  background-color:#333;
  cursor:pointer;
}
.dots .dotted{
  background-color:orange;
}
</style>
