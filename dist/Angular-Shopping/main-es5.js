(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-billgenerate></app-billgenerate>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/billgenerate/billgenerate.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/billgenerate/billgenerate.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-input-field\">\n    <div class=\"form-group\">\n      <label for=\"serialno\">Serial No</label>\n      <input type=\"text\" name=\"serialno\" class=\"form-control\" value=\"\" [(ngModel)]=\"serialno\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"shopname\">Shop Name</label>\n      <select class=\"form-control\" (change)=\"getShopSelect($event)\">\n        <option>Please select shop name</option>\n        <option *ngFor=\"let shopList of shopDetails\" value=\"{{shopList.gstno}}\">{{shopList.name}}</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"billdate\">Bill Date</label>\n        <br />\n        <p-calendar [(ngModel)]=\"billdate\" dateFormat=\"dd.mm.yy\"></p-calendar>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"noofbag\">No Of Bag</label>\n      <input type=\"text\" name=\"noofbag\" class=\"form-control\" value=\"\" [(ngModel)]=\"noofbag\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"unit\">Unit</label>\n      <input type=\"text\" name=\"unit\" class=\"form-control\" value=\"\" [(ngModel)]=\"unit\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rate\">Rate</label>\n      <input type=\"text\" name=\"rate\" class=\"form-control\" value=\"\" [(ngModel)]=\"rate\" />\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"exportAsPDF();\">Download Pdf</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-Shopping';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/fesm5/primeng-calendar.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/fesm5/primeng-autocomplete.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./billgenerate/billgenerate.component */ "./src/app/billgenerate/billgenerate.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_9__["BillgenerateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billgenerate/billgenerate.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/billgenerate/billgenerate.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-input-field {\n  width: 850px;\n  border: 1px solid #000;\n  padding: 25px;\n  min-height: 150px;\n  font-size: 15px;\n  margin: 0px auto;\n}\n\n.main-panel {\n  width: 850px;\n  border: 1px solid #000;\n  padding: 25px;\n  min-height: 150px;\n  font-size: 15px;\n  margin: 0px auto;\n}\n\n.main-panel .top-row {\n  height: 50px;\n}\n\n.main-panel .mobile-number {\n  text-align: right;\n}\n\n.main-panel .address {\n  text-align: center;\n}\n\n.main-panel .address .textile-name {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.main-panel .invoice-bill {\n  height: 22px;\n}\n\n.main-panel .invoice-bill .serial-no {\n  width: 360px;\n}\n\n.main-panel .invoice-bill .invoice-name {\n  background-color: #000;\n  color: #fff;\n}\n\n.main-panel .main-content {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  line-height: 30px;\n}\n\n.main-panel .main-content .address-left {\n  border-right: 1px solid #000;\n}\n\n.main-panel .main-content .address-left .details-receiver {\n  text-align: center;\n}\n\n.main-panel .main-content .address-right {\n  margin-top: 20px;\n}\n\n.main-panel .detailed-price tr {\n  text-align: center;\n}\n\n.main-panel .detailed-price tr th {\n  border: 1px solid #000;\n  left: 5px;\n}\n\n.main-panel .detailed-price tr td {\n  margin-left: 5px;\n  height: 30px;\n  border: 1px solid #000;\n}\n\n.main-panel .detailed-price tr .left-align {\n  text-align: left;\n}\n\n.main-panel .detailed-price tr .right-align {\n  text-align: right;\n}\n\n.main-panel .our-address {\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  line-height: 30px;\n}\n\n.main-panel .our-address .our-address-right {\n  margin-top: 5px;\n}\n\n.main-panel .our-address .our-address-right .authorized {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGdlbmVyYXRlL0Q6XFxBbmd1bGFyMjAyMFxcQW5ndWxhci1TaG9wcGluZy9zcmNcXGFwcFxcYmlsbGdlbmVyYXRlXFxiaWxsZ2VuZXJhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JpbGxnZW5lcmF0ZS9iaWxsZ2VuZXJhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0UsWUFBQTtBQ0dKOztBRERFO0VBQ0UsaUJBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0FDR0o7O0FERkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURERTtFQUNFLFlBQUE7QUNHSjs7QURGSTtFQUNFLFlBQUE7QUNJTjs7QURGSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ0lOOztBRERFO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURGSTtFQUNFLDRCQUFBO0FDSU47O0FESE07RUFDRSxrQkFBQTtBQ0tSOztBREZJO0VBQ0UsZ0JBQUE7QUNJTjs7QURBSTtFQUNFLGtCQUFBO0FDRU47O0FERE07RUFDRSxzQkFBQTtFQUNBLFNBQUE7QUNHUjs7QURETTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDR1I7O0FERE07RUFDRSxnQkFBQTtBQ0dSOztBRERNO0VBQ0UsaUJBQUE7QUNHUjs7QURDRTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDRSxlQUFBO0FDRU47O0FERE07RUFDRSxnQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvYmlsbGdlbmVyYXRlL2JpbGxnZW5lcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWlucHV0LWZpZWxkIHtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5tYWluLXBhbmVsIHtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIC50b3Atcm93IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLm1vYmlsZS1udW1iZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5hZGRyZXNzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC50ZXh0aWxlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW52b2ljZS1iaWxsIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIC5zZXJpYWwtbm8ge1xyXG4gICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW52b2ljZS1uYW1lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuYWRkcmVzcy1sZWZ0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxuICAgICAgLmRldGFpbHMtcmVjZWl2ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtcmlnaHQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGV0YWlsZWQtcHJpY2Uge1xyXG4gICAgdHIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRoIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgfVxyXG4gICAgICAubGVmdC1hbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICAucmlnaHQtYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vdXItYWRkcmVzcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIC5vdXItYWRkcmVzcy1yaWdodCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgLmF1dGhvcml6ZWQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi5mb3JtLWlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDg1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ubWFpbi1wYW5lbCB7XG4gIHdpZHRoOiA4NTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZzogMjVweDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5tYWluLXBhbmVsIC50b3Atcm93IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLm1haW4tcGFuZWwgLm1vYmlsZS1udW1iZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluLXBhbmVsIC5hZGRyZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tcGFuZWwgLmFkZHJlc3MgLnRleHRpbGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1wYW5lbCAuaW52b2ljZS1iaWxsIHtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuLm1haW4tcGFuZWwgLmludm9pY2UtYmlsbCAuc2VyaWFsLW5vIHtcbiAgd2lkdGg6IDM2MHB4O1xufVxuLm1haW4tcGFuZWwgLmludm9pY2UtYmlsbCAuaW52b2ljZS1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFpbi1wYW5lbCAubWFpbi1jb250ZW50IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4ubWFpbi1wYW5lbCAubWFpbi1jb250ZW50IC5hZGRyZXNzLWxlZnQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xufVxuLm1haW4tcGFuZWwgLm1haW4tY29udGVudCAuYWRkcmVzcy1sZWZ0IC5kZXRhaWxzLXJlY2VpdmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4tcGFuZWwgLm1haW4tY29udGVudCAuYWRkcmVzcy1yaWdodCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbi1wYW5lbCAuZGV0YWlsZWQtcHJpY2UgdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1wYW5lbCAuZGV0YWlsZWQtcHJpY2UgdHIgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBsZWZ0OiA1cHg7XG59XG4ubWFpbi1wYW5lbCAuZGV0YWlsZWQtcHJpY2UgdHIgdGQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG4ubWFpbi1wYW5lbCAuZGV0YWlsZWQtcHJpY2UgdHIgLmxlZnQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW4tcGFuZWwgLmRldGFpbGVkLXByaWNlIHRyIC5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW4tcGFuZWwgLm91ci1hZGRyZXNzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4ubWFpbi1wYW5lbCAub3VyLWFkZHJlc3MgLm91ci1hZGRyZXNzLXJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm1haW4tcGFuZWwgLm91ci1hZGRyZXNzIC5vdXItYWRkcmVzcy1yaWdodCAuYXV0aG9yaXplZCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/billgenerate/billgenerate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/billgenerate/billgenerate.component.ts ***!
  \********************************************************/
/*! exports provided: BillgenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillgenerateComponent", function() { return BillgenerateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;
var BillgenerateComponent = /** @class */ (function () {
    function BillgenerateComponent(datePipe) {
        this.datePipe = datePipe;
        this.shopDetails = [];
        this.billdate = '';
        this.billNewdate = '';
        this.shopname = [];
        this.shoppaddress = [];
        this.serialno = '';
        this.noofbag = '';
        this.travels = '';
    }
    BillgenerateComponent.prototype.ngOnInit = function () {
        this.shopDetails = [
            {
                name: 'VELAVAN MINI BAZAAR',
                gstno: '33AAFFV1207M1Z9',
                address: "162-C, P.K.S. ARUMUGAM ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }
        ];
    };
    BillgenerateComponent.prototype.getShopSelect = function (args) {
        var _this = this;
        this.gstnovalue = args.target.value;
        var getshop = this.shopDetails.find(function (s) { return s.gstno === _this.gstnovalue; });
        this.shopname = getshop.name;
        this.shoppaddress = getshop.address;
    };
    BillgenerateComponent.prototype.exportAsPDF = function () {
        this.billNewdate = this.datePipe.transform(this.billdate, 'dd.MM.y');
        this.totalvalue = this.unit * this.rate;
        this.gstvaluefind = Math.round(((this.totalvalue * 5) / 100) / 2);
        var documentDefinition = {
            content: [
                {
                    style: 'tableExample',
                    color: '#555',
                    table: {
                        body: [
                            [
                                [
                                    {
                                        columns: [{
                                                text: 'GSTIN : 33BQZPP9671A1Z9'
                                            },
                                            [{
                                                    text: 'Cell: 94427 10107',
                                                    alignment: 'right'
                                                },
                                                {
                                                    text: '70102 46020',
                                                    alignment: 'right'
                                                }]]
                                    },
                                    {
                                        text: 'PALANICHAMY TEXTILES',
                                        style: 'textileName'
                                    },
                                    {
                                        text: '5/13, Uranipatti Street',
                                        style: 'textileStreet'
                                    },
                                    {
                                        text: 'SRIVILLIPUTHUR - 626125',
                                        style: 'textileCity'
                                    },
                                    {
                                        columns: [{
                                                text: 'No: ' + this.serialno,
                                                alignment: 'left'
                                            }, {
                                                text: 'INVOICE',
                                                style: 'invoiceName'
                                            }, {
                                                text: 'Date:  ' + this.billNewdate,
                                                alignment: 'right'
                                            }]
                                    },
                                    {
                                        table: {
                                            body: [
                                                [{
                                                        text: "Details of Receiver (Billed to) details of Consignee Shipped to\n                                Name: " + this.shopname + "\n                                Address: " + this.shoppaddress + "\n                                GSTIN: " + this.gstnovalue,
                                                        colSpan: 5
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: "\n                                Mode of Transport: JEYAVILAS\n                                Veh. No ..............................\n                                DL & Time of Supply: " + this.billNewdate + "\n                                Place of Supply ..............................",
                                                        colSpan: 4
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    }
                                                ],
                                                [{
                                                        text: "S. No",
                                                    },
                                                    {
                                                        text: "Description of Goods",
                                                    },
                                                    {
                                                        text: "HSN Code",
                                                    },
                                                    {
                                                        text: "No.of Packages",
                                                    },
                                                    {
                                                        text: "Qty",
                                                    },
                                                    {
                                                        text: "Unit",
                                                    },
                                                    {
                                                        text: "Rate",
                                                    },
                                                    {
                                                        text: "Total Taxable Value",
                                                        colSpan: 2
                                                    },
                                                    {
                                                        text: ''
                                                    }],
                                                [{
                                                        text: "1",
                                                    },
                                                    {
                                                        text: "CORDED COTTON CONE",
                                                    },
                                                    {
                                                        text: "5205",
                                                    },
                                                    {
                                                        text: this.noofbag,
                                                    },
                                                    {
                                                        text: " ",
                                                    },
                                                    {
                                                        text: this.unit,
                                                    },
                                                    {
                                                        text: this.rate,
                                                    },
                                                    {
                                                        text: Math.round(this.totalvalue),
                                                    }, { text: '00' }],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [' ', '', '', '', '', '', '', '', ''],
                                                [{
                                                        text: "\n                              Rupees:  THIRTY NINE THOUSAND\n                              THREE HUNDRED AND SEVENTY SIX ONLY\n                             ",
                                                        colSpan: 6,
                                                        rowSpan: 3,
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: 'Total'
                                                    }, {
                                                        text: Math.round(this.totalvalue)
                                                    }, {
                                                        text: '00'
                                                    }],
                                                [{
                                                        text: '',
                                                        colSpan: 6
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: 'CGST 2.5 %'
                                                    }, {
                                                        text: this.gstvaluefind
                                                    }, {
                                                        text: '00'
                                                    }],
                                                [{
                                                        text: '',
                                                        colSpan: 6
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: 'SGST 2.5 %'
                                                    }, {
                                                        text: this.gstvaluefind
                                                    }, {
                                                        text: '00'
                                                    }],
                                                [{
                                                        text: '',
                                                        colSpan: 6
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ' '
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }],
                                                [{
                                                        text: 'Eway Bill No:',
                                                        colSpan: 6
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: ''
                                                    }, {
                                                        text: 'Invoice Total'
                                                    }, {
                                                        text: Math.round(this.totalvalue + (2 * this.gstvaluefind))
                                                    }, {
                                                        text: '00'
                                                    }],
                                                [{
                                                        text: "Certified that the Particulars given above are true and correct",
                                                        colSpan: 5
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: "Electronic Reference Number :",
                                                        colSpan: 4
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    }
                                                ],
                                                [{
                                                        text: "PALNICHAMY TEXTILE\n                            ACC NO:  328150050800034\n                            IFSC Code: TMBL0000328\n                            TAMILNAD MERCANTILE BANK, SRIVILLIPUTHUR\n                            E & O.E.,",
                                                        colSpan: 5
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: "For PALANICHAMY TEXTILES\n\n\n\n                                    Authorized Signatory",
                                                        colSpan: 4
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    },
                                                    {
                                                        text: ''
                                                    }
                                                ],
                                            ]
                                        }
                                    },
                                ]
                            ]
                        ]
                    },
                    layout: {
                        paddingLeft: function (i, node) { return 10; },
                        paddingRight: function (i, node) { return 10; },
                        paddingTop: function (i, node) { return 10; },
                        paddingBottom: function (i, node) { return 10; }
                    }
                },
            ],
            styles: {
                textileName: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 20, 0, 5],
                },
                tableExample: {
                    fontSize: 10,
                },
                textileStreet: {
                    alignment: 'center'
                },
                textileCity: {
                    alignment: 'center',
                    margin: [0, 0, 0, 20],
                    border: '1px solid #000',
                },
                invoiceName: {
                    alignment: 'center',
                    color: '#fff',
                    background: '#000',
                    border: '1px solid #000',
                }
            }
        };
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(documentDefinition).open();
        /*
        const data = this.mainbill.nativeElement;
        console.log(this.mainbill.nativeElement);
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.fromHTML(data, 15, 15, {
          width: 190
        });
        pdf.save("bill.pdf");*/
    };
    BillgenerateComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainbill', { static: false })
    ], BillgenerateComponent.prototype, "mainbill", void 0);
    BillgenerateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billgenerate',
            template: __webpack_require__(/*! raw-loader!./billgenerate.component.html */ "./node_modules/raw-loader/index.js!./src/app/billgenerate/billgenerate.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [__webpack_require__(/*! ./billgenerate.component.scss */ "./src/app/billgenerate/billgenerate.component.scss")]
        })
    ], BillgenerateComponent);
    return BillgenerateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular2020\Angular-Shopping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map