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

/***/ "./components/ExperienceCard.tsx":
/*!***************************************!*\
  !*** ./components/ExperienceCard.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nfunction ExperienceCard(param) {\n    let { experience  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[250px] md:w-[350px] xl:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(experience === null || experience === void 0 ? void 0 : experience.companyImage).url(),\n                initial: {\n                    x: -200,\n                    opacity: 0\n                },\n                animate: {\n                    x: 0,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-light\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.jobTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex space-x-2 my-2\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.company\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/csslogo.png\",\n                                className: \"h-10 w-10 rounded-full\",\n                                alt: \"cssicon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/nextbg.png\",\n                                className: \"h-10 w-10 rounded-full\",\n                                alt: \"cssicon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/csslogo.png\",\n                                className: \"h-10 w-10 rounded-full\",\n                                alt: \"cssicon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase py-3 text-gray-300 text-xs\",\n                        children: \"Started work - Ended work\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-2 text-sm ml-4\",\n                        children: [\n                            experience === null || experience === void 0 ? void 0 : experience.points.map((point, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Summary points\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Summary points\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Summary points\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBRUo7QUFJbkIsU0FBU0csZUFBZSxLQUFtQixFQUFFO1FBQXJCLEVBQUNDLFdBQVUsRUFBUSxHQUFuQjtJQUNyQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDTCxxREFBVTtnQkFDVE8sS0FBS04sK0NBQU1BLENBQUNFLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUssWUFBWSxFQUFFQyxHQUFHO2dCQUN6Q0MsU0FBUztvQkFDUEMsR0FBRyxDQUFDO29CQUNKQyxTQUFTO2dCQUNYO2dCQUNBQyxTQUFTO29CQUNQRixHQUFHO29CQUNIQyxTQUFTO2dCQUNYO2dCQUNBRSxZQUFZO29CQUNWQyxVQUFVO2dCQUNaO2dCQUNBQyxVQUFVO29CQUFFQyxNQUFNLElBQUk7Z0JBQUM7Z0JBQ3ZCWixXQUFVOzs7Ozs7MEJBRVosOERBQUNhO2dCQUFJYixXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQUdkLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlpQixRQUFROzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBRWhCLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVltQixPQUFPOzs7Ozs7a0NBQ3ZELDhEQUFDSjt3QkFBSWIsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUNDQyxLQUFJO2dDQUNKRixXQUFVO2dDQUNWa0IsS0FBSTs7Ozs7OzBDQUVOLDhEQUFDakI7Z0NBQ0NDLEtBQUk7Z0NBQ0pGLFdBQVU7Z0NBQ1ZrQixLQUFJOzs7Ozs7MENBRU4sOERBQUNqQjtnQ0FDQ0MsS0FBSTtnQ0FDSkYsV0FBVTtnQ0FDVmtCLEtBQUk7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0Y7d0JBQUVoQixXQUFVO2tDQUF1Qzs7Ozs7O2tDQUdwRCw4REFBQ21CO3dCQUFHbkIsV0FBVTs7NEJBQ1hGLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWXNCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLGtCQUM5Qiw4REFBQ0M7OENBQUc7Ozs7O3lDQUNKOzBDQUVGLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2QsQ0FBQztLQXJEdUIzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeD9mOWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgRXhwZXJpZW5jZXMgfSBmcm9tICdAL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICdAL3Nhbml0eSc7XHJcblxyXG50eXBlIFByb3BzID0ge2V4cGVyaWVuY2U6RXhwZXJpZW5jZXN9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlQ2FyZCh7ZXhwZXJpZW5jZX06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBzcGFjZS15LTQgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgdy1bMjUwcHhdIG1kOnctWzM1MHB4XSB4bDp3LVs1MDBweF0gc25hcC1jZW50ZXIgYmctWyMyOTI5MjldIGhvdmVyOm9wYWNpdHktMTAwIG9wYWNpdHktNDAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMCBvdmVyZmxvdy1oaWRkZW4gcHktNVwiPlxyXG4gICAgICA8bW90aW9uLmltZ1xyXG4gICAgICAgIHNyYz17dXJsRm9yKGV4cGVyaWVuY2U/LmNvbXBhbnlJbWFnZSkudXJsKCl9XHJcbiAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgeDogLTIwMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgIGR1cmF0aW9uOiAxLjIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHJvdW5kZWQtZnVsbCB4bDp3LVsxMDBweF0geGw6aC1bMTAwcHhdIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0wIG1kOnB4LTEwXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbGlnaHRcIj57ZXhwZXJpZW5jZT8uam9iVGl0bGV9PC9oND5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBteS0yXCI+e2V4cGVyaWVuY2U/LmNvbXBhbnl9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvY3NzbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgYWx0PVwiY3NzaWNvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvbmV4dGJnLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBhbHQ9XCJjc3NpY29uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9jc3Nsb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBhbHQ9XCJjc3NpY29uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHB5LTMgdGV4dC1ncmF5LTMwMCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICBTdGFydGVkIHdvcmsgLSBFbmRlZCB3b3JrXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2Mgc3BhY2UteS0yIHRleHQtc20gbWwtNFwiPlxyXG4gICAgICAgICAge2V4cGVyaWVuY2U/LnBvaW50cy5tYXAoKHBvaW50LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaT5TdW1tYXJ5IHBvaW50czwvbGk+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8bGk+U3VtbWFyeSBwb2ludHM8L2xpPlxyXG4gICAgICAgICAgPGxpPlN1bW1hcnkgcG9pbnRzPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXJsRm9yIiwiRXhwZXJpZW5jZUNhcmQiLCJleHBlcmllbmNlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImNvbXBhbnlJbWFnZSIsInVybCIsImluaXRpYWwiLCJ4Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJkaXYiLCJoNCIsImpvYlRpdGxlIiwicCIsImNvbXBhbnkiLCJhbHQiLCJ1bCIsInBvaW50cyIsIm1hcCIsInBvaW50IiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});