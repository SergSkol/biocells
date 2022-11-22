"use strict";
(self["webpackChunkbiocells"] = self["webpackChunkbiocells"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  max-width: 512px;\r\n  margin: 0 auto;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background-color: lightgray;\r\n}\r\n\r\n.drop-target-row {\r\n  display: flex;\r\n}\r\n\r\n.drop-target {\r\n  width: 40px;\r\n  height: 40px;\r\n  padding: 0;\r\n  border: 1px solid #aaa;\r\n  background-color: white;\r\n}\r\n\r\n.container-main {\r\n  display: flex;\r\n}\r\n\r\n.container-drag {\r\n  width: 42px;\r\n}\r\n\r\n.drag {\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 4px;\r\n  border: 1px solid #aaa;\r\n  animation-name: appear;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes appear {\r\n  0% { opacity: 0.5; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n.blue {\r\n  background-color: blue;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,4DAA4D;EAC5D,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,KAAK,YAAY,EAAE;EACnB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["body {\r\n  max-width: 512px;\r\n  margin: 0 auto;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background-color: lightgray;\r\n}\r\n\r\n.drop-target-row {\r\n  display: flex;\r\n}\r\n\r\n.drop-target {\r\n  width: 40px;\r\n  height: 40px;\r\n  padding: 0;\r\n  border: 1px solid #aaa;\r\n  background-color: white;\r\n}\r\n\r\n.container-main {\r\n  display: flex;\r\n}\r\n\r\n.container-drag {\r\n  width: 42px;\r\n}\r\n\r\n.drag {\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 4px;\r\n  border: 1px solid #aaa;\r\n  animation-name: appear;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes appear {\r\n  0% { opacity: 0.5; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n.blue {\r\n  background-color: blue;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_playground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playground.js */ "./src/modules/playground.js");
/* harmony import */ var _modules_dragItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dragItems.js */ "./src/modules/dragItems.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/populate.js */ "./src/modules/populate.js");
/* harmony import */ var _modules_logic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/logic.js */ "./src/modules/logic.js");







const playgroundSize = 8;
const dragItemsNumber = 8;
const storage = new _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const playground = new _modules_playground_js__WEBPACK_IMPORTED_MODULE_1__["default"](playgroundSize, playgroundSize);

const data = storage.load();
playground.load(data);
playground.showGrid();

const dragItems = new _modules_dragItems_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

(0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(playground, dragItems);

const count1 = playground.getCount(1);
for (let i = 0; i < dragItemsNumber - count1; i += 1) {
  const id = dragItems.add(-1, -1, 1);
  dragItems.show(id, -1, -1);
}

const count2 = playground.getCount(2);
for (let i = 0; i < dragItemsNumber - count2; i += 1) {
  const id = dragItems.add(-1, -1, 2);
  dragItems.show(id, -1, -1);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const id = ev.dataTransfer.getData('text');
  const dropped = document.getElementById(id);

  const toXY = ev.target.id.split(' ');
  if (toXY[0] === 'cell') {
    const item = dragItems.getItemById(id);
    const { x } = item;
    const { y } = item;
    // console.log(item,x,y)
    if (x > 0 && y > 0) {
      playground.set(x, y, 0);
    }
    dragItems.move(dropped, ev.target);
    playground.set(parseInt(toXY[1], 10), parseInt(toXY[2], 10), item.value);
  }

  storage.save(playground.arr);
}

const run = () => {
  playground.arr = (0,_modules_logic_js__WEBPACK_IMPORTED_MODULE_5__["default"])(playground).slice();
  storage.save(playground.arr);

  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(playground, dragItems);

  // Need to remove this line, and fix reflection
  // window.location.reload();
};

const drags = document.querySelectorAll('.drag');
drags.forEach((item) => {
  item.addEventListener('dragstart', (event) => {
    drag(event);
  });
});

const dropTargets = document.querySelectorAll('.drop-target');
dropTargets.forEach((item) => {
  item.addEventListener('drop', (event) => {
    drop(event);
  });

  item.addEventListener('dragover', (event) => {
    allowDrop(event);
  });
});

const stepBtn = document.querySelector('.step-btn');
stepBtn.addEventListener('click', () => {
  run();
});

let refreshIntervalId;

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
  refreshIntervalId = setInterval(run, 500);
});

