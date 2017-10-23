webpackJsonp([6],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegistroLoginPage = (function () {
    function RegistroLoginPage(navCtrl, navParams, angularAuth, formBuild, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularAuth = angularAuth;
        this.formBuild = formBuild;
        this.alertCtrl = alertCtrl;
        this.validaFormRegistro = this.formBuild.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
    }
    RegistroLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroLoginPage');
    };
    /*Funcion para registrarce con un email*/
    RegistroLoginPage.prototype.crearCuentaEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.angularAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
                        .then(function (data) {
                        _this.navCtrl.pop();
                    }).catch(function (error) {
                        var alerts = _this.alertCtrl.create({
                            title: 'Upps!',
                            subTitle: 'Algo salio mal, intentalo nuevamente',
                            buttons: ['OK']
                        });
                        alerts.present();
                    });
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    return RegistroLoginPage;
}());
RegistroLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registro-login',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\registro-login\registro-login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Registrarme</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="validaFormRegistro" (ngSubmit)="crearCuentaEmail()" novalidate>\n    <ion-list>\n        <!--Bloque para optener el usuario-->\n        <ion-item>\n          <ion-label floating>Usuario</ion-label>\n          <ion-input type="text" [(ngModel)]="email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="validaFormRegistro.get(\'email\').errors && validaFormRegistro.get(\'email\').dirty">\n            <p color="danger" ion-text *ngIf="validaFormRegistro.get(\'email\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n            <p color="danger" ion-text *ngIf="validaFormRegistro.get(\'email\').hasError(\'email\')"><ion-icon name="close-circle"></ion-icon> ingresa un correo valido</p>\n        </ion-item>\n        <!--Bloque para optener el password-->\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password" formControlName="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="validaFormRegistro.get(\'password\').errors && validaFormRegistro.get(\'password\').dirty">\n          <p color="danger" ion-text *ngIf="validaFormRegistro.get(\'password\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n          <p color="danger" ion-text *ngIf="validaFormRegistro.get(\'password\').hasError(\'pattern\')"><ion-icon name="close-circle"></ion-icon> contraseña poco segura</p>\n        </ion-item>\n        <button ion-button block medium color="secondary"  class="btnlogin" [disabled]="validaFormRegistro.invalid">REGISTRARME AHORA</button>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\registro-login\registro-login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegistroLoginPage);

