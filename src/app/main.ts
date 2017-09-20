import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as firebase from 'firebase/app';
import {firebaseConfig} from '../enviroment/firebase-config';
  //var config = {};
  firebase.initializeApp(firebaseConfig);
platformBrowserDynamic().bootstrapModule(AppModule);
