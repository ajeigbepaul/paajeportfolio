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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nfunction ExperienceCard(param) {\n    let { experience  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[250px] md:w-[350px] xl:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(experience === null || experience === void 0 ? void 0 : experience.companyImage).url(),\n                initial: {\n                    x: -200,\n                    opacity: 0\n                },\n                animate: {\n                    x: 0,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-light\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.jobTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex space-x-2 my-2\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.company\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.technology(tech)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase py-3 text-gray-300 text-xs\",\n                        children: [\n                            new Date(experience === null || experience === void 0 ? void 0 : experience.dateStarted).toDateString(),\n                            \" - \",\n                            (experience === null || experience === void 0 ? void 0 : experience.isCurrentlyWorkingHere) ? \"Present\" : new Date(experience === null || experience === void 0 ? void 0 : experience.dateEnded).toDateString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-2 text-sm ml-4 h-96 overflow-y-scroll scrollbar-thin scrollbar-track-grey scrollbar-thumb-[#f68]/50\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.points.map((point, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBRUo7QUFJbkIsU0FBU0csZUFBZSxLQUFtQixFQUFFO1FBQXJCLEVBQUNDLFdBQVUsRUFBUSxHQUFuQjtJQUNyQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDTCxxREFBVTtnQkFDVE8sS0FBS04sK0NBQU1BLENBQUNFLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUssWUFBWSxFQUFFQyxHQUFHO2dCQUN6Q0MsU0FBUztvQkFDUEMsR0FBRyxDQUFDO29CQUNKQyxTQUFTO2dCQUNYO2dCQUNBQyxTQUFTO29CQUNQRixHQUFHO29CQUNIQyxTQUFTO2dCQUNYO2dCQUNBRSxZQUFZO29CQUNWQyxVQUFVO2dCQUNaO2dCQUNBQyxVQUFVO29CQUFFQyxNQUFNLElBQUk7Z0JBQUM7Z0JBQ3ZCWixXQUFVOzs7Ozs7MEJBRVosOERBQUNhO2dCQUFJYixXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQUdkLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlpQixRQUFROzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBRWhCLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVltQixPQUFPOzs7Ozs7a0NBQ3ZELDhEQUFDSjt3QkFBSWIsV0FBVTtrQ0FDWkYsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZb0IsVUFBVSxDQUFDQzs7Ozs7O2tDQVUxQiw4REFBQ0g7d0JBQUVoQixXQUFVOzs0QkFDVixJQUFJb0IsS0FBS3RCLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWXVCLFdBQVcsRUFBRUMsWUFBWTs0QkFBRzs0QkFBSXhCLENBQUFBLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWXlCLHNCQUFzQixJQUFHLFlBQVcsSUFBSUgsS0FBS3RCLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWTBCLFNBQVMsRUFBRUYsWUFBWSxFQUFFOzs7Ozs7O2tDQUV0Siw4REFBQ0c7d0JBQUd6QixXQUFVO2tDQUNYRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk0QixNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFNQyxrQkFDN0IsOERBQUNDOzBDQUFZRjsrQkFBSkM7Ozs7cUNBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9aLENBQUM7S0E5Q3VCaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHBlcmllbmNlQ2FyZC50c3g/ZjlkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IEV4cGVyaWVuY2VzIH0gZnJvbSAnQC90eXBpbmdzJztcclxuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSAnQC9zYW5pdHknO1xyXG5cclxudHlwZSBQcm9wcyA9IHtleHBlcmllbmNlOkV4cGVyaWVuY2VzfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhwZXJpZW5jZUNhcmQoe2V4cGVyaWVuY2V9OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgc3BhY2UteS00IGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIHctWzI1MHB4XSBtZDp3LVszNTBweF0geGw6dy1bNTAwcHhdIHNuYXAtY2VudGVyIGJnLVsjMjkyOTI5XSBob3ZlcjpvcGFjaXR5LTEwMCBvcGFjaXR5LTQwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0yMDAgb3ZlcmZsb3ctaGlkZGVuIHB5LTVcIj5cclxuICAgICAgPG1vdGlvbi5pbWdcclxuICAgICAgICBzcmM9e3VybEZvcihleHBlcmllbmNlPy5jb21wYW55SW1hZ2UpLnVybCgpfVxyXG4gICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgIHg6IC0yMDAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMS4yLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkLWZ1bGwgeGw6dy1bMTAwcHhdIHhsOmgtWzEwMHB4XSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMCBtZDpweC0xMFwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWxpZ2h0XCI+e2V4cGVyaWVuY2U/LmpvYlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbXktMlwiPntleHBlcmllbmNlPy5jb21wYW55fTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIHtleHBlcmllbmNlPy50ZWNobm9sb2d5KHRlY2gpfVxyXG4gICAgICAgICAgey8qIHtleHBlcmllbmNlPy50ZWNobm9sb2d5Lm1hcCgodGVjaCkgPT4gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAga2V5PXt0ZWNoPy5faWR9XHJcbiAgICAgICAgICAgICAgc3JjPXt1cmxGb3IodGVjaD8uaW1hZ2UpLnVybCgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHB5LTMgdGV4dC1ncmF5LTMwMCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICB7bmV3IERhdGUoZXhwZXJpZW5jZT8uZGF0ZVN0YXJ0ZWQpLnRvRGF0ZVN0cmluZygpfSAtIHtleHBlcmllbmNlPy5pc0N1cnJlbnRseVdvcmtpbmdIZXJlID8gXCJQcmVzZW50XCI6IG5ldyBEYXRlKGV4cGVyaWVuY2U/LmRhdGVFbmRlZCkudG9EYXRlU3RyaW5nKCl9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2Mgc3BhY2UteS0yIHRleHQtc20gbWwtNCBoLTk2IG92ZXJmbG93LXktc2Nyb2xsIHNjcm9sbGJhci10aGluIHNjcm9sbGJhci10cmFjay1ncmV5IHNjcm9sbGJhci10aHVtYi1bI2Y2OF0vNTBcIj5cclxuICAgICAgICAgIHtleHBlcmllbmNlPy5wb2ludHMubWFwKChwb2ludCxpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9Pntwb2ludH08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInVybEZvciIsIkV4cGVyaWVuY2VDYXJkIiwiZXhwZXJpZW5jZSIsImFydGljbGUiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJjb21wYW55SW1hZ2UiLCJ1cmwiLCJpbml0aWFsIiwieCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidmlld3BvcnQiLCJvbmNlIiwiZGl2IiwiaDQiLCJqb2JUaXRsZSIsInAiLCJjb21wYW55IiwidGVjaG5vbG9neSIsInRlY2giLCJEYXRlIiwiZGF0ZVN0YXJ0ZWQiLCJ0b0RhdGVTdHJpbmciLCJpc0N1cnJlbnRseVdvcmtpbmdIZXJlIiwiZGF0ZUVuZGVkIiwidWwiLCJwb2ludHMiLCJtYXAiLCJwb2ludCIsImkiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});