"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Skillz.tsx":
/*!*******************************!*\
  !*** ./components/Skillz.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skill */ \"./components/Skill.tsx\");\n\n\n\n\nfunction Skillz(param) {\n    let { skills  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"flex relative flex-col text md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Skills\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Skillz.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-36 uppercase tracking-[1px] text-gray-500 text-xs md:text-sm\",\n                children: \"Hover for current skill profficiency\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Skillz.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-4 pt-28\",\n                children: [\n                    skills === null || skills === void 0 ? void 0 : skills.s.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Skill__WEBPACK_IMPORTED_MODULE_2__.Skill, {\n                            skill: skill\n                        }, skill._id, false, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Skillz.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)),\n                    skills.map((skill)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Skill__WEBPACK_IMPORTED_MODULE_2__.Skill, {\n                            skill: skill\n                        }, skill._id, false, {\n                            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Skillz.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Skillz.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Skillz.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Skillz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skillz);\nvar _c;\n$RefreshReg$(_c, \"Skillz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxsei50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNQO0FBTWhDLFNBQVNHLE9BQU8sS0FBZSxFQUFFO1FBQWpCLEVBQUNDLE9BQU0sRUFBUSxHQUFmO0lBQ2QscUJBQ0UsOERBQUNILHFEQUFVO1FBQ1RLLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxhQUFhO1lBQUVELFNBQVM7UUFBRTtRQUMxQkUsWUFBWTtZQUFFQyxVQUFVO1FBQUk7UUFDNUJDLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0Y7Ozs7OzswQkFHcEcsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE0RTs7Ozs7OzBCQUcxRiw4REFBQ047Z0JBQUlNLFdBQVU7O29CQUNaUCxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFTLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUNkLDhEQUFDYix5Q0FBS0E7NEJBQWlCYSxPQUFPQTsyQkFBbEJBLE1BQU1DLEdBQUc7Ozs7aUNBQ3JCO29CQUVEWixPQUFPVSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNiLHlDQUFLQTs0QkFBaUJhLE9BQU9BOzJCQUFsQkEsTUFBTUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0I7S0ExQlNiO0FBNEJULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2tpbGx6LnRzeD80N2JhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi9Ta2lsbCc7XHJcbmltcG9ydCB7IFNraWxscyB9IGZyb20gJ0AvdHlwaW5ncyc7XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgc2tpbGxzOlNraWxsc1tdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNraWxseih7c2tpbGxzfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41IH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUgZmxleC1jb2wgdGV4dCBtZDp0ZXh0LWxlZnQgeGw6ZmxleC1yb3cgbWF4LXctWzIwMDBweF0geGw6cHgtMTAgbWluLWgtc2NyZWVuIHhsOnNwYWNlLXktMCBteC1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjQgdXBwZXJjYXNlIHRyYWNraW5nLVsxMHB4XSBtZDp0cmFja2luZy1bMjBweF0gdGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgIFNraWxsc1xyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTM2IHVwcGVyY2FzZSB0cmFja2luZy1bMXB4XSB0ZXh0LWdyYXktNTAwIHRleHQteHMgbWQ6dGV4dC1zbVwiPlxyXG4gICAgICAgIEhvdmVyIGZvciBjdXJyZW50IHNraWxsIHByb2ZmaWNpZW5jeVxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTQgcHQtMjhcIj5cclxuICAgICAgICB7c2tpbGxzPy5zLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgIDxTa2lsbCBrZXk9e3NraWxsLl9pZH0gc2tpbGw9e3NraWxsfSAvPlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcclxuICAgICAgICAgIDxTa2lsbCBrZXk9e3NraWxsLl9pZH0gc2tpbGw9e3NraWxsfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIC8vIDxkaXY+Q29tbWluZyBzb29uPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGx6Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiU2tpbGwiLCJTa2lsbHoiLCJza2lsbHMiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaDMiLCJzIiwibWFwIiwic2tpbGwiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Skillz.tsx\n"));

/***/ })

});