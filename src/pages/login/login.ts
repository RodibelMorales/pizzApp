import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private auth: Authentication,private angularAuth :AngularFireAuth) {
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
        this.angularAuth.auth.signInWithEmailAndPassword(email,password)
        .then(data =>{
          this.navCtrl.setRoot('TabsPage');
        })
        .catch(error=>{
          let alert = this.alertCtrl.create({
            title: 'Upps!',
            subTitle: 'Por favor verifica tu usuario y/o contraseña',
            buttons: ['OK']
          });
          alert.present();
        });
    }catch(e){
        console.error(e);
    }
}
  
}
