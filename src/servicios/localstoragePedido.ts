import { Injectable } from '@angular/core';
export const KeyLocalstorage="nombrePizzeria";
@Injectable()
export class localStorageCRUD{
    setNamePizzeriaLocalStorage(nombrePizzeria){
        localStorage.setItem(KeyLocalstorage,nombrePizzeria);
    }
    getNamePizzeriaLocalStorage(){
        return localStorage.getItem(KeyLocalstorage);
    }
    removeNamePizzeriaLocalStorage(nombrePizzeria){
        localStorage.removeItem(KeyLocalstorage);
    }
}