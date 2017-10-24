import { Component }   from '@angular/core';
import { IonicPage,NavController,NavParams,ToastController } from 'ionic-angular';
import { AboutPage }   from '../about/about';
import {PizzeriasPage} from '../pizzerias/pizzerias';
import {PerfilPage}    from '../perfil/perfil';
/*imports para mostrar mensaje iniciar y optener info de firebase*/
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseObjectObservable } from 'angularfire2/database';
@IonicPage()
@Component({
  selector:'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PizzeriasPage;
  tab2Root = AboutPage;
  tab3Root = PerfilPage;

  constructor(
    private auth:AngularFireAuth,
    private toast:ToastController,
    public navCtrl:NavController,
    public navParams: NavParams,
    private database:AngularFireDatabase
  ) {

  }
  ionViewWillLoad(){
    try{
      this.auth.authState.subscribe(data=>{
        if(data && data.email && data.uid){
          this.toast.create({
            message: `Bienvenido ${data.email}`,
            duration:3000
          }).present();
        }else{
          this.toast.create({
            message: `Upps no haz iniciado sesion`,
            duration:3000
          }).present();
        }
      });
    }catch(e){
      alert("ERROR DE SESION");
    }
  }
}
