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
exports.id = "pages/api/getSocials";
exports.ids = ["pages/api/getSocials"];
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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"dataset\": () => (/* binding */ dataset),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst projectId = \"zr0owxdx\";\nconst dataset = \"production\";\nconst apiVersion = \"2022-12-10\";\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    projectId,\n    dataset,\n    apiVersion,\n    useCdn: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ2xDLE1BQU1DLFlBQVlDLFVBQXlDLENBQUM7QUFDNUQsTUFBTUcsVUFBVUgsWUFBc0MsQ0FBQztBQUM5RCxNQUFNSyxhQUFhTCxZQUEwQztBQUV0RCxNQUFNTyxTQUFTVCx5REFBWUEsQ0FBQztJQUMvQkM7SUFDQUk7SUFDQUU7SUFDQUcsUUFBTyxLQUFLO0FBQ2hCLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWFqZS8uL2xpYi9zYW5pdHkuY2xpZW50LnRzPzg5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xyXG5leHBvcnQgY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQ7XHJcbmV4cG9ydCBjb25zdCBkYXRhc2V0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQ7XHJcbmNvbnN0IGFwaVZlcnNpb24gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfQVBJX1ZFUlNJT047XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICAgIHByb2plY3RJZCxcclxuICAgIGRhdGFzZXQsXHJcbiAgICBhcGlWZXJzaW9uLFxyXG4gICAgdXNlQ2RuOmZhbHNlLFxyXG59KSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJkYXRhc2V0IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJhcGlWZXJzaW9uIiwiTkVYVF9QVUJMSUNfU0FOSVRZX0FQSV9WRVJTSU9OIiwiY2xpZW50IiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.client.ts\n");

/***/ }),

/***/ "(api)/./pages/api/getSocials.ts":
/*!*********************************!*\
  !*** ./pages/api/getSocials.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/sanity.client */ \"(api)/./lib/sanity.client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// import { sanityClient } from \"@/sanity\";\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"social\"]`;\nasync function handler(req, res) {\n    const socials = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(query);\n    res.status(200).json({\n        socials\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0U29jaWFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0M7QUFDaEMsMkNBQTJDO0FBQ0U7QUFJN0MsTUFBTUUsUUFBUUYsNkNBQUksQ0FBQztvQkFDQyxDQUFDO0FBTU4sZUFBZUcsUUFBUUMsR0FBa0IsRUFBQ0MsR0FBbUIsRUFBQztJQUN6RSxNQUFNQyxVQUFtQixNQUFNTCw0REFBWSxDQUFDQztJQUM1Q0csSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDSDtJQUFPO0FBQ2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWFqZS8uL3BhZ2VzL2FwaS9nZXRTb2NpYWxzLnRzP2Y2Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtncm9xfSBmcm9tIFwibmV4dC1zYW5pdHlcIlxyXG4vLyBpbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tIFwiQC9zYW5pdHlcIjtcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIkAvbGliL3Nhbml0eS5jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IFNvY2lhbCB9IGZyb20gXCJAL3R5cGluZ3NcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcclxuKltfdHlwZSA9PSBcInNvY2lhbFwiXWBcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICAgIHNvY2lhbHM6U29jaWFsW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6TmV4dEFwaVJlcXVlc3QscmVzOk5leHRBcGlSZXNwb25zZSl7XHJcbiAgICBjb25zdCBzb2NpYWxzOlNvY2lhbFtdID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3NvY2lhbHN9KVxyXG59Il0sIm5hbWVzIjpbImdyb3EiLCJjbGllbnQiLCJxdWVyeSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NpYWxzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getSocials.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getSocials.ts"));
module.exports = __webpack_exports__;

})();