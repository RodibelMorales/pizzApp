webpackJsonp([0],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoProfilePageModule", function() { return InfoProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_profile__ = __webpack_require__(421);
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfoProfilePage = (function () {
    function InfoProfilePage(navCtrl, navParams, alertCtrl, database, afAuth, formBuild) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.afAuth = afAuth;
        this.formBuild = formBuild;
        this.info_profile = {};
        this.validaInfoProfile = this.formBuild.group({
            img_profile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')]],
            ap_paterno: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')]],
            ap_materno: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')]],
            telefono: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)]],
            direccion: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            reputacion: ['']
        });
    }
    InfoProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoProfilePage');
    };
    InfoProfilePage.prototype.infoProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.database.object("Usuarios/" + auth.uid).set(_this.info_profile)
                .then(function () { return _this.navCtrl.setRoot('TabsPage'); });
        });
    };
    return InfoProfilePage;
}());
InfoProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-info-profile',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\info-profile\info-profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Informacion de tu perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="validaInfoProfile" (ngSubmit)="infoProfile()" novalidate>\n\n    <ion-list>\n\n      <!--Bloque para añadir una imagen a firebase y crear la info adicional-->\n\n      <ion-item>\n\n        <div class="divUpload">\n\n          <div class="Divtitlefoto">\n\n            <span>Mi</span>\n\n            <span>Foto de</span>\n\n            <span>Perfil</span>\n\n          </div>\n\n          <input type="file" class="uploadBtn">\n\n        </div>\n\n      </ion-item>   \n\n      <!--Bloque para ingresar el usuario-->\n\n      <ion-item>\n\n        <ion-label>Nombre:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="info_profile.nombre" formControlName="nombre"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'nombre\').errors && validaInfoProfile.get(\'nombre\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'nombre\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'nombre\').hasError(\'pattern\')"><ion-icon name="close-circle"></ion-icon> solo se adapmite texto</p>\n\n      </ion-item>\n\n      <!--Bloque para ingresar el usuario-->\n\n      <ion-item>\n\n        <ion-label>Apellidos:</ion-label>\n\n        <ion-input type="text" [(ngModel)]="info_profile.ap_paterno" formControlName="ap_paterno"></ion-input>\n\n        <ion-input type="text" [(ngModel)]="info_profile.ap_materno" formControlName="ap_materno"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'ap_paterno\').errors && validaInfoProfile.get(\'ap_paterno\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'ap_paterno\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'ap_paterno\').hasError(\'pattern\')"><ion-icon name="close-circle"></ion-icon> solo se adapmite texto</p>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'ap_materno\').errors && validaInfoProfile.get(\'ap_materno\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'ap_materno\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'ap_materno\').hasError(\'pattern\')"><ion-icon name="close-circle"></ion-icon> solo se adapmite texto</p>\n\n      </ion-item>\n\n      <!--Bloque para ingresar el telefono-->\n\n      <ion-item>\n\n        <ion-label>Telefono</ion-label>\n\n        <ion-input type="number" [(ngModel)]="info_profile.telefono" formControlName="telefono"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'telefono\').errors && validaInfoProfile.get(\'telefono\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'telefono\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'telefono\').hasError(\'minLength\')"><ion-icon name="close-circle"></ion-icon> Ingresa un numero telefonico minimo de 10 digitos</p>\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'telefono\').hasError(\'maxLength\')"><ion-icon name="close-circle"></ion-icon> Ingresa un numero telefonico maximo de 10 digitos</p>\n\n      </ion-item>\n\n      <!--Bloque para ingresar la direccion-->\n\n      <ion-item>\n\n        <ion-label>Dirección</ion-label>\n\n        <ion-textarea  type="text" [(ngModel)]="info_profile.direccion" formControlName="direccion"></ion-textarea >\n\n      </ion-item>\n\n      <ion-item *ngIf="validaInfoProfile.get(\'direccion\').errors && validaInfoProfile.get(\'direccion\').dirty">\n\n        <p color="danger" ion-text *ngIf="validaInfoProfile.get(\'direccion\').hasError(\'required\')"><ion-icon name="close-circle"></ion-icon> campo obligatorio</p>\n\n      </ion-item>\n\n      <ion-input type="hidden" [(ngModel)]="info_profile.reputacion" formControlName="reputacion" value="0"></ion-input>\n\n      <button ion-button block medium color="secondary"  class="btnlogin">GUARDAR</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\info-profile\info-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], InfoProfilePage);

//# sourceMappingURL=info-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map