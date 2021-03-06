import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as firebase from 'firebase/app';
import {firebaseConfig} from '../enviroment/firebase-config';
import 'rxjs/add/operator/take';
  //var config = {};
  firebase.initializeApp(firebaseConfig);
  firebase.auth().getRedirectResult().then(result=>console.log(result));
platformBrowserDynamic().bootstrapModule(AppModule);
