import { info_profile } from './../../models/info_profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-info-profile',
  templateUrl: 'info-profile.html',
})
export class InfoProfilePage {
  validaInfoProfile:FormGroup;
  info_profile={} as info_profile;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private database:AngularFireDatabase,
    private afAuth:AngularFireAuth,
    public formBuild:FormBuilder
  ){
    this.validaInfoProfile=this.formBuild.group({
      img_profile:['',Validators.required],
      nombre:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      ap_paterno:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      ap_materno:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      telefono:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      direccion:['',[Validators.required]],
      reputacion:[''],
      referencia:['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoProfilePage');
  }
  infoProfile(){
    this.afAuth.authState.take(1).subscribe(auth=>{
        this.database.object(`Usuarios/${auth.uid}`).set(this.info_profile)
        .then(()=> this.navCtrl.setRoot('TabsPage'));
    });
  }
}
