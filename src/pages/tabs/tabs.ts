import { Component }   from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AboutPage }   from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage }    from '../home/home';
import {PizzeriasPage} from '../pizzerias/pizzerias';
import {PerfilPage}    from '../perfil/perfil';
/*imports para mostrar mensaje iniciar y optener info de firebase*/
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PizzeriasPage;
  tab2Root = AboutPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
