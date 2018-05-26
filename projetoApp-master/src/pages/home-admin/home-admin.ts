import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { ExerciseListPage } from '../exercise-list/exercise-list';
import { AddExercisePage } from '../add-exercise/add-exercise';
import { ProfileListPage } from '../profile-list/profile-list';


@Component({
  selector: 'page-home-admin',
  templateUrl: 'home-admin.html',
})
export class HomeAdminPage {

  constructor(public navCtrl: NavController, private authService: AuthServiceProvider) {}

  ExerciciosRedirect() {
      this.navCtrl.push(ExerciseListPage);
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
