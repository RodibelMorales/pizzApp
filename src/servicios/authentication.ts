import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication{
    constructor(private angularAuth :AngularFireAuth){}
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
    checkSesion(){
        
    }
}