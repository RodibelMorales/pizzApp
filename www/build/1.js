webpackJsonp([1],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzeriasPageModule", function() { return PizzeriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pizzerias__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PizzeriasPageModule = (function () {
    function PizzeriasPageModule() {
    }
    return PizzeriasPageModule;
}());
PizzeriasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pizzerias__["a" /* PizzeriasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pizzerias__["a" /* PizzeriasPage */]),
        ],
    })
], PizzeriasPageModule);

//# sourceMappingURL=pizzerias.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzeriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__ = __webpack_require__(140);
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



var PizzeriasPage = PizzeriasPage_1 = (function () {
    function PizzeriasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menupizzeria = __WEBPACK_IMPORTED_MODULE_2__menu_pizzeria_menu_pizzeria__["a" /* MenuPizzeriaPage */];
        this.tab1Root = PizzeriasPage_1;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__perfil_perfil__["a" /* PerfilPage */];
    }
    PizzeriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PizzeriasPage');
    };
    return PizzeriasPage;
}());
PizzeriasPage = PizzeriasPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pizzerias',template:/*ion-inline-start:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\pizzerias\pizzerias.html"*/'<!--\n\n  Generated template for the PizzeriasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Pizzerias</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-card>\n\n    <img src="assets/imgs/dominos.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Domino\'s Pizza\n\n        </ion-card-title>\n\n      <p>\n\n        La mejor pizza segun la mercadotecnia.\n\n      </p>\n\n      <button ion-button block  color="calltoaction" [navPush]="menupizzeria">VER MENU</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/imgs/dominos.jpg"/>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Domino\'s Pizza\n\n        </ion-card-title>\n\n      <p>\n\n        La mejor pizza segun la mercadotecnia.\n\n      </p>\n\n      <button ion-button block color="calltoaction" [navPush]="menupizzeria">VER MENU</button>\n\n    </ion-card-content>\n\n  </ion-card>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\desarrollos\pizzApp\src\pages\pizzerias\pizzerias.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PizzeriasPage);

var PizzeriasPage_1;
//# sourceMappingURL=pizzerias.js.map

/***/ })

});
//# sourceMappingURL=1.js.map