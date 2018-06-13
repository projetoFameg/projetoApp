import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { WorkoutProgramExerciseProvider } from '../../providers/workout-program-exercise/workout-program-exercise';
import { Observable } from 'rxjs/Observable';

import { AddWorkoutProgramPage } from '../add-workout-program/add-workout-program';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-add-workout-exercise',
  templateUrl: 'add-workout-exercise.html',
})
export class AddWorkoutexercisePage {
  exercise: Observable<any>;
  title: String;
  form: FormGroup;
  keyProgram: any;
  workoutProgramExercise: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
    private provider: ExerciseProvider, private providerExercise: WorkoutProgramExerciseProvider,
    private toast: ToastController) {
    
      this.exercise = this.provider.getAll();
  
      this.keyProgram = this.navParams.data.keyProgram || {};
      this.workoutProgramExercise = this.navParams.data.workoutProgramExercise || {};
      console.log(this.keyProgram);
      
      this.createForm();
      this.setupPageTitle();  
    }

    private setupPageTitle(){
      this.title = this.navParams.data.workoutProgran ? 'Alterar Exercícios' : 'Adicionar Exercícios'
    }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.workoutProgramExercise.key],
      idExercicio: [this.workoutProgramExercise.idExercicio, Validators.required],
      serie: [this.workoutProgramExercise.serie],
      repeticao: [this.workoutProgramExercise.repeticao],
      carga: [this.workoutProgramExercise.carga]
    })
  }

  navigateAddWorkoutexercisePage(){
    this.navCtrl.popTo(AddWorkoutProgramPage);
  }
  
  onSubmit() {
    if (this.form.valid){
      this.providerExercise.save(this.form.value, this.keyProgram)
      .then(() =>{
        this.toast.create({ message: 'Exercício salvo com sucesso.', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar o Exercício.', duration: 3000}).present();
        console.log(e);
      });
    }
  }
}
