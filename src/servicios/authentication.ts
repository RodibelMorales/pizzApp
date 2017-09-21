import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class Authentication{
    constructor(private angularAuth :AngularFireAuth){}

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
    
}