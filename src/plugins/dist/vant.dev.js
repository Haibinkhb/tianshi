"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueVideoPlayer = _interopRequireDefault(require("vue-video-player"));

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 按需全局引入 vant组件
require('video.js/dist/video-js.css');

require('vue-video-player/src/custom-theme.css');

_vue["default"].use(_vant.Lazyload, {
  lazyComponent: true
});

_vue["default"].use(_vant.NoticeBar);

_vue["default"].use(_vant.Search);

_vue["default"].use(_vant.Button);

_vue["default"].use(_vant.Cell);

_vue["default"].use(_vant.List);

_vue["default"].use(_vant.Icon);

_vue["default"].use(_vant.Image);

_vue["default"].use(_vant.Tabbar).use(_vant.TabbarItem);

_vue["default"].use(_vant.Popup);

_vue["default"].use(_vant.Swipe, _vant.Toast).use(_vant.SwipeItem);

_vue["default"].use(_vant.Tab);

_vue["default"].use(_vant.Tabs);

_vue["default"].use(_vueVideoPlayer["default"]);

_vue["default"].use(_vant.Grid);

_vue["default"].use(_vant.GridItem);

_vue["default"].use(_vant.Progress);