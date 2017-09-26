import { Component }   from '@angular/core';
import { IonicPage,NavController,NavParams,ToastController } from 'ionic-angular';
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

  constructor(private auth:AngularFireAuth,private toast:ToastController,public navCtrl:NavController,public navParams: NavParams) {

  }
  ionViewWillLoad(){
    try{
      this.auth.authState.subscribe(data=>{
        if(data && data.email && data.uid){
          this.toast.create({
            message: `Bienvenido ${data.email}`,
            duration:5000
          }).present();
        }
      });
    }catch(e){
      console.error("ERROR DE SESION");
    }
  }
}
