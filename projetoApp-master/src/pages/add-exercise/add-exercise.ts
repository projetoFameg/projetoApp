import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {

  title: String;
  form: FormGroup;
  exercise: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder: FormBuilder, private provider: ExerciseProvider,
  private toast: ToastController) {
    
    this.exercise = this.navParams.data.exercise || {};
    this.createForm();
    this.setupPageTitle();
  
  }
  
  private setupPageTitle(){
    this.title = this.navParams.data.exercise ? 'Alterar Exercício' : 'Adicionar Exercicio'
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.exercise.key],
      NomeExercicio: [this.exercise.NomeExercicio, Validators.required],
      grupoMuscular: [this.exercise.grupoMuscular, Validators.required],

      //imagem: [this.exercise.titulo, Validators.required]
    })
  }

  onSubmit() {
    if (this.form.valid){
      this.provider.save(this.form.value)
      .then(() =>{
        this.toast.create({ message: 'Exercício salvo com sucesso.', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar o exercício.', duration: 3000}).present();
        console.log(e);
      });
    }
  }

}
