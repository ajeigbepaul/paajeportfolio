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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nconst projects = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nfunction Projects(param) {\n    let { projects  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-24 md:pt-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80\",\n                children: projects.map((project, i)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-10 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                                initial: {\n                                    y: -300,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(project.image).url(),\n                                className: \"w-72 rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2 px-0 md:px-10 max-w-5xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#f68]/80\",\n                                                children: [\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            project === null || project === void 0 ? void 0 : project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: project === null || project === void 0 ? void 0 : project.technologies.map((tech)=>{\n                                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(tech.image).url(),\n                                                className: \"w\"\n                                            }, tech === null || tech === void 0 ? void 0 : tech._id, false, {\n                                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 48\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-center md:text-left\",\n                                        children: project === null || project === void 0 ? void 0 : project.summary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, i, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#f68]/50 left-0 h-[300px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNXO0FBRUY7QUFJbEMsTUFBTUcsV0FBVztJQUFDO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FBRTtBQUNoQyxTQUFTQyxTQUFTLEtBQWlCLEVBQUU7UUFBbkIsRUFBQ0QsU0FBUSxFQUFRLEdBQWpCO0lBQ2hCLHFCQUNFLDhEQUFDRixxREFBVTtRQUNUSyxTQUFTO1lBQUVDLFNBQVM7UUFBRTtRQUN0QkMsYUFBYTtZQUFFRCxTQUFTO1FBQUU7UUFDMUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1FOzs7Ozs7MEJBSWpGLDhEQUFDTjtnQkFBSU0sV0FBVTswQkFDWlIsU0FBU1UsR0FBRyxDQUFDLENBQUNDLFNBQVNDO2tDQUN0QixxRUFBQ1Y7d0JBRUNNLFdBQVU7OzBDQUVWLDhEQUFDVixxREFBVTtnQ0FDVEssU0FBUztvQ0FDUFcsR0FBRyxDQUFDO29DQUNKVixTQUFTO2dDQUNYO2dDQUNBRSxZQUFZO29DQUFFQyxVQUFVO2dDQUFJO2dDQUM1QkYsYUFBYTtvQ0FBRUQsU0FBUztvQ0FBR1UsR0FBRztnQ0FBRTtnQ0FDaENDLFVBQVU7b0NBQUVDLE1BQU0sSUFBSTtnQ0FBQztnQ0FDdkJDLEtBQUtsQiwrQ0FBTUEsQ0FBQ1ksUUFBUU8sS0FBSyxFQUFFQyxHQUFHO2dDQUM5QlgsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDTjtnQ0FBSU0sV0FBVTs7a0RBQ2IsOERBQUNZO3dDQUFHWixXQUFVOzswREFDWiw4REFBQ2E7Z0RBQUtiLFdBQVU7O29EQUNiSSxJQUFJO29EQUFFO29EQUFLWixTQUFTc0IsTUFBTTs7Ozs7Ozs0Q0FDckI7NENBQ1BYLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1ksS0FBSzs7Ozs7OztrREFFakIsOERBQUNyQjtrREFDQVMsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTYSxZQUFZLENBQUNkLEdBQUcsQ0FBQ2UsQ0FBQUE7MERBQU0scUVBQUNaO2dEQUNsQ0ksS0FBS2xCLCtDQUFNQSxDQUFDMEIsS0FBS1AsS0FBSyxFQUFFQyxHQUFHO2dEQUFJWCxXQUFVOytDQURFaUIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNQyxHQUFHOzs7OzswQ0FDTDs7Ozs7O2tEQUUvQyw4REFBQ0M7d0NBQUVuQixXQUFVO2tEQUNWRyxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNpQixPQUFPOzs7Ozs7Ozs7Ozs7O3VCQTFCaEJoQjs7Ozs7Ozs7Ozs7MEJBZ0NYLDhEQUFDVjtnQkFBSU0sV0FBVTs7Ozs7Ozs7Ozs7O0FBSXJCO0tBbkRTUDtBQXFEVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeD9mM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJ0AvdHlwaW5ncyc7XHJcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJ0Avc2FuaXR5JztcclxudHlwZSBQcm9wcyA9IHtcclxuICBwcm9qZWN0czpQcm9qZWN0W11cclxufVxyXG5jb25zdCBwcm9qZWN0cyA9IFsxLCAyLCAzLCA0LCA1XTtcclxuZnVuY3Rpb24gUHJvamVjdHMoe3Byb2plY3RzfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41IH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGZsZXgtY29sIHRleHQtbGVmdCBtZDpmbGV4LXJvdyBtYXgtdy1mdWxsIGp1c3RpZnktZXZlbmx5IG14LWF1dG8gaXRlbXMtY2VudGVyIHotMFwiXHJcbiAgICA+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgdXBwZXJjYXNlIHRyYWNraW5nLVsyMHB4XSB0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+XHJcbiAgICAgICAgUHJvamVjdHNcclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgb3ZlcmZsb3cteS1oaWRkZW4gc25hcC14IHNuYXAtbWFuZGF0b3J5IHotMjAgcHQtMjQgbWQ6cHQtMiBzY3JvbGxiYXIgc2Nyb2xsYmFyLXRyYWNrLWdyYXktNDAwLzIwIHNjcm9sbGJhci10aHVtYi1bI2Y2OF0vODBcIj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleC1zaHJpbmstMCBzbmFwLWNlbnRlciBmbGV4IGZsZXgtY29sIHNwYWNlLXktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yMCBtZDpwLTEwIGgtc2NyZWVuXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgICB5OiAtMzAwLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuMiB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocHJvamVjdC5pbWFnZSkudXJsKCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03MiByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcHgtMCBtZDpweC0xMCBtYXgtdy01eGxcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgZGVjb3JhdGlvbi1bI2Y2OF0vODBcIj5cclxuICAgICAgICAgICAgICAgICAge2kgKyAxfSBvZiB7cHJvamVjdHMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Py50aXRsZX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3Byb2plY3Q/LnRlY2hub2xvZ2llcy5tYXAodGVjaD0+PGltZyBrZXk9e3RlY2g/Ll9pZH0gXHJcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IodGVjaC5pbWFnZSkudXJsKCl9IGNsYXNzTmFtZT1cIndcIi8+KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3Q/LnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgdG9wLVszMCVdIGJnLVsjZjY4XS81MCBsZWZ0LTAgaC1bMzAwcHhdIC1za2V3LXktMTJcIiAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgLy8gPGRpdj5Db21taW5nIHNvb248L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInVybEZvciIsInByb2plY3RzIiwiUHJvamVjdHMiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJwcm9qZWN0IiwiaSIsImltZyIsInkiLCJ2aWV3cG9ydCIsIm9uY2UiLCJzcmMiLCJpbWFnZSIsInVybCIsImg0Iiwic3BhbiIsImxlbmd0aCIsInRpdGxlIiwidGVjaG5vbG9naWVzIiwidGVjaCIsIl9pZCIsInAiLCJzdW1tYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});