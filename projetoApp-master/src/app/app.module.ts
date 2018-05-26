import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {enableProdMode} from '@angular/core';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AddExercisePage } from '../pages/add-exercise/add-exercise';
import { ExerciseListPage } from '../pages/exercise-list/exercise-list';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ProfileListPage } from '../pages/profile-list/profile-list';

import { AuthServiceProvider } from '../providers/auth/auth-service';
import { AuthServicenpmProvider } from '../providers/auth-servicenpm/auth-servicenpm';
import { ExerciseProvider } from '../providers/exercise/exercise';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProfileProvider } from '../providers/profile/profile';
import { TreinoProvider } from '../providers/treino/treino';
import { ListTreinoPage } from '../pages/list-treino/list-treino';
import { AddTreinoPage } from '../pages/add-treino/add-treino';

const firebaseConfig = {
  apiKey: "AIzaSyAJSb_bRCzXH5VwTkDI5Toz2Z2Hv3TB1q0",
  authDomain: "workout-e5dc5.firebaseapp.com",
  databaseURL: "https://workout-e5dc5.firebaseio.com",
  projectId: "workout-e5dc5",
  storageBucket: "workout-e5dc5.appspot.com",
  messagingSenderId: "543412652932"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    AddExercisePage, 
    ExerciseListPage,
    EditProfilePage,
    ProfileListPage,
    ListTreinoPage,
    AddTreinoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    AddExercisePage, 
    ExerciseListPage,
    EditProfilePage,
    ProfileListPage,
    ListTreinoPage,
    AddTreinoPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AuthServicenpmProvider,
    GooglePlus,
    ExerciseProvider,
    Facebook,
    ProfileProvider,
    TreinoProvider
  ]
})
export class AppModule {}
