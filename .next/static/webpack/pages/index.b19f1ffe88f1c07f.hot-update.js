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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nfunction ExperienceCard(param) {\n    let { experience  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[150px] md:w-[450px] snap-center bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(experience === null || experience === void 0 ? void 0 : experience.companyImage).url(),\n                initial: {\n                    x: -200,\n                    opacity: 0\n                },\n                animate: {\n                    x: 0,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-16 h-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center bg-fuchsia-800\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-light\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.jobTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex space-x-2 my-2\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.company\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: experience.technology.map((tech)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(tech === null || tech === void 0 ? void 0 : tech.image).url(),\n                                className: \"h-5 w-5 rounded-full\",\n                                alt: \"cssicon\"\n                            }, tech === null || tech === void 0 ? void 0 : tech._id, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase py-3 text-gray-300 text-xs\",\n                        children: [\n                            new Date(experience === null || experience === void 0 ? void 0 : experience.dateStarted).toDateString(),\n                            \" -\",\n                            \" \",\n                            (experience === null || experience === void 0 ? void 0 : experience.isCurrentlyWorkingHere) ? \"Present\" : new Date(experience === null || experience === void 0 ? void 0 : experience.dateEnded).toDateString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-1 text-xs ml-0 max-h-10 overflow-y-scroll pr-2\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.points.map((point, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBRUo7QUFJbkIsU0FBU0csZUFBZSxLQUFtQixFQUFFO1FBQXJCLEVBQUNDLFdBQVUsRUFBUSxHQUFuQjtJQUNyQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDTCxxREFBVTtnQkFDVE8sS0FBS04sK0NBQU1BLENBQUNFLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUssWUFBWSxFQUFFQyxHQUFHO2dCQUN6Q0MsU0FBUztvQkFDUEMsR0FBRyxDQUFDO29CQUNKQyxTQUFTO2dCQUNYO2dCQUNBQyxTQUFTO29CQUNQRixHQUFHO29CQUNIQyxTQUFTO2dCQUNYO2dCQUNBRSxZQUFZO29CQUNWQyxVQUFVO2dCQUNaO2dCQUNBQyxVQUFVO29CQUFFQyxNQUFNLElBQUk7Z0JBQUM7Z0JBQ3ZCWixXQUFVOzs7Ozs7MEJBRVosOERBQUNhO2dCQUFJYixXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQUdkLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlpQixRQUFROzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBRWhCLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVltQixPQUFPOzs7Ozs7a0NBQ3ZELDhEQUFDSjt3QkFBSWIsV0FBVTtrQ0FDWkYsV0FBV29CLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDOzBDQUMxQixxRUFBQ25CO2dDQUVDQyxLQUFLTiwrQ0FBTUEsQ0FBQ3dCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUMsS0FBSyxFQUFFakIsR0FBRztnQ0FDNUJKLFdBQVU7Z0NBQ1ZzQixLQUFJOytCQUhERixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1HLEdBQUc7Ozs7Ozs7Ozs7O2tDQU9sQiw4REFBQ1A7d0JBQUVoQixXQUFVOzs0QkFDVixJQUFJd0IsS0FBSzFCLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWTJCLFdBQVcsRUFBRUMsWUFBWTs0QkFBRzs0QkFBRzs0QkFDcEQ1QixDQUFBQSx1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk2QixzQkFBc0IsSUFDL0IsWUFDQSxJQUFJSCxLQUFLMUIsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZOEIsU0FBUyxFQUFFRixZQUFZLEVBQUU7Ozs7Ozs7a0NBRXBELDhEQUFDRzt3QkFBRzdCLFdBQVU7a0NBQ1hGLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWWdDLE1BQU0sQ0FBQ1gsR0FBRyxDQUFDLENBQUNZLE9BQU9DLGtCQUM5Qiw4REFBQ0M7MENBQVlGOytCQUFKQzs7OztxQ0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1osQ0FBQztLQTlDdUJuQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeD9mOWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgRXhwZXJpZW5jZXMgfSBmcm9tICdAL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICdAL3Nhbml0eSc7XHJcblxyXG50eXBlIFByb3BzID0ge2V4cGVyaWVuY2U6RXhwZXJpZW5jZXN9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlQ2FyZCh7ZXhwZXJpZW5jZX06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBzcGFjZS15LTQgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgdy1bMTUwcHhdIG1kOnctWzQ1MHB4XSBzbmFwLWNlbnRlciBiZy1bIzI5MjkyOV0gaG92ZXI6b3BhY2l0eS0xMDAgb3BhY2l0eS02MCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIG92ZXJmbG93LWhpZGRlbiBweS01XCI+XHJcbiAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgc3JjPXt1cmxGb3IoZXhwZXJpZW5jZT8uY29tcGFueUltYWdlKS51cmwoKX1cclxuICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICB4OiAtMjAwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgZHVyYXRpb246IDEuMixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIHhsOnctWzEwMHB4XSB4bDpoLVsxMDBweF0gb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgYmctZnVjaHNpYS04MDBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTAgbWQ6cHgtMTBcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1saWdodFwiPntleHBlcmllbmNlPy5qb2JUaXRsZX08L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG15LTJcIj57ZXhwZXJpZW5jZT8uY29tcGFueX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7ZXhwZXJpZW5jZS50ZWNobm9sb2d5Lm1hcCgodGVjaCkgPT4gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGtleT17dGVjaD8uX2lkfVxyXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKHRlY2g/LmltYWdlKS51cmwoKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiY3NzaWNvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgcHktMyB0ZXh0LWdyYXktMzAwIHRleHQteHNcIj5cclxuICAgICAgICAgIHtuZXcgRGF0ZShleHBlcmllbmNlPy5kYXRlU3RhcnRlZCkudG9EYXRlU3RyaW5nKCl9IC17XCIgXCJ9XHJcbiAgICAgICAgICB7ZXhwZXJpZW5jZT8uaXNDdXJyZW50bHlXb3JraW5nSGVyZVxyXG4gICAgICAgICAgICA/IFwiUHJlc2VudFwiXHJcbiAgICAgICAgICAgIDogbmV3IERhdGUoZXhwZXJpZW5jZT8uZGF0ZUVuZGVkKS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBzcGFjZS15LTEgdGV4dC14cyBtbC0wIG1heC1oLTEwIG92ZXJmbG93LXktc2Nyb2xsIHByLTJcIj5cclxuICAgICAgICAgIHtleHBlcmllbmNlPy5wb2ludHMubWFwKChwb2ludCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpfT57cG9pbnR9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJ1cmxGb3IiLCJFeHBlcmllbmNlQ2FyZCIsImV4cGVyaWVuY2UiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiY29tcGFueUltYWdlIiwidXJsIiwiaW5pdGlhbCIsIngiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsImRpdiIsImg0Iiwiam9iVGl0bGUiLCJwIiwiY29tcGFueSIsInRlY2hub2xvZ3kiLCJtYXAiLCJ0ZWNoIiwiaW1hZ2UiLCJhbHQiLCJfaWQiLCJEYXRlIiwiZGF0ZVN0YXJ0ZWQiLCJ0b0RhdGVTdHJpbmciLCJpc0N1cnJlbnRseVdvcmtpbmdIZXJlIiwiZGF0ZUVuZGVkIiwidWwiLCJwb2ludHMiLCJwb2ludCIsImkiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});