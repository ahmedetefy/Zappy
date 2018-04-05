webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".gradientNav {\n    background: -webkit-gradient(linear, left top, right top, from(#3bade9), to(#317765));\n    background: linear-gradient(to right, #3bade9, #317765);\n}\n.whiteText {\n\tcolor:white;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default gradientNav\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand whiteText\" routerLink=\"\">Zappy Corp</a>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"container\" style=\"min-height: 800px;\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tweet_list_tweet_list_component__ = __webpack_require__("./src/app/components/tweet-list/tweet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_logout_logout_component__ = __webpack_require__("./src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_ensure_authenticated_service__ = __webpack_require__("./src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_login_redirect_service__ = __webpack_require__("./src/app/services/login-redirect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tweet_service__ = __webpack_require__("./src/app/services/tweet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_tweet_list_tweet_list_component__["a" /* TweetListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_ensure_authenticated_service__["a" /* EnsureAuthenticated */],
                __WEBPACK_IMPORTED_MODULE_12__services_login_redirect_service__["a" /* LoginRedirect */],
                __WEBPACK_IMPORTED_MODULE_13__services_tweet_service__["a" /* TweetService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__ = __webpack_require__("./src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tweet_list_tweet_list_component__ = __webpack_require__("./src/app/components/tweet-list/tweet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ensure_authenticated_service__ = __webpack_require__("./src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_redirect_service__ = __webpack_require__("./src/app/services/login-redirect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_login_redirect_service__["a" /* LoginRedirect */]]
    },
    {
        path: "tweet_list",
        component: __WEBPACK_IMPORTED_MODULE_4__components_tweet_list_tweet_list_component__["a" /* TweetListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_ensure_authenticated_service__["a" /* EnsureAuthenticated */]]
    },
    {
        path: "logout",
        component: __WEBPACK_IMPORTED_MODULE_3__components_logout_logout_component__["a" /* LogoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_ensure_authenticated_service__["a" /* EnsureAuthenticated */]]
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_5__components_not_found_not_found_component__["a" /* NotFoundComponent */],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".img-size {\n\twidth: 25%\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center theme-orange\">\n\t<h1><b> Welcome to Zappy Corp! </b></h1>\n</div>\n<br>\n<div class=\"container text-center\">\n\t<img class=\" img-size\" src=\"assets/images/twitter.jpg\"/>\n</div>\n\n<br>\n<div class=\"container text-center\">\n\t<h3> Please login to view Twitter tweets.</h3>\n</div>\n<div class=\"container\">\n\t<div class=\"col-md-4 col-md-offset-4\">\n\t<div class=\"row main\">\n\t\t<div class=\"main-login main-center\">\n\t\t\t<form #loginForm='ngForm' (ngSubmit)='login()'>\n\t\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input #usernameValid=\"ngModel\" required [(ngModel)]='user.username' type=\"text\" class=\"form-control\" name=\"username\" id=\"username\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"usernameValid.errors && (usernameValid.dirty || usernameValid.touched)\" class=\"text-center\">\n\t\t\t\t\t\t\t<p class=\"field-error\" [hidden]=\"!usernameValid.errors.required\">\n\t\t\t\t\t\t\t  Username is required!\n\t\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\n\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t<input #passwordValid=\"ngModel\" required [(ngModel)]='user.password' type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"passwordValid.errors && (passwordValid.dirty || passwordValid.touched)\" class=\"text-center\">\n\t\t\t\t\t\t\t<p class=\"field-error\" [hidden]=\"!passwordValid.errors.required\">\n\t\t\t\t\t\t\t  Password is required!\n\t\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t\n\n\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t<button [disabled]=\"!loginForm.valid\" type=\"submit\" id=\"button\" class=\"btn btn-primary btn-lg btn-block login-button\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.user)
            .then(function (user) {
            localStorage.setItem('token', user.json().token);
            _this.router.navigateByUrl('/tweet_list');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ".img-size {\n\twidth: 25%\n}"

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container text-center\">\n\t<img class=\" img-size\" src=\"assets/images/twitter.jpg\"/>\n</div>\n<div class=\"container\">\n\t<h3 class=\"theme-blue text-center section\"><b> Are you sure you want to logout? </b></h3>\n\t<div class=\"col-md-12 text-center theme-orange\">\n\t\t<button routerLink=\"/tweet_list\" class=\"btn logout-button\" > No </button>\n\t\t<button (click)='logMeOut()' class=\"btn logout-button\" > Yes </button>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logMeOut = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            this.auth.logout(token)
                .then(function (logoutResp) {
                localStorage.clear();
                _this.route.navigate(['/']);
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logout',
            template: __webpack_require__("./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".img-size {\n\twidth: 25%\n}"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container text-center\">\n\t<img class=\" img-size\" src=\"assets/images/twitter.jpg\"/>\n</div>\n<!-- <br> -->\n<div class='text-center'>\n    <h1>404 - Page Not Found</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/tweet-list/tweet-list.component.css":
/***/ (function(module, exports) {

module.exports = "#login { display: none; }\n.login,\n.logout { \n    position: absolute; \n    top: -3px;\n    right: 0;\n}\n.page-header { position: relative; }\n.reviews {\n    color: #555;    \n    font-weight: bold;\n    margin: 10px auto 20px;\n}\n.media .media-object { max-width: 120px; }\n.media-body { position: relative; }\n.media-date { \n    position: absolute; \n    right: 25px;\n    top: 25px;\n}\n.media-date li { padding: 0; }\n.media-date li:first-child:before { content: ''; }\n.media-date li:before { \n    content: '.'; \n    margin-left: -2px; \n    margin-right: 2px;\n}\n.media-comment { margin-bottom: 20px; }\n.btn-circle {\n    font-weight: bold;\n    font-size: 12px;\n    padding: 6px 15px;\n    border-radius: 20px;\n}\n.btn-circle span { padding-right: 6px; }\n.tab-content {\n    padding: 50px 15px;\n    border: 1px solid #ddd;\n    border-top: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\nh4 {\n    margin:0 !important;\n}\n.gradientNav {\n    background: -webkit-gradient(linear, left top, right top, from(#3bade9), to(#317765));\n    background: linear-gradient(to right, #3bade9, #317765);\n}"

/***/ }),

/***/ "./src/app/components/tweet-list/tweet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" id=\"logout\">\n        <div class=\"page-header\">\n            <div class=\"logout\">\n                <button class=\"btn btn-default btn-circle text-uppercase\" type=\"button\" routerLink=\"/logout\">\n                    <span class=\"glyphicon glyphicon-off\"></span> Logout                    \n                </button>                \n            </div>\n        </div>\n        <div class=\"comment-tabs\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li class=\"active\"><a role=\"tab\" data-toggle=\"tab\"><h3 class=\"reviews text-capitalize\">Tweets</h3></a></li>\n            </ul>            \n            <div class=\"tab-content gradientNav\">\n                <div class=\"tab-pane active\" >                \n                    <ul class=\"media-list\">\n                      <li class=\"media\">\n                        <div class=\"media-body\">\n                          <h3 class=\"text-center\" *ngIf=\"tweetList?.length < 1\">\n                            No tweets fetched yet!\n                          </h3>\n                          <div *ngFor=\"let item of tweetList\" class=\"well well-lg\">\n                              <h4 class=\"media-heading text-uppercase reviews\">#{{item.id_str}} </h4>\n                              <p class=\" reviews text-right\">{{item.created_at}}</p>\n                              <p class=\"media-comment reviews\">\n                                {{item.text}}\n                              </p>\n                          </div>              \n                        </div>\n                        \n                      </li>          \n                      \n                      \n                    </ul> \n                </div>\n                \n                \n            </div>\n        </div>\n\t</div>\n</div>\n "

/***/ }),

/***/ "./src/app/components/tweet-list/tweet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tweet_service__ = __webpack_require__("./src/app/services/tweet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetListComponent = /** @class */ (function () {
    function TweetListComponent(tweet) {
        this.tweet = tweet;
    }
    TweetListComponent.prototype.ngOnInit = function () {
        this.getTweetList();
    };
    TweetListComponent.prototype.getTweetList = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            this.tweet.getTweetList(token)
                .then(function (tickets) {
                _this.tweetList = tickets.json();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    TweetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tweet-list',
            template: __webpack_require__("./src/app/components/tweet-list/tweet-list.component.html"),
            styles: [__webpack_require__("./src/app/components/tweet-list/tweet-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tweet_service__["a" /* TweetService */]])
    ], TweetListComponent);
    return TweetListComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = 'http://0.0.0.0:8000/api/jwt';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.login = function (user) {
        var url = this.BASE_URL + "/token/";
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    AuthService.prototype.logout = function (token) {
        var url = this.BASE_URL + "/logout/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            Authorization: "JWT " + token
        });
        return this.http.post(url, {}, { headers: headers }).toPromise();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/ensure-authenticated.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnsureAuthenticated; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnsureAuthenticated = /** @class */ (function () {
    function EnsureAuthenticated(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    EnsureAuthenticated.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    };
    EnsureAuthenticated = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], EnsureAuthenticated);
    return EnsureAuthenticated;
}());



/***/ }),

/***/ "./src/app/services/login-redirect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRedirect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRedirect = /** @class */ (function () {
    function LoginRedirect(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginRedirect.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            this.router.navigateByUrl('/tweet_list');
            return false;
        }
        else {
            return true;
        }
    };
    LoginRedirect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginRedirect);
    return LoginRedirect;
}());



/***/ }),

/***/ "./src/app/services/tweet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TweetService = /** @class */ (function () {
    function TweetService(http) {
        this.http = http;
        this.BASE_URL = 'http://0.0.0.0:8000/api/feed';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TweetService.prototype.getTweetList = function (token) {
        var url = this.BASE_URL + "/tweets/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            Authorization: "JWT " + token
        });
        return this.http.get(url, { headers: headers }).toPromise();
    };
    TweetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TweetService);
    return TweetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map