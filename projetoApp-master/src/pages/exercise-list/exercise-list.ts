import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AddExercisePage } from '../add-exercise/add-exercise';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';


@Component({
  selector: 'page-exercise-list',
  templateUrl: 'exercise-list.html',
})
export class ExerciseListPage {
  exercise: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private provider: ExerciseProvider,
  private authService: AuthServiceProvider,
  private toast: ToastController) {
  
    this.exercise = this.provider.getAll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciseListPage');
  }

  navigateAddExercisePage(){
    // Navegar o usuário para a AddExercisePage
    this.navCtrl.push(AddExercisePage);
  }

  editExercise(exercise: any){
    this.navCtrl.push(AddExercisePage, {exercise: exercise})
  }

  removeExercise(key: string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({message: 'Exercicio removido com sucesso.', duration: 3000}).present();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao remover o exercício.', duration: 3000}).present();
    });
  }

  
  signOut() {
    this.authService.signOut()
    .then(() => {
      this.navCtrl.setRoot(SigninPage);
    })
    .catch((error) => {
      console.error(error);
    })
  }


}
