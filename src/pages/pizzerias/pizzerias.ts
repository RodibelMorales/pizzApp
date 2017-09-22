import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*Importando paginas  */
import {MenuPizzeriaPage} from '../menu-pizzeria/menu-pizzeria';
import { AboutPage }   from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage }    from '../home/home';
import {PerfilPage}    from '../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-pizzerias',
  templateUrl: 'pizzerias.html',
})
export class PizzeriasPage {
  menupizzeria=MenuPizzeriaPage;
  tab1Root = PizzeriasPage;
  tab2Root = AboutPage;
  tab3Root = PerfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzeriasPage');
  }

}
