import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {enableProdMode} from '@angular/core';
import { AuthServicenpmProvider } from '../providers/auth-servicenpm/auth-servicenpm';


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
import { ExerciseProvider } from '../providers/exercise/exercise';
import { WorkoutProgramProvider } from '../providers/workout-program/workout-program';
import { WorkoutProgramExerciseProvider } from '../providers/workout-program-exercise/workout-program-exercise';

import { AddWorkoutProgramPage } from '../pages/add-workout-program/add-workout-program';
import { ListWorkoutProgramPage } from '../pages/list-workout-program/list-workout-program';
import { AddWorkoutexercisePage } from '../pages/add-workout-exercise/add-workout-exercise';

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProfileProvider } from '../providers/profile/profile';
import { ContactPage} from '../pages/contact/contact';

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
    ContactPage,
        AddWorkoutProgramPage,
    ListWorkoutProgramPage,
    AddWorkoutexercisePage
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
    ContactPage,
    AddWorkoutProgramPage,
    ListWorkoutProgramPage,
    AddWorkoutexercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AuthServicenpmProvider ,
    GooglePlus,
    ExerciseProvider,
    Facebook,
    ProfileProvider,
    WorkoutProgramProvider,
    WorkoutProgramExerciseProvider,
  ]
})
export class AppModule {}
