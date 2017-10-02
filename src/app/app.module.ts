import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavController } from 'ionic-angular';
/*Importan nuevas las paginas nuevas */
import {PizzeriasPage}    from '../pages/pizzerias/pizzerias';
import {MenuPizzeriaPage} from '../pages/menu-pizzeria/menu-pizzeria';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {RegistroLoginPage} from '../pages/registro-login/registro-login';
import {PerfilPage}    from '../pages/perfil/perfil';
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
    PizzeriasPage,
    MenuPizzeriaPage,
    LoginPage,
    RegistroLoginPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PizzeriasPage,
    MenuPizzeriaPage,
    LoginPage,
    RegistroLoginPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Authentication,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
