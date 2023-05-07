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
exports.id = "pages/api/getProjects";
exports.ids = ["pages/api/getProjects"];
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

/***/ "(api)/./pages/api/getProjects.ts":
/*!**********************************!*\
  !*** ./pages/api/getProjects.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/sanity.client */ \"(api)/./lib/sanity.client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// import { sanityClient } from \"@/sanity\";\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"project\"]{\r\n    ...,technologies[]->\r\n}`;\nasync function handler(req, res) {\n    const projects = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(query);\n    res.status(200).json({\n        projects\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UHJvamVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dDO0FBQ2hDLDJDQUEyQztBQUNFO0FBRzdDLE1BQU1FLFFBQVFGLDZDQUFJLENBQUM7OztDQUdsQixDQUFDO0FBSWEsZUFBZUcsUUFBUUMsR0FBa0IsRUFBRUMsR0FBbUIsRUFBQztJQUMxRSxNQUFNQyxXQUFxQixNQUFNTCw0REFBWSxDQUFDQztJQUM5Q0csSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDSDtJQUFRO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWFqZS8uL3BhZ2VzL2FwaS9nZXRQcm9qZWN0cy50cz9lOGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtncm9xfSBmcm9tIFwibmV4dC1zYW5pdHlcIlxyXG4vLyBpbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tIFwiQC9zYW5pdHlcIjtcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIkAvbGliL3Nhbml0eS5jbGllbnRcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCJAL3R5cGluZ3NcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcclxuKltfdHlwZSA9PSBcInByb2plY3RcIl17XHJcbiAgICAuLi4sdGVjaG5vbG9naWVzW10tPlxyXG59YDtcclxudHlwZSBEYXRhID0ge1xyXG4gICAgcHJvamVjdHM6UHJvamVjdFtdXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2Upe1xyXG4gICAgY29uc3QgcHJvamVjdHM6UHJvamVjdFtdID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Byb2plY3RzfSlcclxufSJdLCJuYW1lcyI6WyJncm9xIiwiY2xpZW50IiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvamVjdHMiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getProjects.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getProjects.ts"));
module.exports = __webpack_exports__;

})();