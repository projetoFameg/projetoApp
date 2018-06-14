import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth/auth-service';

import { SigninPage } from '../signin/signin';
import { ExerciseListPage } from '../exercise-list/exercise-list';
import { AddExercisePage } from '../add-exercise/add-exercise';
import { ProfileListPage } from '../profile-list/profile-list';
import { ListWorkoutProgramPage } from '../list-workout-program/list-workout-program';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthServiceProvider) {}


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