//# sourceMappingURL=registro-login.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_authentication__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_login_registro_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, auth, angularAuth, database, formBuild) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.angularAuth = angularAuth;
        this.database = database;
        this.formBuild = formBuild;
        this.registrologin = __WEBPACK_IMPORTED_MODULE_4__registro_login_registro_login__["a" /* RegistroLoginPage */];
        this.validaForm = this.formBuild.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.crearCuentaFb = function () {
        this.auth.createUserWithFacebook(this.email, this.password);
    };
    LoginPage.prototype.iniciarSesion = function () {
        this.signInWithEmailAndPassword(this.validaForm.value.email, this.validaForm.value.password);
    };
    LoginPage.prototype.signInWithEmailAndPassword = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.angularAuth.auth.signInWithEmailAndPassword(email, password)
                        .then(function (data) {
                        _this.createProfile = _this.database.object("Usuarios/" + data.uid, { preserveSnapshot: true });
                        _this.createProfile.take(1).subscribe(function (snapshot) {
                            if (snapshot.val() == null) {
                                _this.navCtrl.setRoot('InfoProfilePage');
                            }
                            else {
                                _this.navCtrl.setRoot('TabsPage');
                            }
                        });
                    }).catch(function (error) {
                        var alert = _this.alertCtrl.create({
                            title: 'Upps!',
                            subTitle: 'Por favor verifica tu usuario y/o contraseña',
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\login\login.html"*/'\n\n<ion-content padding>\n\n  <ion-avatar item-start>\n\n    <img src="assets/imgs/logo-principal.png" class="logo-principal">\n\n  </ion-avatar>\n\n  <form [formGroup]="validaForm" (ngSubmit)="iniciarSesion()" novalidate>\n\n    <ion-list>\n\n      <!--Bloque para ingresar el usuario-->\n\n      <ion-item>\n\n        <ion-label floating>Usuario</ion-label>\n\n        <ion-input type="text" [(ngModel)]="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaForm.get(\'email\').errors && validaForm.get(\'email\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaForm.get(\'email\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaForm.get(\'email\').hasError(\'email\')"><ion-icon name="close-circle"></ion-icon> ingresa un correo valido</p>\n\n      </ion-item>\n\n      <!--Bloque para ingresar el password-->\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaForm.get(\'password\').errors && validaForm.get(\'password\').dirty">\n\n          <p color="danger" ion-text *ngIf="validaForm.get(\'password\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        </ion-item>\n\n      <button ion-button block medium color="secondary"  class="btnlogin" [disabled]="validaForm.invalid">INICIAR AHORA</button>\n\n    </ion-list>\n\n  </form>\n\n  <ion-list class="espacioRegistros">\n\n    <h1>Registrarme</h1>\n\n      <button ion-button icon-start inline-block   class="btnLoginFacebook" (click)="crearCuentaFb()">\n\n        <ion-icon name=\'logo-facebook\'></ion-icon>\n\n        Facebook\n\n      </button>\n\n      <button ion-button icon-start inline-block   class="btnLoginMail" [navPush]="registrologin">\n\n        <ion-icon name=\'mail\'></ion-icon>\n\n        Correo\n\n      </button>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__servicios_authentication__["a" /* Authentication */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info-profile/info-profile.module": [
		417,
		0
	],
	"../pages/login/login.module": [
		414,
		5
	],
	"../pages/perfil/perfil.module": [
		415,
		4
	],
	"../pages/pizzerias/pizzerias.module": [
		416,
		3
	],
	"../pages/registro-login/registro-login.module": [
		413,
		2
	],
	"../pages/tabs/tabs.module": [
		418,
		1
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Authentication = (function () {
    function Authentication(angularAuth) {
        this.angularAuth = angularAuth;
    }
    Authentication.prototype.createUserWithFacebook = function (email, password) {
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
        return this.createUserWithProvider(provider);
    };
    Authentication.prototype.createUserWithProvider = function (provider) {
        return this.angularAuth.auth.signInWithRedirect(provider)
            .then(function (result) {
            return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().getRedirectResult;
        });
    };
    Authentication.prototype.checkSesion = function () {
    };
    return Authentication;
}());
Authentication = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], Authentication);

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPizzeriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPizzeriaPage = (function () {
    //menuPizzas={} as PizzeriasItems;
    function MenuPizzeriaPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        var pizzeriaID = this.navParams.get('pizzeriaID');
        this.nombrePizzeria = this.navParams.get('nombrePizzeria');
        this.menuPizzas = this.database.list("Pizzerias/" + pizzeriaID + "/menu_pizzeria/");
    }
    MenuPizzeriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPizzeriaPage');
    };
    MenuPizzeriaPage.prototype.addToCart = function (nombre, precio) {
        var nuevoPedido = new __WEBPACK_IMPORTED_MODULE_3__database__["a" /* carritoPizzas */](this.nombrePizzeria, nombre, "http://prensalibreformosa.com/wp-content/uploads/2017/08/pizza-casera.jpg", precio, 0);
        nuevoPedido.save();
        console.log(nombre + "----" + precio);
    };
    return MenuPizzeriaPage;
}());
MenuPizzeriaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu-pizzeria',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\menu-pizzeria\menu-pizzeria.html"*/'<!--\n\n  Generated template for the MenuPizzeriaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{nombrePizzeria}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <ion-list>\n\n    <ion-item *ngFor="let producto of menuPizzas | async">\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/pizza-demo.jpg">\n\n      </ion-thumbnail>\n\n      <h1>{{producto.nombre}}</h1>\n\n      <h2>${{producto.precio}}</h2>\n\n      <p>{{producto.ingredientes}}</p>\n\n      <button ion-button outline  color="calltoaction" (click)="addToCart(producto.nombre,producto.precio)">Agregar al carrito <ion-icon name="cart"></ion-icon></button>\n\n    </ion-item>   \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\menu-pizzeria\menu-pizzeria.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], MenuPizzeriaPage);

var _a, _b, _c;
//# sourceMappingURL=menu-pizzeria.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export carritoCompras */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carritoPizzas; });
/* unused harmony export db */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dexie__ = __webpack_require__(383);
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

var carritoCompras = (function (_super) {
    __extends(carritoCompras, _super);
    function carritoCompras() {
        var _this = _super.call(this, "pizzApp") || this;
        _this.version(1).stores({
            pedidos: "++id,pizzeriaKEY,nombreProducto,imagen,ingredientes,precio,promo"
        });
        _this.pedidos.mapToClass(carritoPizzas);
        return _this;
    }
    return carritoCompras;
}(__WEBPACK_IMPORTED_MODULE_0_dexie__["a" /* default */]));

var carritoPizzas = (function () {
    function carritoPizzas(pizzeriaKEY, nombreProducto, imagen, precio, promo) {
        this.pizzeriaKEY = pizzeriaKEY;
        this.nombreProducto = nombreProducto;
        this.imagen = imagen;
        this.precio = precio;
        this.promo = promo;
    }
    //almacena la informacion en la DB
    carritoPizzas.prototype.save = function () {
        return db.pedidos.add(this);
    };
    carritoPizzas.prototype.removeItem = function () {
        return db.pedidos.delete(this.id);
    };
    //muestra todos los registros de la DB
    carritoPizzas.all = function () {
        return db.pedidos.orderBy("id").toArray();
    };
    return carritoPizzas;
}());

var db = new carritoCompras();
//# sourceMappingURL=database.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAdjZK4tJs0MuH0U6lb4r84k1msGMK__X8",
    authDomain: "pizzapp-fac9b.firebaseapp.com",
    databaseURL: "https://pizzapp-fac9b.firebaseio.com",
    projectId: "pizzapp-fac9b",
    storageBucket: "pizzapp-fac9b.appspot.com",
    messagingSenderId: "539521904535"
};
//# sourceMappingURL=firebase-config.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, auth, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.database = database;
        this.getInfoProfile();
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('cargando vista perfil');
    };
    PerfilPage.prototype.getInfoProfile = function () {
        var _this = this;
        try {
            this.auth.authState.take(1).subscribe(function (data) {
                _this.profileData = _this.database.object("Usuarios/" + data.uid);
            });
        }
        catch (e) {
            this.navCtrl.setRoot('loginPage');
        }
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\perfil\perfil.html"*/'<!--\n\n  Generated template for the PerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mi perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <div class="avatar" [style.background-image]="\'url(\' + (profileData | async)?.img_profile + \')\'"></div>\n\n        \n\n      </ion-avatar>\n\n      <h2>{{(profileData | async)?.nombre}} {{(profileData | async)?.ap_paterno}}</h2>\n\n        <div class="reputacion">\n\n            <ion-icon name="star" icon-left clear small></ion-icon>\n\n            <ion-icon name="star" icon-left clear small></ion-icon>\n\n            <ion-icon name="star" icon-left clear small></ion-icon>\n\n            <ion-icon name="star" icon-left clear small></ion-icon>\n\n            <ion-icon name="star" icon-left clear small></ion-icon>\n\n        </div>  \n\n    </ion-item>  \n\n    <ion-card-content>\n\n      <div class="border-bottom-profileInfo">\n\n          <h2>Email</h2>\n\n          <p>{{(profileData | async)?.email}}</p>\n\n      </div>\n\n      <div class="border-bottom-profileInfo">     \n\n        <h2>Telefono</h2>\n\n          <p>{{(profileData | async)?.telefono}}</p> \n\n      </div> \n\n      <div class="border-bottom-profileInfo">\n\n        <h2>Dirección</h2>\n\n          <p>{{(profileData | async)?.direccion}}</p>\n\n      </div>\n\n      <div class="bloque-info">\n\n        <h2>Referencia</h2>\n\n          <p>{{(profileData | async)?.referencia}}</p>\n\n      </div> \n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzeriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(51);
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

/*imports para mostrar mensaje iniciar y optener info de firebase*/


var PizzeriasPage = (function () {
    function PizzeriasPage(auth, toast, navCtrl, navParams, database) {
        this.auth = auth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.menupizzeria = __WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */];
        this.listPizzerias = this.database.list('Pizzerias/');
    }
    PizzeriasPage.prototype.ionViewDidLoad = function () {
        console.log("vista del listado pizza");
        //console.log(this.listadoPizzerias());
    };
    PizzeriasPage.prototype.showMenuPizzeria = function (pizzeriasItems, nombrePizzeria) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */], { pizzeriaID: pizzeriasItems.$key, nombrePizzeria: nombrePizzeria });
    };
    return PizzeriasPage;
}());
PizzeriasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pizzerias',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\pizzerias\pizzerias.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Pizzerias</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <ion-card *ngFor="let item of listPizzerias | async">\n\n    <img src="{{item.logo}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{item.nombre}}\n\n      </ion-card-title>\n\n      <p class="infoDireccion">{{item.direccion}}</p>\n\n      <div class="infoDetails">\n\n        <label>Telefono:</label>\n\n        <p>{{item.telefono}}</p>\n\n      </div>\n\n      <div class="infoDetails">\n\n        <label>Horarios:</label>\n\n        <p class="infoHorarios">{{item.abre}} AM -- {{item.cierra}} PM</p>\n\n      </div>\n\n      <button ion-button block  color="calltoaction" (click)="showMenuPizzeria(item,item.nombre)">VER MENU</button>\n\n    </ion-card-content>\n\n  </ion-card>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\pizzerias\pizzerias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], PizzeriasPage);

