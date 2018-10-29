webpackJsonp([3],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(336);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(114);
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
    function LoginPage(http, navCtrl, menuCtrl, userProvider, translateService) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.userProvider = userProvider;
        this.translateService = translateService;
        // Cette variable nous permets de pre-remplire les formulaire de login ou register. Voir la class User
        this.account = new __WEBPACK_IMPORTED_MODULE_0__models_user__["b" /* User */]();
        this.opt = 'signin'; // voir code html (lgn: 9 - value="signin")
        this.menuCtrl.enable(false); // Cacher le menu se trouvant sur la gauche (dans la page main.html)
        // Traduction du message d'erreur
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    // Mode de connection avec le fichier my-profile.json
    LoginPage.prototype.doLogin_v1 = function () {
        var _this = this;
        this.http.get('my-profile.json').subscribe(function (profile) {
            _this.userProvider.user = profile; // Ajout du profile user dans la class UserProvider grace au setter. Grace a sa, nous pouvont recuperer le profile à tout moments vu qu'il est stocker dans la class UserProvider
            /*
                if( users.email === this.account.email && users.password === this.account.password )
                    return true;
                else
                    return false;
            */
            var isGood = (profile.email === _this.account.email && profile.password === _this.account.password) ? true : false;
            if (isGood)
                _this.navCtrl.setRoot('ListFriendsPage'); // setRoot -> permet de supprimer toutes les vues de la stack et de naviguer vers la root page.
            else {
                _this.account.email = 'mike.sylvestre@lyknowledge.io';
                _this.account.password = 'themike';
                _this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
                    // subscribe -> concept des PROMISE - OBSERVABLE, le traitement ce fait de manier asynch.
                    _this.loginErrorString = value; // Affichage du message d'erreur dans la page html via la variable "loginErrorString"
                });
            }
            // navCtrl -> Permmet de naviger sur plusieurs page
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.userProvider.loginUser(this.account.email, this.account.password).then(function (isConnect) {
            if (isConnect)
                _this.navCtrl.setRoot('ListFriendsPage'); // setRoot -> permet de supprimer toutes les vues de la stack et de naviguer vers la root page.
            else
                _this.loginErrorString = "Coonnection error";
        });
    };
    LoginPage.prototype.doRegister = function () {
        var _this = this;
        this.userProvider.registerUser(this.account).then(function (isConnect) {
            if (isConnect)
                _this.navCtrl.setRoot('ListFriendsPage'); // setRoot -> permet de supprimer toutes les vues de la stack et de naviguer vers la root page.
            else
                _this.registerErrorString = "Coonnection error";
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mikechristophersylvestre/Dropbox/LyKnowledge/Formation/IMIE/CDI licence 2018-2019/licence-CDI-SEMA-2019-Ionic/src/pages/login/login.html"*/'<ion-content padding>\n\n    <div id="logo" padding text-center>\n        <img src="./assets/img/logo.png">\n    </div>\n\n    <div padding>\n        <ion-segment [(ngModel)]="opt" color="light">\n            <ion-segment-button value="signin">\n                {{ \'LOGIN\'| translate }}\n            </ion-segment-button>\n            <ion-segment-button value="signup">\n                {{ \'SIGNUP\'| translate }}\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="opt">\n        <form (submit)="doLogin()" *ngSwitchCase="\'signin\'">\n\n            <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n\n\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n\n            <div padding text-center>\n                <button ion-button round color="light" icon-right>\n                    {{ \'SIGNIN\' | translate }} <ion-icon name="log-in"></ion-icon>\n                </button>\n                <p>{{ loginErrorString }}</p>\n            </div>\n\n\n        </form>\n\n        <form (submit)="doRegister()" *ngSwitchCase="\'signup\'">\n            <ion-label>{{ \'Username\' | translate }}</ion-label>\n            <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n\n            <ion-label float>{{ \'Fullname\' | translate }}</ion-label>\n            <ion-input type="text" [(ngModel)]="account.fullname" name="fullname"></ion-input>\n\n\n\n            <ion-label float>{{ \'Email\' | translate }}</ion-label>\n            <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n\n            <ion-label float>{{ \'Password\' | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n\n\n            <ion-label float>{{ \'Retry Password\' | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n\n            <div padding text-center>\n                <button ion-button round color="light" icon-right>\n                    {{ \'SIGNUP\' | translate }} <ion-icon name="person-add"></ion-icon>\n                </button>\n                <p>{{ registerErrorString }}</p>\n            </div>\n\n\n        </form>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mikechristophersylvestre/Dropbox/LyKnowledge/Formation/IMIE/CDI licence 2018-2019/licence-CDI-SEMA-2019-Ionic/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map