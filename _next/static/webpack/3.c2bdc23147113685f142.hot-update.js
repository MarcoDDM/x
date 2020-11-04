webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n  var windowMotionElement = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(false),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      previousX = _getState.x,\n      previousY = _getState.y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useMemo\"])(function () {\n    return {\n      x: Math.floor(-(width / 2) + window.innerWidth * 0.5),\n      y: Math.floor(-(height / 2) + window.innerHeight * 0.45)\n    };\n  }, []),\n      defaultX = _useMemo.x,\n      defaultY = _useMemo.y;\n\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: !previousX ? defaultX + x : x,\n        y: !previousY ? defaultY + y : y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      console.log('Process focus', id);\n      foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      var _windowMotionElement$, _windowMotionElement$2;\n\n      console.log(windowMotionElement === null || windowMotionElement === void 0 ? void 0 : windowMotionElement.current, event.relatedTarget, windowMotionElement === null || windowMotionElement === void 0 ? void 0 : (_windowMotionElement$ = windowMotionElement.current) === null || _windowMotionElement$ === void 0 ? void 0 : _windowMotionElement$.contains(event.relatedTarget)); // windowMotionElement?.current.contains()\n\n      if (!(windowMotionElement === null || windowMotionElement === void 0 ? void 0 : (_windowMotionElement$2 = windowMotionElement.current) === null || _windowMotionElement$2 === void 0 ? void 0 : _windowMotionElement$2.contains(event.relatedTarget)) && event.relatedTarget !== taskbarElement) {\n        console.log('Bitch blurred');\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    console.log('foregroundId', foregroundId);\n\n    if (foregroundId === id && minimized) {\n      var meow = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      }));\n      console.log('useEffect focus cond1', meow);\n      foreground(meow);\n    } else if (!stackOrder.includes(id)) {\n      var woof = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder);\n      console.log('useEffect focus cond2', woof);\n      foreground(woof);\n    } else if (foregroundId === id) {\n      var _windowMotionElement$3;\n\n      console.log('REFOCUS FUCKER');\n      windowMotionElement === null || windowMotionElement === void 0 ? void 0 : (_windowMotionElement$3 = windowMotionElement.current) === null || _windowMotionElement$3 === void 0 ? void 0 : _windowMotionElement$3.focus();\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, _objectSpread(_objectSpread({\n    ref: windowMotionElement,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_10__[\"windowMotionSettings\"])({\n    initialX: previousX || defaultX,\n    initialY: previousY || defaultY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  })), {}, {\n    children: windowed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Window, _objectSpread(_objectSpread({\n      icon: icon,\n      name: name,\n      bgColor: bgColor,\n      lockAspectRatio: lockAspectRatio,\n      updateSize: size(id)\n    }, windowOptions), {}, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 11\n      }, _this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(App, _objectSpread(_objectSpread({}, loadedAppOptions), windowOptions), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 9\n    }, _this)\n  }), id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 149,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProcessWindow, \"TchKB//CjdgHjWpZ18oNvfy3W0w=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsIndpbmRvd01vdGlvbkVsZW1lbnQiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kIiwiZ2V0U3RhdGUiLCJzYXZlU3RhdGUiLCJzZXNzaW9uIiwiZm9yZWdyb3VuZElkIiwic3RhY2tPcmRlciIsIlByb2Nlc3NDb250ZXh0IiwicHJvY2Vzc2VzIiwiY2xvc2UiLCJtYXhpbWl6ZSIsIm1pbmltaXplIiwicG9zaXRpb24iLCJyZXN0b3JlIiwic2l6ZSIsInVzZVN0YXRlIiwibWF4aW1pemVXaW5kb3ciLCJzZXRNYXhpbWl6ZVdpbmRvdyIsInByZXZpb3VzWCIsInByZXZpb3VzWSIsImdldE1heERpbWVuc2lvbnMiLCJ1c2VNZW1vIiwiTWF0aCIsImZsb29yIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGVmYXVsdFgiLCJkZWZhdWx0WSIsIndpbmRvd09wdGlvbnMiLCJvbk1pbmltaXplIiwib25NYXhpbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwiY29uc29sZSIsImxvZyIsIm9uQmx1ciIsImV2ZW50IiwiY3VycmVudCIsInJlbGF0ZWRUYXJnZXQiLCJjb250YWlucyIsInVwZGF0ZVBvc2l0aW9uIiwiekluZGV4Iiwic2xpY2UiLCJyZXZlcnNlIiwiaW5kZXhPZiIsInVzZUVmZmVjdCIsIm1lb3ciLCJnZXROZXh0VmlzaWJsZVdpbmRvdyIsImZpbHRlciIsInN0YWNrSWQiLCJpbmNsdWRlcyIsIndvb2YiLCJmb2N1cyIsInNldFRpbWVvdXQiLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyIsIk1JTExJU0VDT05EU19JTl9TRUNPTkQiLCJzdHlsZXMiLCJhbmltYXRlZFdpbmRvd3MiLCJmb3JlZ3JvdW5kWmluZGV4Iiwid2luZG93TW90aW9uU2V0dGluZ3MiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiYW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw2S0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhGQUFSO0FBQUE7QUFBQSxjQUFRLDBDQUFSO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNO0FBRU4sSUFBTUUsWUFBWSxHQUFHQywyREFBVSxHQUFHQyxtRUFBa0IsR0FBR0MsZ0VBQXZEOztBQUVBLElBQU1DLGFBQWdDLEdBQUcsU0FBbkNBLGFBQW1DLE9Bb0JuQztBQUFBOztBQUFBLHlCQW5CSkMsTUFtQkk7QUFBQSxNQWxCTUMsR0FrQk4sZUFsQkZELE1Ba0JFO0FBQUEsTUFqQkZFLGdCQWlCRSxlQWpCRkEsZ0JBaUJFO0FBQUEsMENBaEJGQyxhQWdCRTtBQUFBLE1BaEJzQkMsWUFnQnRCLHlCQWhCZUMsS0FnQmY7QUFBQSxNQWhCNENDLGFBZ0I1Qyx5QkFoQm9DQyxNQWdCcEM7QUFBQSxNQWRK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QUFjLEVBQWRBLGNBWnVCO0FBYXZCTCxpQkFBYSxFQUFiQTtBQWJ1QixHQUFELENBVDFCO0FBQUEsY0F5QkdPLFFBQVEsZ0JBQ1AscUVBQUMsTUFBRDtBQUNFLFVBQUksRUFBRVQsSUFEUjtBQUVFLFVBQUksRUFBRU0sSUFGUjtBQUdFLGFBQU8sRUFBRVIsT0FIWDtBQUlFLHFCQUFlLEVBQUVLLGVBSm5CO0FBS0UsZ0JBQVUsRUFBRTBCLElBQUksQ0FBQzVCLEVBQUQ7QUFMbEIsT0FNTTJDLGFBTk47QUFBQSw2QkFRRSxxRUFBQyxHQUFELGtDQUFTcEQsZ0JBQVQsR0FBK0JvRCxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURPLGdCQVlQLHFFQUFDLEdBQUQsa0NBQVNwRCxnQkFBVCxHQUErQm9ELGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQ0osTUFDTzNDLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBcktEOztHQUFNWixhOztNQUFBQSxhO0FBdUtTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvUHJvY2Vzc1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvd01hbmFnZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3MgfSBmcm9tICdAL3V0aWxzL3Byb2Nlc3MnO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtcbiAgYmFzZVppbmRleCxcbiAgZm9yZWdyb3VuZFppbmRleCxcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIE1JTExJU0VDT05EU19JTl9TRUNPTkQsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5leHRWaXNpYmxlV2luZG93LCBnZXRNYXhEaW1lbnNpb25zIH0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aW5kb3dNb3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdXRpbHMvbW90aW9ucyc7XG5cbmNvbnN0IFdpbmRvdyA9IGR5bmFtaWMoaW1wb3J0KCdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93JykpO1xuXG5jb25zdCB3aW5kb3daaW5kZXggPSBiYXNlWmluZGV4ICsgd2luZG93c1ppbmRleExldmVsICogemluZGV4TGV2ZWxTaXplO1xuXG5jb25zdCBQcm9jZXNzV2luZG93OiBSZWFjdC5GQzxQcm9jZXNzPiA9ICh7XG4gIGxvYWRlcjoge1xuICAgIGxvYWRlcjogQXBwLFxuICAgIGxvYWRlZEFwcE9wdGlvbnMsXG4gICAgbG9hZGVyT3B0aW9uczogeyB3aWR0aDogZGVmYXVsdFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRIZWlnaHQgfVxuICB9LFxuICBiZ0NvbG9yLFxuICBoZWlnaHQ6IGluaXRpYWxIZWlnaHQsXG4gIGljb24sXG4gIGlkLFxuICBsYXVuY2hFbGVtZW50LFxuICBsb2NrQXNwZWN0UmF0aW8sXG4gIG1heGltaXplZCxcbiAgbWluaW1pemVkLFxuICBuYW1lLFxuICB0YXNrYmFyRWxlbWVudCxcbiAgd2lkdGg6IGluaXRpYWxXaWR0aCxcbiAgd2luZG93ZWQsXG4gIHgsXG4gIHlcbn0pID0+IHtcbiAgY29uc3Qgd2luZG93TW90aW9uRWxlbWVudCA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHtcbiAgICBmb3JlZ3JvdW5kLFxuICAgIGdldFN0YXRlLFxuICAgIHNhdmVTdGF0ZSxcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCwgc3RhY2tPcmRlciB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3Qge1xuICAgIHByb2Nlc3NlcyxcbiAgICBjbG9zZSxcbiAgICBtYXhpbWl6ZSxcbiAgICBtaW5pbWl6ZSxcbiAgICBwb3NpdGlvbixcbiAgICByZXN0b3JlLFxuICAgIHNpemVcbiAgfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbbWF4aW1pemVXaW5kb3csIHNldE1heGltaXplV2luZG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1gsIHk6IHByZXZpb3VzWSB9ID0gZ2V0U3RhdGUoe1xuICAgIGlkXG4gIH0pO1xuICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldE1heERpbWVuc2lvbnMoXG4gICAgaW5pdGlhbFdpZHRoLFxuICAgIGluaXRpYWxIZWlnaHQsXG4gICAgZGVmYXVsdFdpZHRoLFxuICAgIGRlZmF1bHRIZWlnaHQsXG4gICAgbG9ja0FzcGVjdFJhdGlvXG4gICk7XG4gIGNvbnN0IHsgeDogZGVmYXVsdFgsIHk6IGRlZmF1bHRZIH0gPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB4OiBNYXRoLmZsb29yKC0od2lkdGggLyAyKSArIHdpbmRvdy5pbm5lcldpZHRoICogMC41KSxcbiAgICAgIHk6IE1hdGguZmxvb3IoLShoZWlnaHQgLyAyKSArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNDUpXG4gICAgfSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgd2luZG93T3B0aW9ucyA9IHtcbiAgICBvbk1pbmltaXplOiAoKSA9PiBtaW5pbWl6ZShpZCksXG4gICAgb25NYXhpbWl6ZTogKCkgPT4gKG1heGltaXplZCA/IHJlc3RvcmUoaWQsICdtYXhpbWl6ZWQnKSA6IG1heGltaXplKGlkKSksXG4gICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgc2F2ZVN0YXRlKHtcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBpZCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIHg6ICFwcmV2aW91c1ggPyBkZWZhdWx0WCArIHggOiB4LFxuICAgICAgICB5OiAhcHJldmlvdXNZID8gZGVmYXVsdFkgKyB5IDogeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnUHJvY2VzcyBmb2N1cycsIGlkKTtcbiAgICAgIGZvcmVncm91bmQoaWQpO1xuICAgIH0sXG4gICAgb25CbHVyOiAoZXZlbnQ6IFJlYWN0LkZvY3VzRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICB3aW5kb3dNb3Rpb25FbGVtZW50Py5jdXJyZW50LFxuICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LFxuICAgICAgICB3aW5kb3dNb3Rpb25FbGVtZW50Py5jdXJyZW50Py5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIE5vZGUpXG4gICAgICApO1xuICAgICAgLy8gd2luZG93TW90aW9uRWxlbWVudD8uY3VycmVudC5jb250YWlucygpXG4gICAgICBpZiAoIXdpbmRvd01vdGlvbkVsZW1lbnQ/LmN1cnJlbnQ/LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgTm9kZSkgJiYgZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0JpdGNoIGJsdXJyZWQnKTtcbiAgICAgICAgZm9yZWdyb3VuZCgnJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVQb3NpdGlvbjogcG9zaXRpb24oaWQpLFxuICAgIHpJbmRleDogd2luZG93WmluZGV4ICsgc3RhY2tPcmRlci5zbGljZSgpLnJldmVyc2UoKS5pbmRleE9mKGlkKSxcbiAgICBtYXhpbWl6ZWQ6IG1heGltaXplV2luZG93LFxuICAgIG1pbmltaXplZCxcbiAgICBpZCxcbiAgICBoZWlnaHQsXG4gICAgd2lkdGhcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdmb3JlZ3JvdW5kSWQnLCBmb3JlZ3JvdW5kSWQpXG4gICAgaWYgKGZvcmVncm91bmRJZCA9PT0gaWQgJiYgbWluaW1pemVkKSB7XG4gICAgICBjb25zdCBtZW93ID0gICAgICAgICBnZXROZXh0VmlzaWJsZVdpbmRvdyhcbiAgICAgICAgcHJvY2Vzc2VzLFxuICAgICAgICBzdGFja09yZGVyLmZpbHRlcigoc3RhY2tJZCkgPT4gc3RhY2tJZCAhPT0gaWQpXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coJ3VzZUVmZmVjdCBmb2N1cyBjb25kMScsIG1lb3cpO1xuICAgICAgZm9yZWdyb3VuZChtZW93KTtcbiAgICB9IGVsc2UgaWYgKCFzdGFja09yZGVyLmluY2x1ZGVzKGlkKSkge1xuICAgICAgY29uc3Qgd29vZiA9IGdldE5leHRWaXNpYmxlV2luZG93KHByb2Nlc3Nlcywgc3RhY2tPcmRlcik7XG4gICAgICBjb25zb2xlLmxvZygndXNlRWZmZWN0IGZvY3VzIGNvbmQyJywgd29vZik7XG4gICAgICBmb3JlZ3JvdW5kKHdvb2YpO1xuICAgIH0gZWxzZSBpZiAoZm9yZWdyb3VuZElkID09PSBpZCkge1xuICAgICAgY29uc29sZS5sb2coJ1JFRk9DVVMgRlVDS0VSJylcbiAgICAgIHdpbmRvd01vdGlvbkVsZW1lbnQ/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZElkLCBpZCwgbWluaW1pemVkLCBwcm9jZXNzZXMsIHN0YWNrT3JkZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXhpbWl6ZWQpIHtcbiAgICAgIHNldE1heGltaXplV2luZG93KHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWF4aW1pemVXaW5kb3cpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHNldE1heGltaXplV2luZG93KGZhbHNlKSxcbiAgICAgICAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMgKiBNSUxMSVNFQ09ORFNfSU5fU0VDT05EXG4gICAgICApO1xuICAgIH1cbiAgfSwgW21heGltaXplZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgICBrZXk9e2lkfVxuICAgICAgcmVmPXt3aW5kb3dNb3Rpb25FbGVtZW50fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5pbWF0ZWRXaW5kb3dzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgekluZGV4OiBmb3JlZ3JvdW5kSWQgPT09IGlkID8gZm9yZWdyb3VuZFppbmRleCA6IHdpbmRvd09wdGlvbnMuekluZGV4LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9fVxuICAgICAgey4uLndpbmRvd01vdGlvblNldHRpbmdzKHtcbiAgICAgICAgaW5pdGlhbFg6IHByZXZpb3VzWCB8fCBkZWZhdWx0WCxcbiAgICAgICAgaW5pdGlhbFk6IHByZXZpb3VzWSB8fCBkZWZhdWx0WSxcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgbWluaW1pemVkICYmICdtYXhtaW4nKSB8fFxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgJ21heGltaXplZCcpIHx8XG4gICAgICAgICAgKG1pbmltaXplZCAmJiAnbWluaW1pemVkJykgfHxcbiAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB0YXNrYmFyRWxlbWVudCxcbiAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICA8V2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgdXBkYXRlU2l6ZT17c2l6ZShpZCl9XG4gICAgICAgICAgey4uLndpbmRvd09wdGlvbnN9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICAgPC9XaW5kb3c+XG4gICAgICApIDogKFxuICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICl9XG4gICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NXaW5kb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})