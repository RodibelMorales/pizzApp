import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*Importando paginas  */
import {MenuPizzeriaPage} from '../menu-pizzeria/menu-pizzeria';
/**
 * Generated class for the PizzeriasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzerias',
  templateUrl: 'pizzerias.html',
})
export class PizzeriasPage {
  menupizzeria=MenuPizzeriaPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzeriasPage');
  }

}
