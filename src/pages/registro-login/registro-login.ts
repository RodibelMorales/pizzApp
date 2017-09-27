import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-registro-login',
  templateUrl: 'registro-login.html',
})
export class RegistroLoginPage {
  /*definimos variables para enviar el correo y password a firebase*/
  email :string;
  password :string;
  validaFormRegistro : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private angularAuth: AngularFireAuth,public formBuild:FormBuilder,public alertCtrl:AlertController) {
    this.validaFormRegistro=this.formBuild.group({
      email   :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroLoginPage');
  }
  /*Funcion para registrarce con un email*/
  async crearCuentaEmail(){
    try{
      this.angularAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(data=>{
        this.navCtrl.pop();
      }).catch(error=>{
        let alerts = this.alertCtrl.create({
          title: 'Upps!',
          subTitle: 'Algo salio mal, intentalo nuevamente',
          buttons: ['OK']
        });
        alerts.present();   
      });
    }catch(e){
      console.error(e);
    }
  }
  
}
