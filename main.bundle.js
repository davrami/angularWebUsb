webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 106;


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(116);


/*
if (environment.production) {
  enableProdMode();
}
*/
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(snackBar) {
        this.snackBar = snackBar;
    }
    AppComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open("Trying to connect ...", action, {
            duration: 2000,
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(188),
        styles: [__webpack_require__(174)],
        animations: [__WEBPACK_IMPORTED_MODULE_2_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highlight_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_exampleDemo_exampleDemo_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_wiki_wiki_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_getStarted_getStarted_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_demos_LED_LED_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_demos_potenciometro_poten_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_demos_sandbox_sandbox_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_demos_pong_pong_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_demos_LCD_LCD_component__ = __webpack_require__(69);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//AngularMaterial



//Hightlightjs

//Routing


//Content





//Demos





function highchartsFactory() {
    return __webpack_require__(186);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__components_exampleDemo_exampleDemo_component__["a" /* exampleDemoComponent */], __WEBPACK_IMPORTED_MODULE_14__components_wiki_wiki_component__["a" /* WikiComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_getStarted_getStarted_component__["a" /* getStartedComponent */], __WEBPACK_IMPORTED_MODULE_16__components_demos_LED_LED_component__["a" /* LEDComponent */], __WEBPACK_IMPORTED_MODULE_17__components_demos_potenciometro_poten_component__["a" /* PotenComponent */], __WEBPACK_IMPORTED_MODULE_18__components_demos_sandbox_sandbox_component__["a" /* SandboxComponent */], __WEBPACK_IMPORTED_MODULE_19__components_demos_pong_pong_component__["a" /* PongComponent */], __WEBPACK_IMPORTED_MODULE_20__components_demos_LCD_LCD_component__["a" /* LCDComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routes */]), __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_highlight_js__["HighlightJsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8_angular2_highlight_js__["HighlightJsService"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_about_about_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_exampleDemo_exampleDemo_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_wiki_wiki_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_getStarted_getStarted_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_demos_LED_LED_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_demos_potenciometro_poten_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_demos_sandbox_sandbox_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_demos_pong_pong_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_demos_LCD_LCD_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_0__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'example', component: __WEBPACK_IMPORTED_MODULE_2__components_exampleDemo_exampleDemo_component__["a" /* exampleDemoComponent */] },
    { path: 'wiki', component: __WEBPACK_IMPORTED_MODULE_3__components_wiki_wiki_component__["a" /* WikiComponent */] },
    { path: 'getStarted', component: __WEBPACK_IMPORTED_MODULE_4__components_getStarted_getStarted_component__["a" /* getStartedComponent */] },
    { path: 'LED', component: __WEBPACK_IMPORTED_MODULE_5__components_demos_LED_LED_component__["a" /* LEDComponent */] },
    { path: 'poten', component: __WEBPACK_IMPORTED_MODULE_6__components_demos_potenciometro_poten_component__["a" /* PotenComponent */] },
    { path: 'sandbox', component: __WEBPACK_IMPORTED_MODULE_7__components_demos_sandbox_sandbox_component__["a" /* SandboxComponent */] },
    { path: 'pong', component: __WEBPACK_IMPORTED_MODULE_8__components_demos_pong_pong_component__["a" /* PongComponent */] },
    { path: 'LCD', component: __WEBPACK_IMPORTED_MODULE_9__components_demos_LCD_LCD_component__["a" /* LCDComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\ni.fa{\n    color:white;    \n    bottom: 13px;\n    position: relative;\n    left: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dosis);", ""]);

// module
exports.push([module.i, "md-grid-tile {\n  background: lightblue;\n}\n* {\n  box-sizing: border-box;\n}\n\n.button {\n  font-size: 5vw;\n  border: none;\n  background-color: #f1c40f;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n}\n@media (min-width: 40em) {\n  .button {\n    font-size: 20px;\n  }\n}\n.button:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  width: 10px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 10, 50, 0.2);\n  transition: -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9), -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0);\n}\n.button:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ebebf0;\n  z-index: -1;\n}\n.button:hover:before, .button:focus:before {\n  -webkit-transform: translate3D(10px, 0, 0);\n          transform: translate3D(10px, 0, 0);\n}\n.button:active:before {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0);\n}\n.button:focus, .button:active {\n  outline: none;\n}\n.button .button__inner {\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  color: #333;\n  padding: 1em 1.5em;\n  background-color: #f1c40f;\n  display: block;\n  width: 100%;\n  height: 100%;\n  transition: -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9), -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  position: relative;\n}\n.button:hover .button__inner, .button:focus .button__inner {\n  -webkit-transform: translate3D(0, -10px, 0);\n          transform: translate3D(0, -10px, 0);\n}\n.button:active .button__inner {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0);\n}\n.button:hover .button__inner, .button:focus .button__inner {\n  background-color:#f1c40f;\n}\n\n.button--secondary {\n  background-color: #00d18e;\n  z-index: 0;\n}\n.button--secondary:after {\n  background-color: #00d18e;\n}\n.button--secondary .button__inner {\n  background-color: #00ffb2;\n}\n.button--secondary:hover .button__inner, .button--secondary:focus .button__inner {\n  background-color: #11ffb3;\n}\n\nhtml, body {\n  background-color: #fbfbfb;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-family: 'Dosis', cursive;\n}\n\n.example-form {\n  width: 500px;\n}\n\n.example-full-width {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dosis);", ""]);

// module
exports.push([module.i, ".lcd {\n      display: block;\n    background: #9ea18c;\n    border: 3px solid black;\n    max-width: 30em;\n    padding: 1.65em 1em;\n    box-shadow: inset 0 0 5px 5px rgba(0,0,0,.1);\n    font-weight: bold;\n    font-family: monospace;\n    letter-spacing: 0.1em;\n    font-size: 1.2em;\n    line-height: 160%;\n    color: #21230e;\n    margin-bottom: 28px;\n    text-shadow: -1px 2px 1px rgba(0,0,0,.1);\n}\n\n.lcd small {\n  color: #949782;\n  text-shadow: none;\n  float: right;\n}\n* {\n  box-sizing: border-box;\n}\n\n.button {\n  font-size: 5vw;\n  border: none;\n  background-color: #f1c40f;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n}\n@media (min-width: 40em) {\n  .button {\n    font-size: 20px;\n  }\n}\n.button:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  width: 10px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 10, 50, 0.2);\n  transition: -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9), -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0);\n}\n.button:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ebebf0;\n  z-index: -1;\n}\n.button:hover:before, .button:focus:before {\n  -webkit-transform: translate3D(10px, 0, 0);\n          transform: translate3D(10px, 0, 0);\n}\n.button:active:before {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0);\n}\n.button:focus, .button:active {\n  outline: none;\n}\n.button .button__inner {\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  color: #333;\n  padding: 0.5em 1.5em;\n  background-color: #f1c40f;\n  display: block;\n  width: 100%;\n  height: 100%;\n  transition: -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  transition: transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9), -webkit-transform 0.6s cubic-bezier(0, 0.9, 0.13, 0.9);\n  position: relative;\n}\n.button:hover .button__inner, .button:focus .button__inner {\n  -webkit-transform: translate3D(0, -10px, 0);\n          transform: translate3D(0, -10px, 0);\n}\n.button:active .button__inner {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0);\n}\n.button:hover .button__inner, .button:focus .button__inner {\n  background-color:#f1c40f;\n}\n\n.button--secondary {\n  background-color: #00d18e;\n  z-index: 0;\n}\n.button--secondary:after {\n  background-color: #00d18e;\n}\n.button--secondary .button__inner {\n  background-color: #00ffb2;\n}\n.button--secondary:hover .button__inner, .button--secondary:focus .button__inner {\n  background-color: #11ffb3;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "img {\n    width: 600px;\n}\n\npre{\n    height: 700px;\n}\n\n.boton{\n    margin-top: 5px;\n}\n\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: rgb(0, 151, 157)!important;\n}\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(7, 163, 255, 0.35)!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "#game {\n    background-color: #353535;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,500,300italic,500italic,700italic,900,300);", ""]);

// module
exports.push([module.i, "[_nghost-c5]{\n    font-family: -apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #292b2c;\n    background-color: #fff;;\n}\n\nbody {\n  font-family: \"Roboto,Helvetica Neue,Arial,sans-serif\"!important;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\n\n/* Demo style */\nbody { padding: 16px; }\n\ndiv.content{\n    padding: 50px;\n    }\n.link{\n    color: #00979D;\n    text-decoration: none;\n}\n.link:hover{\n    color: #F1C40F;\n    text-decoration:none;\n}\n.link:active{\n    text-decoration:none;\n    color: #00979D;\n}\n\n\nh3.titles1{\n    line-height: 40px;\n    text-align: center;\n    font-weight: 300 !important;\n    color: white;\n    background-color: #00979D;\n}\n\nh4.titles2{\n    font-weight: 300 !important;\n}\n\nh5.titles2{\n    font-size: 18px;\n    font-weight: 300 !important;\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline;\n}\n\nimg{\n    padding: 20px;\n     width: 800px;\n}\n\n\n.coderesult{\n    background-color: lightgray;\n    font-weight: 100;\n}\n\n.code{\n    height: 400px;\n    overflow-y: scroll;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "md-card {\n  width: 350px;\n  float: left;\n  margin: 10px;\n  \n}\n\nmd-card img:hover {\n    opacity: 0.7;\n    \n}\n\nmd-card {\n    background-color: #fffafa;\n    width: 31%!important;\n    \n}\n\nmd-card p {\n    color:orange;\n    text-align: center;\n    font-weight: bold;\n}\n\n.container {\n    display: -ms-grid;\n    display: grid;\n    \n}\n\nmd-card#cardFirmata img {\n    margin: 0 auto;\n    height: auto;\n    width: 100%;\n    display: block;\n}\n\nmd-card#cardWebUSb img {\n    width: 89%;\n    display: block;\n    margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<!--ROUTER -->\n<style>\n  .example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .material-icons.md-48 {\n    font-size: 48px;\n  }\n</style>\n\n\n<md-toolbar color=\"primary\" class=\"menuSmall\">\n  <a [routerLink]=\"['/']\"> <i class=\"fa fa-usb fa-3x\"></i></a>\n  <span class=\"example-spacer\"></span>\n\n  <button md-button  [routerLink]=\"['/']\">Home</button>\n  <button md-button [routerLink]=\"['getStarted']\">Get Started</button>\n  <button md-button   [mdMenuTriggerFor]=\"demos\">Demos</button>\n  <md-menu #demos=\"mdMenu\">\n    <button md-menu-item [routerLink]=\"['LED']\">LED</button>\n    <button md-menu-item [routerLink]=\"['LCD']\">LCD</button>\n    <button md-menu-item [routerLink]=\"['poten']\">Potenciómetro</button>\n    <button md-menu-item [routerLink]=\"['pong']\">Pong</button>\n    <button md-menu-item [routerLink]=\"['sandbox']\">Sandbox</button>\n  </md-menu>\n  <button md-button  [routerLink]=\"['wiki']\">Wiki</button>\n  <button md-button  [routerLink]=\"['about']\">About</button>\n\n  <span class=\"example-spacer\"></span>\n  <button id=\"connect\" class=\"button__inner\" (click)=\"openSnackBar()\">Connect</button>\n</md-toolbar>\n\n<div class=\"container\">\n      <router-outlet ></router-outlet>\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h2>About us</h2>\n  </div>\n  <div class=\"col-md-2\">\n    <div>\n      <span><i class=\"fa fa-github fa-4x\" aria-hidden=\"true\"></i></span><span><i class=\"fa fa-linkedin-square fa-4x\" aria-hidden=\"true\"></i></span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <img src=\"assets/Pictures/davrami.png\" style=\"height:150px;\">\n\n  </div>\n  <div class=\"col-md-6\">\n    FOTO?\n\n  </div>\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <h4>David Ramírez</h4>\n    <md-list>\n      <md-list-item>\n        <md-icon md-list-icon><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></md-icon>\n        <h4 md-line> Linkedin: <a href=\"http://www.linkedin.com/in/davrami/\" class=\"link\" target=\"blank_\">linkedin.com/in/davrami/</a></h4>\n      </md-list-item>\n      <md-divider></md-divider>\n      <md-list-item>\n        <md-icon md-list-icon><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></md-icon>\n        <h4 md-line> Email: <a class=\"link\">dvrami02@gmail.com</a></h4>\n      </md-list-item>\n      <md-divider></md-divider>\n      <md-list-item>\n        <md-icon md-list-icon><i class=\"fa fa-github-square\" aria-hidden=\"true\"></i></md-icon>\n        <h4 md-line> Github: <a href=\"http://www.github.com/davrami\" class=\"link\" target=\"blank_\">github.com/davrami</a></h4>\n      </md-list-item>\n      <md-divider></md-divider>\n    </md-list>\n\n  </div>\n\n  <div class=\"col-md-6\">\n    <h4>Aarón Salvador</h4>\n    <md-list>\n      <md-list-item>\n        <md-icon md-list-icon><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></md-icon>\n        <h4 md-line>Linkedin: <a href=\"http://www.linkedin.com/in/aaron-salvador-marcos/\" class=\"link\" target=\"blank_\">linkedin.com/in/aaron-salvador-marcos/</a></h4>\n      </md-list-item>\n      <md-divider></md-divider>\n      <md-list-item>\n        <md-icon md-list-icon><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></md-icon>\n        <h4 md-line>Email: <a class=\"link\">aaronsalva27@gmail.com</a></h4>\n      </md-list-item>\n      <md-divider></md-divider>\n      <md-list-item>\n        <md-icon md-list-icon><i class=\"fa fa-github-square\" aria-hidden=\"true\"></i></md-icon>\n        <h4 md-line>Github:  <a href=\"http://www.github.com/aaronsalva27\" class=\"link\" target=\"blank_\">github.com/aaronsalva27</a></h4>\n      </md-list-item>\n      <md-divider></md-divider>\n    </md-list>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab label=\"Overview\">\n        <div class=\"content\">\n            <p>Estableciendo una conexión con la placa vamos a hacer un buffer para enviar texto y que se muestren en una pantalla\n                <a class=\"link\" href=\"/wiki\">LCD</a>.\n            </p>\n            <h4 class=\"titles2\">Hardware</h4>\n\n            <ul>\n                <li>Arduino Leonardo</li>\n                <li>1x Pantalla LCD 1602A</li>\n                <li>1x Potenciómetro</li>\n            </ul>\n\n            <h4 class=\"titles2\">Circuito</h4>\n            <img src=\"assets/schemas/lcdSketch.png\">\n        </div>\n    </md-tab>\n\n\n    <md-tab label=\"Code\">\n        <div class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    Arduino\n                </div>\n                <div class=\"col-md-6\">\n                    JavaScript\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent1\" highlight-js-content=\".highlight\"></section>\n                </div>\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent2\" highlight-js-content=\".highlight\"></section>\n                </div>\n            </div>\n        </div>\n    </md-tab>\n\n\n    <md-tab label=\"Example\">\n        <div class=\"content\">\n            <h4 class=\"titles2\">Liquid Crystal Display<span><md-icon class=\"link\">screen_share</md-icon></span></h4>\n            <p>\n                <button id=\"led\" value=\"H\" class=\"btn btn-default\">Led On</button>\n            </p>\n            <div class=\"col-md-6\" style=\"float: left;\">\n                <md-input-container class=\"demo-full-width\">\n                    <input type=\"text\" id=\"text\" mdInput #characterCountTextareaHintExample placeholder=\"Character count (13 max)\" maxLength=\"13\"\n                        value=\"WebUSB Rocks!\">\n                    <md-hint align=\"end\" aria-live=\"polite\">\n                        {{characterCountTextareaHintExample.value.length}} / 13\n                    </md-hint>\n                </md-input-container>\n                <button id=\"send\" class=\"button\"><span class=\"button__inner\">Send</span></button>\n            </div>\n            <div class=\"col-md-6\" style=\"float: right;\">\n                <div class=\"lcd\">\n                    WebUSB Rocks!\n                    <small>120</small>\n                </div>\n            </div>\n\n        </div>\n\n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab label=\"Overview\">\n        <div class=\"content\">\n            <p>Este codigo permite al usuario encender y apagar unas entradas digitales y hacer una lectura de estas. El usuario\n                mediante unos botones puede apagar y encender los LEDs.\n            </p>\n            <h4 class=\"titles2\">Hardware</h4>\n\n            <ul>\n                <li>Arduino Leonardo</li>\n                <li>4x Resistencia 330 ohm</li>\n                <li>4x LED</li>\n            </ul>\n\n            <h4 class=\"titles2\">Circuito</h4>\n            <img src=\"assets/schemas/led.png\">\n        </div>\n    </md-tab>\n\n\n    <md-tab label=\"Code\">\n        <div class=\"content\">\n\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    Arduino\n                </div>\n                <div class=\"col-md-6\">\n                    TypeScript\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent1\" highlight-js-content=\".highlight\"></section>\n                </div>\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent2\" highlight-js-content=\".highlight\"></section>\n                </div>\n            </div>\n        </div>\n    </md-tab>\n\n\n\n    <md-tab label=\"Example\">\n        <div class=\"content\">\n            <div class=\"boton\">\n                <span>PIN12</span>\n                <md-slide-toggle (click)=\"toggle(12)\">Slide me!</md-slide-toggle>\n\n            </div>\n            <div class=\"boton\">\n                <span>PIN11</span>\n                <md-slide-toggle (click)=\"toggle(11)\">Slide me!</md-slide-toggle>\n            </div>\n            <div class=\"boton\">\n                <span>PIN10</span>\n                <md-slide-toggle (click)=\"toggle(10)\">Slide me!</md-slide-toggle>\n            </div>\n            <div class=\"boton\">\n                <span>PIN9</span>\n                <md-slide-toggle (click)=\"toggle(9)\">Slide me!</md-slide-toggle>\n            </div>\n        </div>\n\n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab label=\"Overview\">\n        <div class=\"content\">\n            <p>Clasico juego multijugador del <a class=\"link\" href=\"https://es.wikipedia.org/wiki/Pong\">pong</a> llevado al\n                mundo web, controlado con los potenciometros de un arduino. Al marcar un punto la puntuación se ve reflejada\n                en la pantalla LCD.</p>\n            <h4 class=\"titles2\">Hardware</h4>\n\n            <ul>\n                <li>Arduino Leonardo</li>\n                <li>1x Pantalla LCD 1602A</li>\n                <li>3x Potenciómetro</li>\n            </ul>\n\n            <h4 class=\"titles2\">Circuito</h4>\n            <img src=\"assets/schemas/pongSketch.png\">\n        </div>\n    </md-tab>\n\n\n    <md-tab label=\"Code\">\n        <div class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    Arduino\n                </div>\n                <div class=\"col-md-6\">\n                    TypeScript\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent1\" highlight-js-content=\".highlight\"></section>\n                </div>\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent2\" highlight-js-content=\".highlight\"></section>\n                </div>\n            </div>\n        </div>\n    </md-tab>\n\n\n    <md-tab label=\"Example\">\n        <div class=\"content\">\n            <button id=\"send\" type=\"button\" class=\"btn btn-default\" (click)=\"startGame()\">Start</button>\n            <canvas id=\"game\" width=\"800\" height=\"270\"></canvas>\n        </div>\n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab label=\"Overview\">\n        <div class=\"content\">\n            <p>Mediante la lectura analógica de un potenciómetro el usuario puede regular un potenciometro y ver los voltios\n                o el porcentage de este.Los datos son representados en unos gráfico.\n            </p>\n            <h4 class=\"titles2\">Hardware</h4>\n\n            <ul>\n                <li>Arduino Leonardo</li>\n                <li>1x Pontenciómetro</li>\n            </ul>\n\n            <h4 class=\"titles2\">Circuito</h4>\n            <img src=\"assets/schemas/potenSketch.png\">\n        </div>\n    </md-tab>\n\n\n    <md-tab label=\"Code\">\n        <div class=\"content\">\n\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    Arduino\n                </div>\n                <div class=\"col-md-6\">\n                    TypeScript\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent1\" highlight-js-content=\".highlight\"></section>\n                </div>\n                <div class=\"col-md-6\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"sampleContent2\" highlight-js-content=\".highlight\"></section>\n                </div>\n            </div>\n        </div>\n    </md-tab>\n\n\n\n    <md-tab label=\"Example\">\n        <div class=\"content\">\n            <div>\n                <button id=\"send\" type=\"button\" class=\"btn btn-default\">Start</button>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h3>Porcentaje: </h3>\n                    <h3 id=\"valPor\">\n\n                    </h3>\n                    <div id=\"container\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n                </div>\n                <div class=\"col-md-6\">\n                    <h3>Voltaje: </h3>\n                    <h3 id=\"valVolt\">\n\n                    </h3>\n                    <div id=\"container2\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\n                </div>\n            </div>\n        </div>\n\n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab label=\"Overview\">\n        <div class=\"content\">\n            <p>Sandbox para live conding\n            </p>\n            <h4 class=\"titles2\">Cheat Sheet<i class=\"material-icons link\">attach_file</i></h4>\n            <p>\n                Este sandbox te permite testear determinadas entradas y salidas del la placa.<br> Resumen de ordenes:\n            </p>\n            <ul>\n                <li><span class=\"coderesult\">port.send(textEncoder.encode('....'))</span> : Enviaremos a la placa un stream de\n                    bytes mediante la conexión serial WebUsb.</li>\n                <li>\n                    <span class=\"coderesult\">port.send(textEncoder.encode('A0'))</span> : Petición de lectura de la entrada\n                    analógica A0, nos devolverá su valor en volts.\n                </li>\n                <li>\n                    <span class=\"coderesult\">port.send(textEncoder.encode('13H'))</span> : La placa pondrá el pin\n                    <b>13</b> como <b>HIGH</b>. Si el valor queremos que sea <b>LOW</b> deberemos poner '<b>13L</b> ' por\n                    ejemplo.\n                </li>\n            </ul>\n\n            <hr>\n            <h4 class=\"titles2\">Entradas/Salidas disponibles<i class=\"material-icons link\">priority_high</i></h4>\n\n            <p>\n                Las entradas y salidas disponibles en este sandbox son las siguientes:\n            </p>\n            <ul>\n                <li>A0</li>\n                <li>A1</li>\n                <li>10</li>\n                <li>11</li>\n                <li>12</li>\n                <li>13</li>\n            </ul>\n\n        </div>\n    </md-tab>\n\n    <md-tab label=\"Code\">\n        <div class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    Sketch Arduino\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\" style=\"max-height:400px; overflow-y: scroll;\">\n                    <section [innerHTML]=\"codeSandboxArduino\" highlight-js-content=\".highlight\"></section>\n                </div>\n            </div>\n        </div>\n    </md-tab>\n\n    <md-tab label=\"Sandbox\">\n        <h4 class=\"titles2\">Live comunicate\n            <md-icon class=\"link\">usb</md-icon>\n        </h4>\n\n        <div class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n\n\n                    <md-input-container style=\"min-width:100%;\">\n                        <textarea mdInput mdTextareaAutosize placeholder=\"Code...\" [(ngModel)]=\"textToSend\">\n                               \n                            </textarea>\n                    </md-input-container>\n\n                </div>\n\n                <div class=\"col-md-6\">\n\n                    <div class=\"lcd\" id=\"response\">\n                        Waiting...\n                    </div>\n                </div>\n\n                <br>\n                <button md-raised-button color=\"accent\" (click)=\"send()\"> Send </button>\n            </div>\n\n\n        </div>\n\n    </md-tab>\n</md-tab-group>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<h1>Example Template for demos</h1>\n<md-card>\n\n    <section [innerHTML]=\"sampleContent\" highlight-js-content=\".highlight\"></section>\n\n</md-card>\n\n\n<!--############################## Form Example ##############################-->\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Basic</md-toolbar>\n  <md-card-content>\n    <form>\n      <md-input-container class=\"demo-full-width\">\n        <input mdInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n      </md-input-container>\n\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <md-input-container style=\"width: 100%\">\n            <input mdInput placeholder=\"First name\">\n          </md-input-container>\n        </td>\n        <td>\n          <md-input-container style=\"width: 100%\">\n            <input mdInput placeholder=\"Long Last Name That Will Be Truncated\">\n          </md-input-container>\n        </td>\n      </tr></table>\n      <p>\n        <md-input-container class=\"demo-full-width\">\n          <textarea mdInput placeholder=\"Address\">1600 Amphitheatre Pkway</textarea>\n        </md-input-container>\n        <md-input-container class=\"demo-full-width\">\n          <textarea mdInput placeholder=\"Address 2\"></textarea>\n        </md-input-container>\n      </p>\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <md-input-container class=\"demo-full-width\">\n            <input mdInput placeholder=\"City\" value=\"Mountain View\">\n          </md-input-container>\n        </td>\n        <td>\n          <md-input-container class=\"demo-full-width\">\n            <input mdInput placeholder=\"State\" maxLength=\"2\" value=\"CA\">\n          </md-input-container>\n        </td>\n        <td>\n          <md-input-container class=\"demo-full-width\">\n            <input mdInput #postalCode maxLength=\"5\" placeholder=\"Postal Code\" value=\"94043\"\n                   pattern=\"[0-9]{5}\">\n            <md-hint align=\"end\">\n              <md-icon>mode_edit</md-icon>\n              <span aria-live=\"polite\">{{postalCode.value.length}} / 5</span>\n            </md-hint>\n          </md-input-container>\n        </td>\n      </tr></table>\n    </form>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Error messages</md-toolbar>\n  <md-card-content>\n    <h4>Regular</h4>\n\n    <p>\n      <md-input-container>\n        <input mdInput placeholder=\"example\" [(ngModel)]=\"errorMessageExample1\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput placeholder=\"email\" [formControl]=\"emailFormControl\">\n        <md-error *ngIf=\"emailFormControl.hasError('required')\">\n          This field is required\n        </md-error>\n        <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n          Please enter a valid email address\n        </md-error>\n      </md-input-container>\n    </p>\n\n    <h4>With hint</h4>\n\n    <md-input-container>\n      <input mdInput placeholder=\"example\" [(ngModel)]=\"errorMessageExample2\" required>\n      <md-error>This field is required</md-error>\n      <md-hint>Please type something here</md-hint>\n    </md-input-container>\n\n\n    <form novalidate>\n      <h4>Inside a form</h4>\n\n      <md-input-container>\n        <input mdInput name=\"example\" placeholder=\"example\"\n          [(ngModel)]=\"errorMessageExample3\" required>\n        <md-error>This field is required</md-error>\n      </md-input-container>\n\n      <button color=\"primary\" md-raised-button>Submit</button>\n    </form>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Prefix + Suffix</md-toolbar>\n  <md-card-content>\n    <h4>Text</h4>\n    <md-input-container align=\"end\">\n      <input mdInput placeholder=\"amount\">\n      <span mdPrefix>$&nbsp;</span>\n      <span mdSuffix>.00</span>\n    </md-input-container>\n\n    <h4>Icons</h4>\n    <md-input-container>\n      <input mdInput placeholder=\"amount\">\n      <md-icon mdPrefix>attach_money</md-icon>\n      <md-icon mdSuffix>mode_edit</md-icon>\n    </md-input-container>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Divider Colors</md-toolbar>\n  <md-card-content>\n    <h4>Input</h4>\n    <md-input-container color=\"primary\" >\n      <input mdInput placeholder=\"Default Color\" value=\"example\">\n    </md-input-container>\n    <md-input-container color=\"accent\">\n      <input mdInput placeholder=\"Accent Color\" value=\"example\">\n    </md-input-container>\n    <md-input-container color=\"warn\">\n      <input mdInput placeholder=\"Warn Color\" value=\"example\">\n    </md-input-container>\n\n    <h4>Textarea</h4>\n    <md-input-container color=\"primary\">\n      <textarea mdInput placeholder=\"Default Color\">example</textarea>\n    </md-input-container>\n    <md-input-container color=\"accent\">\n      <textarea mdInput placeholder=\"Accent Color\">example</textarea>\n    </md-input-container>\n    <md-input-container color=\"warn\">\n      <textarea mdInput placeholder=\"Warn Color\">example</textarea>\n    </md-input-container>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Hints</md-toolbar>\n  <md-card-content>\n    <h4>Input</h4>\n    <p>\n      <md-input-container class=\"demo-full-width\">\n        <input mdInput\n               #characterCountInputHintExample\n               placeholder=\"Character count (100 max)\"\n               maxLength=\"100\"\n               value=\"Hello world. How are you?\">\n        <md-hint align=\"end\" aria-live=\"polite\">\n          {{characterCountInputHintExample.value.length}} / 100\n        </md-hint>\n      </md-input-container>\n    </p>\n\n    <h4>Textarea</h4>\n    <p>\n      <md-input-container class=\"demo-full-width\">\n        <textarea mdInput\n                  #characterCountTextareaHintExample\n                  placeholder=\"Character count (100 max)\"\n                  maxLength=\"100\">Hello world. How are you?</textarea>\n        <md-hint align=\"end\" aria-live=\"polite\">\n          {{characterCountTextareaHintExample.value.length}} / 100\n        </md-hint>\n      </md-input-container>\n    </p>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">\n    Hello&nbsp;\n    <md-input-container color=\"accent\">\n      <input mdInput [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\">\n    </md-input-container>,\n    how are you?\n  </md-toolbar>\n  <md-card-content>\n    <p>\n      <md-input-container>\n        <input mdInput disabled placeholder=\"Disabled field\" value=\"Value\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput required placeholder=\"Required field\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"100% width placeholder\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container style=\"width: 100%\">\n        <input mdInput #input placeholder=\"Character count (100 max)\" maxLength=\"100\">\n        <md-hint align=\"end\" aria-live=\"polite\">{{input.value.length}} / 100</md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container hintLabel=\"Hint label\" style=\"width: 100%\">\n        <input mdInput placeholder=\"Show Hint Label\">\n      </md-input-container>\n    </p>\n\n    <p>\n      <md-input-container>\n        <input mdInput>\n        <md-placeholder>\n          I <md-icon>favorite</md-icon> <b>bold</b> placeholder\n        </md-placeholder>\n        <md-hint>\n          I also <md-icon>home</md-icon> <i>italic</i> hint labels\n        </md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container hintLabel=\"Hint label\" style=\"width: 100%\">\n        <input mdInput #hintLabelWithCharCount placeholder=\"Show Hint Label With Character Count\">\n        <md-hint align=\"end\" aria-live=\"polite\">{{hintLabelWithCharCount.value.length}}</md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-input-container style=\"margin-bottom: 4em\">\n        <textarea mdInput #longHint placeholder=\"Enter text to count\"></textarea>\n        <md-hint>\n          Enter some text to count how many characters are in it. The character count is shown on\n          the right.\n        </md-hint>\n        <md-hint align=\"end\" style=\"white-space: nowrap\" aria-live=\"polite\">\n          Length: {{longHint.value.length}}\n        </md-hint>\n      </md-input-container>\n    </p>\n    <p>\n      <md-checkbox [(ngModel)]=\"color\">Check to change the color:</md-checkbox>\n      <md-input-container [color]=\"color ? 'primary' : 'accent'\">\n        <input mdInput [placeholder]=\"color ? 'Primary color' : 'Accent color'\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</md-checkbox>\n      <md-input-container>\n        <input mdInput\n               [required]=\"requiredField\"\n               [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-checkbox [(ngModel)]=\"hideRequiredMarker\">Check to hide the required marker:</md-checkbox>\n      <md-input-container [hideRequiredMarker]=\"hideRequiredMarker\" style=\"width: 300px\">\n        <input mdInput\n               required\n               [placeholder]=\"hideRequiredMarker ?\n                   'Required Without Marker' : 'Required With Marker'\">\n      </md-input-container>\n    </p>\n    <p>\n      <md-button-toggle-group [(ngModel)]=\"floatingLabel\">\n        <md-button-toggle value=\"auto\">Auto Float</md-button-toggle>\n        <md-button-toggle value=\"always\">Always Float</md-button-toggle>\n        <md-button-toggle value=\"never\">Never Float</md-button-toggle>\n      </md-button-toggle-group>\n    </p>\n\n    <p>\n      <md-input-container [floatPlaceholder]=\"floatingLabel\">\n        <input mdInput placeholder=\"Placeholder\">\n      </md-input-container>\n    </p>\n\n    <p>\n      <md-input-container>\n        <input mdInput placeholder=\"Prefixed\" value=\"example\">\n        <div mdPrefix>Example:&nbsp;</div>\n      </md-input-container>\n      <md-input-container align=\"end\">\n        <input mdInput placeholder=\"Suffixed\" value=\"123\">\n        <span mdSuffix>.00 €</span>\n      </md-input-container>\n      <br/>\n      Both:\n      <md-input-container align=\"end\">\n        <input mdInput #email placeholder=\"Email Address\" value=\"angular-core\">\n        <span mdPrefix><md-icon [class.primary]=\"email.focused\">email</md-icon>&nbsp;</span>\n        <span mdSuffix [class.primary]=\"email.focused\">&nbsp;@gmail.com</span>\n      </md-input-container>\n    </p>\n\n    <p>\n      Empty: <md-input-container><input mdInput></md-input-container>\n      <label>Label: <md-input-container><input mdInput></md-input-container></label>\n    </p>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Number Inputs</md-toolbar>\n  <md-card-content>\n    <table width=\"100%\">\n      <thead>\n      <td>Table</td>\n      <td colspan=\"3\">\n        <button (click)=\"addABunch(5)\">Add 5</button>\n        <button (click)=\"addABunch(10)\">Add 10</button>\n        <button (click)=\"addABunch(100)\">Add 100</button>\n        <button (click)=\"addABunch(1000)\">Add 1000</button>\n      </td>\n      </thead>\n      <tr *ngFor=\"let item of items; let i = index\">\n        <td>{{i+1}}</td>\n        <td>\n          <md-input-container>\n            <input mdInput\n                   type=\"number\"\n                   placeholder=\"value\"\n                   aria-label=\"hello\"\n                   [(ngModel)]=\"items[i].value\">\n          </md-input-container>\n        </td>\n        <td>\n          <input type=\"number\" [(ngModel)]=\"items[i].value\">\n        </td>\n        <td>{{item.value}}</td>\n      </tr>\n    </table>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Forms</md-toolbar>\n  <md-card-content>\n    <md-input-container><input mdInput placeholder=\"reactive\" [formControl]=\"formControl\">\n    </md-input-container>\n    <md-input-container>\n      <input mdInput placeholder=\"template\" [(ngModel)]=\"model\" required [disabled]=\"ctrlDisabled\">\n    </md-input-container>\n    <button md-raised-button color=\"primary\"\n            (click)=\"formControl.enabled ? formControl.disable() : formControl.enable()\">\n      DISABLE REACTIVE CTRL\n    </button>\n    <button md-raised-button color=\"primary\" (click)=\"ctrlDisabled = !ctrlDisabled\">\n      DISABLE TD CTRL\n    </button>\n  </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n  <md-toolbar color=\"primary\">Textarea Autosize</md-toolbar>\n  <md-card-content>\n    <textarea mdTextareaAutosize class=\"demo-textarea\"></textarea>\n    <div>\n      <md-input-container>\n        <textarea mdInput\n                  mdTextareaAutosize\n                  placeholder=\"Autosized textarea\"></textarea>\n      </md-input-container>\n    </div>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n    <md-tab label=\"Get Started\">\n        <h3 class=\"titles1\">Acceso a dispositivos USB en la Web</h3>\n\n        <div class=\"content\">\n            <p>\n                Seguro que estarás pensando en dispositivos de bus serie universal (USB) del estilo teclados, ratones, dispositivos de almacenamiento...\n                <br> Hay otros dispositivos USB no estandarizados que necesitan unos controladores o un SDK nativo para que\n                los desarrolladores puedan aprovecharlos. Este código nativo a impedido que los dispositivos sean utilizados\n                en Web.\n            </p>\n            <p>\n                Vamos a conectar un <b>Arduino Leonardo chip(ATmega32u4)</b>, explicaremos el proceso para SO serios (Linux)\n                <i class=\"fa fa-linux fa-2x\"></i>... <br> Te invitamos a visitar nuestro repo en <a class=\"link\" href=\"https://github.com/davrami/angularWebUsb\"\n                    target=\"blank_\">Github</a>\n            </p>\n\n            <h4 class=\"titles2\">API WebUSB\n                <md-icon class=\"link\">usb</md-icon>\n            </h4>\n            <hr>\n            <p>\n                La <a class=\"link\" href=\"https://wicg.github.io/webusb/\" target=\"blank_\">API de WebUSB</a> porporciona a\n                los vendedores de hardware una forma de exponer con seguridad los servicios de dispositivos USB a las Web.\n            </p>\n\n            <h4 class=\"titles2\">Antes de empezar</h4>\n            <hr>\n            <p>\n                La implementación de la <a class=\"link\" href=\"https://wicg.github.io/webusb/\" target=\"blank_\">API de WebUSB</a>                esta parcialmente completa en Chrome. Actualmente en la versión 58.0 de Chrome podemos habilitar con fines\n                de desarrollo las flags via la Url: <br><b>chrome://flags/#enable-experimental-web-platform-features</b>\n            </p>\n\n            <h5 class=\"titles2\">Habilitar Flags en Chrome</h5>\n            <p>\n                Buscamos las siguientes opciones, las habilitamos y reiniciamos Chrome.\n                <img src=\"assets/Pictures/experimental.png\">\n            </p>\n            <p>\n                <img src=\"assets/Pictures/Webusbflags.png\">\n            </p>\n\n            <h5 class=\"titles2\">Obtener acceso a dispositivos USB</h5>\n            <p>\n                Desde la página de debug de dispositivos que nos proporciona Chrome tendremos acceso a los dispositivos conectados a nuestro\n                navegador mediante esta Url:\n                <br><b>chrome://device-log </b><br>\n            </p>\n            <p>\n                Podrás observar algo así:\n                <img src=\"assets/Pictures/devicespermisiondenied.png\">\n            </p>\n\n            <p>\n                Si al conectar el Arduino tienes en el log un dispositivo como en la foto con Permission denied, deberás seguir añadir una\n                rule <a class=\"link\" href=\"https://wiki.archlinux.org/index.php/Udev_(Espa%C3%B1ol)\" target=\"blank_\">udev</a>                en los dispositivos Usb para poder utilizarlo.\n            </p>\n            <h5 class=\"titles2\">Introduciendo norma Udev</h5>\n            <p>\n                En Linux los dispositivos USB se asignan solo con permisos lectura de forma predeterminada. Para proporcionar accesoa Chrome\n                a nuestro dispositivo deberemos añadir una regla <a class=\"link\" href=\"https://wiki.archlinux.org/index.php/Udev_(Espa%C3%B1ol)\"\n                    target=\"blank_\">udev</a> El primer paso es saber el idVendor y el idProduct de nuestro dispositivo. Desde\n                el terminal con la orden <b>lsusb</b> podremos visualizar esta información:\n                <br><span class=\"coderesult\">003 Device 016: ID 2341:8036 Arduino SA Leonardo (CDC ACM, HID)</span><br> En\n                este caso el idVendor es 2341 y el idProduct es 8036.<br> Para añadir la norma udev deberemos crear un archivo\n                con la orden <b>sudo nano /etc/udev/rules.d/99-arduino.rules</b> con el siguiente contenido(sustituye el\n                idVendor y idProduct por los tuyos):<br>\n                <span class=\"coderesult\">SUBSYSTEM==\"usb\", ATTR{{ '{' }}idVendor{{ '}' }}==\"2341\", ATTR{{ '{' }}idProduct{{ '}' }}==\"8036\", MODE=\"0664\", GROUP=\"plugdev\" ,\n                 SYMLINK+=\"ttyUSB%n\"</span><br>\n            </p>\n            <p>\n                Hay que asegurarse de que tu usuario es miembro del grupo <span class=\"coderesult\">plugdev</span>. Comando\n                para ver los grupos que eres miembro <b>groups</b>, orden para añadirte al grupo <b>sudo usermod -a -G plugdev nombredeusuario</b>\n            </p>\n            <p>\n                Si todo ha ido bien, al conectar el Arduino en Chrome podremos ver en <b>chrome://device-log</b> que nuestro\n                dispositivo ya tiene permisos de lectura:\n                <img src=\"assets/Pictures/logdeviceOk.png\"> <br> Sigue en la pestaña de Let's Code.\n            </p>\n\n            <p>\n                Fuentes:<br>\n                <a class=\"link\" href=\"https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web\" target=\"blank_\">https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web</a>\n                <a class=\"link\" href=\"http://playground.arduino.cc/Linux/All\" target=\"blank_\">http://playground.arduino.cc/Linux/All</a>\n            </p>\n\n        </div>\n\n    </md-tab>\n\n    <md-tab label=\"Let's Code\">\n\n        <h3 class=\"titles1\">Vamos a picar teclas</h3>\n\n        <div class=\"content\">\n            <p>\n                Actualmente para trabajar con Arduino y WebUSB debemos preparar:\n            </p>\n            <ul>\n                <li>Arduino con chip ATmega32u4 (Leonardo)</li>\n                <li><a class=\"link\" href=\"https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web\" target=\"blank_\">Flags</a>                    habilitadas de WebUsb en Chrome</li>\n                <li><a class=\"link\" href=\"https://www.arduino.cc/en/Main/OldSoftwareReleases#previous\" target=\"blank_\">IDE Arduino</a>                    versión 1.6.11</li>\n                <li>Upgrade de librería UsbCore.h de Arduino</li>\n                <li>Introducir librería <a class=\"link\" href=\"https://github.com/webusb/arduino/tree/gh-pages/library/WebUSB\"\n                        target=\"blank_\">WebUsb</a></li>\n\n            </ul>\n\n            <h4 class=\"titles2\">Upgrade UsbCore.h</h4>\n            <hr>\n            <p>\n                Para que nuestro dispositivo tenga soporte de la API WebUSB deberemos mejorar nuestro dispositivo de <b>USB2.0</b>                a <b>USB2.1</b><br> Deberemos modificar el archivo USBCore.h que se encuentra en directorio de instalacion\n                del IDE Arduino\n                <b>hardware/arduino/avr/cores/arduino/USBCore.h</b> Busca la linia <span class=\"coderesult\">#define USB_VERSION 0x200</span>                y cambia el valor <b>0x200</b> a <b>0x210</b>\n            </p>\n            <p>\n                El siguiente paso es copiar la librería de <a class=\"link\" href=\"https://github.com/webusb/arduino/tree/gh-pages/library/WebUSB\"\n                    target=\"blank_\">WebUsb</a> dentro de la carpeta <b>libraries</b> del directorio de instalación del IDE Arduino.\n            </p>\n            <h4 class=\"titles2\">Cargando Sketch WebUsb</h4>\n            <hr>\n            <p>\n                Para realizar la primera prueba cargaremos un primer Sketch proporcionado en el siguiente\n                <a class=\"link\" href=\"https://github.com/webusb/arduino/tree/gh-pages/demos/console/sketch\" target=\"blank_\">repo</a>                .Carga el sketch al arduino y abre Chrome, deberá mostrarte un mensaje como el de la imagen:\n            </p>\n            <img src=\"assets/Pictures/connected.png\" style=\"width: 460px;\">\n            <h5 class=\"titles2\">Sketch <a class=\"link\" href=\"https://github.com/webusb/arduino/tree/gh-pages/demos/console/sketch\" target=\"blank_\">Demo</a></h5>\n\n            <div class=\"code\">\n                <section [innerHTML]=\"demoArduino\" highlight-js-content=\".highlight\"></section>\n            </div>\n\n            <h5 class=\"titles2\">Notas</h5>\n            <p>\n                Para trabajar con el IDE de Arduino es posible que tu usuario tenga que ser miembro del grupo dialout. Asegurate de que tienes\n                la librería de WebUsb cargada en el IDE, puedes comprobar si aparece en la pestaña de Sketch > Import Library...\n                debería aparecer WebUsb. Comprueba que tienes seleccionado el port correcto en el IDE y la placa correcta\n                seleccionada.\n            </p>\n\n            <p>\n                Fuentes:<br>\n                <a class=\"link\" href=\" https://webusb.github.io/arduino/ \" target=\"blank_\"> https://webusb.github.io/arduino/</a><br>\n                <a class=\"link\" href=\"https://github.com/webusb/arduino\" target=\"blank_\">https://github.com/webusb/arduino</a>\n            </p>\n        </div>\n\n    </md-tab>\n\n    <md-tab label=\"First Demo\">\n\n        <h3 class=\"titles1\">WebUSB ❤ ️Arduino</h3>\n\n        <div class=\"content\">\n\n            <h4 class=\"titles2\">Demo Console</h4>\n            <hr>\n            <p>\n                Para probar la demo Console deberemos tener cargado el\n                <a class=\"link\" href=\"https://github.com/webusb/arduino/tree/gh-pages/demos/console/sketch\" target=\"blank_\">Sketch</a>                que hemos mencionado en el paso previo.<br> Entra en <a class=\"link\" href=\"https://webusb.github.io/arduino/demos/console/\"\n                    target=\"blank_\">https://webusb.github.io/arduino/demos/console/</a>\n            </p>\n            <p>\n                Deberías encontrar algo así:\n                <img src=\"assets/Pictures/demoConsole1.png\"> <br>\n            </p>\n\n            <p>\n                Conectamos nuestro Arduino Leonardo y presionamos el botón Connect, nos aparecerá un dialog en el cual aparecerá los dispositivos\n                disponibles para conectar via WebUsb, debería aparecer nuestro Arduino:\n                <img src=\"assets/Pictures/demoConsole2.png\"> <br>\n            </p>\n\n            <p>\n                Una vez conectado el Arduino nos indica que el dispositivo esta Connected y podremos ver en la consola un objeto Serial.Port\n                con la información del dispositivo.\n                <img src=\"assets/Pictures/demoConsole3.png\"> <br>\n            </p>\n            <p> <img src=\"assets/Pictures/demoConsole4.png\" style=\"width: 460px;\"> <br>\n            </p>\n            <h4 class=\"titles2\">LED ON <i class=\"material-icons link\">lightbulb_outline</i></h4>\n            <hr>\n\n            <p>\n                En esta demo podemos encender y apagar Leds via WebUsb. Puedes conectar un led al pin 13 \n                y GND o simplemente visualizar el led integrado en la placa \"L\", junto al led ON.<br>\n                Si introducimos <b>H</b> (HIGH) en la consola, el led integrado o led en pin 13 se encenderá. Si introducimos\n                <b>L</b> (LOW) el led se apagará.<br>   \n                <img src=\"assets/Pictures/demoConsole5.png\" style=\"width: 49%;\"> \n                <img src=\"assets/Pictures/pin13Sketch.png\" style=\"width: 49%;\"> <br>\n\n            </p>\n\n            <p>\n                Fuentes:<br>\n                <a class=\"link\" href=\" https://webusb.github.io/arduino/ \" target=\"blank_\"> https://webusb.github.io/arduino/</a><br>\n                <a class=\"link\" href=\"https://github.com/webusb/arduino\" target=\"blank_\">https://github.com/webusb/arduino</a>\n            </p>\n        </div>\n\n\n\n    </md-tab>\n\n</md-tab-group>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<md-card id=\"cardLeo\">\n    <md-card-title>\n        <p> Arduino Leonardo</p>\n    </md-card-title>\n  <img md-card-image src=\"assets/Pictures/Leonardo.jpg\">\n</md-card>\n\n<md-card id=\"cardFirmata\">\n    <md-card-title>\n        <p>Sketch</p>\n    </md-card-title>\n  <img md-card-image src=\"assets/Pictures/ide.png\">\n</md-card>\n\n<md-card id=\"cardWebUSb\">\n    <md-card-title>\n        <p>WebUSB API</p>\n    </md-card-title>\n  <img md-card-image src=\"assets/Pictures/webusb.jpg\">\n</md-card>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"titles1\">\n    Wiki\n    <md-icon>usb</md-icon>\n</h3>\n<div class=\"content\">\n\n    <h4 class=\"titles2\">Arduino Leonardo\n        <i class=\"material-icons link\">settings</i>\n    </h4>\n    <hr>\n\n    <p>\n        Es una placa electrónica basada en el microcontrolador ATmega32u4 el cual incorpora comunicación USB. Posee 32KB de memoría.\n        <br> Puede ser alimentada a través de la conexión micro USB o con una fuente de alimentación externa de entre 6-20\n        Voltios.<br> Gestiona 20 pines E/S digitales que se pueden utilizar como entrada o salida. Proporciona un máximo\n        de 40 mA.<br> Dispone de un botón de reset, protección en el pin 13 para conectar directamente un led sin preocuparnos\n        de su voltage y leds integrados, entre estos un led linkado con el pin 13.\n    </p>\n    <img src=\"assets/Pictures/arduino-leo.png\" style=\"width: 50%;\"> <br>\n\n    <p>Mas info:\n        <a class=\"link\" href=\"https://www.arduino.cc/en/main/arduinoBoardLeonardo\" target=\"blank_\"> https://www.arduino.cc/en/main/arduinoBoardLeonardo</a><br>\n    </p>\n\n    <hr>\n    <h4 class=\"titles2\">LED\n        <i class=\"material-icons link\">wb_incandescent</i>\n    </h4>\n    <hr>\n    <p>\n        <b>L</b>ight-<b>E</b>mitting <b>D</b>iode. <br> Tiene una vida útil de 80 000 a 100 000 horas antes de que su brillo\n        se empiece a atenuar.<br> Un voltaje muy alto puede provocar que el LED se queme,te dejamos una calculadora de resistencias\n        <a class=\"link\" href=\"https://www.inventable.eu/paginas/LedResCalculatorSp/LedResCalculatorSp.html\" target=\"blank_\">calculadora de resistencias</a>        para que no sigas quemando leds. <br> Existen tres formas principales de conocer la polaridad de un led:<br>\n    </p>\n    <ul>\n        <li>La pata más larga siempre va a ser el ánodo o positivo. </li>\n        <li> En el lado del cátodo, la base del led tiene un borde plano. </li>\n        <li>Dentro del led, la plaqueta indica el ánodo. Se puede reconocer porque es más pequeña que el yunque, que indica el\n            cátodo.\n        </li>\n\n    </ul>\n    <img src=\"assets/Pictures/LEDschema.jpg\" style=\"width: 30%;\"> <br>\n\n    <p>\n        Fuentes:<br>\n        <a class=\"link\" href=\"https://es.wikipedia.org/wiki/Led\" target=\"blank_\">https://es.wikipedia.org/wiki/Led</a><br>\n        <a class=\"link\" href=\"https://www.inventable.eu/paginas/LedResCalculatorSp/LedResCalculatorSp.html\" target=\"blank_\">\n        https://www.inventable.eu/paginas/LedResCalculatorSp/LedResCalculatorSp.html</a><br>\n    </p>\n    <hr>\n\n    <h4 class=\"titles2\">Resistencia</h4>\n    <hr>\n    <p>\n        Una resistencia también llamado resistor es un elemento que causa oposición al paso de la corriente, causando que en sus\n        terminales aparesca una diferencia de tensión (un voltaje).<br> Para poder saber el valor de las resistencias\n        sin tener que medirlas, existe un código de colores de las resistencia que nos ayuda a obtener con facilidad este\n        valor con sólo verlas.\n    </p>\n    <img src=\"assets/Pictures/Rescolor.jpg\" style=\"width: 50%;\"> <br>\n\n    <p>\n        Fuentes:<br>\n        <a class=\"link\" href=\"http://unicrom.com/resistor-resistencia/\" target=\"blank_\">http://unicrom.com/resistor-resistencia/</a><br>\n    </p>\n    <hr>\n\n<h4 class=\"titles2\">LCD <i class=\"material-icons link\">gradient</i></h4>\n    <hr>\n    <p>\n       LCD viene del inglés <b>L</b>iquid <b>C</b>rystal <b>D</b>isplay, o sea Pantalla de cristal liquido.\n       El modelo que utilizamos en las demos es <b>1602</b>, 16×2 (16 caracteres x 2 líneas).<br>\n    </p>\n    <img src=\"assets/schemas/lcdSketch.png\"> <br>\n\n    <p>\n        Para mas info:<br>\n        <a class=\"link\" href=\"http://www.prometec.net/displays-lcd/\" target=\"blank_\">http://www.prometec.net/displays-lcd/</a><br>\n    </p>\n\n\n</div>"

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(107);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        styles: [__webpack_require__(175)],
        template: __webpack_require__(189),
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LCDComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LCDComponent = (function () {
    /**
     * constructor de LCDComponent
     * @param elementRef
     */
    function LCDComponent(elementRef) {
        this.elementRef = elementRef;
        //codigo arduino
        this.sampleContent1 = "\n         <pre >\n            <code class=\"arduino highlight\">\n  /**\n  *Sketch que recibe un texto y lo muestra\n  *por un pantalla LCD.S\n  */\n  #include &ltWebUSB.h&gt\n\n  const WebUSBURL URLS[] = {\n    { 1, \"webusb.github.io/arduino/demos/\" },\n    { 0, \"localhost:8000\" },\n  };\n\n  const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };\n\n  WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);\n\n  #define Serial WebUSBSerial\n\n  /**\n   Instancia de los pins que vamos a utilitzar.\n  */\n  const int ledPin = 13;\n\n  void setup() {\n    while (!Serial) {\n      ;\n    }\n    Serial.begin(9600);\n    Serial.write(\"Sketch begins.\r\n> \");\n    Serial.flush();\n    /**\n       assignamos los pins como salida.\n    */\n    pinMode(ledPin, OUTPUT);\n    lcd.begin(16, 2);\n  }\n\n  void loop() {\n    //variable que guarda los datos que enviamos desde el navegador\n    int byte = \"\";\n\n    /**\n     * El loop estara constantemente pendiente que recibe datos.\n     * Cuando recibe un dato lo muestra por la pantalla.\n     */\n    if (Serial && Serial.available()) {\n      //limpia la pantall\n      lcd.clear();\n      //mueve el cursos a la posici\u00F3n 1,1\n      lcd.setCursor(1, 1);\n      while (Serial.available() > 0) {\n        byte = Serial.read();\n        lcd.write(byte);\n      }\n      //cuando recibe H enciende el led 13\n      if (byte == 'H') {\n        Serial.write(\"\r\nTurning LED on.\");\n        digitalWrite(ledPin, HIGH);\n      } else if (byte == 'L') {\n        //cuando recibe L apaga el LED 13\n        Serial.write(\"\r\nTurning LED off.\");\n        digitalWrite(ledPin, LOW);\n      } else {\n\n      }\n      Serial.flush();\n    }\n  }\n            </code>\n        </pre>\n        \n        ";
        //codigo script
        this.sampleContent2 = "\n         <pre>\n            <code class=\"typescript highlight\">\n  /**\n   * evento que se ejecuta al pulsar el boton  #led\n   * envia (HIGH/LOW) para cambiar el estado del pin 13.\n   */\n  $(document).on(\"click\", \"#led\", function () {\n      if (led == \"H\") {\n          led = \"L\"\n          $(this).textContent = 'Led Off';\n      } else {\n          led = \"H\"\n          $(this).textContent = 'Led On';\n\n      }\n      if (port !== undefined) {\n          port.send(textEncoder.encode(led)).catch(error => {\n              console.log('Send error: ' + error);\n          });\n      }\n  });\n            </code>\n        </pre>\n\n        <pre>\n          <code class=\"typescript highlight\">\n  /**\n   * Evento que se ejecuta cuando se pulsa el bot\u00F3n #send.\n   * Envia el texto del input y se lo envia al dispositivo.\n   */\n  $(document).on(\"click\", \"#send\", function () {\n      var text = document.getElementById('text').value;\n      console.log(text);\n      $(\".lcd\").html(text);\n\n      if (port !== undefined) {\n          port.send(textEncoder.encode(text)).catch(error => {\n              console.log('Send error: ' + error);\n          });\n      }\n  });\n          </code>\n        </pre>\n\n        \n        ";
    }
    /**
    * incluimos de forma dinámica los script que vamos a utilizar
    */
    LCDComponent.prototype.ngAfterViewInit = function () {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "assets/js/serial/serial.js";
        this.elementRef.nativeElement.appendChild(o);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/LCD/led.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    return LCDComponent;
}());
LCDComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-LCD',
        styles: [__webpack_require__(176)],
        template: __webpack_require__(190),
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LCDComponent);

var _a;
//# sourceMappingURL=LCD.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEDComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LEDComponent = (function () {
    /**
     * constructor de la clase LEDComponent
     * assigna a cada pin los mensajes que envian para encender
     * y apagar y sus estado actual;
     */
    function LEDComponent(elementRef) {
        this.elementRef = elementRef;
        //codigo arduino
        this.sampleContent1 = "\n         <pre >\n            <code class=\"arduino highlight\">\n /**\n * Sketch que pasado un byte, asociado a una funci\u00F3n\n * enciende o apaga un LED.\n */\n  #include &ltWebUSB.h&gt\n\n  const WebUSBURL URLS[] = {\n  { 1, \"webusb.github.io/arduino/demos/\" },\n  { 0, \"localhost:8000\" },\n  };\n\n  const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };\n\n  WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);\n\n  #define Serial WebUSBSerial\n\n  /**\n   * Instancia de los pins que vamos a utilitzar.\n   */\n  const int ledPin12 = 12;\n  const int ledPin11 = 11;\n  const int ledPin10 = 10;\n  const int ledPin9 = 9;\n  int ledPins[] = {\n    12, 11, 10, 9\n  };\n  int pinCount = 4;\n  int val = 0;\n\n  void setup() {\n    while (!Serial) {\n      ;\n    }\n    Serial.begin(9600);\n    Serial.write(\"Sketch begins.\r\n> \");\n    Serial.flush();\n    /**\n     * assignamos a los pins como salida.\n     */\n    pinMode(ledPin12, OUTPUT);\n    pinMode(ledPin11, OUTPUT);\n    pinMode(ledPin10, OUTPUT);\n    pinMode(ledPin9, OUTPUT);\n  }\n\n  void loop() {\n    /**\n     * El loop estara constantemente pendiente que recibe datos.\n     * Cuando recibe un byte se ir\u00E1 a la parte del codigo que corresponde.\n     */\n    if (Serial && Serial.available()) {\n\n      int byte = Serial.read();\n\n      if (byte == '1') {\n        digitalWrite(ledPin12, HIGH); //enciende el LED\n        val = digitalRead(ledPin12);  //guarda su valor\n        /**\n         * envia al navegador su numero de digital y su valor\n         * 12 y 1 o 0\n         */\n        Serial.write(\"12\"); \n        Serial.write(val);\n      } else if (byte == '2') {\n        digitalWrite(ledPin12, LOW); //apaga el LED\n        val = digitalRead(ledPin12);\n        Serial.write(\"12\");\n        Serial.write(val);\n      } else if (byte == '3') {\n        digitalWrite(ledPin11, HIGH);\n        val = digitalRead(ledPin11);\n        Serial.write(\"11\");\n        Serial.write(val);\n      } else if (byte == '4') {\n        digitalWrite(ledPin11, LOW);\n        val = digitalRead(ledPin11);\n        Serial.write(\"11\");\n        Serial.write(val);\n      } else if (byte == '5') {\n        digitalWrite(ledPin10, HIGH);\n        val = digitalRead(ledPin10);\n        Serial.write(\"10\");\n        Serial.write(val);\n      } else if (byte == '6') {\n        digitalWrite(ledPin10, LOW);\n        val = digitalRead(ledPin10);\n        Serial.write(\"10\");\n        Serial.write(val);\n      } else if (byte == '7') {\n        digitalWrite(ledPin9, HIGH);\n        val = digitalRead(ledPin9);\n        Serial.write(\"9\");\n        Serial.write(val);\n      } else if (byte == '8') {\n        digitalWrite(ledPin9, LOW);\n        val = digitalRead(ledPin9);\n        Serial.write(\"9\");\n        Serial.write(val);\n      } else {\n        for (int thisPin = 0; thisPin < pinCount; thisPin++) {\n          digitalWrite(ledPins[thisPin], HIGH);\n          val = digitalRead(ledPins[thisPin]);   // read the input pin\n          Serial.write(val);\n          delay(500);\n          digitalWrite(ledPins[thisPin], LOW);\n        }\n\n      }\n\n      Serial.flush();\n    }\n  }\n            </code>\n        </pre>\n        \n        ";
        //codigo script
        this.sampleContent2 = "\n         <pre>\n            <code class=\"typescript highlight\">\n  //array de los pins que utilizaremos\n  public pins: Array<any>;\n\n  /**\n   * constructor de la clase LEDComponent\n   * assigna a cada pin los mensajes que envian para encender\n   * y apagar y su estado actual;\n   */\n  constructor(private elementRef: ElementRef) {\n    this.pins = [\n      ['pin12', 1, 2, false],\n      ['pin11', 3, 4, false],\n      ['pin10', 5, 6, false],\n      ['pin9', 7, 8, false]\n    ];\n  }\n\n  /**\n   * incluimos de forma din\u00E1mica los script que vamos a utilizar\n   */\n  ngAfterViewInit() {\n    var o = document.createElement(\"script\");\n    o.type = \"text/javascript\";\n    o.src = \"assets/js/serial/serial.js\";\n    this.elementRef.nativeElement.appendChild(o);\n\n    var s = document.createElement(\"script\");\n    s.type = \"text/javascript\";\n    s.src = \"assets/js/rainbow/rainbow.js\";\n    this.elementRef.nativeElement.appendChild(s);\n  }\n\n  /**\n   * Funci\u00F3n que envia un mensaje para cambiar su estado (HIGH/LOW)\n   * @param pin el pin que queremos cambia su estado\n   */\n  toggle(pin) {\n    console.log(pin);\n\n    this.pins.forEach(function (v, i) {\n      if (v[0].includes(pin)) {\n        v[3] = !v[3];\n        (v[3]) ? port.send(textEncoder.encode(v[1])) : port.send(textEncoder.encode(v[2]));\n      }\n    });\n  }\n            </code>\n        </pre>\n        \n        ";
        this.pins = [
            ['pin12', 1, 2, false],
            ['pin11', 3, 4, false],
            ['pin10', 5, 6, false],
            ['pin9', 7, 8, false]
        ];
    }
    /**
     * incluimos de forma dinámica los script que vamos a utilizar
     */
    LEDComponent.prototype.ngAfterViewInit = function () {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "assets/js/serial/serial.js";
        this.elementRef.nativeElement.appendChild(o);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/rainbow/rainbow.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    /**
     * Funcion que envia un mensaje para cambiar su estado (HIGH/LOW)
     * @param pin el pin que quremos cambia su estado
     */
    LEDComponent.prototype.toggle = function (pin) {
        console.log(pin);
        this.pins.forEach(function (v, i) {
            if (v[0].includes(pin)) {
                v[3] = !v[3];
                (v[3]) ? port.send(textEncoder.encode(v[1])) : port.send(textEncoder.encode(v[2]));
            }
        });
    };
    return LEDComponent;
}());
LEDComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-LED',
        styles: [__webpack_require__(177)],
        template: __webpack_require__(191),
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LEDComponent);

var _a;
//# sourceMappingURL=LED.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PongComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PongComponent = (function () {
    /**
     * constructor de la clase PongComponent
     */
    function PongComponent(elementRef) {
        this.elementRef = elementRef;
        //codigo arduino
        this.sampleContent1 = "\n         <pre >\n            <code class=\"arduino highlight\">\n    /**\n     * Sketch que permite jugar al pong.\n     */\n    #include &ltWebUSB.h&gt\n\n    #include &ltLiquidCrystal.h&gt\n\n    LiquidCrystal lcd(7, 8, 9, 10, 11, 12);\n\n    #define Serial WebUSBSerial\n\n    const WebUSBURL URLS[] = {\n    { 1, \"webusb.github.io/arduino/demos/\" },\n    { 0, \"localhost:8000\" },\n    };\n\n    const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };\n\n    WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);\n\n    /**\n     * Instancia de los pins que vamos a utilitzar.\n     */\n    const int p1 = A0;\n    const int p2 = A1;\n\n    int value1;      //variable que almacena la lectura anal\u00F3gica raw\n    int position1;   //posicion del potenciometro en tanto por ciento\n\n    int value2;      //variable que almacena la lectura anal\u00F3gica raw\n    int position2;   //posicion del potenciometro en tanto por ciento\n\n\n    void setup() {\n    while (!Serial) {\n        ;\n    }\n    Serial.begin(9600);\n    Serial.write(\"Sketch begins.\r\n> \");\n    Serial.flush();\n    lcd.begin(16, 2);\n    }\n    \n    void loop() {\n    /**\n     * El loop estar\u00E1 constantemente pendiente que recibe datos.\n     * Cuando recibe un byte se ir\u00E1 a la parte del codigo que corresponde.\n     */\n    if (Serial && Serial.available()) {\n        lcd.setCursor(4, 1);\n\n        value1 = analogRead(p1); // realizar la lectura anal\u00F3gica raw\n        position1 = map(value1, 0, 1023, 0, 100);  // convertir a porcentaje\n\n        value2 = analogRead(p2); // realizar la lectura anal\u00F3gica raw\n        position2 = map(value2, 0, 1023, 0, 100);  // convertir a porcentaje\n\n        int byte = Serial.read();\n        \n        if (byte == 'H') {\n            // si recibe H envia las posiciones de los potenciometros\n            Serial.write(position1);\n            Serial.write('-');\n            Serial.write(position2);\n        } else if(byte!='H'){\n            // si recibe otro dato(la puntuaci\u00F3n) lo muestra por pantalla\n            lcd.clear();\n            while (Serial.available() > 0) {\n                byte = Serial.read();\n                lcd.write(byte);\n            }\n        }\n        \n         Serial.flush();\n        }\n    \n    }\n            </code>\n        </pre>\n        \n        ";
        //codigo script
        this.sampleContent2 = "\n         <pre>\n            <code class=\"typescript highlight\">\n    /**\n     * M\u00E9todo que se ejecuta cuando el navegador recibe datos \n     * del dispositivo. Separa los datos que recibimos con un split\n     * y lo asigna a pPlayer1 y pPlayer2\n     */\n    port.onReceive = data => {\n        let textDecoder = new TextDecoder();\n        value = textDecoder.decode(data) + \"\";\n        posiciones = value.split(\"-\");\n        pPlayer1 = posiciones[0].charCodeAt();\n        pPlayer2 = posiciones[1].charCodeAt();\n\n        if (p1 != undefined || p2 != undefined) {\n            p1.y = (270 * pPlayer1) / 100;\n            p2.y = (270 * pPlayer2) / 100;\n        }\n    }\n            </code>\n        </pre>\n\n        <pre>\n            <code class=\"typescript highlight\">\n   // Initialize our game instance\n    var game = new Game();\n\n    function MainLoop() {\n        game.update();\n        game.draw();\n        // Call the main loop again at a frame rate of 30fps\n        setTimeout(MainLoop, 33.3333);\n    }\n\n    MainLoop();\n\n    /**\n     * hacemos un intervalo cada 50 milisegundos para pregutar sobre la\n     * posici\u00F3n de los potenciometros \n     */\n    setInterval(function () { port.send(textEncoder.encode(\"H\")); }, 50);\n            </code>\n        </pre>\n        \n        ";
    }
    /**
     * incluimos de forma dinámica los script que vamos a utilizar
     */
    PongComponent.prototype.ngAfterViewInit = function () {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "assets/js/serial/serial.js";
        this.elementRef.nativeElement.appendChild(o);
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = "assets/js/pong/usb.js";
        this.elementRef.nativeElement.appendChild(a);
    };
    /**
     * incluye el arxivo pong.js
     */
    PongComponent.prototype.startGame = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/pong/pong.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    return PongComponent;
}());
PongComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pong',
        styles: [__webpack_require__(178)],
        template: __webpack_require__(192),
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], PongComponent);

var _a;
//# sourceMappingURL=pong.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PotenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PotenComponent = (function () {
    /**
     * constructor de la clase PotenComponent
     */
    function PotenComponent(elementRef) {
        this.elementRef = elementRef;
        //codigo arduino
        this.sampleContent1 = "\n         <pre >\n            <code class=\"arduino highlight\">\n /**\n  * Sketch que hace una lectura de un potenciometro y lo envia\n  * al navegadr\n  */\n  #include &ltWebUSB.h&gt\n\n  const WebUSBURL URLS[] = {\n    { 1, \"webusb.github.io/arduino/demos/\" },\n    { 0, \"localhost:8000\" },\n  };\n\n  const uint8_t ALLOWED_ORIGINS[] = { 1, 2 };\n\n  WebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);\n\n  #define Serial WebUSBSerial\n\n    /**\n     * Instancia de los pins analogicos que vamos a utilitzar.\n     */\n    const int analogPin = A0;\n    int value;      //variable que almacena la lectura anal\u00F3gica raw\n    int position;   //posicion del potenciometro en tanto por ciento\n    float voltage;  //voltage que recibe el potenciometro\n    void setup() {\n    while (!Serial) {\n        ;\n    }\n    Serial.begin(9600);\n    Serial.write(\"Sketch begins.\r\n> \");\n    Serial.flush();\n    }\n    \n    void loop() {\n        /**\n         * El loop estara constantemente pendiente que recibe datos.\n         */\n        if (Serial && Serial.available()) {\n\n            value = analogRead(analogPin); // realizar la lectura anal\u00F3gica raw\n            position = map(value, 0, 1023, 0, 100);  // convertir a porcentaje\n\n            voltage = value*(5.0/1023.0); //conversi\u00F3n en voltage\n        \n            int byte = Serial.read();\n            \n            if (byte == 'P') {\n            //cuando recibe una P envia la posici\u00F3n del potenciometro\n            Serial.write(\"Por\");//envia Por+(valor)\n            Serial.write(position);\n            }else if(byte == 'V'){\n            //cuando recibe una V envia los voltages qu recibe el potenci\u00F3metro\n            Serial.write(\"Vol\");//enviar Vol+(valor)\n            Serial.write(voltage);\n            }\n            Serial.flush();\n        }\n\n    }\n                </code>\n        </pre>\n        \n        ";
        //codigo script
        this.sampleContent2 = "\n         <pre>\n            <code class=\"typescript highlight\">\n    /**\n     * metodo que se ejecuta cuando el navegador recibe datos \n     * del dispositio.\n     */\n    port.onReceive = data => {\n        let textDecoder = new TextDecoder();\n        value = textDecoder.decode(data) + \"\";\n\n        if (value.indexOf(\"Por\")) {\n            /**\n             * cuando recibe datos con la palabra Por\n             * los procesa y lo muestra en el navegador\n             */\n            valueTradcVol = value.substr(3, value.length - 1);\n            $(\"#valVolt\").html(valueTradcVol.charCodeAt());\n        } else if (value.indexOf(\"Vol\")) {\n            /**\n             * cuando recibe datos con la palabra Vol\n             * los procesa y lo muestra en el navegador\n             */\n            valueTradcPor = value.substr(3, value.length - 1);\n            $(\"#valPor\").html(valueTradcPor.charCodeAt());\n        }\n    }\n            </code>\n        </pre>\n\n        <pre>\n            <code class=\"typescript highlight\">\n    /**\n     * Evento que se ejecuta cuando se pulsa el bot\u00F3n #send.\n     * Ejecuta un setInterval pidiendo la posici\u00F3n y el voltage.\n     * Ademas inserta dos graficos para representar estos valores.\n     */\n    $(document).on(\"click\", \"#send\", function () {\n        setInterval(function () { port.send(textEncoder.encode(\"P\")); }, 500);\n        porChart();\n\n\n        setInterval(function () { port.send(textEncoder.encode(\"V\")); }, 500);\n        Voltchart();\n    });\n\n            </code>\n        </pre>\n        \n        ";
    }
    ;
    /**
     * incluimos de forma dinámica los script que vamos a utilizar
     */
    PotenComponent.prototype.ngAfterViewInit = function () {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "assets/js/serial/serial.js";
        this.elementRef.nativeElement.appendChild(o);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/potenciometro/potenciometro.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    return PotenComponent;
}());
PotenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poten',
        template: __webpack_require__(193),
        styles: [__webpack_require__(179)],
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], PotenComponent);

