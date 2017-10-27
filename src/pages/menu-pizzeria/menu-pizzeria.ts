import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import {PizzeriasItems} from '../../models/pizzerias-items';
import {carritoPizzas} from '../../database';
import {localStorageCRUD} from '../../servicios/localstoragePedido';
@Component({
  selector: 'page-menu-pizzeria',
  templateUrl: 'menu-pizzeria.html',
})
export class MenuPizzeriaPage {
  menuPizzas:FirebaseListObservable<PizzeriasItems[]>;
  nombrePizzeria:string;
  cantidadPizzas:number=1;
  //menuPizzas={} as PizzeriasItems;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private database:AngularFireDatabase) {
    const pizzeriaID =this.navParams.get('pizzeriaID'); 
    this.nombrePizzeria=this.navParams.get('nombrePizzeria');
    this.menuPizzas=this.database.list(`Pizzerias/${pizzeriaID}/menu_pizzeria/`);   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPizzeriaPage');
  }
  addToCart(nombre,precio,itemPizza){
    //Instancia para verificar que no existan una pizzeria con ordenes
    let checkPizzeria=new localStorageCRUD();
    //Añade el item al carrito
    let nuevoPedido = new carritoPizzas(this.nombrePizzeria,nombre,"http://prensalibreformosa.com/wp-content/uploads/2017/08/pizza-casera.jpg",precio,0);
    
    if(checkPizzeria.getNamePizzeriaLocalStorage()==null){
        console.log("no existe la pizzeria, la vamos a crear en LocalStorage");
        checkPizzeria.setNamePizzeriaLocalStorage(this.nombrePizzeria);
        document.getElementById("hiddeitemPizza"+itemPizza).classList.add('ocultarbtn');
        //document.getElementById("demo1").classList.remove('MyClass');
        nuevoPedido.save();
    }else{
        console.log(checkPizzeria.getNamePizzeriaLocalStorage());
        if(checkPizzeria.getNamePizzeriaLocalStorage()!=this.nombrePizzeria){
            this.showAlert(checkPizzeria.getNamePizzeriaLocalStorage());
        }else{
          document.getElementById("hiddeitemPizza"+itemPizza).classList.add('ocultarbtn');
          document.getElementById("showitemPizza"+itemPizza).classList.remove('showAdded');
          nuevoPedido.save();
        }
    }   
  }
  showAlert(nombrePizzeria) {
    let alert = this.alertCtrl.create({
      title: 'Upps!',
      subTitle: 'Debes finalizar tu pedido con <span class="pizzeriaNameAlert">'+nombrePizzeria+'</span> para realizar uno nuevo aquí',
      buttons: ['OK']
    });
    alert.present();
  }
  masPizza(e) {
    this.cantidadPizzas++
  }
  menosPizza(e) {
    this.cantidadPizzas--
  }
}
