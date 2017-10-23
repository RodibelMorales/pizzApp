import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {PizzeriasItems} from '../../models/pizzerias-items';
import {carritoPizzas} from '../../database';
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
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPizzeriaPage');
  }
  addToCart(nombre,precio){
    let nuevoPedido = new carritoPizzas(this.nombrePizzeria,nombre,"http://prensalibreformosa.com/wp-content/uploads/2017/08/pizza-casera.jpg",precio,0);
    nuevoPedido.save();
    console.log(nombre+"----"+precio);
  }
}
