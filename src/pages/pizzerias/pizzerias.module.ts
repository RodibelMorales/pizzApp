import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzeriasPage } from './pizzerias';

@NgModule({
  declarations: [
    PizzeriasPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzeriasPage),
  ],
})
export class PizzeriasPageModule {}