var _a;
//# sourceMappingURL=poten.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SandboxComponent = (function () {
    /**
     * constructor de la clase SandboxComponent
     * assigna a cada pin los mensajes que envian para encender
     * y apagar y sus estado actual;
     */
    function SandboxComponent(elementRef) {
        this.elementRef = elementRef;
        //funcion de ejemplo
        this.textToSend = "port.send(textEncoder.encode('13H'))";
        /**
         * Convierte el texto que escribimos en una funcion
         * y la ejecuta.
         */
        this.send = function () {
            var code = this.textToSend;
            console.log("executing code: " + code);
            var executeCode = new Function(code);
            executeCode();
        };
        //codigo arduino
        this.codeSandboxArduino = "\n    <pre >\n            <code class=\"arduino highlight\">\n/**\n * Sketch sandbox donde definimos unos pins analogicos y digitales. Creamos\n * funciones en el frontend y se ejecuta en la placa, tenemos independecia de c\u00F3digo\n * en el dispositivo.\n */\n#include &ltWebUSB.h&gt\n#include &ltLiquidCrystal.h&gt\nLiquidCrystal lcd(7, 8, 9, 10, 11, 12);\n\nconst WebUSBURL URLS[] = {\n  { 1, \"webusb.github.io/arduino/demos/\" },\n  { 0, \"localhost:8000\" },\n};\n\nconst uint8_t ALLOWED_ORIGINS[] = { 1, 2 };\n\nWebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);\n\n#define Serial WebUSBSerial\n\n/**\n  * Instancia de los pins que vamos a utilitzar.\n*/\nconst int ledPin13 = 13;\nconst int ledPin12 = 12;\nconst int ledPin11 = 11;\nconst int ledPin10 = 10;\nconst int pins [] = {10, 11, 12, 13};\nboolean states [] = {0, 0, 0, 0};\nvoid writeString(String stringData) {\n  for (int i = 0; i &lt stringData.length(); i++) {\n    Serial.write(stringData[i]);\n  }\n  Serial.flush();\n}\n\nvoid setup() {\n  while (!Serial) {\n    ;\n  }\n  Serial.begin(9600);\n  Serial.write(\"Sketch begins\");\n  Serial.flush();\n  pinMode(ledPin10, OUTPUT);\n  pinMode(ledPin11, OUTPUT);\n  pinMode(ledPin12, OUTPUT);\n  pinMode(ledPin13, OUTPUT);\n  lcd.begin(16, 2);\n}\n\nvoid loop() {\n  /**\n     El loop estar\u00E1 constantemente pendiente que recibe datos.\n     Cuando recibe un byte se ir\u00E1 a la parte del codigo que corresponde.\n  */\n  int byte;\n  int pin = 0;\n  boolean state;\n  boolean analog = false;\n\n  if (Serial && Serial.available()) {\n    lcd.clear();\n    lcd.setCursor(0, 0);\n    while (Serial.available() &gt 0) {\n      byte = Serial.read();\n      lcd.write(byte);\n      //A0, A0, 10, 11, 12, 13\n\n      switch (byte) {\n        case '0'  :\n          pin = 10;\n          break;\n        case '1'  :\n          pin = 11;\n          break;\n        case '2'  :\n          pin = 12;\n          break;\n        case '3'  :\n          pin = 13;\n          break;\n        case 'L'  :\n          state = false;\n          break;\n        case 'H'  :\n          state = true;\n          break;\n        case 'A'  :\n          analog = true;\n          break;\n      }\n    }\n  }\n\n  if (pin &gt 0) {\n    lcd.setCursor(0,1);\n    if (!analog) {    \n      if (state) {\n        writeString(String(pin)+\" HIGH\");\n        lcd.print(String(pin)+\" HIGH\");\n      } else {\n        writeString(String(pin)+\" LOW\");\n        lcd.print(String(pin)+\" LOW\");\n      }\n      states[pin - 10] = state;\n    }\n  }\n\n  if (!analog) {\n    for (int a = 0 ; a &lt sizeof(pins)-1 ; a++) {\n      if (states[a]) {\n        digitalWrite(pins[a], HIGH);\n      } else {\n        digitalWrite(pins[a], LOW);\n      }\n    }\n    \n  } else {\n    if(pin == 10 && analog){\n           writeString(\"A0: \"+ String(analogRead(A0)*(5.0/1023.0))+\" volts\");\n           lcd.print(\"A0: \"+ String(analogRead(A0)*(5.0/1023.0))+\" volts\");\n    }else if(pin == 11 && analog){\n           writeString(\"A1: \"+ String(analogRead(A1)*(5.0/1023.0))+\" volts\");\n           lcd.print(\"A1: \"+ String(analogRead(A1)*(5.0/1023.0))+\" volts\");\n    }\n  }\n \n}\n\n</pre>\n</code>\n        ";
        this.pins = [
            ['pin12', 1, 2, false],
            ['pin11', 3, 4, false],
            ['pin10', 5, 6, false],
            ['pin9', 7, 8, false]
        ];
    }
    /**
     * incluimos de forma dinámica los script que vamos a utilizar
     */
    SandboxComponent.prototype.ngAfterViewInit = function () {
        var o = document.createElement("script");
        o.type = "text/javascript";
        o.src = "assets/js/serial/serial.js";
        this.elementRef.nativeElement.appendChild(o);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/sandbox/sandbox.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    return SandboxComponent;
}());
SandboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'input-demo',
        template: __webpack_require__(194),
        styles: [__webpack_require__(180)],
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SandboxComponent);

