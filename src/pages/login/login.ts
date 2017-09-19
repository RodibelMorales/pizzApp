import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario :string;
  password :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private angularFire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  crearCuentaFb(){
    alert("soy la funcion para login con FB")
  }
  crearCuentaEmail(){
    alert("hola");
  }

}
