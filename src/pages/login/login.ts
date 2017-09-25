import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from './../../servicios/authentication';
import {RegistroLoginPage} from '../registro-login/registro-login';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Authentication,private angularAuth :AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');  
  }
  crearCuentaFb(){
    this.auth.createUserWithFacebook(this.email, this.password);
  }
  iniciarSesion(){
    this.signInWithEmailAndPassword(this.email, this.password);
  }
  async signInWithEmailAndPassword(email,password){
    try{
        const result =this.angularAuth.auth.signInWithEmailAndPassword(email,password);
        if(result){
          this.navCtrl.setRoot('TabsPage');
        }else{
          alert("Upps verifica tus datos");
        }
    }catch(e){
        console.error(e);
    }
}
  
}
