webpackJsonp([3],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_animation_lib_Event__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




var style = '\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  animation-play-state: paused;\n\n  animation-name: fadeIn;\n  animation-play-state: running;\n}\n\n.active {\n  animation-name: fadeOut;\n  animation-play-state: running;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n';

setTimeout(function () {
  var t = document.getElementById('t');
  __WEBPACK_IMPORTED_MODULE_0_css_animation_lib_Event__["a" /* default */].addStartEventListener(t, function () {
    console.log('transition start...');
  });
  __WEBPACK_IMPORTED_MODULE_0_css_animation_lib_Event__["a" /* default */].addEndEventListener(t, function () {
    console.log('transition end...');
  });
}, 100);

var changed = false;

function toggle() {
  var t = document.getElementById('t');
  changed = !changed;

  if (changed) {
    t.className = 'box active';
  } else {
    t.className = 'box';
  }
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'box', id: 't' }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'button',
    { onClick: toggle },
    'toggle'
  )
), document.getElementById('__react-content'));

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ })

},[259]);
//# sourceMappingURL=events.js.map