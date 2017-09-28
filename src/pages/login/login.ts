import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Authentication } from './../../servicios/authentication';
import {RegistroLoginPage} from '../registro-login/registro-login';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email :string;
  password :string;
  registrologin=RegistroLoginPage;
  validaForm : FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private auth: Authentication,
    private angularAuth :AngularFireAuth,
    public formBuild:FormBuilder
  ){
    this.validaForm=this.formBuild.group({
      email   :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');  
  }
  crearCuentaFb(){
    this.auth.createUserWithFacebook(this.email, this.password);
  }
  iniciarSesion(){
    this.signInWithEmailAndPassword(this.validaForm.value.email, this.validaForm.value.password);
  }
  async signInWithEmailAndPassword(email,password){
    try{
        this.angularAuth.auth.signInWithEmailAndPassword(email,password)
        .then(data =>{
          this.navCtrl.setRoot('InfoProfilePage');
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
