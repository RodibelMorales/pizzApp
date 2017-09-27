import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoProfilePage } from './info-profile';

@NgModule({
  declarations: [
    InfoProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(InfoProfilePage),
  ],
})
export class InfoProfilePageModule {}
