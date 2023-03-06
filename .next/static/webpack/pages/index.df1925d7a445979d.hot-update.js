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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sanity */ \"./sanity.ts\");\n\n\n\n\nfunction ExperienceCard(param) {\n    let { experience  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[250px] md:w-[350px] xl:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(experience === null || experience === void 0 ? void 0 : experience.companyImage).url(),\n                initial: {\n                    x: -200,\n                    opacity: 0\n                },\n                animate: {\n                    x: 0,\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1.2\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-light\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.jobTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"flex space-x-2 my-2\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.company\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            experience.technology.map((tech)=>{}),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/nextbg.png\",\n                                className: \"h-10 w-10 rounded-full\",\n                                alt: \"cssicon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/csslogo.png\",\n                                className: \"h-10 w-10 rounded-full\",\n                                alt: \"cssicon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase py-3 text-gray-300 text-xs\",\n                        children: [\n                            new Date(experience === null || experience === void 0 ? void 0 : experience.dateStarted).toDateString(),\n                            \" - \",\n                            (experience === null || experience === void 0 ? void 0 : experience.isCurrentlyWorkingHere) ? \"Present\" : new Date(experience === null || experience === void 0 ? void 0 : experience.dateEnded).toDateString(),\n                            \"Started work - Ended work\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-2 text-sm ml-4\",\n                        children: experience === null || experience === void 0 ? void 0 : experience.points.map((point, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\Love\\\\portfolio\\\\paaje\\\\components\\\\ExperienceCard.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNhO0FBRUo7QUFJbkIsU0FBU0csZUFBZSxLQUFtQixFQUFFO1FBQXJCLEVBQUNDLFdBQVUsRUFBUSxHQUFuQjtJQUNyQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDTCxxREFBVTtnQkFDVE8sS0FBS04sK0NBQU1BLENBQUNFLHVCQUFBQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUssWUFBWSxFQUFFQyxHQUFHO2dCQUN6Q0MsU0FBUztvQkFDUEMsR0FBRyxDQUFDO29CQUNKQyxTQUFTO2dCQUNYO2dCQUNBQyxTQUFTO29CQUNQRixHQUFHO29CQUNIQyxTQUFTO2dCQUNYO2dCQUNBRSxZQUFZO29CQUNWQyxVQUFVO2dCQUNaO2dCQUNBQyxVQUFVO29CQUFFQyxNQUFNLElBQUk7Z0JBQUM7Z0JBQ3ZCWixXQUFVOzs7Ozs7MEJBRVosOERBQUNhO2dCQUFJYixXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQUdkLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVlpQixRQUFROzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBRWhCLFdBQVU7a0NBQXVCRix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVltQixPQUFPOzs7Ozs7a0NBQ3ZELDhEQUFDSjt3QkFBSWIsV0FBVTs7NEJBQ1pGLFdBQVdvQixVQUFVLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBTSxDQUVqQzswQ0FFQSw4REFBQ25CO2dDQUNDQyxLQUFJO2dDQUNKRixXQUFVO2dDQUNWcUIsS0FBSTs7Ozs7OzBDQUVOLDhEQUFDcEI7Z0NBQ0NDLEtBQUk7Z0NBQ0pGLFdBQVU7Z0NBQ1ZxQixLQUFJOzs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNMO3dCQUFFaEIsV0FBVTs7NEJBQ1YsSUFBSXNCLEtBQUt4Qix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVl5QixXQUFXLEVBQUVDLFlBQVk7NEJBQUc7NEJBQUkxQixDQUFBQSx1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVkyQixzQkFBc0IsSUFBRyxZQUFZLElBQUlILEtBQUt4Qix1QkFBQUEsd0JBQUFBLEtBQUFBLElBQUFBLFdBQVk0QixTQUFTLEVBQUVGLFlBQVksRUFBRTs0QkFBQzs7Ozs7OztrQ0FHeEosOERBQUNHO3dCQUFHM0IsV0FBVTtrQ0FDWEYsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZOEIsTUFBTSxDQUFDVCxHQUFHLENBQUMsQ0FBQ1UsT0FBT0Msa0JBQzlCLDhEQUFDQzswQ0FBWUY7K0JBQUpDOzs7O3FDQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWixDQUFDO0tBbER1QmpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUNhcmQudHN4P2Y5ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBFeHBlcmllbmNlcyB9IGZyb20gJ0AvdHlwaW5ncyc7XHJcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJ0Avc2FuaXR5JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7ZXhwZXJpZW5jZTpFeHBlcmllbmNlc31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGVyaWVuY2VDYXJkKHtleHBlcmllbmNlfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIHNwYWNlLXktNCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciB3LVsyNTBweF0gbWQ6dy1bMzUwcHhdIHhsOnctWzUwMHB4XSBzbmFwLWNlbnRlciBiZy1bIzI5MjkyOV0gaG92ZXI6b3BhY2l0eS0xMDAgb3BhY2l0eS00MCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIG92ZXJmbG93LWhpZGRlbiBweS01XCI+XHJcbiAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgc3JjPXt1cmxGb3IoZXhwZXJpZW5jZT8uY29tcGFueUltYWdlKS51cmwoKX1cclxuICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICB4OiAtMjAwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgZHVyYXRpb246IDEuMixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgcm91bmRlZC1mdWxsIHhsOnctWzEwMHB4XSB4bDpoLVsxMDBweF0gb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTAgbWQ6cHgtMTBcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1saWdodFwiPntleHBlcmllbmNlPy5qb2JUaXRsZX08L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG15LTJcIj57ZXhwZXJpZW5jZT8uY29tcGFueX08L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICB7ZXhwZXJpZW5jZS50ZWNobm9sb2d5Lm1hcCh0ZWNoPT57XHJcblxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL25leHRiZy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgYWx0PVwiY3NzaWNvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvY3NzbG9nby5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgYWx0PVwiY3NzaWNvblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBweS0zIHRleHQtZ3JheS0zMDAgdGV4dC14c1wiPlxyXG4gICAgICAgICAge25ldyBEYXRlKGV4cGVyaWVuY2U/LmRhdGVTdGFydGVkKS50b0RhdGVTdHJpbmcoKX0gLSB7ZXhwZXJpZW5jZT8uaXNDdXJyZW50bHlXb3JraW5nSGVyZSA/IFwiUHJlc2VudFwiIDogbmV3IERhdGUoZXhwZXJpZW5jZT8uZGF0ZUVuZGVkKS50b0RhdGVTdHJpbmcoKX1cclxuICAgICAgICAgIFN0YXJ0ZWQgd29yayAtIEVuZGVkIHdvcmtcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBzcGFjZS15LTIgdGV4dC1zbSBtbC00XCI+XHJcbiAgICAgICAgICB7ZXhwZXJpZW5jZT8ucG9pbnRzLm1hcCgocG9pbnQsIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aX0+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXJsRm9yIiwiRXhwZXJpZW5jZUNhcmQiLCJleHBlcmllbmNlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImNvbXBhbnlJbWFnZSIsInVybCIsImluaXRpYWwiLCJ4Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJkaXYiLCJoNCIsImpvYlRpdGxlIiwicCIsImNvbXBhbnkiLCJ0ZWNobm9sb2d5IiwibWFwIiwidGVjaCIsImFsdCIsIkRhdGUiLCJkYXRlU3RhcnRlZCIsInRvRGF0ZVN0cmluZyIsImlzQ3VycmVudGx5V29ya2luZ0hlcmUiLCJkYXRlRW5kZWQiLCJ1bCIsInBvaW50cyIsInBvaW50IiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});