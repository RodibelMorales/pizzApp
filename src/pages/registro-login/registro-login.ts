import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from './../../servicios/authentication';
/**
 * Generated class for the RegistroLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-login',
  templateUrl: 'registro-login.html',
})
export class RegistroLoginPage {
  /*definimos variables para enviar el correo y password a firebase*/
  email :string;
  password :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroLoginPage');
  }
  /*Funcion para registrarce con un email*/
  crearCuentaEmail(){
      this.auth.createUserWithEmailAndPassword(this.email, this.password);

  }
}
