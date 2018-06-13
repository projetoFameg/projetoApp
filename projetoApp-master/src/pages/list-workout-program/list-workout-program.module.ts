import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListWorkoutProgramPage } from './list-workout-program';

@NgModule({
  declarations: [
    ListWorkoutProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(ListWorkoutProgramPage),
  ],
})
export class ListWorkoutProgramPageModule {}
