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

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nconst projects = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nfunction Projects(param) {\n    let { projects  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-24 md:pt-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80\",\n                children: projects.map((project, i)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-10 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                                initial: {\n                                    y: -300,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(project.image).url(),\n                                className: \"w-72 rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-1 md:space-y-2 px-0 md:px-10 max-w-5xl bg-fuchsia-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-xs md:text-xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#f68]/80\",\n                                                children: [\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            project === null || project === void 0 ? void 0 : project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center space-x-2\",\n                                        children: project === null || project === void 0 ? void 0 : project.technologies.map((tech)=>{\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(tech.image).url(),\n                                                className: \"h-6 w-6\"\n                                            }, tech === null || tech === void 0 ? void 0 : tech._id, false, {\n                                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-center md:text-left\",\n                                        children: project === null || project === void 0 ? void 0 : project.summary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, project === null || project === void 0 ? void 0 : project._id, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#f68]/50 left-0 h-[300px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNXO0FBRUY7QUFJbEMsTUFBTUcsV0FBVztJQUFDO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FBRTtBQUNoQyxTQUFTQyxTQUFTLEtBQWlCLEVBQUU7UUFBbkIsRUFBQ0QsU0FBUSxFQUFRLEdBQWpCO0lBQ2hCLHFCQUNFLDhEQUFDRixxREFBVTtRQUNUSyxTQUFTO1lBQUVDLFNBQVM7UUFBRTtRQUN0QkMsYUFBYTtZQUFFRCxTQUFTO1FBQUU7UUFDMUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1FOzs7Ozs7MEJBSWpGLDhEQUFDTjtnQkFBSU0sV0FBVTswQkFDWlIsU0FBU1UsR0FBRyxDQUFDLENBQUNDLFNBQVNDO2tDQUN0QixxRUFBQ1Y7d0JBRUNNLFdBQVU7OzBDQUVWLDhEQUFDVixxREFBVTtnQ0FDVEssU0FBUztvQ0FDUFcsR0FBRyxDQUFDO29DQUNKVixTQUFTO2dDQUNYO2dDQUNBRSxZQUFZO29DQUFFQyxVQUFVO2dDQUFJO2dDQUM1QkYsYUFBYTtvQ0FBRUQsU0FBUztvQ0FBR1UsR0FBRztnQ0FBRTtnQ0FDaENDLFVBQVU7b0NBQUVDLE1BQU0sSUFBSTtnQ0FBQztnQ0FDdkJDLEtBQUtsQiwrQ0FBTUEsQ0FBQ1ksUUFBUU8sS0FBSyxFQUFFQyxHQUFHO2dDQUM5QlgsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDTjtnQ0FBSU0sV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVOzswREFDWiw4REFBQ2E7Z0RBQUtiLFdBQVU7O29EQUNiSSxJQUFJO29EQUFFO29EQUFLWixTQUFTc0IsTUFBTTs7Ozs7Ozs0Q0FDckI7NENBQ1BYLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1ksS0FBSzs7Ozs7OztrREFFakIsOERBQUNyQjt3Q0FBSU0sV0FBVTtrREFDZEcsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTYSxZQUFZLENBQUNkLEdBQUcsQ0FBQ2UsQ0FBQUE7MERBQzNCLHFFQUFDWjtnREFDREksS0FBS2xCLCtDQUFNQSxDQUFDMEIsS0FBS1AsS0FBSyxFQUFFQyxHQUFHO2dEQUFJWCxXQUFVOytDQUQvQmlCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUMsR0FBRzs7Ozs7MENBQ2tDOzs7Ozs7a0RBRXJELDhEQUFDQzt3Q0FBRW5CLFdBQVU7a0RBQ1ZHLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2lCLE9BQU87Ozs7Ozs7Ozs7Ozs7dUJBM0JoQmpCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2UsR0FBRzs7Ozs7Ozs7Ozs7MEJBaUN2Qiw4REFBQ3hCO2dCQUFJTSxXQUFVOzs7Ozs7Ozs7Ozs7QUFJckI7S0FwRFNQO0FBc0RULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnQC90eXBpbmdzJztcclxuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSAnQC9zYW5pdHknO1xyXG50eXBlIFByb3BzID0ge1xyXG4gIHByb2plY3RzOlByb2plY3RbXVxyXG59XHJcbmNvbnN0IHByb2plY3RzID0gWzEsIDIsIDMsIDQsIDVdO1xyXG5mdW5jdGlvbiBQcm9qZWN0cyh7cHJvamVjdHN9OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjUgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiaC1zY3JlZW4gcmVsYXRpdmUgZmxleCBvdmVyZmxvdy1oaWRkZW4gZmxleC1jb2wgdGV4dC1sZWZ0IG1kOmZsZXgtcm93IG1heC13LWZ1bGwganVzdGlmeS1ldmVubHkgbXgtYXV0byBpdGVtcy1jZW50ZXIgei0wXCJcclxuICAgID5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yMCB1cHBlcmNhc2UgdHJhY2tpbmctWzIwcHhdIHRleHQtZ3JheS01MDAgdGV4dC0yeGxcIj5cclxuICAgICAgICBQcm9qZWN0c1xyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleCBvdmVyZmxvdy14LXNjcm9sbCBvdmVyZmxvdy15LWhpZGRlbiBzbmFwLXggc25hcC1tYW5kYXRvcnkgei0yMCBwdC0yNCBtZDpwdC0yIHNjcm9sbGJhciBzY3JvbGxiYXItdHJhY2stZ3JheS00MDAvMjAgc2Nyb2xsYmFyLXRodW1iLVsjZjY4XS84MFwiPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtwcm9qZWN0Py5faWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXgtc2hyaW5rLTAgc25hcC1jZW50ZXIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMTAgbWQ6cC0xMCBoLXNjcmVlblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgeTogLTMwMCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjIgfX1cclxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKHByb2plY3QuaW1hZ2UpLnVybCgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNzIgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIG1kOnNwYWNlLXktMiBweC0wIG1kOnB4LTEwIG1heC13LTV4bCBiZy1mdWNoc2lhLTYwMFwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lIGRlY29yYXRpb24tWyNmNjhdLzgwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpICsgMX0gb2Yge3Byb2plY3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdD8udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yJz5cclxuICAgICAgICAgICAgICB7cHJvamVjdD8udGVjaG5vbG9naWVzLm1hcCh0ZWNoPT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17dGVjaD8uX2lkfSBcclxuICAgICAgICAgICAgICBzcmM9e3VybEZvcih0ZWNoLmltYWdlKS51cmwoKX0gY2xhc3NOYW1lPVwiaC02IHctNlwiLz4pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdD8uc3VtbWFyeX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBhYnNvbHV0ZSB0b3AtWzMwJV0gYmctWyNmNjhdLzUwIGxlZnQtMCBoLVszMDBweF0gLXNrZXcteS0xMlwiIC8+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAvLyA8ZGl2PkNvbW1pbmcgc29vbjwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXJsRm9yIiwicHJvamVjdHMiLCJQcm9qZWN0cyIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsInByb2plY3QiLCJpIiwiaW1nIiwieSIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsImltYWdlIiwidXJsIiwiaDQiLCJzcGFuIiwibGVuZ3RoIiwidGl0bGUiLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNoIiwiX2lkIiwicCIsInN1bW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});