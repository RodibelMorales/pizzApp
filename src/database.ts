import Dexie from 'dexie';
export class carritoCompras extends Dexie{
    pedidos:Dexie.Table<pizzeriaCarritoItems,number>;
    constructor(){
        super("pizzApp");
        this.version(1).stores({
            pedidos:"++id,pizzeriaKEY,nombreProducto,imagen,ingredientes,precio,promo"
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
}
export class carritoPizzas implements pizzeriaCarritoItems{
    id?:number;
    pizzeriaKEY:string;
    nombreProducto:string;
    imagen:string;
    precio:number;
    promo:number;
    
    constructor(pizzeriaKEY?:string,nombreProducto?:string,imagen?:string,precio?:number,promo?:number){
        this.pizzeriaKEY=pizzeriaKEY;
        this.nombreProducto=nombreProducto;
        this.imagen=imagen;
        this.precio=precio;
        this.promo=promo;
    }
    //almacena la informacion en la DB
    save(){
        return db.pedidos.add(this);
    }
    removeItem(){
        return db.pedidos.delete(this.id); 
    }
    //muestra todos los registros de la DB
    static all(){
        return db.pedidos.orderBy("id").toArray();
    }
}
export let db= new carritoCompras(); 