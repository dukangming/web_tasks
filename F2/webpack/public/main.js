/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/gen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/gen.js":
/*!********************!*\
  !*** ./app/gen.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n/* 为插件定义私有作用域，防止外部代码访问插件内部以及插件污染全局变量*/\n(function() {\n\n  var oRight = document.querySelector('.btn-right'),//获取元素\n      oLeft = document.querySelector('.btn-left'),\n      aImages = document.querySelectorAll('.ban-image img'),\n      aTabs = document.querySelectorAll('.tab li'),\n      lastIndex = 0;//保存上次下标\n      index = 0;//保存下标\n\n  /* 左右点击轮播*/\n  oRight.onclick = function next() {\n\n      //清除上次样式 (classList.remove();)\n      aImages[lastIndex].className = ' ';//清除图片类名\n      aTabs[lastIndex].className = ' ';//清除tab类名\n\n      //改变当前下标\n      index++;\n      if(index >= aImages.length)  index = 0;\n\n      //设置当前样式\n      aImages[index].className = 'on';//给图片添加类名\n      aTabs[index].className = 'on';//给tab添加类名\n      lastIndex = index;//变成上一任\n  }\n  oLeft.onclick = function prev() {\n\n      //清除上次样式 (classList.remove();)\n      aImages[lastIndex].className = ' ';//清除图片类名\n      aTabs[lastIndex].className = ' ';//清除tab类名\n\n      //改变当前下标\n      index--;\n      if(index < 0)  index = aImages.length-1;\n\n      //设置当前样式\n      aImages[index].className = 'on';//给图片添加类名\n      aTabs[index].className = 'on';//给tab添加类名\n      lastIndex = index;//变成上一任\n  }\n\n  /* 跳到指定图片站 */\n  aTabs[0].onclick = function() {\n\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index = 0;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  }\n  aTabs[1].onclick = function() {\n\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index = 1;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  }\n  aTabs[2].onclick = function() {\n\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index = 2;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  }\n  aTabs[3].onclick = function() {\n\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index = 3;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  }\n  aTabs[4].onclick = function() {\n\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index = 4;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  }\n\n  /* 触屏滑动 */\n  $(\".banner\").on(\"swipeleft\",function(){\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index++;\n    if(index >= aImages.length)  index = 0;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  });\n  $(\".banner\").on(\"swiperight\",function(){\n    //清除上次样式 (classList.remove();)\n    aImages[lastIndex].className = ' ';//清除图片类名\n    aTabs[lastIndex].className = ' ';//清除tab类名\n\n    //改变当前下标\n    index--;\n    if(index < 0)  index = aImages.length-1;\n\n    //设置当前样式\n    aImages[index].className = 'on';//给图片添加类名\n    aTabs[index].className = 'on';//给tab添加类名\n    lastIndex = index;//变成上一任\n  });\n\n  /* 自动播放 */\n  //自动切换\n  function play(){\n      timer=setInterval(function(){\n          oRight.onclick()\n      },3000);\n  }\n  //停止切换\n  function stop(){\n      clearInterval(timer)\n  }\n  container.onmouseover=stop;\n  container.onmouseout=play;\n  //自动切换\n  play();\n}) ();\n\n\n//# sourceURL=webpack:///./app/gen.js?");

/***/ })

/******/ });