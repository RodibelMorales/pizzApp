import Dexie from 'dexie';
export class carritoCompras extends Dexie{
    pedidos:Dexie.Table<pizzeriaCarritoItems,number>;
    constructor(){
        super("pizzApp");
        this.version(1).stores({
            pedidos:"++id,pizzeriaKEY,nombreProducto,imagen,ingredientes,precio,promo,idCSS"
        });
        this.pedidos.mapToClass(carritoPizzas);
    }
}
export interface valoresCarrito{

}
export interface pizzeriaCarritoItems{
    id?:number;
    pizzeriaKEY:string;
    nombreProducto:string;
    imagen:string;
    precio:number;
    promo:number;
    idCSS:string;
}
export class carritoPizzas implements pizzeriaCarritoItems{
    id?:number;
    pizzeriaKEY:string;
    nombreProducto:string;
    imagen:string;
    precio:number;
    promo:number;
    idCSS:string;
    constructor(pizzeriaKEY?:string,nombreProducto?:string,imagen?:string,precio?:number,promo?:number,idCSS?:number){
        this.pizzeriaKEY=pizzeriaKEY;
        this.nombreProducto=nombreProducto;
        this.imagen=imagen;
        this.precio=precio;
        this.promo=promo;
        this.idCSS=idCSS;
    }
    //almacena la informacion en la DB
    save(){
        return db.pedidos.add(this);
    }
    removeItem(id){
        console.log(id);
        return db.pedidos.delete(id); 
    }
    //muestra todos los registros de la DB
    static all(){
        return db.pedidos.orderBy("id").toArray();
    }
}
export let db= new carritoCompras(); 