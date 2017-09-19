webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/rodibel.jpg">\n      </ion-avatar>\n      <h2>Rodibel Morales</h2>\n        <div class="reputacion">\n            <ion-icon name="star" icon-left clear small></ion-icon>\n            <ion-icon name="star" icon-left clear small></ion-icon>\n            <ion-icon name="star" icon-left clear small></ion-icon>\n            <ion-icon name="star" icon-left clear small></ion-icon>\n            <ion-icon name="star" icon-left clear small></ion-icon>\n        </div>  \n    </ion-item>  \n    <ion-card-content>\n      <div class="border-bottom-profileInfo">\n          <h2>Email</h2>\n          <p>correodemo@ejemplo.com</p>\n      </div>\n      <div class="border-bottom-profileInfo">     \n        <h2>Telefono</h2>\n          <p>9841836896</p> \n      </div> \n      <div class="border-bottom-profileInfo">\n        <h2>Dirección</h2>\n          <p>Calle 70 entre 30 y 35 lote 9 manzana 373 colonia luis donaldo colosio.</p>\n      </div>\n      <div class="bloque-info">\n        <h2>Referencia</h2>\n          <p>Por la casa de un amigo que vive cerda de esquina.</p>\n      </div> \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, angularFire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFire = angularFire;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.crearCuentaFb = function () {
        alert("soy la funcion para login con FB");
    };
    LoginPage.prototype.crearCuentaEmail = function () {
        alert("hola");
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-avatar item-start>\n    <img src="assets/imgs/logo-principal.png" class="logo-principal">\n  </ion-avatar>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="usuario"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n    <button ion-button block medium color="secondary">INICIAR</button>\n  </ion-list>\n  \n  <ion-list>\n    <h4>Registrarme con</h4>\n      <button ion-button icon-start inline-block small class="btnLoginFacebook" (click)="crearCuentaFb()">\n        <ion-icon name=\'logo-facebook\'></ion-icon>\n        Facebook\n      </button>\n      <button ion-button icon-start inline-block small class="btnLoginMail" (click)="crearCuentaEmail()">\n        <ion-icon name=\'mail\'></ion-icon>\n        Correo\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, Object])
], LoginPage);

var _a, _b;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		271,
		3
	],
	"../pages/menu-pizzeria/menu-pizzeria.module": [
		268,
		2
	],
	"../pages/perfil/perfil.module": [
		270,
		1
	],
	"../pages/pizzerias/pizzerias.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pizzerias_pizzerias__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_pizzeria_menu_pizzeria__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/*Importan nuevas las paginas nuevas */






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pizzerias_pizzerias__["a" /* PizzeriasPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/menu-pizzeria/menu-pizzeria.module#MenuPizzeriaPageModule', name: 'MenuPizzeriaPage', segment: 'menu-pizzeria', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pizzerias/pizzerias.module#PizzeriasPageModule', name: 'PizzeriasPage', segment: 'pizzerias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pizzerias_pizzerias__["a" /* PizzeriasPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pizzerias_pizzerias__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__pizzerias_pizzerias__["a" /* PizzeriasPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__perfil_perfil__["a" /* PerfilPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Pizzerias" tabIcon="pizza"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Pedidos" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPizzeriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenuPizzeriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuPizzeriaPage = (function () {
    function MenuPizzeriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPizzeriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPizzeriaPage');
    };
    return MenuPizzeriaPage;
}());
MenuPizzeriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu-pizzeria',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\menu-pizzeria\menu-pizzeria.html"*/'<!--\n  Generated template for the MenuPizzeriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Domino´s Pizza</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/pizza-demo.jpg">\n      </ion-thumbnail>\n      <h1>Pizza bien chida</h1>\n      <h2>$149.00 pesos</h2>\n      <p>Deliciosa combinación de Piña Jamón y Tocino</p>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria">Detalles</button>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria"><ion-icon name="basket"></ion-icon>Ordenar Ahora</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/pizza-demo2.jpg">\n      </ion-thumbnail>\n      <h1>Pizza bien chida</h1>\n      <h2>$149.00 pesos</h2>\n      <p>La clásica hawaiiana con un toque picosito de delicioso pico de gallo</p>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria">Detalles</button>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria"><ion-icon name="basket"></ion-icon>Ordenar Ahora</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/pizza-demo3.jpg">\n      </ion-thumbnail>\n      <h1>Pizza bien chida</h1>\n      <h2>$149.00 pesos</h2>\n      <p>Todos los favoritos en uno, Pepperoni, Piña y Salsa BBQ</p>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria">Detalles</button>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria"><ion-icon name="basket"></ion-icon>Ordenar Ahora</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/pizza-demo4.jpg">\n      </ion-thumbnail>\n      <h1>Pizza bien chida</h1>\n      <h2>$149.00 pesos</h2>\n      <p>Simplemente la mejor combinación: Pepperoni y Champiñones</p>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria">Detalles</button>\n      <button ion-button outline  color="calltoaction" [navPush]="menupizzeria"><ion-icon name="basket"></ion-icon>Ordenar Ahora</button>\n    </ion-item>    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\menu-pizzeria\menu-pizzeria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MenuPizzeriaPage);

//# sourceMappingURL=menu-pizzeria.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzeriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*Importando paginas  */

/**
 * Generated class for the PizzeriasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PizzeriasPage = (function () {
    function PizzeriasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menupizzeria = __WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */];
    }
    PizzeriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PizzeriasPage');
    };
    return PizzeriasPage;
}());
PizzeriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pizzerias',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\pizzerias\pizzerias.html"*/'<!--\n  Generated template for the PizzeriasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Pizzerias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-card>\n    <img src="assets/imgs/dominos.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Domino\'s Pizza\n        </ion-card-title>\n      <p>\n        La mejor pizza segun la mercadotecnia.\n      </p>\n      <button ion-button block  color="calltoaction" [navPush]="menupizzeria">VER MENU</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/dominos.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Domino\'s Pizza\n        </ion-card-title>\n      <p>\n        La mejor pizza segun la mercadotecnia.\n      </p>\n      <button ion-button block color="calltoaction" [navPush]="menupizzeria">VER MENU</button>\n    </ion-card-content>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\pizzerias\pizzerias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PizzeriasPage);

//# sourceMappingURL=pizzerias.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map