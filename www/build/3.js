webpackJsonp([3],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(http, userProvider, menuCtrl, navCtrl, translateService) {
        var _this = this;
        this.http = http;
        this.userProvider = userProvider;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.account = {
            username: 'yajuve',
            fullname: 'Mohamed Raouf',
            email: 'yajuve.25.dz@gmail.com',
            password: 'demodemo'
        };
        this.opt = 'signin';
        this.menuCtrl.enable(false);
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.http.get('my-profile.json').subscribe(function (profile) {
            _this.userProvider.user = profile;
            _this.navCtrl.setRoot('ListFriendsPage');
        }, function (err) {
            console.error(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mikechristophersylvestre/Dropbox/LyKnowledge/Formation/IMIE/CDI licence 2018-2019/licence-CDI-SEMA-2019-Ionic/src/pages/login/login.html"*/'<ion-content padding>\n\n    <div id="logo" padding text-center>\n        <img src="./assets/img/logo.png">\n    </div>\n\n    <div padding>\n        <ion-segment [(ngModel)]="opt" color="light">\n            <ion-segment-button value="signin">\n                Sign In\n            </ion-segment-button>\n            <ion-segment-button value="signup">\n                Sign Up\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="opt">\n        <form (submit)="doLogin()" *ngSwitchCase="\'signin\'">\n\n            <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n\n\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n\n            <div padding text-center>\n                <button ion-button round color="light" icon-right>\n            {{ \'SIGNIN\' | translate }} <ion-icon name="log-in"></ion-icon>\n          </button>\n            </div>\n\n\n        </form>\n\n        <form (submit)="doLogin()" *ngSwitchCase="\'signup\'">\n            <ion-label>{{ \'Username\' | translate }}</ion-label>\n            <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n\n            <ion-label float>{{ \'Fullname\' | translate }}</ion-label>\n            <ion-input type="text" [(ngModel)]="account.fullname" name="fullname"></ion-input>\n\n\n\n            <ion-label float>{{ \'Email\' | translate }}</ion-label>\n            <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n\n            <ion-label float>{{ \'Password\' | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n\n\n            <ion-label float>{{ \'Retry Password\' | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n\n            <div padding text-center>\n                <button ion-button round color="light" icon-right>\n            {{ \'SIGNUP\' | translate }} <ion-icon name="person-add"></ion-icon>\n          </button>\n            </div>\n\n\n        </form>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mikechristophersylvestre/Dropbox/LyKnowledge/Formation/IMIE/CDI licence 2018-2019/licence-CDI-SEMA-2019-Ionic/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map