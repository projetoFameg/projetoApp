import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreinoProvider } from '../../providers/treino/treino';
import { ExerciseProvider } from '../../providers/exercise/exercise';

@IonicPage()
@Component({
  selector: 'page-add-treino',
  templateUrl: 'add-treino.html',
})
export class AddTreinoPage {
  title: String;
  form: FormGroup;
  treino: any;
  exercise: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder: FormBuilder, private provider: TreinoProvider, 
  private toast: ToastController) {
    
    this.treino = this.navParams.data.treino || {};
    this.createForm();
    this.setupPageTitle();
  
  }
  
  private setupPageTitle(){
    this.title = this.navParams.data.treino ? 'Atualizar Treino' : 'Adicionar Treino'
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.treino.key],
      NomeExercicio: [this.treino.NomeExercicio],
      descricao: [this.treino.descricao],
      repeticoes: [this.treino.repeticoes],
    })
  }

  onSubmit() {
    if (this.form.valid){
      this.provider.save(this.form.value,this.form.value)
      .then(() =>{
        this.toast.create({ message: 'Treino salvo com sucesso.', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar o alterações.', duration: 3000}).present();
        console.log(e);
      });
    }
  }

}
