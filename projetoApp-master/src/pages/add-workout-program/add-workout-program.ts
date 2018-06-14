import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WorkoutProgramProvider } from '../../providers/workout-program/workout-program';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddWorkoutexercisePage } from '../add-workout-exercise/add-workout-exercise';
import { WorkoutProgramExerciseProvider } from '../../providers/workout-program-exercise/workout-program-exercise';
import { ExerciseProvider } from '../../providers/exercise/exercise';

@IonicPage()
@Component({
  selector: 'page-add-workout-program',
  templateUrl: 'add-workout-program.html',
})
export class AddWorkoutProgramPage {

  title: String;
  form: FormGroup;
  workoutProgram: any;
  workoutProgramExercise: any;
  programExercise: any;
  listExercise = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: WorkoutProgramProvider,
    private providerExerciseProgram: WorkoutProgramExerciseProvider,
    private providerExercise: ExerciseProvider,
    private toast: ToastController) {
      
      this.workoutProgram = this.navParams.data.workoutProgram || {};
      this.createForm();
      this.setupPageTitle();
      
      this.workoutProgramExercise = providerExerciseProgram.getAll(this.workoutProgram.key);
      this.getInfoExercise();
    }

    private setupPageTitle(){
      this.title = this.navParams.data.workoutProgram ? 'Alterar Plano de Treino' : 'Adicionar Plano de Treino'
    }
  
    createForm(){
      this.form = this.formBuilder.group({
        key: [this.workoutProgram.key],
        titulo: [this.workoutProgram.titulo, Validators.required],
        objetivo: [this.workoutProgram.objetivo, Validators.required],
        grupoMuscular: [this.workoutProgram.grupoMuscular, Validators.required],
        grupoMuscular2: [this.workoutProgram.grupoMuscular2, Validators.required]

      })
    }

    onSubmit() {
      if (this.form.valid){
        this.provider.save(this.form.value)
        .then(() =>{
          this.toast.create({ message: 'Plano de Treino salvo com sucesso.', duration: 3000}).present();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Plano de Treino.', duration: 3000}).present();
          console.log(e);
        });
      }
    }

    navigateAddWorkoutexercisePage(){
      this.navCtrl.push(AddWorkoutexercisePage, {keyProgram: this.workoutProgram.key});
    }

    getInfoExercise(){
      this.workoutProgramExercise.forEach(exerciseProgram => {
        exerciseProgram.forEach(exerciseWorkoutProgram => {
          
           var exercise = this.providerExercise.get(exerciseWorkoutProgram.idExercicio);
           exercise.forEach(exercise => {
              this.listExercise.forEach(e => {
                if(e.keyExercise == exerciseWorkoutProgram.key)
                  this.listExercise.splice(e.key);
              });
              this.addExercise(exerciseWorkoutProgram,exercise);
           });     
         });
      });
    }

    addExercise(exerciseWorkoutProgram, exercise){
      this.listExercise.push({
        keyExercise: exerciseWorkoutProgram.key,
        nomeExercicio: exercise.NomeExercicio,
        grupoMuscular: exercise.grupoMuscular,
        grupoMuscular2: exercise.grupoMuscular2,
        serie: exerciseWorkoutProgram.serie,
        repeticao: exerciseWorkoutProgram.repeticao,
        carga: exerciseWorkoutProgram.carga
      });
    }

    editExercise(keyParam: any){

      this.workoutProgramExercise = this.providerExerciseProgram.get(keyParam, this.workoutProgram.key);

        this.workoutProgramExercise.map(exerciseWorkoutProgram => {
          console.log(exerciseWorkoutProgram);
          
          if(exerciseWorkoutProgram.key == keyParam){
            return this.navCtrl.push(AddWorkoutexercisePage, {keyProgram: this.workoutProgram.key, workoutProgramExercise: exerciseWorkoutProgram});
          }
      });
    }
  
    removeExercise(key: string){
      this.providerExerciseProgram.remove(key, this.workoutProgram.key)
      .then(() => {
        this.toast.create({message: 'Exercício removido com sucesso.', duration: 3000}).present();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao remover o exercício.', duration: 3000}).present();
      });
    }
}
