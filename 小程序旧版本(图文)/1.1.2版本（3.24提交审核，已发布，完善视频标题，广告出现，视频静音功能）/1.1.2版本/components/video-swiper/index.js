// 激励广告
let videoAd = null
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
    options: {
        addGlobalClass: true,
        pureDataPattern: /^_/
    },
    properties: {
        muted:{
          type:String,
          value:false,
        },
        duration: {
            type: Number,
            value: 500
        },
        easingFunction: {
            type: String,
            value: 'default'
        },
        loop: {
            type: Boolean,
            value: true
        },
        videoList: {
            type: Array,
            value: [],
            observer: function observer() {
                var newVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                this._videoListChanged(newVal);
            }
        }
    },
    data: {
        height: "90%",
        width:"100%",
        nextQueue: [],
        prevQueue: [],
        curQueue: [],
        circular: false,
        _last: 1,
        _change: -1,
        _invalidUp: 0,
        _invalidDown: 0,
        _videoContexts: [],
        titleshow:true
        


    },
    lifetimes: {
        attached: function attached() {
            this.data._videoContexts = [wx.createVideoContext('video_0', this), wx.createVideoContext('video_1', this), wx.createVideoContext('video_2', this)];

        let _this = this
        var interval = setInterval(function () {
              _this.setData({
                titleshow: false
              })      
        }, 10000)

          // 在页面onLoad回调事件中创建激励视频广告实例------------------
          if (wx.createRewardedVideoAd) {
            videoAd = wx.createRewardedVideoAd({
              adUnitId: 'adunit-1af84ed0a77a061d'
            })
            videoAd.onLoad(() => { console.log('激励广告加载成功') })
            videoAd.onError((err) => { { console.log('激励广告加载失败') } })
            videoAd.onClose((res) => {
              console.log("关闭激励广告")
              _this.setData({
                //  将视频静音muted关掉，muted: true表示静音开启
                muted: ""
              })
            })
          }
        
            
        }
    },

    methods: {
        _videoListChanged: function _videoListChanged(newVal) {
            var _this = this;

            var data = this.data;
            newVal.forEach(function (item) {
                data.nextQueue.push(item);
            });
            if (data.curQueue.length === 0) {
                this.setData({
                    curQueue: data.nextQueue.splice(0, 3)
                }, function () {
                    _this.playCurrent(1);
                });
            }
        },
        animationfinish: function animationfinish(e) {
            var _data = this.data,
                _last = _data._last,
                _change = _data._change,
                curQueue = _data.curQueue,
                prevQueue = _data.prevQueue,
                nextQueue = _data.nextQueue;

            var current = e.detail.current;
            var diff = current - _last;
            if (diff === 0) return;
            this.data._last = current;
            this.playCurrent(current);
            this.triggerEvent('change', { activeId: curQueue[current].id });
            var direction = diff === 1 || diff === -2 ? 'up' : 'down';
            if (direction === 'up') {
                if (this.data._invalidDown === 0) {
                    var change = (_change + 1) % 3;
                    var add = nextQueue.shift();
                    var remove = curQueue[change];
                    if (add) {
                        prevQueue.push(remove);
                        curQueue[change] = add;
                        this.data._change = change;
                    } else {
                        this.data._invalidUp += 1;
                    }
                } else {
                    this.data._invalidDown -= 1;
                }
            }
            if (direction === 'down') {
                if (this.data._invalidUp === 0) {
                    var _change2 = _change;
                    var _remove = curQueue[_change2];
                    var _add = prevQueue.pop();
                    if (_add) {
                        curQueue[_change2] = _add;
                        nextQueue.unshift(_remove);
                        this.data._change = (_change2 - 1 + 3) % 3;
                    } else {
                        this.data._invalidDown += 1;
                    }
                } else {
                    this.data._invalidUp -= 1;
                }
            }
            var circular = true;
            if (nextQueue.length === 0 && current !== 0) {
                circular = false;
            }
            if (prevQueue.length === 0 && current !== 2) {
                circular = false;
            }
            this.setData({
                curQueue: curQueue,
                circular: circular
            });
        },
        playCurrent: function playCurrent(current) {
            this.data._videoContexts.forEach(function (ctx, index) {
                index !== current ? ctx.pause() : ctx.play();
            });
        },
        
        onPlay: function onPlay(e) {
            this.trigger(e, 'play');
        },
        onPause: function onPause(e) {
            this.trigger(e, 'pause');
        },
        onEnded: function onEnded(e) {
            this.trigger(e, 'ended');
        },
        onError: function onError(e) {
            this.trigger(e, 'error');
        },
        onTimeUpdate: function onTimeUpdate(e) {
            this.trigger(e, 'timeupdate');
        },
        onWaiting: function onWaiting(e) {
            this.trigger(e, 'wait');
        },
        onProgress: function onProgress(e) {
            this.trigger(e, 'progress');
        },
        onLoadedMetaData: function onLoadedMetaData(e) {
            this.trigger(e, 'loadedmetadata');
        },
        trigger: function trigger(e, type) {
            var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var detail = e.detail;
            var activeId = e.target.dataset.id;
            this.triggerEvent(type, Object.assign(Object.assign(Object.assign({}, detail), { activeId: activeId }), ext));
        },
      change(e){
        console.log("滑动", e.detail.current)
        let _this = this
        _this.setData({
          titleshow: true
        })


        if (videoAd) {
          // 当激励视频广告弹出时，将muted值变为true，将视频调为静音，muted传值给子组件控制视频的静音
          //  下滑三个视频出一次激励视频，开始播放的视频索引是1，
          console.log('判断是否有激励广告')
          if (e.detail.current== 1) {
           
            console.log('激励广告出现，视频静音')
            videoAd.show().catch(() => {
              console.log('激励广告调用失败')
              _this.setData({
                muted: ""
              })
              // 失败重试
              videoAd.load()
                .then(() => videoAd.show())
                .catch(err => {              
                  console.log('激励视频 广告显示失败')
                })
            })

            _this.setData({
              muted: true
            })
          }

        }

      }

    }
});

/***/ })
/******/ ]);