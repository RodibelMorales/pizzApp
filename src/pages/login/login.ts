import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from './../../servicios/authentication';
import {RegistroLoginPage} from '../registro-login/registro-login';

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
  email :string;
  password :string;
  registrologin=RegistroLoginPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');  
  }
  crearCuentaFb(){
    this.auth.createUserWithFacebook(this.email, this.password);
  }
  iniciarSesion(){
    this.auth.signInWithEmailAndPassword(this.email, this.password);
  }
}
