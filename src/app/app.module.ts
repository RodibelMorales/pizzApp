import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
/*Importan nuevas las paginas nuevas */
import {PizzeriasPage}    from '../pages/pizzerias/pizzerias';
import {MenuPizzeriaPage} from '../pages/menu-pizzeria/menu-pizzeria';
<<<<<<< HEAD
import {PerfilPage} from '../pages/perfil/perfil';
/*Dependencias para usar firebase*/
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from  'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {firebaseConfig} from '../enviroment/firebase-config';
=======
import {PerfilPage}       from '../pages/perfil/perfil';
import {LoginPage}        from '../pages/login/login';

>>>>>>> 45a9c1f40a1d6bb8046f347c86ba8031a3390a5a
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PizzeriasPage,
    MenuPizzeriaPage,
    PerfilPage,
    LoginPage
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
    TabsPage,
    PizzeriasPage,
    MenuPizzeriaPage,
    PerfilPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
