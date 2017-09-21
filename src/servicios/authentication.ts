import {Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PizzeriasPage}    from '../pages/pizzerias/pizzerias';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@IonicPage()
@Injectable()
export class Authentication{
    home=PizzeriasPage;
    constructor(public navCtrl:NavController,public navParams: NavParams,private angularAuth :AngularFireAuth){}

    async createUserWithEmailAndPassword(email,password){
        try{
            const result = await this.angularAuth.auth.createUserWithEmailAndPassword(email,password);
            console.log(result);
        }catch(e){
            console.error(e);
        }
    }
    createUserWithFacebook(email,password){
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.createUserWithProvider(provider);
    }

    createUserWithProvider(provider){
        return this.angularAuth.auth.signInWithRedirect(provider)
        .then(result =>{
            return firebase.auth().getRedirectResult;
        });
    }
    async signInWithEmailAndPassword(email,password){
        try{
            const result =this.angularAuth.auth.signInWithEmailAndPassword(email,password);
            this.navCtrl.push('home');
        }catch(e){
            console.log(e);
        }
    }
    
}