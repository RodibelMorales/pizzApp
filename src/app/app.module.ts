import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
/*Importan nuevas las paginas nuevas */
import {PizzeriasPage}    from '../pages/pizzerias/pizzerias';
import {MenuPizzeriaPage} from '../pages/menu-pizzeria/menu-pizzeria';
import {PerfilPage} from '../pages/perfil/perfil';
import {LoginPage} from '../pages/login/login';
import {RegistroLoginPage} from '../pages/registro-login/registro-login';
/*Dependencias para usar firebase*/
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from  'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {firebaseConfig} from '../enviroment/firebase-config';
/*Importanto servicio de angular*/
import {Authentication} from '../servicios/authentication';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PizzeriasPage,
    MenuPizzeriaPage,
    PerfilPage,
    LoginPage,
    RegistroLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PizzeriasPage,
    MenuPizzeriaPage,
    PerfilPage,
    LoginPage,
    RegistroLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Authentication,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
