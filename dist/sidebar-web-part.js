define("a6b1e652-ff6e-45b9-9fd9-1e5e4ea7e88b_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-webpart-base","@microsoft/sp-property-pane","SidebarWebPartStrings","jquery","bootstrap","@microsoft/sp-loader","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@microsoft/sp-core-library"
var sp_core_library_ = __webpack_require__(0);
var sp_core_library__default = /*#__PURE__*/__webpack_require__.n(sp_core_library_);

// EXTERNAL MODULE: external "@microsoft/sp-webpart-base"
var sp_webpart_base_ = __webpack_require__(2);
var sp_webpart_base__default = /*#__PURE__*/__webpack_require__.n(sp_webpart_base_);

// EXTERNAL MODULE: external "@microsoft/sp-property-pane"
var sp_property_pane_ = __webpack_require__(3);
var sp_property_pane__default = /*#__PURE__*/__webpack_require__.n(sp_property_pane_);

// EXTERNAL MODULE: external "SidebarWebPartStrings"
var external__SidebarWebPartStrings_ = __webpack_require__(4);
var external__SidebarWebPartStrings__default = /*#__PURE__*/__webpack_require__.n(external__SidebarWebPartStrings_);

// CONCATENATED MODULE: ./lib/webparts/sidebar/SidebarTemplate.js
var SidebarTemplate = /** @class */ (function () {
    function SidebarTemplate() {
    }
    SidebarTemplate.templateHtml = "\n            <div class=\"row sidebar\">   \n                <div class=\"appContent scrollbar\">\n                    <div class=\"tab-content\" id=\"v-pills-tabContent\">\n                        <div class=\"tab-pane fade active\" id=\"links\" role=\"tabpanel\" aria-labelledby=\"v-pills-links-tab\">\n                            <div class=\"panel-group\" id=\"accordion\">\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\n                                        Collapsible Group 1</a>\n                                    </h4>\n                                    </div>\n                                    <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                                    <div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                    commodo consequat.</div>\n                                    </div>\n                                </div>\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">\n                                        Collapsible Group 2</a>\n                                    </h4>\n                                    </div>\n                                    <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                                    <div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                    commodo consequat.</div>\n                                    </div>\n                                </div>\n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\">\n                                    <h4 class=\"panel-title\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\n                                        Collapsible Group 3</a>\n                                    </h4>\n                                    </div>\n                                    <div id=\"collapse3\" class=\"panel-collapse collapse\">\n                                    <div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                    commodo consequat.</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade metrotiles\" id=\"metrotiles\" role=\"tabpanel\" aria-labelledby=\"v-pills-metrotiles-tab\">\n                            <div id=\"spListContainer\">\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"help\" role=\"tabpanel\" aria-labelledby=\"v-pills-help-tab\">this will show the help desk bot</div>\n                        <div class=\"tab-pane fade\" id=\"settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">something else...</div>\n                    </div>\n                </div>\n                <div class=\"col-3 appTabs\">\n                    <ul class=\"nav nav-stacked nav-pills\" aria-orientation=\"vertical\">\n                        <li class=\"active\"><a class=\"nav-link\" data-toggle=\"pill\" href=\"#links\" aria-controls=\"v-pills-links\" aria-selected=\"true\">Links</a></li>\n                        <li><a class=\"nav-link\" data-toggle=\"pill\" href=\"#metrotiles\" role=\"tab\" aria-controls=\"v-pills-metrotiles\" aria-selected=\"false\">Metrotiles</a></li>\n                        <li><a class=\"nav-link\" id=\"help-tab\" data-toggle=\"pill\" href=\"#help\" role=\"tab\" aria-controls=\"v-pills-help\" aria-selected=\"false\">IT Help</a></li>\n                        <li><a class=\"nav-link\" id=\"settings-tab\" data-toggle=\"pill\" href=\"#settings\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">Tab 4</a></li>\n                    </ul>\n                </div>\n            </div>            \n";
    return SidebarTemplate;
}());
/* harmony default export */ var sidebar_SidebarTemplate = (SidebarTemplate);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(5);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// EXTERNAL MODULE: external "@microsoft/sp-loader"
var sp_loader_ = __webpack_require__(12);
var sp_loader__default = /*#__PURE__*/__webpack_require__.n(sp_loader_);

// CONCATENATED MODULE: ./lib/webparts/sidebar/MockHttpClient.js
var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock Item 1', Id: '1' },
        { Title: 'Mock Item 2', Id: '2' },
        { Title: 'Mock Item 3', Id: '3' }];
    return MockHttpClient;
}());
/* harmony default export */ var sidebar_MockHttpClient = (MockHttpClient);

// EXTERNAL MODULE: external "@microsoft/sp-http"
var sp_http_ = __webpack_require__(13);
var sp_http__default = /*#__PURE__*/__webpack_require__.n(sp_http_);

// CONCATENATED MODULE: ./lib/webparts/sidebar/SidebarWebPart.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




//*** Custom Imports ***/


__webpack_require__(6);
__webpack_require__(7);




