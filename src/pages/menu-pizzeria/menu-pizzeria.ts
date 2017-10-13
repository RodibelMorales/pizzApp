import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'page-menu-pizzeria',
  templateUrl: 'menu-pizzeria.html',
})
export class MenuPizzeriaPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPizzeriaPage');
  }

}
