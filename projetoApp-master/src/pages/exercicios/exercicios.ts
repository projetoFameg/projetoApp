import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html',
})
export class ExerciciosPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciciosPage');
  }

  newExercicio(){
   // this.navCtrl.push('ExerciciosPage');
  }


  ExerciciosRedirect(){
    this.navCtrl.push('ExerciciosPage');
  }
}
