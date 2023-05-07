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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"dataset\": () => (/* binding */ dataset),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst projectId = \"zr0owxdx\" || 0;\nconst dataset = \"production\";\nconst apiVersion = \"2022-12-10\";\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    projectId,\n    dataset,\n    apiVersion,\n    useCdn: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ2xDLE1BQU1DLFlBQVlDLFVBQXlDLElBQUksRUFBVztBQUMxRSxNQUFNRyxVQUFVSCxZQUFzQyxDQUFDO0FBQzlELE1BQU1LLGFBQWFMLFlBQTBDO0FBRXRELE1BQU1PLFNBQVNULHlEQUFZQSxDQUFDO0lBQy9CQztJQUNBSTtJQUNBRTtJQUNBRyxRQUFPLEtBQUs7QUFDaEIsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYWplLy4vbGliL3Nhbml0eS5jbGllbnQudHM/ODllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNsaWVudH0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCB8fCAnenIwb3d4ZHgnO1xyXG5leHBvcnQgY29uc3QgZGF0YXNldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUO1xyXG5jb25zdCBhcGlWZXJzaW9uID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0FQSV9WRVJTSU9OO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQsXHJcbiAgICBkYXRhc2V0LFxyXG4gICAgYXBpVmVyc2lvbixcclxuICAgIHVzZUNkbjpmYWxzZSxcclxufSkiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiZGF0YXNldCIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwiYXBpVmVyc2lvbiIsIk5FWFRfUFVCTElDX1NBTklUWV9BUElfVkVSU0lPTiIsImNsaWVudCIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.client.ts\n");

/***/ }),

/***/ "(api)/./pages/api/getSkills.ts":
/*!********************************!*\
  !*** ./pages/api/getSkills.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/sanity.client */ \"(api)/./lib/sanity.client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"skills\"]`;\nasync function handler(req, res) {\n    const skills = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(query);\n    res.status(200).json({\n        skills\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U2tpbGxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNnQztBQUNhO0FBSzdDLE1BQU1FLFFBQVFGLDZDQUFJLENBQUM7b0JBQ0MsQ0FBQztBQUlOLGVBQWVHLFFBQVFDLEdBQWtCLEVBQUVDLEdBQW1CLEVBQUM7SUFDMUUsTUFBTUMsU0FBa0IsTUFBTUwsNERBQVksQ0FBQ0M7SUFDM0NHLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0g7SUFBTTtBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFhamUvLi9wYWdlcy9hcGkvZ2V0U2tpbGxzLnRzP2E2Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCxOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQge2dyb3F9IGZyb20gXCJuZXh0LXNhbml0eVwiXHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCJAL2xpYi9zYW5pdHkuY2xpZW50XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tIFwiQC9zYW5pdHlcIjtcclxuaW1wb3J0IHsgU2tpbGxzIH0gZnJvbSBcIkAvdHlwaW5nc1wiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYFxyXG4qW190eXBlID09IFwic2tpbGxzXCJdYDtcclxudHlwZSBEYXRhID0ge1xyXG4gICAgc2tpbGxzOlNraWxsc1tdXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2Upe1xyXG4gICAgY29uc3Qgc2tpbGxzOlNraWxsc1tdID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3NraWxsc30pXHJcbn0iXSwibmFtZXMiOlsiZ3JvcSIsImNsaWVudCIsInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNraWxscyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSkills.ts\n");

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