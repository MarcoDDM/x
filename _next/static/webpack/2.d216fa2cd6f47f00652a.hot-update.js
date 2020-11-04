webpackHotUpdate_N_E(2,{

/***/ "./utils/taskbar.ts":
/*!**************************!*\
  !*** ./utils/taskbar.ts ***!
  \**************************/
/*! exports provided: cycleWindowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cycleWindowState\", function() { return cycleWindowState; });\nvar cycleWindowState = function cycleWindowState(_ref) {\n  var foregroundId = _ref.foregroundId,\n      id = _ref.id,\n      minimized = _ref.minimized,\n      foreground = _ref.foreground,\n      minimize = _ref.minimize,\n      restore = _ref.restore;\n\n  if (minimized) {\n    // TODO: If maximized then don't restore to 0/0\n    restore(id, 'minimized');\n    console.log('On min');\n    foreground(id);\n  } else if (foregroundId && foregroundId === id) {\n    minimize(id);\n    foreground('');\n  } else {\n    console.log('On else');\n    foreground(id);\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdGFza2Jhci50cz9mMGQ2Il0sIm5hbWVzIjpbImN5Y2xlV2luZG93U3RhdGUiLCJmb3JlZ3JvdW5kSWQiLCJpZCIsIm1pbmltaXplZCIsImZvcmVncm91bmQiLCJtaW5pbWl6ZSIsInJlc3RvcmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQU9EO0FBQUEsTUFON0JDLFlBTTZCLFFBTjdCQSxZQU02QjtBQUFBLE1BTDdCQyxFQUs2QixRQUw3QkEsRUFLNkI7QUFBQSxNQUo3QkMsU0FJNkIsUUFKN0JBLFNBSTZCO0FBQUEsTUFIN0JDLFVBRzZCLFFBSDdCQSxVQUc2QjtBQUFBLE1BRjdCQyxRQUU2QixRQUY3QkEsUUFFNkI7QUFBQSxNQUQ3QkMsT0FDNkIsUUFEN0JBLE9BQzZCOztBQUM3QixNQUFJSCxTQUFKLEVBQWU7QUFDYjtBQUNBRyxXQUFPLENBQUNKLEVBQUQsRUFBSyxXQUFMLENBQVA7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBSixjQUFVLENBQUNGLEVBQUQsQ0FBVjtBQUNELEdBTEQsTUFLTyxJQUFJRCxZQUFZLElBQUlBLFlBQVksS0FBS0MsRUFBckMsRUFBeUM7QUFDOUNHLFlBQVEsQ0FBQ0gsRUFBRCxDQUFSO0FBQ0FFLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxHQUhNLE1BR0E7QUFDTEcsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBSixjQUFVLENBQUNGLEVBQUQsQ0FBVjtBQUNEO0FBQ0YsQ0FwQk0iLCJmaWxlIjoiLi91dGlscy90YXNrYmFyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBXaW5kb3dTdGF0ZUN5Y2xlciB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvdGFza2Jhcic7XG5cbmV4cG9ydCBjb25zdCBjeWNsZVdpbmRvd1N0YXRlID0gKHtcbiAgZm9yZWdyb3VuZElkLFxuICBpZCxcbiAgbWluaW1pemVkLFxuICBmb3JlZ3JvdW5kLFxuICBtaW5pbWl6ZSxcbiAgcmVzdG9yZVxufTogV2luZG93U3RhdGVDeWNsZXIpOiB2b2lkID0+IHtcbiAgaWYgKG1pbmltaXplZCkge1xuICAgIC8vIFRPRE86IElmIG1heGltaXplZCB0aGVuIGRvbid0IHJlc3RvcmUgdG8gMC8wXG4gICAgcmVzdG9yZShpZCwgJ21pbmltaXplZCcpO1xuICAgIGNvbnNvbGUubG9nKCdPbiBtaW4nKTtcbiAgICBmb3JlZ3JvdW5kKGlkKTtcbiAgfSBlbHNlIGlmIChmb3JlZ3JvdW5kSWQgJiYgZm9yZWdyb3VuZElkID09PSBpZCkge1xuICAgIG1pbmltaXplKGlkKTtcbiAgICBmb3JlZ3JvdW5kKCcnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnT24gZWxzZScpO1xuICAgIGZvcmVncm91bmQoaWQpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/taskbar.ts\n");

/***/ })

})