var _a;
//# sourceMappingURL=sandbox.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exampleDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**Form */

var max = 5;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/**Form */
var exampleDemoComponent = (function () {
    function exampleDemoComponent(highlightJsService) {
        this.highlightJsService = highlightJsService;
        this.c = 0;
        this.sampleContent = "\n         <pre>\n            <code class=\"typescript highlight\">\n                class Greeter {\n                    constructor(public greeting: string) { }\n                    greet() {\n                        return \"hello world\";\n                    }\n                };\n            </code>\n        </pre>\n        <pre>\n            <code class=\"javascript highlight\">\n                alert('Hello, World!');\n            </code>\n        </pre>\n        ";
        /**################### Form Example ###################### */
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]('hello', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAIL_REGEX)]);
        this.model = 'hello';
    }
    exampleDemoComponent.prototype.ngOnInit = function () {
        /**
         * Call to add a point in Chart
         */
    };
    exampleDemoComponent.prototype.ngAfterViewInit = function () {
    };
    exampleDemoComponent.prototype.highlightByService = function (target) {
        this.highlightJsService.highlight(target);
    };
    exampleDemoComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    return exampleDemoComponent;
}());
exampleDemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exampleDemo',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__["HighlightJsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__["HighlightJsService"]) === "function" && _a || Object])
], exampleDemoComponent);

