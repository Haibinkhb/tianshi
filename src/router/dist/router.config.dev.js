"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constantRouterMap = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 基础路由
 * @type { *[] }
 */
var constantRouterMap = [{
  path: '/',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/layouts/index'));
    });
  },
  redirect: '/home',
  meta: {
    title: '首页',
    keepAlive: false
  },
  children: [{
    path: '/home',
    name: 'Home',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/home/Index'));
      });
    },
    meta: {
      title: '首页',
      keepAlive: false,
      footer: true
    }
  }, {
    path: '/find',
    name: 'Find',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/find/Find'));
      });
    },
    meta: {
      title: '发现',
      keepAlive: true,
      footer: true,
      auth: true
    }
  }, {
    path: '/videoplay',
    name: 'videoplay',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/video/Video'));
      });
    },
    meta: {
      title: '视频播放',
      keepAlive: false,
      footer: false,
      auth: false
    }
  }, {
    path: '/contacts',
    name: 'Contacts',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/contacts/Contacts'));
      });
    },
    meta: {
      title: '人脉',
      keepAlive: false,
      footer: true,
      auth: true
    }
  }, {
    path: '/operating',
    name: 'Operating',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/operating/Operating'));
      });
    },
    meta: {
      title: '服务台',
      keepAlive: false,
      footer: true,
      auth: true
    }
  }, {
    path: '/me',
    name: 'Me',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/me/Me'));
      });
    },
    meta: {
      title: '我的',
      footer: true,
      keepAlive: false
    }
  }]
}];
exports.constantRouterMap = constantRouterMap;