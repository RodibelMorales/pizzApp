import { info_profile } from './../../models/info_profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@IonicPage()
@Component({
  
  selector: 'page-info-profile',
  templateUrl: 'info-profile.html',
})
export class InfoProfilePage {
  validaInfoProfile:FormGroup;
  info_profile={} as info_profile;
  imgprofile:any;
  storageRef:firebase.storage.Reference;
  urlProfileUser:any;
  emailuser:any;
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
      email:[''],
      referencia:['',[Validators.required]]
    });
    this.storageRef= firebase.storage().ref();
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
  uploadImgProfile(ev){
    this.afAuth.authState.take(1).subscribe(auth=>{
      let fileRef=this.storageRef.child("/images_profiles/"+auth.uid+"/"+ev.target.files[0]['name']);
      let uploadTask=fileRef.put(ev.target.files[0]);
      return new Promise((resolve,reject)=>{
          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
          console.log("cargando........")
          },(err)=>console.log(err),()=>{
            this.imgprofile=uploadTask.snapshot.downloadURL;
            this.info_profile.img_profile=uploadTask.snapshot.downloadURL;
            this.info_profile.email=auth.email;
          });
      });
    });
  }
}
