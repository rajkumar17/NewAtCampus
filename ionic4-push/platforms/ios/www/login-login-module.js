(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-login .button-md {\n  background-color: #0e5da0; }\n\napp-login .info-box {\n  padding-top: 10px; }\n\napp-login .list-header {\n  background-color: #ccc; }\n\napp-login .content {\n  text-align: center; }\n\napp-login .logo {\n  width: 75%;\n  margin-bottom: 40px; }\n\napp-login scroll-content {\n  display: flex;\n  flex-direction: row; }\n\napp-login ion-grid {\n  padding: 0;\n  height: 100%;\n  align-content: center !important;\n  align-items: center !important;\n  flex-direction: row !important; }\n\napp-login ion-row {\n  flex: 1; }\n\napp-login .item-label-stacked .text-input-md, app-login .item-label-floating .text-input-md {\n  margin: 8px 0;\n  width: 100%;\n  border: 1px solid #d1a0a4;\n  background: #f6f6f6;\n  height: 40px;\n  border-radius: 3px; }\n\napp-login .item-md.item-block .item-inner {\n  border: none;\n  padding-right: 0; }\n\napp-login .label-md[stacked] {\n  font-size: 1em;\n  color: #2a2a2a; }\n\napp-login a {\n  text-decoration: none;\n  border-bottom: 1px solid #b92835;\n  color: #2b2b2b;\n  display: inline-block;\n  margin-top: 50px; }\n\napp-login .item-md {\n  padding: 0px 20px; }\n\napp-login .input-cover {\n  position: static; }\n\napp-login .vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyYWxvZ2ljL0RvY3VtZW50cy9SYWprdW1hci9pb25pYy9BdENhbXB1cy1tYXN0ZXIvaW9uaWM0LXB1c2gvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx5QkFBd0IsRUFBQTs7QUFINUI7RUFNSSxpQkFBaUIsRUFBQTs7QUFOckI7RUFTSSxzQkFBc0IsRUFBQTs7QUFUMUI7RUFhQyxrQkFBaUIsRUFBQTs7QUFibEI7RUFpQkMsVUFBUztFQUNSLG1CQUFrQixFQUFBOztBQWxCcEI7RUFxQlEsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQXRCM0I7RUEwQlEsVUFBVTtFQUNWLFlBQVk7RUFDUCxnQ0FBK0I7RUFDdkMsOEJBQTZCO0VBQzdCLDhCQUE2QixFQUFBOztBQTlCbEM7RUFrQ1EsT0FBTyxFQUFBOztBQWxDZjtFQXNDRSxhQUFZO0VBQ1osV0FBVTtFQUNWLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQTNDbkI7RUErQ0UsWUFBVztFQUNYLGdCQUFlLEVBQUE7O0FBaERqQjtFQW9ERSxjQUFhO0VBQ2IsY0FBYSxFQUFBOztBQXJEZjtFQXlERSxxQkFBb0I7RUFDcEIsZ0NBQStCO0VBQy9CLGNBQWE7RUFDWCxxQkFBb0I7RUFDcEIsZ0JBQWUsRUFBQTs7QUE3RG5CO0VBaUVFLGlCQUFnQixFQUFBOztBQWpFbEI7RUFvRUssZ0JBQWUsRUFBQTs7QUFwRXBCO0VBdUVLLHdCQUF1QjtFQUN2QixnQ0FBK0I7RUFDL0IsOEJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuXG4gIC5idXR0b24tbWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGU1ZGEwO1xuICB9XG4uaW5mby1ib3gge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5saXN0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuICAuY29udGVudFxuICB7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuICB9XG4gIC5sb2dvXG4gIHtcblx0d2lkdGg6NzUlO1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gIH1cbiAgICAgIHNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gXG4gICAgaW9uLWdyaWQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3chaW1wb3J0YW50O1xuICAgIH1cbiBcbiAgICBpb24tcm93IHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAudGV4dC1pbnB1dC1tZCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnRleHQtaW5wdXQtbWRcbiAgICB7XG5cdFx0bWFyZ2luOjhweCAwO1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZDFhMGE0O1xuXHRcdGJhY2tncm91bmQ6I2Y2ZjZmNjtcblx0XHRoZWlnaHQ6NDBweDtcblx0XHRib3JkZXItcmFkaXVzOjNweDtcbiAgICB9XG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lclxuICAgIHtcblx0XHRib3JkZXI6bm9uZTtcblx0XHRwYWRkaW5nLXJpZ2h0OjA7XG4gICAgfVxuICAgIC5sYWJlbC1tZFtzdGFja2VkXVxuICAgIHtcblx0XHRmb250LXNpemU6MWVtO1xuXHRcdGNvbG9yOiMyYTJhMmE7XG4gICAgfVxuICAgIGFcbiAgICB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2I5MjgzNTtcblx0XHRjb2xvcjojMmIyYjJiO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICB9XG4gICAgLml0ZW0tbWRcbiAgICB7XG5cdFx0cGFkZGluZzowcHggMjBweDtcbiAgICB9XG4gICAgLmlucHV0LWNvdmVyXG4gICAge3Bvc2l0aW9uOnN0YXRpY30gXG4gICAgLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXG57XG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cbi50bmNcbntcblxufVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_in_app_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser */ "./node_modules/@ionic-native/in-app-browser/index.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(storage, global, localStorage, iab) {
        this.storage = storage;
        this.global = global;
        this.localStorage = localStorage;
        this.iab = iab;
        this.url = '';
        this.username = '';
        this.password = '';
        this.phone_no = '';
        this.deviceToken = '';
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorage.get('url').then(function (val) {
            _this.url = val;
        });
        this.localStorage.get('username').then(function (val1) {
            _this.username = val1;
        });
        this.localStorage.get('password').then(function (val2) {
            _this.password = val2;
            _this.deviceToken = _this.storage.get('device_Token');
            _this.phone_no = localStorage.getItem('phone_no');
            console.log('Login.ts phone_no  ==>  ' + _this.phone_no);
            console.log('Login.ts deviceToken  ==>  ' + _this.deviceToken);
            _this.url = _this.url + "/user_roles/php/ajax_login_app.php?username=" + _this.username + "&password=" + _this.password + "&device_token=" + _this.deviceToken + "&phone_no=" + _this.phone_no;
            console.log('INAPPWEB URL = ' + _this.url);
            var browser = _this.iab.create(_this.url, '_blank', "hidden=no,location=no,clearsessioncache=no,clearcache=no,toolbar=no");
        });
        //    this.global.username = "VASHISTHA";
        // this.global.password = "12345";
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_in_app_browser__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map