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
exports.id = "pages/api/getSkills";
exports.ids = ["pages/api/getSkills"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getSkills.ts":
/*!********************************!*\
  !*** ./pages/api/getSkills.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/sanity */ \"(api)/./sanity.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"skills\"]`;\nasync function handler(req, res) {\n    const skills = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        skills\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2tpbGxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNnQztBQUNRO0FBR3hDLE1BQU1FLFFBQVFGLDZDQUFJLENBQUM7b0JBQ0MsQ0FBQztBQUlOLGVBQWVHLFFBQVFDLEdBQWtCLEVBQUVDLEdBQW1CLEVBQUM7SUFDMUUsTUFBTUMsU0FBa0IsTUFBTUwsdURBQWtCLENBQUNDO0lBQ2pERyxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNIO0lBQU07QUFDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYWplLy4vcGFnZXMvYXBpL2dldFNraWxscy50cz9hNmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtncm9xfSBmcm9tIFwibmV4dC1zYW5pdHlcIlxyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tIFwiQC9zYW5pdHlcIjtcclxuaW1wb3J0IHsgU2tpbGxzIH0gZnJvbSBcIkAvdHlwaW5nc1wiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYFxyXG4qW190eXBlID09IFwic2tpbGxzXCJdYDtcclxudHlwZSBEYXRhID0ge1xyXG4gICAgc2tpbGxzOlNraWxsc1tdXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2Upe1xyXG4gICAgY29uc3Qgc2tpbGxzOlNraWxsc1tdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3NraWxsc30pXHJcbn0iXSwibmFtZXMiOlsiZ3JvcSIsInNhbml0eUNsaWVudCIsInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNraWxscyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSkills.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst config = {\n    dataset: \"production\",\n    projectId: \"zr0owxdx\",\n    apiVersion: \"2023-02-28\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1M7QUFFN0MsTUFBTUUsU0FBUztJQUNsQkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFlBQVc7SUFDWEMsUUFBT0Msa0JBQXlCO0FBQ3BDLEVBQUM7QUFDTSxNQUFNQyxlQUFlUix5REFBWUEsQ0FBQ0UsUUFBTztBQUN6QyxNQUFNTyxTQUFTLENBQUNDLFNBQ25CVCx3REFBb0JBLENBQUNDLFFBQVFTLEtBQUssQ0FBQ0QsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYWplLy4vc2FuaXR5LnRzPzEwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XHJcbmltcG9ydCBjcmVhdEltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gICAgcHJvamVjdElkOiBcInpyMG93eGR4XCIsXHJcbiAgICBhcGlWZXJzaW9uOlwiMjAyMy0wMi0yOFwiLFxyXG4gICAgdXNlQ2RuOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG59XHJcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKVxyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZTphbnkpPT5cclxuICAgIGNyZWF0SW1hZ2VVcmxCdWlsZGVyKGNvbmZpZykuaW1hZ2Uoc291cmNlKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0SW1hZ2VVcmxCdWlsZGVyIiwiY29uZmlnIiwiZGF0YXNldCIsInByb2plY3RJZCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJwcm9jZXNzIiwic2FuaXR5Q2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSkills.ts"));
module.exports = __webpack_exports__;

})();