import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import  { AddWorkoutProgramPage } from '../add-workout-program/add-workout-program';
import { WorkoutProgramProvider } from '../../providers/workout-program/workout-program';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-list-workout-program',
  templateUrl: 'list-workout-program.html',
})
export class ListWorkoutProgramPage {
  workoutProgram: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private provider: WorkoutProgramProvider,
    private toast: ToastController) {

      this.workoutProgram = this.provider.getAll();

    }

  navigateAddWorkoutProgramPage(){
    this.navCtrl.push(AddWorkoutProgramPage);
  }

  editExercise(workoutProgram: any){
    this.navCtrl.push(AddWorkoutProgramPage, {workoutProgram: workoutProgram})
  }

  removeExercise(key: string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({message: 'Contato removido com sucesso.', duration: 3000}).present();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao remover o exercício.', duration: 3000}).present();
    });
  }

}
