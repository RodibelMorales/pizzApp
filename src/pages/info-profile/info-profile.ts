import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

/**
 * Generated class for the InfoProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-profile',
  templateUrl: 'info-profile.html',
})
export class InfoProfilePage {
  img_profile:string;
  nombre_completo:string;
  telefono:number;
  direccion:string;
  validaInfoProfile:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public database:AngularFireDatabase,public formBuild:FormBuilder) {
    this.validaInfoProfile=this.formBuild.group({
      img_profile   :['',[Validators.required]],
      nombre_completo:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      telefono:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),]]
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoProfilePage');
  }

}
