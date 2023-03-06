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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nconst projects = [\n    1,\n    2,\n    3,\n    4,\n    5\n];\nfunction Projects(param) {\n    let { projects  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-24 md:pt-2 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80\",\n                children: projects.map((project, i)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-10 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                                initial: {\n                                    y: -300,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(project.image).url(),\n                                className: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2 px-0 md:px-10 max-w-5xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#f68]/80\",\n                                                children: [\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, this),\n                                            project === null || project === void 0 ? void 0 : project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-center md:text-left\",\n                                        children: project === null || project === void 0 ? void 0 : project.summary\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, i, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#f68]/50 left-0 h-[300px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\Projects.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNXO0FBRUY7QUFJbEMsTUFBTUcsV0FBVztJQUFDO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FBRTtBQUNoQyxTQUFTQyxTQUFTLEtBQWlCLEVBQUU7UUFBbkIsRUFBQ0QsU0FBUSxFQUFRLEdBQWpCO0lBQ2hCLHFCQUNFLDhEQUFDRixxREFBVTtRQUNUSyxTQUFTO1lBQUVDLFNBQVM7UUFBRTtRQUN0QkMsYUFBYTtZQUFFRCxTQUFTO1FBQUU7UUFDMUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1FOzs7Ozs7MEJBSWpGLDhEQUFDTjtnQkFBSU0sV0FBVTswQkFDWlIsU0FBU1UsR0FBRyxDQUFDLENBQUNDLFNBQVNDO2tDQUN0QixxRUFBQ1Y7d0JBQVlNLFdBQVU7OzBDQUNyQiw4REFBQ1YscURBQVU7Z0NBQ1RLLFNBQVM7b0NBQ1BXLEdBQUcsQ0FBQztvQ0FDSlYsU0FBUztnQ0FDWDtnQ0FDQUUsWUFBWTtvQ0FBRUMsVUFBVTtnQ0FBSTtnQ0FDNUJGLGFBQWE7b0NBQUVELFNBQVM7b0NBQUdVLEdBQUc7Z0NBQUU7Z0NBQ2hDQyxVQUFVO29DQUFFQyxNQUFNLElBQUk7Z0NBQUM7Z0NBQ3ZCQyxLQUFLbEIsK0NBQU1BLENBQUNZLFFBQVFPLEtBQUssRUFBRUMsR0FBRztnQ0FDOUJYLFNBQVM7Ozs7OzswQ0FFWCw4REFBQ047Z0NBQUlNLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBR1osV0FBVTs7MERBQ1osOERBQUNhO2dEQUFLYixXQUFVOztvREFBa0NJLElBQUk7b0RBQUU7b0RBQUtaLFNBQVNzQixNQUFNOzs7Ozs7OzRDQUMzRVgsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTWSxLQUFLOzs7Ozs7O2tEQUdqQiw4REFBQ0M7d0NBQUVoQixXQUFVO2tEQUNWRyxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNjLE9BQU87Ozs7Ozs7Ozs7Ozs7dUJBbkJiYjs7Ozs7Ozs7Ozs7MEJBeUJkLDhEQUFDVjtnQkFBSU0sV0FBVTs7Ozs7Ozs7Ozs7O0FBSXJCO0tBM0NTUDtBQTZDVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeD9mM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJ0AvdHlwaW5ncyc7XHJcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJ0Avc2FuaXR5JztcclxudHlwZSBQcm9wcyA9IHtcclxuICBwcm9qZWN0czpQcm9qZWN0W11cclxufVxyXG5jb25zdCBwcm9qZWN0cyA9IFsxLCAyLCAzLCA0LCA1XTtcclxuZnVuY3Rpb24gUHJvamVjdHMoe3Byb2plY3RzfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41IH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGZsZXgtY29sIHRleHQtbGVmdCBtZDpmbGV4LXJvdyBtYXgtdy1mdWxsIGp1c3RpZnktZXZlbmx5IG14LWF1dG8gaXRlbXMtY2VudGVyIHotMFwiXHJcbiAgICA+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgdXBwZXJjYXNlIHRyYWNraW5nLVsyMHB4XSB0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+XHJcbiAgICAgICAgUHJvamVjdHNcclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgb3ZlcmZsb3cteS1oaWRkZW4gc25hcC14IHNuYXAtbWFuZGF0b3J5IHotMjAgcHQtMjQgbWQ6cHQtMiBzY3JvbGxiYXIgc2Nyb2xsYmFyLXRyYWNrLWdyYXktNDAwLzIwIHNjcm9sbGJhci10aHVtYi1bI2Y2OF0vODBcIj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleC1zaHJpbmstMCBzbmFwLWNlbnRlciBmbGV4IGZsZXgtY29sIHNwYWNlLXktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yMCBtZDpwLTEwIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgICAgeTogLTMwMCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjIgfX1cclxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKHByb2plY3QuaW1hZ2UpLnVybCgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBweC0wIG1kOnB4LTEwIG1heC13LTV4bFwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZSBkZWNvcmF0aW9uLVsjZjY4XS84MFwiPntpICsgMX0gb2Yge3Byb2plY3RzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdD8udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0Py5zdW1tYXJ5fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGFic29sdXRlIHRvcC1bMzAlXSBiZy1bI2Y2OF0vNTAgbGVmdC0wIGgtWzMwMHB4XSAtc2tldy15LTEyXCIgLz5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICAgIC8vIDxkaXY+Q29tbWluZyBzb29uPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1cmxGb3IiLCJwcm9qZWN0cyIsIlByb2plY3RzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImgzIiwibWFwIiwicHJvamVjdCIsImkiLCJpbWciLCJ5Iiwidmlld3BvcnQiLCJvbmNlIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJoNCIsInNwYW4iLCJsZW5ndGgiLCJ0aXRsZSIsInAiLCJzdW1tYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});