var _a;
//# sourceMappingURL=exampleDemo.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStartedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var getStartedComponent = (function () {
    function getStartedComponent(highlightJsService) {
        this.highlightJsService = highlightJsService;
        this.demoArduino = "\n         <pre>\n            <code class=\"arduino highlight\">\n#include &ltWebUSB.h&gt\n\nconst WebUSBURL URLS[] = {\n  { 1, \"webusb.github.io/arduino/demos/\" },\n  { 0, \"localhost:8000\" },\n};\n\nconst uint8_t ALLOWED_ORIGINS[] = { 1, 2 };\n\nWebUSB WebUSBSerial(URLS, 2, 1, ALLOWED_ORIGINS, 2);\n\n#define Serial WebUSBSerial\n\nconst int ledPin = 13;\n\nvoid setup() {\n  while (!Serial) {\n    ;\n  }\n  Serial.begin(9600);\n  Serial.write(\"Sketch begins.\r\n \");\n  Serial.flush();\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  if (Serial && Serial.available()) {\n    int byte = Serial.read();\n    Serial.write(byte);\n    if (byte == 'H') {\n      Serial.write(\"\r\nTurning LED on.\");\n      digitalWrite(ledPin, HIGH);\n    } else if (byte == 'L') {\n      Serial.write(\"\r\nTurning LED off.\");\n      digitalWrite(ledPin, LOW);\n    }\n    Serial.write(\"\r\n \");\n    Serial.flush();\n  }\n}\n            </code>\n        </pre>";
    }
    getStartedComponent.prototype.highlightByService = function (target) {
        this.highlightJsService.highlight(target);
    };
    return getStartedComponent;
}());
getStartedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-getStarted',
        styles: [__webpack_require__(182)],
        template: __webpack_require__(196),
        animations: [__WEBPACK_IMPORTED_MODULE_2_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__["HighlightJsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_highlight_js__["HighlightJsService"]) === "function" && _a || Object])
], getStartedComponent);

var _a;
//# sourceMappingURL=getStarted.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.color = "red";
        this.cardLeo = document.getElementById("cardLeo");
        this.cardLeo;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(197),
        styles: [__webpack_require__(183)],
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WikiComponent = (function () {
    function WikiComponent() {
    }
    return WikiComponent;
}());
WikiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wiki',
        styles: [__webpack_require__(184)],
        template: __webpack_require__(198),
        animations: [__WEBPACK_IMPORTED_MODULE_1_assets_animations_fade_in_animation__["a" /* slideInOutAnimation */]],
        host: { '[@slideInOutAnimation]': '' }
    })
], WikiComponent);

//# sourceMappingURL=wiki.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOutAnimation; });

var slideInOutAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('slideInOutAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({})),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [])
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.bundle.js.map