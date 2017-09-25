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
  constructor(private auth:AngularFireAuth,private toast:ToastController,public navCtrl:NavController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    try{
      this.auth.authState.subscribe(data=>{
        if(data && data.email && data.uid){
          this.toast.create({
            message: `Bienvenido ${data.email}`,
            duration:5000
          }).present();
        }else{
          alert("Error al iniciar sesion");     
        }
      });
    }catch(e){
      console.error("ERROR DE SESION");
    }
  }

}
