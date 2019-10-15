(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"vertical-align-content\">\n<ion-grid>\n<ion-row center>\n\t<ion-col center>\n\t\t<br><br><br><br>\n\t\t<img class=\"logo\" src=\"./assets/img/logo.png\">\n<br>\n<br>\n<br>\n<form  (ngSubmit)=\"openWebpage()\" #loginForm=\"ngForm\">\n\n  <ion-item>\n\n    <ion-label>Please select the Institution</ion-label>\n    <ion-select  name=\"instance\" [(ngModel)]=\"loginCredentials.url\" required>\n\n   <ion-select-option *ngFor=\"let x of posts\" [value]=\"x.api_url\">{{x.institution_name}}</ion-select-option>\n    </ion-select>\n\n  </ion-item>\n   \n    <ion-item>\n      <ion-label position=\"floating\">User Name</ion-label>\n      <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"loginCredentials.username\" class=\"form-control\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Registered Mobile No</ion-label>\n      <ion-input type=\"number\" name=\"phone\" [(ngModel)]=\"loginCredentials.phone\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"loginCredentials.password\" required #password=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\"></ion-input>\n      <div *ngIf=\"password.invalid && (myform.submitted || password.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"password.errors.required\"> Password is required. </div>\n        <div *ngIf=\"password.errors.pattern\"> Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.</div>\n      </div>\n    </ion-item>\n    \n\n\n  <ion-button expand=\"block\" type=\"submit\" color=\"primary\">Login</ion-button>\n</form>\n          </ion-col>\t\n      </ion-row>\n</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-home .button-md {\n  background-color: #0e5da0; }\n\napp-home .info-box {\n  padding-top: 10px; }\n\napp-home .list-header {\n  background-color: #ccc; }\n\napp-home .content {\n  text-align: center; }\n\napp-home .logo {\n  width: 75%;\n  margin-bottom: 40px; }\n\napp-home scroll-content {\n  display: flex;\n  flex-direction: row; }\n\napp-home ion-grid {\n  padding: 0;\n  height: 100%;\n  align-content: center !important;\n  align-items: center !important;\n  flex-direction: row !important; }\n\napp-home ion-row {\n  flex: 1; }\n\napp-home .item-label-stacked .text-input-md, app-home .item-label-floating .text-input-md {\n  margin: 8px 0;\n  width: 100%;\n  border: 1px solid #d1a0a4;\n  background: #f6f6f6;\n  height: 40px;\n  border-radius: 3px; }\n\napp-home .item-md.item-block .item-inner {\n  border: none;\n  padding-right: 0; }\n\napp-home .label-md[stacked] {\n  font-size: 1em;\n  color: #2a2a2a; }\n\napp-home a {\n  text-decoration: none;\n  border-bottom: 1px solid #b92835;\n  color: #2b2b2b;\n  display: inline-block;\n  margin-top: 50px; }\n\napp-home .item-md {\n  padding: 0px 20px; }\n\napp-home .input-cover {\n  position: static; }\n\napp-home .vertical-align-content > * {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXJyYWxvZ2ljL0RvY3VtZW50cy9SYWprdW1hci9pb25pYy9BdENhbXB1cy1tYXN0ZXIvaW9uaWM0LXB1c2gvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQXdCLEVBQUE7O0FBSDVCO0VBTUksaUJBQWlCLEVBQUE7O0FBTnJCO0VBU0ksc0JBQXNCLEVBQUE7O0FBVDFCO0VBYUMsa0JBQWlCLEVBQUE7O0FBYmxCO0VBaUJDLFVBQVM7RUFDUixtQkFBa0IsRUFBQTs7QUFsQnBCO0VBcUJRLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUF0QjNCO0VBMEJRLFVBQVU7RUFDVixZQUFZO0VBQ1AsZ0NBQStCO0VBQ3ZDLDhCQUE2QjtFQUM3Qiw4QkFBNkIsRUFBQTs7QUE5QmxDO0VBa0NRLE9BQU8sRUFBQTs7QUFsQ2Y7RUFzQ0UsYUFBWTtFQUNaLFdBQVU7RUFDVix5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUEzQ25CO0VBK0NFLFlBQVc7RUFDWCxnQkFBZSxFQUFBOztBQWhEakI7RUFvREUsY0FBYTtFQUNiLGNBQWEsRUFBQTs7QUFyRGY7RUF5REUscUJBQW9CO0VBQ3BCLGdDQUErQjtFQUMvQixjQUFhO0VBQ1gscUJBQW9CO0VBQ3BCLGdCQUFlLEVBQUE7O0FBN0RuQjtFQWlFRSxpQkFBZ0IsRUFBQTs7QUFqRWxCO0VBb0VLLGdCQUFlLEVBQUE7O0FBcEVwQjtFQXVFSyx3QkFBdUI7RUFDdkIsZ0NBQStCO0VBQy9CLDhCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1ob21lIHtcblxuICAuYnV0dG9uLW1ke1xuICAgIGJhY2tncm91bmQtY29sb3I6IzBlNWRhMDtcbiAgfVxuLmluZm8tYm94IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAubGlzdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbiAgLmNvbnRlbnRcbiAge1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAubG9nb1xuICB7XG5cdHdpZHRoOjc1JTtcbiAgbWFyZ2luLWJvdHRvbTo0MHB4O1xuICB9XG4gICAgICBzY3JvbGwtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuIFxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBmbGV4LWRpcmVjdGlvbjogcm93IWltcG9ydGFudDtcbiAgICB9XG4gXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnRleHQtaW5wdXQtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC50ZXh0LWlucHV0LW1kXG4gICAge1xuXHRcdG1hcmdpbjo4cHggMDtcblx0XHR3aWR0aDoxMDAlO1xuXHRcdGJvcmRlcjoxcHggc29saWQgI2QxYTBhNDtcblx0XHRiYWNrZ3JvdW5kOiNmNmY2ZjY7XG5cdFx0aGVpZ2h0OjQwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czozcHg7XG4gICAgfVxuICAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXJcbiAgICB7XG5cdFx0Ym9yZGVyOm5vbmU7XG5cdFx0cGFkZGluZy1yaWdodDowO1xuICAgIH1cbiAgICAubGFiZWwtbWRbc3RhY2tlZF1cbiAgICB7XG5cdFx0Zm9udC1zaXplOjFlbTtcblx0XHRjb2xvcjojMmEyYTJhO1xuICAgIH1cbiAgICBhXG4gICAge1xuXHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNiOTI4MzU7XG5cdFx0Y29sb3I6IzJiMmIyYjtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgfVxuICAgIC5pdGVtLW1kXG4gICAge1xuXHRcdHBhZGRpbmc6MHB4IDIwcHg7XG4gICAgfVxuICAgIC5pbnB1dC1jb3ZlclxuICAgIHtwb3NpdGlvbjpzdGF0aWN9IFxuICAgIC52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKlxue1xuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG59XG4udG5jXG57XG5cbn1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");







