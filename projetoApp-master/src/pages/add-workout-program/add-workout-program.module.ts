import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWorkoutProgramPage } from './add-workout-program';

@NgModule({
  declarations: [
    AddWorkoutProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWorkoutProgramPage),
  ],
})
export class AddWorkoutProgramPageModule {}
