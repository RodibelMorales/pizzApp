import { FirebaseDataProvider } from './../../providers/firebase-data/firebase-data';
import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams,ToastController } from 'ionic-angular';
/*Importando paginas  */
import {MenuPizzeriaPage} from '../menu-pizzeria/menu-pizzeria';
import { AboutPage }   from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage }    from '../home/home';
import {PerfilPage}    from '../perfil/perfil';
/*imports para mostrar mensaje iniciar y optener info de firebase*/
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {PizzeriasItems} from '../../models/pizzerias-items';
import * as firebase from 'firebase/app';
@IonicPage()
@Component({
  selector: 'page-pizzerias',
  templateUrl: 'pizzerias.html',
})
export class PizzeriasPage {
  menupizzeria=MenuPizzeriaPage;
  listPizzerias:FirebaseListObservable<PizzeriasItems[]>;

  constructor(private auth:AngularFireAuth,private toast:ToastController,public navCtrl:NavController,public navParams: NavParams,private database:AngularFireDatabase) {
    this.listPizzerias=this.database.list('Pizzerias/');
  }

  ionViewDidLoad() {
    console.log("vista del listado pizza");
    //console.log(this.listadoPizzerias());
  }
  showMenuPizzeria(pizzeriasItems:PizzeriasItems,nombrePizzeria){
    console.log(pizzeriasItems,nombrePizzeria);
    this.navCtrl.push(MenuPizzeriaPage,{pizzeriaID:pizzeriasItems.$key,nombrePizzeria:nombrePizzeria})
  }
}