var HomePage = /** @class */ (function () {
    function HomePage(storage, http, localStorage, router) {
        // console.log("load");
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.localStorage = localStorage;
        this.router = router;
        this.posts = [];
        this.resp = [];
        this.loginCredentials = { username: '', password: '', phone: '', url: '' };
        this.http.get('https://demo.atcampussolutions.com/app_api/instance.php', {}, {})
            .then(function (data) {
            // console.log(data.data);
            _this.posts = data.data;
            // console.log(data.status);
            // console.log(data.data.institution_name); // data received by server
            _this.posts = JSON.parse(data.data);
            // console.log (this.posts);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    HomePage.prototype.openWebpage = function () {
        var _this = this;
        // set a key/value
        this.localStorage.set('url', this.loginCredentials.url).then(function () {
            // console.log('Successfully added key/value pair url '+this.loginCredentials.url);
        });
        this.localStorage.set('username', this.loginCredentials.username).then(function () {
            //console.log('Successfully added key/value pair username '+this.loginCredentials.username);
        });
        this.localStorage.set('phone', this.loginCredentials.phone).then(function () {
            // console.log('Successfully added key/value pair phone '+this.loginCredentials.phone);
        });
        this.localStorage.set('password', this.loginCredentials.password).then(function () {
            // console.log('Successfully added key/value pair password '+this.loginCredentials.password);
        });
        //Post the device token and save the details to server
        this.localStorage.ready().then(function () {
            _this.localStorage.get('device_token').then(function (val) {
                _this.device_token = val;
                _this.device_token = _this.storage.get('device_Token');
                // console.log(val);
                console.log('device_token ====> ' + _this.device_token);
                console.log('user_name ====> ' + _this.loginCredentials.username);
                console.log('phone_no ====> ' + _this.loginCredentials.phone);
                localStorage.setItem('phone_no', _this.loginCredentials.phone);
                var phoneno = localStorage.getItem('phone_no');
                console.log('phone_no  ==>  ' + phoneno);
            });
        });
        this.router.navigateByUrl('login/');
        console.log('navigated');
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map