//# sourceMappingURL=pizzerias.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database__ = __webpack_require__(232);
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
    AboutPage.prototype.ionViewWillEnter = function () {
        this.getItemsCar();
    };
    AboutPage.prototype.getItemsCar = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__database__["a" /* carritoPizzas */].all().then(function (data) { _this.pedidos = data; });
    };
    AboutPage.prototype.deleteItem = function (idItem) {
        console.log(idItem);
        var removeItem = new __WEBPACK_IMPORTED_MODULE_2__database__["a" /* carritoPizzas */](idItem);
        removeItem.removeItem();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Mi pedido\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let pedido of pedidos">\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/pizza-demo.jpg">\n\n      </ion-avatar>\n\n      <h1>{{pedido.nombreProducto}}</h1>\n\n      <h2>${{pedido.precio}}</h2>\n\n      <button class="btnremove" (click)="deleteItem(pedido.id)"><ion-icon name="remove-circle" class="removeItem" (clik)="deleteItem(pedido.id)"></ion-icon></button>\n\n    </ion-item>   \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enviroment_firebase_config__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);





//var config = {};
__WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_3__enviroment_firebase_config__["a" /* firebaseConfig */]);
__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().getRedirectResult().then(function (result) { return console.log(result); });
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pizzerias_pizzerias__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_pizzeria_menu_pizzeria__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registro_login_registro_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__enviroment_firebase_config__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__servicios_authentication__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*Importan nuevas las paginas nuevas */






/*Dependencias para usar firebase*/




/*Importanto servicio de angular*/



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pizzerias_pizzerias__["a" /* PizzeriasPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_registro_login_registro_login__["a" /* RegistroLoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__["a" /* PerfilPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/registro-login/registro-login.module#RegistroLoginPageModule', name: 'RegistroLoginPage', segment: 'registro-login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pizzerias/pizzerias.module#PizzeriasPageModule', name: 'PizzeriasPage', segment: 'pizzerias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-profile/info-profile.module#InfoProfilePageModule', name: 'InfoProfilePage', segment: 'info-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#MenuPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__enviroment_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_pizzerias_pizzerias__["a" /* PizzeriasPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_registro_login_registro_login__["a" /* RegistroLoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__["a" /* PerfilPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__servicios_authentication__["a" /* Authentication */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(141);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map