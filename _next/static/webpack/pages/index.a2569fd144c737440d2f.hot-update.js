webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/ButtonBar.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/ButtonBar.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/System/Taskbar/ButtonBar.module.scss */ \"./styles/System/Taskbar/ButtonBar.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/ButtonBar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar defaultView = 'All apps';\n\nvar ButtonBar = function ButtonBar(_ref) {\n  _s();\n\n  var startButtonRef = _ref.startButtonRef,\n      buttonsRef = _ref.buttonsRef,\n      setShowMenu = _ref.setShowMenu,\n      footerRef = _ref.footerRef;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foreground = _useContext.foreground;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__[\"ProcessContext\"]),\n      open = _useContext2.open;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(defaultView),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var buttons = [{\n    title: 'START',\n    alt: 'Expand',\n    icon: \"\\uE700\",\n    isBold: true\n  }, {\n    title: 'All apps',\n    icon: \"\\uE179\",\n    isView: true\n  }, {\n    title: 'Documents',\n    icon: \"\\uE160\",\n    onClick: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(clickEvent) {\n        var processId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return open({\n                  icon: '/icons/programs/explorer.png',\n                  name: 'Documents',\n                  url: '/docs'\n                }, {}, clickEvent.target);\n\n              case 2:\n                processId = _context.sent;\n                foreground(processId);\n                setShowMenu(false);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    title: 'Power',\n    icon: \"\\uE7E8\"\n  }];\n  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_4__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ol\", {\n    className: _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n    ref: buttonsRef,\n    tabIndex: -1,\n    onMouseLeave: function onMouseLeave() {\n      var _startButtonRef$curre;\n\n      return (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n    },\n    children: buttons.map(function (_ref2) {\n      var alt = _ref2.alt,\n          icon = _ref2.icon,\n          isBold = _ref2.isBold,\n          isView = _ref2.isView,\n          title = _ref2.title,\n          onClick = _ref2.onClick;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figure\", {\n          className: view === title ? _styles_System_Taskbar_ButtonBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSelected : '',\n          onClick: isView ? function () {\n            return setView(view);\n          } : onClick,\n          tabIndex: -1,\n          title: alt || title,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"span\", {\n            \"data-icon\": icon\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"figcaption\", {\n            children: isBold ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"strong\", {\n              children: title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 35\n            }, _this) : title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this)\n      }, title, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this), footerRef.current);\n};\n\n_s(ButtonBar, \"8S20MLeZxX31meeAMV8uK1Z00ws=\");\n\n_c = ButtonBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"ButtonBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXIudHN4Pzc1ZjAiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXciLCJCdXR0b25CYXIiLCJzdGFydEJ1dHRvblJlZiIsImJ1dHRvbnNSZWYiLCJzZXRTaG93TWVudSIsImZvb3RlclJlZiIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJQcm9jZXNzQ29udGV4dCIsIm9wZW4iLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiYnV0dG9ucyIsInRpdGxlIiwiYWx0IiwiaWNvbiIsImlzQm9sZCIsImlzVmlldyIsIm9uQ2xpY2siLCJjbGlja0V2ZW50IiwibmFtZSIsInVybCIsInRhcmdldCIsInByb2Nlc3NJZCIsImNyZWF0ZVBvcnRhbCIsInN0eWxlcyIsImN1cnJlbnQiLCJmb2N1cyIsIm1hcCIsImJ1dHRvblNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxVQUFwQjs7QUFFQSxJQUFNQyxTQUtKLEdBQUcsU0FMQ0EsU0FLRCxPQUE0RDtBQUFBOztBQUFBLE1BQXpEQyxjQUF5RCxRQUF6REEsY0FBeUQ7QUFBQSxNQUF6Q0MsVUFBeUMsUUFBekNBLFVBQXlDO0FBQUEsTUFBN0JDLFdBQTZCLFFBQTdCQSxXQUE2QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsb0JBQ3hDQyx3REFBVSxDQUFDQyx1RUFBRCxDQUQ4QjtBQUFBLE1BQ3ZEQyxVQUR1RCxlQUN2REEsVUFEdUQ7O0FBQUEscUJBRTlDRix3REFBVSxDQUFDRyx1RUFBRCxDQUZvQztBQUFBLE1BRXZEQyxJQUZ1RCxnQkFFdkRBLElBRnVEOztBQUFBLGtCQUd2Q0Msc0RBQVEsQ0FBQ1gsV0FBRCxDQUgrQjtBQUFBLE1BR3hEWSxJQUh3RDtBQUFBLE1BR2xEQyxPQUhrRDs7QUFLL0QsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsT0FBRyxFQUFFLFFBRlA7QUFHRUMsUUFBSSxFQUFFLFFBSFI7QUFJRUMsVUFBTSxFQUFFO0FBSlYsR0FEYyxFQU9kO0FBQ0VILFNBQUssRUFBRSxVQURUO0FBRUVFLFFBQUksRUFBRSxRQUZSO0FBR0VFLFVBQU0sRUFBRTtBQUhWLEdBUGMsRUFZZDtBQUNFSixTQUFLLEVBQUUsV0FEVDtBQUVFRSxRQUFJLEVBQUUsUUFGUjtBQUdFRyxXQUFPO0FBQUEsc01BQUUsaUJBQ1BDLFVBRE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFHaUJYLElBQUksQ0FDMUI7QUFDRU8sc0JBQUksRUFBRSw4QkFEUjtBQUVFSyxzQkFBSSxFQUFFLFdBRlI7QUFHRUMscUJBQUcsRUFBRTtBQUhQLGlCQUQwQixFQU0xQixFQU4wQixFQU8xQkYsVUFBVSxDQUFDRyxNQVBlLENBSHJCOztBQUFBO0FBR0RDLHlCQUhDO0FBWVBqQiwwQkFBVSxDQUFDaUIsU0FBRCxDQUFWO0FBQ0FyQiwyQkFBVyxDQUFDLEtBQUQsQ0FBWDs7QUFiTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBSFQsR0FaYyxFQStCZDtBQUNFVyxTQUFLLEVBQUUsT0FEVDtBQUVFRSxRQUFJLEVBQUU7QUFGUixHQS9CYyxDQUFoQjtBQXFDQSxzQkFBT1MsOERBQVksZUFDakI7QUFDRSxhQUFTLEVBQUVDLG1GQUFNLENBQUNiLE9BRHBCO0FBRUUsT0FBRyxFQUFFWCxVQUZQO0FBR0UsWUFBUSxFQUFFLENBQUMsQ0FIYjtBQUlFLGdCQUFZLEVBQUU7QUFBQTs7QUFBQSxzQ0FBTUQsY0FBYyxDQUFDMEIsT0FBckIsMERBQU0sc0JBQXdCQyxLQUF4QixFQUFOO0FBQUEsS0FKaEI7QUFBQSxjQU1HZixPQUFPLENBQUNnQixHQUFSLENBQVk7QUFBQSxVQUFHZCxHQUFILFNBQUdBLEdBQUg7QUFBQSxVQUFRQyxJQUFSLFNBQVFBLElBQVI7QUFBQSxVQUFjQyxNQUFkLFNBQWNBLE1BQWQ7QUFBQSxVQUFzQkMsTUFBdEIsU0FBc0JBLE1BQXRCO0FBQUEsVUFBOEJKLEtBQTlCLFNBQThCQSxLQUE5QjtBQUFBLFVBQXFDSyxPQUFyQyxTQUFxQ0EsT0FBckM7QUFBQSwwQkFDWDtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBRVIsSUFBSSxLQUFLRyxLQUFULEdBQWlCWSxtRkFBTSxDQUFDSSxjQUF4QixHQUF5QyxFQUR0RDtBQUVFLGlCQUFPLEVBQUVaLE1BQU0sR0FBRztBQUFBLG1CQUFNTixPQUFPLENBQUNELElBQUQsQ0FBYjtBQUFBLFdBQUgsR0FBeUJRLE9BRjFDO0FBR0Usa0JBQVEsRUFBRSxDQUFDLENBSGI7QUFJRSxlQUFLLEVBQUVKLEdBQUcsSUFBSUQsS0FKaEI7QUFBQSxrQ0FNRTtBQUFNLHlCQUFXRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0U7QUFBQSxzQkFBYUMsTUFBTSxnQkFBRztBQUFBLHdCQUFTSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUgsR0FBOEJBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBU0EsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQixFQXFCakJWLFNBQVMsQ0FBQ3VCLE9BckJPLENBQW5CO0FBdUJELENBdEVEOztHQUFNM0IsUzs7S0FBQUEsUztBQXdFU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL0J1dHRvbkJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9UYXNrYmFyL0J1dHRvbkJhci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm9jZXNzQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvUHJvY2Vzc01hbmFnZXInO1xuaW1wb3J0IHsgU2Vzc2lvbkNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Nlc3Npb25NYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0VmlldyA9ICdBbGwgYXBwcyc7XG5cbmNvbnN0IEJ1dHRvbkJhcjogUmVhY3QuRkM8e1xuICBzdGFydEJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50PjtcbiAgYnV0dG9uc1JlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxPTGlzdEVsZW1lbnQ+O1xuICBzZXRTaG93TWVudTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICBmb290ZXJSZWY6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQgfCBudWxsPjtcbn0+ID0gKHsgc3RhcnRCdXR0b25SZWYsIGJ1dHRvbnNSZWYsIHNldFNob3dNZW51LCBmb290ZXJSZWYgfSkgPT4ge1xuICBjb25zdCB7IGZvcmVncm91bmQgfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuICBjb25zdCB7IG9wZW4gfSA9IHVzZUNvbnRleHQoUHJvY2Vzc0NvbnRleHQpO1xuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShkZWZhdWx0Vmlldyk7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1NUQVJUJyxcbiAgICAgIGFsdDogJ0V4cGFuZCcsXG4gICAgICBpY29uOiAnXFx1ZTcwMCcsXG4gICAgICBpc0JvbGQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWxsIGFwcHMnLFxuICAgICAgaWNvbjogJ1xcdWUxNzknLFxuICAgICAgaXNWaWV3OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0RvY3VtZW50cycsXG4gICAgICBpY29uOiAnXFx1ZTE2MCcsXG4gICAgICBvbkNsaWNrOiBhc3luYyAoXG4gICAgICAgIGNsaWNrRXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0lkID0gYXdhaXQgb3BlbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnL2ljb25zL3Byb2dyYW1zL2V4cGxvcmVyLnBuZycsXG4gICAgICAgICAgICBuYW1lOiAnRG9jdW1lbnRzJyxcbiAgICAgICAgICAgIHVybDogJy9kb2NzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICAgY2xpY2tFdmVudC50YXJnZXRcbiAgICAgICAgKTtcbiAgICAgICAgZm9yZWdyb3VuZChwcm9jZXNzSWQpO1xuICAgICAgICBzZXRTaG93TWVudShmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Bvd2VyJyxcbiAgICAgIGljb246ICdcXHVlN2U4J1xuICAgIH1cbiAgXTtcblxuICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgIDxvbFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc31cbiAgICAgIHJlZj17YnV0dG9uc1JlZn1cbiAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc3RhcnRCdXR0b25SZWYuY3VycmVudD8uZm9jdXMoKX1cbiAgICA+XG4gICAgICB7YnV0dG9ucy5tYXAoKHsgYWx0LCBpY29uLCBpc0JvbGQsIGlzVmlldywgdGl0bGUsIG9uQ2xpY2sgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXt0aXRsZX0+XG4gICAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXt2aWV3ID09PSB0aXRsZSA/IHN0eWxlcy5idXR0b25TZWxlY3RlZCA6ICcnfVxuICAgICAgICAgICAgb25DbGljaz17aXNWaWV3ID8gKCkgPT4gc2V0Vmlldyh2aWV3KSA6IG9uQ2xpY2t9XG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICB0aXRsZT17YWx0IHx8IHRpdGxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtaWNvbj17aWNvbn0gLz5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPntpc0JvbGQgPyA8c3Ryb25nPnt0aXRsZX08L3N0cm9uZz4gOiB0aXRsZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L29sPixcbiAgICBmb290ZXJSZWYuY3VycmVudCBhcyBIVE1MRWxlbWVudFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/ButtonBar.tsx\n");

/***/ })

})