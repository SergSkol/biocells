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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  max-width: 512px;\r\n  margin: 0 auto;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background-color: lightgray;\r\n}\r\n\r\n.drop-target-row {\r\n  display: flex;\r\n}\r\n\r\n.drop-target {\r\n  width: 40px;\r\n  height: 40px;\r\n  padding: 0;\r\n  border: 1px solid #aaa;\r\n  background-color: white;\r\n}\r\n\r\n.container-drag {\r\n  display: flex;\r\n}\r\n\r\n.drag {\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 4px;\r\n  border: 1px solid #aaa;\r\n  animation-name: appear;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes appear {\r\n  0% { opacity: 0.5; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n.blue {\r\n  background-color: blue;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,cAAc;EACd,4DAA4D;EAC5D,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,KAAK,YAAY,EAAE;EACnB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["body {\r\n  max-width: 512px;\r\n  margin: 0 auto;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background-color: lightgray;\r\n}\r\n\r\n.drop-target-row {\r\n  display: flex;\r\n}\r\n\r\n.drop-target {\r\n  width: 40px;\r\n  height: 40px;\r\n  padding: 0;\r\n  border: 1px solid #aaa;\r\n  background-color: white;\r\n}\r\n\r\n.container-drag {\r\n  display: flex;\r\n}\r\n\r\n.drag {\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 4px;\r\n  border: 1px solid #aaa;\r\n  animation-name: appear;\r\n  animation-duration: 1s;\r\n}\r\n\r\n@keyframes appear {\r\n  0% { opacity: 0.5; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n.blue {\r\n  background-color: blue;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n"],"sourceRoot":""}]);
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

const count = playground.getCount(1);
for (let i = 0; i < dragItemsNumber - count; i += 1) {
  const id = dragItems.add(-1, -1, 1);
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
    playground.set(parseInt(toXY[1], 10), parseInt(toXY[2], 10), 1);
  }

  storage.save(playground.arr);
}

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
  playground.arr = (0,_modules_logic_js__WEBPACK_IMPORTED_MODULE_5__["default"])(playground).slice();
  storage.save(playground.arr);

  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(playground, dragItems);

  // window.location.reload();
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
      dragItem.classList.add('blue');
    } else {
      team = '.team2';
      dragItem.classList.add('red');
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
      } else {
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

  const usingBounds = (arr, j, i) => {
    if (j < 0 || i < 0) {
      return 0;
    } if (j >= sizeX) {
      return 0;
    } if (i >= sizeY) {
      return 0;
    } if (arr[j][i] > 0) {
      return 1;
    }
    return 0;
  };

  const { arr } = playGround;
  const arrNeib = Array.from(Array(sizeX), () => new Array(sizeY));

  for (let j = 0; j < sizeX; j += 1) {
    for (let i = 0; i < sizeY; i += 1) {
      let sum = 0;
      sum += usingBounds(arr, j - 1, i);
      sum += usingBounds(arr, j - 1, i - 1);
      sum += usingBounds(arr, j, i - 1);
      sum += usingBounds(arr, j + 1, i);
      sum += usingBounds(arr, j + 1, i + 1);
      sum += usingBounds(arr, j, i + 1);
      sum += usingBounds(arr, j - 1, i + 1);
      sum += usingBounds(arr, j + 1, i - 1);

      arrNeib[j][i] = sum;
    }
  }

  for (let j = 0; j < sizeX; j += 1) {
    for (let i = 0; i < sizeY; i += 1) {
      const neib = arrNeib[j][i];

      if ((neib < 2) || (neib > 3)) {
        arr[j][i] = 0;
      }

      if (arr[j][i] === 0 || arr[j][i] === null) {
        if (neib === 3) {
          arr[j][i] = 1;
        } else {
          arr[j][i] = 0;
        }
      }
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
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBLDBCQUEwQixHQUFHLEVBQUUsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QyxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNqQlI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmlvY2VsbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9tb2R1bGVzL2RyYWdJdGVtcy5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vc3JjL21vZHVsZXMvcGxheWdyb3VuZC5qcyIsIndlYnBhY2s6Ly9iaW9jZWxscy8uL3NyYy9tb2R1bGVzL3BvcHVsYXRlLmpzIiwid2VicGFjazovL2Jpb2NlbGxzLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiA1MTJweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcC10YXJnZXQtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wLXRhcmdldCB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZHJhZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYXBwZWFyO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwLjU7IH1cXHJcXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblxcclxcbi5ibHVlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5yZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw0REFBNEQ7RUFDNUQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsS0FBSyxZQUFZLEVBQUU7RUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBtYXgtd2lkdGg6IDUxMnB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5kcm9wLXRhcmdldC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3AtdGFyZ2V0IHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1kcmFnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kcmFnIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxyXFxuICAwJSB7IG9wYWNpdHk6IDAuNTsgfVxcclxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmJsdWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFBsYXlncm91bmQgZnJvbSAnLi9tb2R1bGVzL3BsYXlncm91bmQuanMnO1xuaW1wb3J0IERyYWdJdGVtcyBmcm9tICcuL21vZHVsZXMvZHJhZ0l0ZW1zLmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlLmpzJztcbmltcG9ydCBwb3B1bGF0ZSBmcm9tICcuL21vZHVsZXMvcG9wdWxhdGUuanMnO1xuaW1wb3J0IGNhbGNQbGF5Z3JvdW5kIGZyb20gJy4vbW9kdWxlcy9sb2dpYy5qcyc7XG5cbmNvbnN0IHBsYXlncm91bmRTaXplID0gODtcbmNvbnN0IGRyYWdJdGVtc051bWJlciA9IDg7XG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbmNvbnN0IHBsYXlncm91bmQgPSBuZXcgUGxheWdyb3VuZChwbGF5Z3JvdW5kU2l6ZSwgcGxheWdyb3VuZFNpemUpO1xuXG5jb25zdCBkYXRhID0gc3RvcmFnZS5sb2FkKCk7XG5wbGF5Z3JvdW5kLmxvYWQoZGF0YSk7XG5wbGF5Z3JvdW5kLnNob3dHcmlkKCk7XG5cbmNvbnN0IGRyYWdJdGVtcyA9IG5ldyBEcmFnSXRlbXMoKTtcblxucG9wdWxhdGUocGxheWdyb3VuZCwgZHJhZ0l0ZW1zKTtcblxuY29uc3QgY291bnQgPSBwbGF5Z3JvdW5kLmdldENvdW50KDEpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBkcmFnSXRlbXNOdW1iZXIgLSBjb3VudDsgaSArPSAxKSB7XG4gIGNvbnN0IGlkID0gZHJhZ0l0ZW1zLmFkZCgtMSwgLTEsIDEpO1xuICBkcmFnSXRlbXMuc2hvdyhpZCwgLTEsIC0xKTtcbn1cblxuZnVuY3Rpb24gYWxsb3dEcm9wKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWcoZXYpIHtcbiAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldi50YXJnZXQuaWQpO1xufVxuXG5mdW5jdGlvbiBkcm9wKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlkID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgY29uc3QgZHJvcHBlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICBjb25zdCB0b1hZID0gZXYudGFyZ2V0LmlkLnNwbGl0KCcgJyk7XG4gIGlmICh0b1hZWzBdID09PSAnY2VsbCcpIHtcbiAgICBjb25zdCBpdGVtID0gZHJhZ0l0ZW1zLmdldEl0ZW1CeUlkKGlkKTtcbiAgICBjb25zdCB7IHggfSA9IGl0ZW07XG4gICAgY29uc3QgeyB5IH0gPSBpdGVtO1xuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0seCx5KVxuICAgIGlmICh4ID4gMCAmJiB5ID4gMCkge1xuICAgICAgcGxheWdyb3VuZC5zZXQoeCwgeSwgMCk7XG4gICAgfVxuICAgIGRyYWdJdGVtcy5tb3ZlKGRyb3BwZWQsIGV2LnRhcmdldCk7XG4gICAgcGxheWdyb3VuZC5zZXQocGFyc2VJbnQodG9YWVsxXSwgMTApLCBwYXJzZUludCh0b1hZWzJdLCAxMCksIDEpO1xuICB9XG5cbiAgc3RvcmFnZS5zYXZlKHBsYXlncm91bmQuYXJyKTtcbn1cblxuY29uc3QgZHJhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZycpO1xuZHJhZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgIGRyYWcoZXZlbnQpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBkcm9wVGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wLXRhcmdldCcpO1xuZHJvcFRhcmdldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcbiAgICBkcm9wKGV2ZW50KTtcbiAgfSk7XG5cbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGFsbG93RHJvcChldmVudCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHN0ZXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlcC1idG4nKTtcbnN0ZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBsYXlncm91bmQuYXJyID0gY2FsY1BsYXlncm91bmQocGxheWdyb3VuZCkuc2xpY2UoKTtcbiAgc3RvcmFnZS5zYXZlKHBsYXlncm91bmQuYXJyKTtcblxuICBwb3B1bGF0ZShwbGF5Z3JvdW5kLCBkcmFnSXRlbXMpO1xuXG4gIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0l0ZW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG5cbiAgZ2V0SXRlbUJ5SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKChlKSA9PiBlLmlkID09PSBpZCk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzaG93ID0gKGlkLCB4LCB5KSA9PiB7XG4gICAgbGV0IHRlYW0gPSAnJztcbiAgICBjb25zdCBkcmFnSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyYWdJdGVtLmNsYXNzTGlzdC5hZGQoJ2RyYWcnKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtQnlJZChpZCk7XG4gICAgaWYgKGl0ZW0udmFsdWUgPT09IDEpIHtcbiAgICAgIHRlYW0gPSAnLnRlYW0xJztcbiAgICAgIGRyYWdJdGVtLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVhbSA9ICcudGVhbTInO1xuICAgICAgZHJhZ0l0ZW0uY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgfVxuXG4gICAgZHJhZ0l0ZW0uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICBkcmFnSXRlbS5pZCA9IGlkO1xuICAgIGlmICh4ID09PSAtMSAmJiB5ID09PSAtMSkge1xuICAgICAgY29uc3QgZHJhZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGVhbSk7XG4gICAgICBkcmFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZHJhZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsICR7eH0gJHt5fWApO1xuICAgICAgZHJhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnSXRlbSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSA9ICh4LCB5KSA9PiB7XG4gICAgbGV0IHRlYW0gPSAnJztcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtcy5maW5kKChlKSA9PiBlLnggPT09IHggJiYgZS55ID09PSB5KTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IDEpIHtcbiAgICAgICAgdGVhbSA9ICcudGVhbTEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVhbSA9ICcudGVhbTInO1xuICAgICAgfVxuICAgICAgY29uc3QgZHJhZ0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKTtcbiAgICAgIGlmICh4ID09PSAtMSAmJiB5ID09PSAtMSkge1xuICAgICAgICBjb25zdCBkcmFnQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZWFtKTtcbiAgICAgICAgZHJhZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChkcmFnSXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkcmFnQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNlbGwgJHt4fSAke3l9YCk7XG4gICAgICAgIGRyYWdDb250YWluZXIucmVtb3ZlQ2hpbGQoZHJhZ0l0ZW0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGUpID0+IGUuaWQgIT09IGl0ZW0uaWQpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUgPSAoZHJvcHBlZCwgdGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gZHJvcHBlZDtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZXRJdGVtQnlJZChpZCk7XG4gICAgY29uc3QgdGFyZ2V0WFkgPSB0YXJnZXQuaWQuc3BsaXQoJyAnKTtcblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChkcm9wcGVkKTtcbiAgICBpdGVtLnggPSBwYXJzZUludCh0YXJnZXRYWVsxXSwgMTApO1xuICAgIGl0ZW0ueSA9IHBhcnNlSW50KHRhcmdldFhZWzJdLCAxMCk7XG4gIH1cblxuICBhZGQgPSAoeCwgeSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBpZCA9IGBkcmFnICR7RGF0ZS5ub3coKSArIHRoaXMuaXRlbXMubGVuZ3RofWA7XG5cbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgaWQsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xufVxuIiwiY29uc3QgY2FsY1BsYXlncm91bmQgPSAocGxheUdyb3VuZCkgPT4ge1xuICBjb25zdCB7IHNpemVYIH0gPSBwbGF5R3JvdW5kO1xuICBjb25zdCB7IHNpemVZIH0gPSBwbGF5R3JvdW5kO1xuXG4gIGNvbnN0IHVzaW5nQm91bmRzID0gKGFyciwgaiwgaSkgPT4ge1xuICAgIGlmIChqIDwgMCB8fCBpIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAoaiA+PSBzaXplWCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAoaSA+PSBzaXplWSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBpZiAoYXJyW2pdW2ldID4gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IHsgYXJyIH0gPSBwbGF5R3JvdW5kO1xuICBjb25zdCBhcnJOZWliID0gQXJyYXkuZnJvbShBcnJheShzaXplWCksICgpID0+IG5ldyBBcnJheShzaXplWSkpO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZVg7IGogKz0gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZVk7IGkgKz0gMSkge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBzdW0gKz0gdXNpbmdCb3VuZHMoYXJyLCBqIC0gMSwgaSk7XG4gICAgICBzdW0gKz0gdXNpbmdCb3VuZHMoYXJyLCBqIC0gMSwgaSAtIDEpO1xuICAgICAgc3VtICs9IHVzaW5nQm91bmRzKGFyciwgaiwgaSAtIDEpO1xuICAgICAgc3VtICs9IHVzaW5nQm91bmRzKGFyciwgaiArIDEsIGkpO1xuICAgICAgc3VtICs9IHVzaW5nQm91bmRzKGFyciwgaiArIDEsIGkgKyAxKTtcbiAgICAgIHN1bSArPSB1c2luZ0JvdW5kcyhhcnIsIGosIGkgKyAxKTtcbiAgICAgIHN1bSArPSB1c2luZ0JvdW5kcyhhcnIsIGogLSAxLCBpICsgMSk7XG4gICAgICBzdW0gKz0gdXNpbmdCb3VuZHMoYXJyLCBqICsgMSwgaSAtIDEpO1xuXG4gICAgICBhcnJOZWliW2pdW2ldID0gc3VtO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZVg7IGogKz0gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZVk7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbmVpYiA9IGFyck5laWJbal1baV07XG5cbiAgICAgIGlmICgobmVpYiA8IDIpIHx8IChuZWliID4gMykpIHtcbiAgICAgICAgYXJyW2pdW2ldID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGFycltqXVtpXSA9PT0gMCB8fCBhcnJbal1baV0gPT09IG51bGwpIHtcbiAgICAgICAgaWYgKG5laWIgPT09IDMpIHtcbiAgICAgICAgICBhcnJbal1baV0gPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycltqXVtpXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FsY1BsYXlncm91bmQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWdyb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHNpemVYLCBzaXplWSkge1xuICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcbiAgICB0aGlzLnNpemVZID0gc2l6ZVk7XG4gICAgdGhpcy5hcnIgPSBBcnJheS5mcm9tKEFycmF5KHNpemVYKSwgKCkgPT4gbmV3IEFycmF5KHNpemVZKSk7XG4gIH1cblxuICBzaG93R3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBkcm9wQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1ncmlkJyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemVYOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtdGFyZ2V0LXJvdycpO1xuICAgICAgZHJvcENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemVZOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Ryb3AtdGFyZ2V0Jyk7XG4gICAgICAgIGNlbGwuaWQgPSBgY2VsbCAke2p9ICR7aX1gO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGxvYWQgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZVg7IGogKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZVk7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYXJyW2pdW2ldID0gZGF0YVtqXVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZXQgPSAoaiwgaSwgdmFsdWUpID0+IHtcbiAgICB0aGlzLmFycltqXVtpXSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0Q291bnQgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplWDsgaiArPSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZVk7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5hcnJbal1baV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbn1cbiIsImNvbnN0IHBvcHVsYXRlID0gKHBsYXlncm91bmQsIGRyYWdJdGVtcykgPT4ge1xuICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXlncm91bmQuc2l6ZVg7IGogKz0gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWdyb3VuZC5zaXplWTsgaSArPSAxKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBsYXlncm91bmQuYXJyW2pdW2ldO1xuICAgICAgY29uc3QgaXRlbSA9IGRyYWdJdGVtcy5pdGVtcy5maW5kKChlKSA9PiBlLnggPT09IGogJiYgZS55ID09PSBpKTtcbiAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBkcmFnSXRlbXMuYWRkKGosIGksIHZhbHVlKTtcbiAgICAgICAgICBkcmFnSXRlbXMuc2hvdyhpZCwgaiwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXRlbSkge1xuICAgICAgICBkcmFnSXRlbXMuaGlkZShqLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSAnYmlvY2VsbHMnO1xuICB9XG5cbiAgc2F2ZSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICB9O1xuXG4gIGxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QganNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgaWYgKHR5cGVvZiBqc29uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9