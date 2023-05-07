"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getExperience";
exports.ids = ["pages/api/getExperience"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./lib/sanity.client.ts":
/*!******************************!*\
  !*** ./lib/sanity.client.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"dataset\": () => (/* binding */ dataset),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst projectId = \"zr0owxdx\" || 0;\nconst dataset = \"production\";\nconst apiVersion = \"2022-12-10\" || 0;\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    projectId,\n    dataset,\n    apiVersion,\n    useCdn: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ2xDLE1BQU1DLFlBQVlDLFVBQXlDLElBQUksRUFBVztBQUMxRSxNQUFNRyxVQUFVSCxZQUFzQyxDQUFDO0FBQzlELE1BQU1LLGFBQWFMLFlBQTBDLElBQUk7QUFFMUQsTUFBTU8sU0FBU1QseURBQVlBLENBQUM7SUFDL0JDO0lBQ0FJO0lBQ0FFO0lBQ0FHLFFBQU8sS0FBSztBQUNoQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFhamUvLi9saWIvc2FuaXR5LmNsaWVudC50cz84OWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcclxuZXhwb3J0IGNvbnN0IHByb2plY3RJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIHx8ICd6cjBvd3hkeCc7XHJcbmV4cG9ydCBjb25zdCBkYXRhc2V0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQ7XHJcbmNvbnN0IGFwaVZlcnNpb24gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfQVBJX1ZFUlNJT04gfHwgJzIwMjMtMDUtMDcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQsXHJcbiAgICBkYXRhc2V0LFxyXG4gICAgYXBpVmVyc2lvbixcclxuICAgIHVzZUNkbjpmYWxzZSxcclxufSkiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiZGF0YXNldCIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwiYXBpVmVyc2lvbiIsIk5FWFRfUFVCTElDX1NBTklUWV9BUElfVkVSU0lPTiIsImNsaWVudCIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.client.ts\n");

/***/ }),

/***/ "(api)/./pages/api/getExperience.ts":
/*!************************************!*\
  !*** ./pages/api/getExperience.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/sanity.client */ \"(api)/./lib/sanity.client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"experience\"]{\r\n    ...,technology[]->\r\n}`;\nasync function handler(req, res) {\n    const experiences = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(query);\n    res.status(200).json({\n        experiences\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RXhwZXJpZW5jZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0M7QUFDYTtBQUs3QyxNQUFNRSxRQUFRRiw2Q0FBSSxDQUFDOzs7Q0FHbEIsQ0FBQztBQUlhLGVBQWVHLFFBQVFDLEdBQWtCLEVBQUVDLEdBQW1CLEVBQUM7SUFDMUUsTUFBTUMsY0FBNEIsTUFBTUwsNERBQVksQ0FBQ0M7SUFDckRHLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0g7SUFBVztBQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFhamUvLi9wYWdlcy9hcGkvZ2V0RXhwZXJpZW5jZS50cz8yZjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtncm9xfSBmcm9tIFwibmV4dC1zYW5pdHlcIlxyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiQC9saWIvc2FuaXR5LmNsaWVudFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgc2FuaXR5Q2xpZW50IH0gZnJvbSBcIkAvc2FuaXR5XCI7XHJcbmltcG9ydCB7IEV4cGVyaWVuY2VzIH0gZnJvbSBcIkAvdHlwaW5nc1wiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYFxyXG4qW190eXBlID09IFwiZXhwZXJpZW5jZVwiXXtcclxuICAgIC4uLix0ZWNobm9sb2d5W10tPlxyXG59YDtcclxudHlwZSBEYXRhID0ge1xyXG4gICAgZXhwZXJpZW5jZXM6RXhwZXJpZW5jZXNbXVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOk5leHRBcGlSZXF1ZXN0LCByZXM6TmV4dEFwaVJlc3BvbnNlKXtcclxuICAgIGNvbnN0IGV4cGVyaWVuY2VzOkV4cGVyaWVuY2VzW10gPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ZXhwZXJpZW5jZXN9KVxyXG59Il0sIm5hbWVzIjpbImdyb3EiLCJjbGllbnQiLCJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJleHBlcmllbmNlcyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getExperience.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getExperience.ts"));
module.exports = __webpack_exports__;

})();