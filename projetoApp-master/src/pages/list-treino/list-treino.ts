import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AddExercisePage } from '../add-exercise/add-exercise';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { TreinoProvider } from '../../providers/treino/treino';
import { AddTreinoPage } from '../add-treino/add-treino';


@Component({
  selector: 'page-list-treino',
  templateUrl: 'list-treino.html',
})
export class ListTreinoPage {

  treino: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private provider: TreinoProvider,
  private authService: AuthServiceProvider,
  private toast: ToastController) {
  
    this.treino = this.provider.getAll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTreinoPage');
  }

  navigateAddTreinoPage(){
    // Navegar o usuário para a AddExercisePage
    this.navCtrl.push(AddTreinoPage);
  }

  editTreino(treino: any){
    this.navCtrl.push(AddTreinoPage, {treino: treino})
  }

  removeTreino(key: string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({message: 'Treino removido com sucesso.', duration: 3000}).present();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao remover o treino.', duration: 3000}).present();
    });
  }

  


}
