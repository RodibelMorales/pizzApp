webpackJsonp([1],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoProfilePageModule", function() { return InfoProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_profile__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoProfilePageModule = (function () {
    function InfoProfilePageModule() {
    }
    return InfoProfilePageModule;
}());
InfoProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__info_profile__["a" /* InfoProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_profile__["a" /* InfoProfilePage */]),
        ],
    })
], InfoProfilePageModule);

//# sourceMappingURL=info-profile.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(277);
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
 * Generated class for the InfoProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InfoProfilePage = (function () {
    function InfoProfilePage(navCtrl, navParams, alertCtrl, database, formBuild) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.formBuild = formBuild;
        this.validaInfoProfile = this.formBuild.group({
            nombre_completo: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10),]],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    InfoProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoProfilePage');
    };
    return InfoProfilePage;
}());
InfoProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-info-profile',template:/*ion-inline-start:"C:\xampp\htdocs\pizzApp\src\pages\info-profile\info-profile.html"*/'<!--\n\n  Generated template for the InfoProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Informacion de tu perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="validaInfoProfile" (ngSubmit)="iniciarSesion()" novalidate>\n\n    <ion-list>\n\n      <!--Bloque para ingresar el usuario-->\n\n      <ion-item>\n\n        <ion-label floating>Nombre Completo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="nombre_completo" formControlName="nombre_completo"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'nombre_completo\').errors && validaInfoProfile.get(\'nombre_completo\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'nombre_completo\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'nombre_completo\').hasError(\'nombre_completo\')"><ion-icon name="close-circle"></ion-icon> solo se adapmite texto</p>\n\n      </ion-item>\n\n      <!--Bloque para ingresar el password-->\n\n      <ion-item>\n\n        <ion-label floating>Telefono</ion-label>\n\n        <ion-input type="password" [(ngModel)]="telefono" formControlName="telefono"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'telefono\').errors && validaInfoProfile.get(\'telefono\').dirty">\n\n          <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'telefono\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n          <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'telefono\').hasError(\'telefono\')"><ion-icon name="close-circle"></ion-icon>faltan numeros</p>\n\n      </ion-item>\n\n      <!--Bloque para ingresar la direccion-->\n\n      <ion-item>\n\n        <ion-label floating>Dirección</ion-label>\n\n        <ion-input type="password" [(ngModel)]="direccion" formControlName="direccion"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'direccion\').errors && validaInfoProfile.get(\'direccion\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'direccion\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'direccion\').hasError(\'direccion\')"><ion-icon name="close-circle"></ion-icon>faltan numeros</p>\n\n      </ion-item>\n\n      <button ion-button block medium color="secondary"  class="btnlogin">GUARDAR</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\pizzApp\src\pages\info-profile\info-profile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], InfoProfilePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=info-profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map