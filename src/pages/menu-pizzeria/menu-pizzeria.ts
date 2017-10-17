import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {PizzeriasItems} from '../../models/pizzerias-items';

@Component({
  selector: 'page-menu-pizzeria',
  templateUrl: 'menu-pizzeria.html',
})
export class MenuPizzeriaPage {
  menuPizzerias:FirebaseListObservable<PizzeriasItems[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
    const pizzeriaID =this.navParams.get('pizzeriaID'); 
    console.log(pizzeriaID);
    this.database.list(`Pizzerias/${pizzeriaID}/menu_pizzeria`,{preserveSnapshot:true})
      .subscribe(snapshots => {
        snapshots.forEach(snapshot=>{
          //console.log(snapshot.key,snapshot.val());
          this.menuPizzerias=snapshot.key,snapshot.val();
        });
      });
    console.log(this.menuPizzerias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPizzeriaPage');
  }

}
