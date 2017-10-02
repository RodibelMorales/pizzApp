import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Authentication } from './../../servicios/authentication';
import {RegistroLoginPage} from '../registro-login/registro-login';
import { AngularFireDatabase } from 'angularfire2/database';
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
    private database : AngularFireDatabase,
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
            const createProfile=this.database.object(`Usuarios/${data.uid}`);
            if(createProfile !== null){
              this.navCtrl.setRoot('InfoProfilePage');
              console.log("tengo que agregar info");
            }else{
              console.log("mostrar listado");
              //this.navCtrl.setRoot('TabsPage');
            }
            //
        }).catch(error=>{
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