const stopBtn = document.querySelector('.stop-btn');
stopBtn.addEventListener('click', () => {
  clearInterval(refreshIntervalId);
});

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
  storage.remove();
  window.location.reload();
});


/***/ }),

/***/ "./src/modules/dragItems.js":
/*!**********************************!*\
  !*** ./src/modules/dragItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragItems)
/* harmony export */ });
class DragItems {
  constructor() {
    this.items = [];
  }

  getItemById = (id) => {
    const item = this.items.find((e) => e.id === id);
    return item;
  }

  show = (id, x, y) => {
    let team = '';
    const dragItem = document.createElement('div');
    dragItem.classList.add('drag');
    const item = this.getItemById(id);
    if (item.value === 1) {
      team = '.team1';
      dragItem.classList.add('red');
    } else if (item.value === 2) {
      team = '.team2';
      dragItem.classList.add('blue');
    }

    dragItem.setAttribute('draggable', true);
    dragItem.id = id;
    if (x === -1 && y === -1) {
      const dragContainer = document.querySelector(team);
      dragContainer.appendChild(dragItem);
    } else {
      const dragContainer = document.getElementById(`cell ${x} ${y}`);
      dragContainer.appendChild(dragItem);
    }
  }

  hide = (x, y) => {
    let team = '';
    const item = this.items.find((e) => e.x === x && e.y === y);
    if (item) {
      if (item.value === 1) {
        team = '.team1';
      } else if (item.value === 2) {
        team = '.team2';
      }
      const dragItem = document.getElementById(item.id);
      if (x === -1 && y === -1) {
        const dragContainer = document.querySelector(team);
        dragContainer.removeChild(dragItem);
      } else {
        const dragContainer = document.getElementById(`cell ${x} ${y}`);
        dragContainer.removeChild(dragItem);
      }

      this.items = this.items.filter((e) => e.id !== item.id);
    }
  }

  move = (dropped, target) => {
    const { id } = dropped;
    const item = this.getItemById(id);
    const targetXY = target.id.split(' ');

    target.appendChild(dropped);
    item.x = parseInt(targetXY[1], 10);
    item.y = parseInt(targetXY[2], 10);
  }

  add = (x, y, value) => {
    const id = `drag ${Date.now() + this.items.length}`;

    const item = {
      id,
      x,
      y,
      value,
    };
    this.items.push(item);

    return id;
  };
}


