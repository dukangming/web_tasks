##第二次提交介绍
<br>
<br>所有改正内容全部在project文件夹，请学长查验
<br>1.命名已经改正
<br>2.package.json添加项目依赖
```
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "server": "webpack-dev-server --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^9.1.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^1.0.0",
    "less": "^3.8.1",
    "less-loader": "^4.1.0",
    "postcss-loader": "^3.0.0",
    "style-loader": "^0.22.1"
  },
  "dependencies": {
    "react": "^16.4.2",
    "react-dom": "^16.4.2"
  }
}
```
<br>3.定制化程度不高问题：暴露自动播放速度，是否触屏滑动，是否可以自动播放参数，提高可定制化程度
```
speed = 3000,//自定义速度
swipe = true,//定义是否可触屏滑动
auto = false;//定义是否可自动播放
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
<br>7.webpack配置修改
```
module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  }
              ]
          },
          {
              test: /\.less$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  },
                  {
                      loader: "less-loader"
                      // 'style-loader',
                      // { loader: 'css-loader', options: { importLoaders: 1 } },
                      // 'less-loader'
                  }
              ]
          }
      ]
  }
```
<br>
<br>8.less、jquery打包成一个文件，并了解import、require的使用
```
const carousel = require('./carousel.js');
import css from './carousel.less';

main.js作为唯一入口文件，打包后文件为main1.js，在html文件中引入main1.js

entry:  dirname + "/app/main.js",//已多次提及的唯一入口文件
output: {
  path: dirname + "/public",//打包后的文件存放的地方
  filename: "main1.js"//打包后输出文件的文件名
},

```
