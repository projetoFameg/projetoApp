import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTreinoPage } from './add-treino';

@NgModule({
  declarations: [
    AddTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTreinoPage),
  ],
})
export class AddTreinoPageModule {}