/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calcPlayground = (playGround) => {
  const { sizeX } = playGround;
  const { sizeY } = playGround;
  const { arr } = playGround;

  const usingBounds = (team, arr, j, i) => {
    if (j < 0 || i < 0) {
      return 0;
    } if (j >= sizeX) {
      return 0;
    } if (i >= sizeY) {
      return 0;
    } if (arr[j][i] > 0 && arr[j][i] === team) {
      return 1;
    }
    return 0;
  };

  const getNeib = (team) => {
    const arrNeib = Array.from(Array(sizeX), () => new Array(sizeY));

    for (let j = 0; j < sizeX; j += 1) {
      for (let i = 0; i < sizeY; i += 1) {
        let sum = 0;
        sum += usingBounds(team, arr, j - 1, i);
        sum += usingBounds(team, arr, j - 1, i - 1);
        sum += usingBounds(team, arr, j, i - 1);
        sum += usingBounds(team, arr, j + 1, i);
        sum += usingBounds(team, arr, j + 1, i + 1);
        sum += usingBounds(team, arr, j, i + 1);
        sum += usingBounds(team, arr, j - 1, i + 1);
        sum += usingBounds(team, arr, j + 1, i - 1);

        arrNeib[j][i] = sum;
      }
    }
    return arrNeib;
  };

  const getNewCell = (team, cell, neib) => {
    if ((neib < 2) || (neib > 3)) {
      return 0;
    }

    if (cell === 0 || cell === null || cell === undefined) {
      if (neib === 3) {
        return team;
      }
      return 0;
    }
    return team;
  };

  const arrNeib1 = getNeib(1);
  const arrNeib2 = getNeib(2);

  for (let j = 0; j < sizeX; j += 1) {
    for (let i = 0; i < sizeY; i += 1) {
      const cell = arr[j][i];
      const neib1 = arrNeib1[j][i];
      const neib2 = arrNeib2[j][i];

      const newCell1 = getNewCell(1, cell, neib1);
      const newCell2 = getNewCell(2, cell, neib2);

      let newCell = 0;
      if (newCell1 === 0) {
        newCell = newCell2;
      } else {
        newCell = newCell1;
      }

      if (newCell1 !== 0 && newCell2 !== 0) {
        newCell = 0;
      }

      arr[j][i] = newCell;
    }
  }

  return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcPlayground);

/***/ }),

/***/ "./src/modules/playground.js":
/*!***********************************!*\
  !*** ./src/modules/playground.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground)
/* harmony export */ });
class Playground {
  constructor(sizeX, sizeY) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.arr = Array.from(Array(sizeX), () => new Array(sizeY));
  }

  showGrid = () => {
    const dropContainer = document.querySelector('.container-grid');
    for (let j = 0; j < this.sizeX; j += 1) {
      const row = document.createElement('div');
      row.classList.add('drop-target-row');
      dropContainer.appendChild(row);
      for (let i = 0; i < this.sizeY; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('drop-target');
        cell.id = `cell ${j} ${i}`;
        row.appendChild(cell);
      }
    }
  };

  load = (data) => {
    if (data) {
      for (let j = 0; j < this.sizeX; j += 1) {
        for (let i = 0; i < this.sizeY; i += 1) {
          this.arr[j][i] = data[j][i];
        }
      }
    }
  };

  set = (j, i, value) => {
    this.arr[j][i] = value;
  }

  getCount = (value) => {
    let count = 0;
    for (let j = 0; j < this.sizeX; j += 1) {
      for (let i = 0; i < this.sizeY; i += 1) {
        if (this.arr[j][i] === value) {
          count += 1;
        }
      }
    }
    return count;
  }
}


