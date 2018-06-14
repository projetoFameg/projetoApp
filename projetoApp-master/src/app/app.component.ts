import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ProfileListPage } from '../pages/profile-list/profile-list';
import * as firebase from 'firebase/app';

import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../pages/signin/signin';
import { ListWorkoutProgramPage } from '../pages/list-workout-program/list-workout-program';
import { ContactPage} from '../pages/contact/contact';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth,) {
    
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Treinos', component: ListWorkoutProgramPage },
      { title: 'Perfil', component: ProfileListPage },
      { title: 'Contato', component: ContactPage }

    ];

    const authObserver =  afAuth.authState.subscribe(user => {
      if (user) {
      this.rootPage = HomePage;
      authObserver.unsubscribe();
      } else {
        this.rootPage = SigninPage;
        authObserver.unsubscribe();
      }
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

