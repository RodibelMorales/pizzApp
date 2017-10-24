import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {carritoPizzas} from '../../database';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  pedidos:any;
  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter(){
    this.getItemsCar();
  }
  getItemsCar(){
    carritoPizzas.all().then((data)=>{this.pedidos=data;});
  }
  deleteItem(idItem){
    this.pedidos=this.pedidos.filter(w=>{
      return w.id != idItem;
    });
    let removeItem = new carritoPizzas();
    removeItem.removeItem(idItem);
  }
}