var SidebarWebPart_SidebarWebPart = /** @class */ (function (_super) {
    __extends(SidebarWebPart, _super);
    function SidebarWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidebarWebPart.prototype.onInit = function () {
        //SPComponentLoader.loadCss('https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css');
        sp_loader_["SPComponentLoader"].loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
        return _super.prototype.onInit.call(this);
    };
    SidebarWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('Metrotiles')/Items", sp_http_["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    SidebarWebPart.prototype._getMockListData = function () {
        return sidebar_MockHttpClient.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    //private _getListData(): Promise<ISPLists> {
    //  return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
    //    .then((response: SPHttpClientResponse) => {
    //      return response.json();
    //    });
    //}
    SidebarWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n      <ul class=\"list\">\n      <li class=\"listItem\">\n        <span class=\"ms-font-l\">" + item.Title + "</span>\n      </li>\n    </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    SidebarWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (sp_core_library_["Environment"].type === sp_core_library_["EnvironmentType"].Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (sp_core_library_["Environment"].type == sp_core_library_["EnvironmentType"].SharePoint ||
            sp_core_library_["Environment"].type == sp_core_library_["EnvironmentType"].ClassicSharePoint) {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    SidebarWebPart.prototype.render = function () {
        //let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        //SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = sidebar_SidebarTemplate.templateHtml;
        //const accordionOptions: jQueryUI.AccordionOptions = {
        //  animate: true,
        //  collapsible: false,
        //  icons: {
        //    header: 'ui-icon-circle-arrow-e',
        //    activeHeader: 'ui-icon-circle-arrow-s'
        //  }
        //};
        //$('.accordion', this.domElement).accordion(accordionOptions);
        external__jquery_('.accordion', this.domElement).accordion();
        this._renderListAsync();
    };
    Object.defineProperty(SidebarWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SidebarWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: external__SidebarWebPartStrings_["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: external__SidebarWebPartStrings_["BasicGroupName"],
                            groupFields: [
                                Object(sp_property_pane_["PropertyPaneTextField"])('description', {
                                    label: external__SidebarWebPartStrings_["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return SidebarWebPart;
}(sp_webpart_base_["BaseClientSideWebPart"]));
/* harmony default export */ var sidebar_SidebarWebPart = __webpack_exports__["default"] = (SidebarWebPart_SidebarWebPart);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(8);
var loader = __webpack_require__(10);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "*{box-sizing:content-box}.red{border:1px solid red;border-radius:10px}.blue,.red{height:100px;width:100px;margin:5px}.blue{border:1px solid blue;border-radius:10px}.green{border:1px solid green;height:100px;width:100px;margin:5px;border-radius:10px}.panel-heading{background-color:#ddddeb!important}.panel-heading h4{text-decoration:none;color:#545487!important}.panel :hover{background-color:#7676b8!important;text-decoration:none!important}.panel :hover .panel-title{color:#fff!important;text-decoration:none!important}.panel :hover .panel-body{background-color:#fff!important;color:#545487!important}.accordionToggle:after{content:\"\\E114\";float:right}.accordionToggle.collapsed:after,.accordionToggle:after{position:relative;top:-20px;left:-10px;font-family:Glyphicons Halflings;font-size:1.1em;color:#fff!important}.accordionToggle.collapsed:after{content:\"\\E080\"}.list{margin:10;padding:10;line-height:50px;list-style-type:none;box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.list,.listItem{color:#333;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;box-sizing:border-box}.listItem{vertical-align:center;margin:0;padding:0;box-shadow:none;*zoom:1;padding:9px 28px 3px;position:relative}.sidebar .appContent{left:0;border:1px solid #545487;width:60%;padding:5px 5px 0}.sidebar .appContent,.sidebar .appTabs{position:absolute;top:0;height:99vh;margin-top:3px}.sidebar .appTabs{left:60%;width:30%;padding-top:3px;border:1px solid #7676b8;border-bottom:1px solid #7676b8;box-shadow:1px 2px 5px #666}.sidebar .appTabs .nav-link{color:#545487}.sidebar .appTabs .nav-link:hover{background-color:#7676b8;color:#fff!important}.sidebar .appTabs .nav-link.active{background-color:#545487;color:#fff}.nav-pills>li.active>a{background-color:#545487!important;color:#fff!important}.scrollbar{overflow-y:scroll;overflow-x:hidden;height:100%}.scrollbar::-webkit-scrollbar,.scrollbar::-webkit-scrollbar-track{background-color:#ddddeb}.scrollbar::-webkit-scrollbar-thumb{background-color:#7676b8}.usefulLinks .card{margin-bottom:5px}.usefulLinks .card-header{background-color:#ddddeb;border:2px solid #7676b8;border-radius:10px 10px 0 0;box-shadow:1px 2px 5px #666;text-decoration:none}.usefulLinks .card-header:hover{background-color:#7676b8}.usefulLinks .card-header:hover .card-link{color:#fff!important}.usefulLinks .card-header .card-link{color:#545487!important}.usefulLinks .card-body{border:1px solid #7676b8;background:none;color:#545487}.metrotiles{left:10px;position:relative}", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ])});;
//# sourceMappingURL=sidebar-web-part.js.map