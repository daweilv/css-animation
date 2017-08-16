webpackJsonp([0],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_animation__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




var style = '\n.box {\n  background:red;\n  width:100px;\n  height:100px;\n}\n';

var show = true;

function toggle() {
  var t = document.getElementById('t');
  var b = document.getElementById('b');
  b.disabled = true;
  t.style.visibility = '';
  t.style.opacity = show ? 1 : 0;
  __WEBPACK_IMPORTED_MODULE_0_css_animation__["a" /* default */].setTransition(t, 'opacity 2s ease-in');
  __WEBPACK_IMPORTED_MODULE_0_css_animation__["a" /* default */].style(t, show ? {
    opacity: 0
  } : {
    opacity: 1
  }, function () {
    t.style.visibility = show ? '' : 'hidden';
    b.disabled = false;
    __WEBPACK_IMPORTED_MODULE_0_css_animation__["a" /* default */].setTransition(t, '');
  });
  show = !show;
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { className: 'box', id: 't' }),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'button',
    { onClick: toggle, id: 'b' },
    'toggle'
  )
), document.getElementById('__react-content'));

/***/ })

},[192]);
//# sourceMappingURL=style.js.map