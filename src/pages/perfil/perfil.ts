import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { info_profile } from './../../models/info_profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  profileData: FirebaseObjectObservable<info_profile>
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AngularFireAuth,private database:AngularFireDatabase) {
    this.getInfoProfile();
  }

  ionViewDidLoad() {
    console.log('cargando vista perfil');
  }
  getInfoProfile(){
    try{
      this.auth.authState.take(1).subscribe(data=>{
        this.profileData=this.database.object(`Usuarios/${data.uid}`);
      });
    }catch(e){
      this.navCtrl.setRoot('loginPage');
    }
  }
}