/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const populate = (playground, dragItems) => {
  for (let j = 0; j < playground.sizeX; j += 1) {
    for (let i = 0; i < playground.sizeY; i += 1) {
      const value = playground.arr[j][i];
      const item = dragItems.items.find((e) => e.x === j && e.y === i);
      if (value > 0) {
        if (!item) {
          const id = dragItems.add(j, i, value);
          dragItems.show(id, j, i);
        }
      } else if (item) {
        dragItems.hide(j, i);
      }
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
  constructor() {
    this.storageKey = 'biocells';
  }

  save = (data) => {
    if (typeof data !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  };

  load = () => {
    const json = localStorage.getItem(this.storageKey);
    if (typeof json === 'undefined') {
      return null;
    }
    const data = JSON.parse(json);
    return data;
  };

  remove = () => {
    localStorage.removeItem(this.storageKey);
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9tb2R1bGVzL2RyYWdJdGVtcy5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vc3JjL21vZHVsZXMvcGxheWdyb3VuZC5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9tb2R1bGVzL3BvcHVsYXRlLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiA1MTJweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcC10YXJnZXQtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wLXRhcmdldCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWRyYWcge1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxufVxcclxcblxcclxcbi5kcmFnIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxyXFxuICAwJSB7IG9wYWNpdHk6IDAuNTsgfVxcclxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmJsdWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDREQUE0RDtFQUM1RCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxLQUFLLFlBQVksRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG1heC13aWR0aDogNTEycHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3AtdGFyZ2V0LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcC10YXJnZXQge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1kcmFnIHtcXHJcXG4gIHdpZHRoOiA0MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYXBwZWFyO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwLjU7IH1cXHJcXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblxcclxcbi5ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5yZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQbGF5Z3JvdW5kIGZyb20gJy4vbW9kdWxlcy9wbGF5Z3JvdW5kLmpzJztcbmltcG9ydCBEcmFnSXRlbXMgZnJvbSAnLi9tb2R1bGVzL2RyYWdJdGVtcy5qcyc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgcG9wdWxhdGUgZnJvbSAnLi9tb2R1bGVzL3BvcHVsYXRlLmpzJztcbmltcG9ydCBjYWxjUGxheWdyb3VuZCBmcm9tICcuL21vZHVsZXMvbG9naWMuanMnO1xuXG5jb25zdCBwbGF5Z3JvdW5kU2l6ZSA9IDg7XG5jb25zdCBkcmFnSXRlbXNOdW1iZXIgPSA4O1xuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5jb25zdCBwbGF5Z3JvdW5kID0gbmV3IFBsYXlncm91bmQocGxheWdyb3VuZFNpemUsIHBsYXlncm91bmRTaXplKTtcblxuY29uc3QgZGF0YSA9IHN0b3JhZ2UubG9hZCgpO1xucGxheWdyb3VuZC5sb2FkKGRhdGEpO1xucGxheWdyb3VuZC5zaG93R3JpZCgpO1xuXG5jb25zdCBkcmFnSXRlbXMgPSBuZXcgRHJhZ0l0ZW1zKCk7XG5cbnBvcHVsYXRlKHBsYXlncm91bmQsIGRyYWdJdGVtcyk7XG5cbmNvbnN0IGNvdW50MSA9IHBsYXlncm91bmQuZ2V0Q291bnQoMSk7XG5mb3IgKGxldCBpID0gMDsgaSA8IGRyYWdJdGVtc051bWJlciAtIGNvdW50MTsgaSArPSAxKSB7XG4gIGNvbnN0IGlkID0gZHJhZ0l0ZW1zLmFkZCgtMSwgLTEsIDEpO1xuICBkcmFnSXRlbXMuc2hvdyhpZCwgLTEsIC0xKTtcbn1cblxuY29uc3QgY291bnQyID0gcGxheWdyb3VuZC5nZXRDb3VudCgyKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ0l0ZW1zTnVtYmVyIC0gY291bnQyOyBpICs9IDEpIHtcbiAgY29uc3QgaWQgPSBkcmFnSXRlbXMuYWRkKC0xLCAtMSwgMik7XG4gIGRyYWdJdGVtcy5zaG93KGlkLCAtMSwgLTEpO1xufVxuXG5mdW5jdGlvbiBhbGxvd0Ryb3AoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJhZyhldikge1xuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGV2LnRhcmdldC5pZCk7XG59XG5cbmZ1bmN0aW9uIGRyb3AoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaWQgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICBjb25zdCBkcm9wcGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIGNvbnN0IHRvWFkgPSBldi50YXJnZXQuaWQuc3BsaXQoJyAnKTtcbiAgaWYgKHRvWFlbMF0gPT09ICdjZWxsJykge1xuICAgIGNvbnN0IGl0ZW0gPSBkcmFnSXRlbXMuZ2V0SXRlbUJ5SWQoaWQpO1xuICAgIGNvbnN0IHsgeCB9ID0gaXRlbTtcbiAgICBjb25zdCB7IHkgfSA9IGl0ZW07XG4gICAgLy8gY29uc29sZS5sb2coaXRlbSx4LHkpXG4gICAgaWYgKHggPiAwICYmIHkgPiAwKSB7XG4gICAgICBwbGF5Z3JvdW5kLnNldCh4LCB5LCAwKTtcbiAgICB9XG4gICAgZHJhZ0l0ZW1zLm1vdmUoZHJvcHBlZCwgZXYudGFyZ2V0KTtcbiAgICBwbGF5Z3JvdW5kLnNldChwYXJzZUludCh0b1hZWzFdLCAxMCksIHBhcnNlSW50KHRvWFlbMl0sIDEwKSwgaXRlbS52YWx1ZSk7XG4gIH1cblxuICBzdG9yYWdlLnNhdmUocGxheWdyb3VuZC5hcnIpO1xufVxuXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gIHBsYXlncm91bmQuYXJyID0gY2FsY1BsYXlncm91bmQocGxheWdyb3VuZCkuc2xpY2UoKTtcbiAgc3RvcmFnZS5zYXZlKHBsYXlncm91bmQuYXJyKTtcblxuICBwb3B1bGF0ZShwbGF5Z3JvdW5kLCBkcmFnSXRlbXMpO1xuXG4gIC8vIE5lZWQgdG8gcmVtb3ZlIHRoaXMgbGluZSwgYW5kIGZpeCByZWZsZWN0aW9uXG4gIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmNvbnN0IGRyYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWcnKTtcbmRyYWdzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICBkcmFnKGV2ZW50KTtcbiAgfSk7XG59KTtcblxuY29uc3QgZHJvcFRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcC10YXJnZXQnKTtcbmRyb3BUYXJnZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG4gICAgZHJvcChldmVudCk7XG4gIH0pO1xuXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICBhbGxvd0Ryb3AoZXZlbnQpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBzdGVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0ZXAtYnRuJyk7XG5zdGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBydW4oKTtcbn0pO1xuXG5sZXQgcmVmcmVzaEludGVydmFsSWQ7XG5cbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlZnJlc2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwocnVuLCA1MDApO1xufSk7XG5cbmNvbnN0IHN0b3BCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcC1idG4nKTtcbnN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsZWFySW50ZXJ2YWwocmVmcmVzaEludGVydmFsSWQpO1xufSk7XG5cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHN0b3JhZ2UucmVtb3ZlKCk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0l0ZW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG5cbiAgZ2V0SXRlbUJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKChlKSA9PiBlLmlkID09PSBpZCk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzaG93ID0gKGlkLCB4LCB5KSA9PiB7XG4gICAgbGV0IHRlYW0gPSAnJztcbiAgICBjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyYWdJdGVtLmNsYXNzTGlzdC5hZGQoJ2RyYWcnKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtQnlJZChpZCk7XG4gICAgaWYgKGl0ZW0udmFsdWUgPT09IDEpIHtcbiAgICAgIHRlYW0gPSAnLnRlYW0xJztcbiAgICAgIGRyYWdJdGVtLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gMikge1xuICAgICAgdGVhbSA9ICcudGVhbTInO1xuICAgICAgZHJhZ0l0ZW0uY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xuICAgIH1cblxuICAgIGRyYWdJdGVtLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgZHJhZ0l0ZW0uaWQgPSBpZDtcbiAgICBpZiAoeCA9PT0gLTEgJiYgeSA9PT0gLTEpIHtcbiAgICAgIGNvbnN0IGRyYWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRlYW0pO1xuICAgICAgZHJhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRyYWdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2VsbCAke3h9ICR7eX1gKTtcbiAgICAgIGRyYWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUgPSAoeCwgeSkgPT4ge1xuICAgIGxldCB0ZWFtID0gJyc7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMuZmluZCgoZSkgPT4gZS54ID09PSB4ICYmIGUueSA9PT0geSk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnZhbHVlID09PSAxKSB7XG4gICAgICAgIHRlYW0gPSAnLnRlYW0xJztcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gMikge1xuICAgICAgICB0ZWFtID0gJy50ZWFtMic7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpO1xuICAgICAgaWYgKHggPT09IC0xICYmIHkgPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRyYWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRlYW0pO1xuICAgICAgICBkcmFnQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRyYWdJdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRyYWdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2VsbCAke3h9ICR7eX1gKTtcbiAgICAgICAgZHJhZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gaXRlbS5pZCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZSA9IChkcm9wcGVkLCB0YXJnZXQpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBkcm9wcGVkO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUlkKGlkKTtcbiAgICBjb25zdCB0YXJnZXRYWSA9IHRhcmdldC5pZC5zcGxpdCgnICcpO1xuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGRyb3BwZWQpO1xuICAgIGl0ZW0ueCA9IHBhcnNlSW50KHRhcmdldFhZWzFdLCAxMCk7XG4gICAgaXRlbS55ID0gcGFyc2VJbnQodGFyZ2V0WFlbMl0sIDEwKTtcbiAgfVxuXG4gIGFkZCA9ICh4LCB5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gYGRyYWcgJHtEYXRlLm5vdygpICsgdGhpcy5pdGVtcy5sZW5ndGh9YDtcblxuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICBpZCxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgdmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICByZXR1cm4gaWQ7XG4gIH07XG59XG4iLCJjb25zdCBjYWxjUGxheWdyb3VuZCA9IChwbGF5R3JvdW5kKSA9PiB7XG4gIGNvbnN0IHsgc2l6ZVggfSA9IHBsYXlHcm91bmQ7XG4gIGNvbnN0IHsgc2l6ZVkgfSA9IHBsYXlHcm91bmQ7XG4gIGNvbnN0IHsgYXJyIH0gPSBwbGF5R3JvdW5kO1xuXG4gIGNvbnN0IHVzaW5nQm91bmRzID0gKHRlYW0sIGFyciwgaiwgaSkgPT4ge1xuICAgIGlmIChqIDwgMCB8fCBpIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAoaiA+PSBzaXplWCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAoaSA+PSBzaXplWSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAoYXJyW2pdW2ldID4gMCAmJiBhcnJbal1baV0gPT09IHRlYW0pIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBnZXROZWliID0gKHRlYW0pID0+IHtcbiAgICBjb25zdCBhcnJOZWliID0gQXJyYXkuZnJvbShBcnJheShzaXplWCksICgpID0+IG5ldyBBcnJheShzaXplWSkpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplWDsgaiArPSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVZOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIHN1bSArPSB1c2luZ0JvdW5kcyh0ZWFtLCBhcnIsIGogLSAxLCBpKTtcbiAgICAgICAgc3VtICs9IHVzaW5nQm91bmRzKHRlYW0sIGFyciwgaiAtIDEsIGkgLSAxKTtcbiAgICAgICAgc3VtICs9IHVzaW5nQm91bmRzKHRlYW0sIGFyciwgaiwgaSAtIDEpO1xuICAgICAgICBzdW0gKz0gdXNpbmdCb3VuZHModGVhbSwgYXJyLCBqICsgMSwgaSk7XG4gICAgICAgIHN1bSArPSB1c2luZ0JvdW5kcyh0ZWFtLCBhcnIsIGogKyAxLCBpICsgMSk7XG4gICAgICAgIHN1bSArPSB1c2luZ0JvdW5kcyh0ZWFtLCBhcnIsIGosIGkgKyAxKTtcbiAgICAgICAgc3VtICs9IHVzaW5nQm91bmRzKHRlYW0sIGFyciwgaiAtIDEsIGkgKyAxKTtcbiAgICAgICAgc3VtICs9IHVzaW5nQm91bmRzKHRlYW0sIGFyciwgaiArIDEsIGkgLSAxKTtcblxuICAgICAgICBhcnJOZWliW2pdW2ldID0gc3VtO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyTmVpYjtcbiAgfTtcblxuICBjb25zdCBnZXROZXdDZWxsID0gKHRlYW0sIGNlbGwsIG5laWIpID0+IHtcbiAgICBpZiAoKG5laWIgPCAyKSB8fCAobmVpYiA+IDMpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoY2VsbCA9PT0gMCB8fCBjZWxsID09PSBudWxsIHx8IGNlbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG5laWIgPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIHRlYW07XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRlYW07XG4gIH07XG5cbiAgY29uc3QgYXJyTmVpYjEgPSBnZXROZWliKDEpO1xuICBjb25zdCBhcnJOZWliMiA9IGdldE5laWIoMik7XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplWDsgaiArPSAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplWTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjZWxsID0gYXJyW2pdW2ldO1xuICAgICAgY29uc3QgbmVpYjEgPSBhcnJOZWliMVtqXVtpXTtcbiAgICAgIGNvbnN0IG5laWIyID0gYXJyTmVpYjJbal1baV07XG5cbiAgICAgIGNvbnN0IG5ld0NlbGwxID0gZ2V0TmV3Q2VsbCgxLCBjZWxsLCBuZWliMSk7XG4gICAgICBjb25zdCBuZXdDZWxsMiA9IGdldE5ld0NlbGwoMiwgY2VsbCwgbmVpYjIpO1xuXG4gICAgICBsZXQgbmV3Q2VsbCA9IDA7XG4gICAgICBpZiAobmV3Q2VsbDEgPT09IDApIHtcbiAgICAgICAgbmV3Q2VsbCA9IG5ld0NlbGwyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2VsbCA9IG5ld0NlbGwxO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3Q2VsbDEgIT09IDAgJiYgbmV3Q2VsbDIgIT09IDApIHtcbiAgICAgICAgbmV3Q2VsbCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGFycltqXVtpXSA9IG5ld0NlbGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGNQbGF5Z3JvdW5kOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlncm91bmQge1xuICBjb25zdHJ1Y3RvcihzaXplWCwgc2l6ZVkpIHtcbiAgICB0aGlzLnNpemVYID0gc2l6ZVg7XG4gICAgdGhpcy5zaXplWSA9IHNpemVZO1xuICAgIHRoaXMuYXJyID0gQXJyYXkuZnJvbShBcnJheShzaXplWCksICgpID0+IG5ldyBBcnJheShzaXplWSkpO1xuICB9XG5cbiAgc2hvd0dyaWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZHJvcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZ3JpZCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplWDsgaiArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdkcm9wLXRhcmdldC1yb3cnKTtcbiAgICAgIGRyb3BDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplWTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkcm9wLXRhcmdldCcpO1xuICAgICAgICBjZWxsLmlkID0gYGNlbGwgJHtqfSAke2l9YDtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBsb2FkID0gKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemVYOyBqICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemVZOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmFycltqXVtpXSA9IGRhdGFbal1baV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2V0ID0gKGosIGksIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5hcnJbal1baV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENvdW50ID0gKHZhbHVlKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZVg7IGogKz0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemVZOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJyW2pdW2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG59XG4iLCJjb25zdCBwb3B1bGF0ZSA9IChwbGF5Z3JvdW5kLCBkcmFnSXRlbXMpID0+IHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5Z3JvdW5kLnNpemVYOyBqICs9IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXlncm91bmQuc2l6ZVk7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwbGF5Z3JvdW5kLmFycltqXVtpXTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkcmFnSXRlbXMuaXRlbXMuZmluZCgoZSkgPT4gZS54ID09PSBqICYmIGUueSA9PT0gaSk7XG4gICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgIGNvbnN0IGlkID0gZHJhZ0l0ZW1zLmFkZChqLCBpLCB2YWx1ZSk7XG4gICAgICAgICAgZHJhZ0l0ZW1zLnNob3coaWQsIGosIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0pIHtcbiAgICAgICAgZHJhZ0l0ZW1zLmhpZGUoaiwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gJ2Jpb2NlbGxzJztcbiAgfVxuXG4gIHNhdmUgPSAoZGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgfTtcblxuICBsb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgIGlmICh0eXBlb2YganNvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZW1vdmUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==