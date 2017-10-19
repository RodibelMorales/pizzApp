import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {PizzeriasItems} from '../../models/pizzerias-items';

@Component({
  selector: 'page-menu-pizzeria',
  templateUrl: 'menu-pizzeria.html',
})
export class MenuPizzeriaPage {
  menuPizzas:FirebaseListObservable<PizzeriasItems[]>;
  nombrePizzeria:string;
  //menuPizzas={} as PizzeriasItems;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
    const pizzeriaID =this.navParams.get('pizzeriaID'); 
    this.nombrePizzeria=this.navParams.get('nombrePizzeria');
    this.menuPizzas=this.database.list(`Pizzerias/${pizzeriaID}/menu_pizzeria/`);   
    console.log(this.menuPizzas);
    console.log(this.nombrePizzeria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPizzeriaPage');
  }

}
