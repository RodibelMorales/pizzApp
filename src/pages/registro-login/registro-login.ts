import { LoginPage } from './../login/login';
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
  async crearCuentaEmail(){
    try{
      const result =this.auth.createUserWithEmailAndPassword(this.email, this.password);
      if(result){
        this.navCtrl.pop();
      }else{}
    }catch(e){
      console.error(e);
    }
  }
}
