import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { ExerciseListPage } from '../exercise-list/exercise-list';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})


export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthServiceProvider) {
  }
  
  

  
  signInWithFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();
    
      firebase.auth().signInWithRedirect(provider).then(() =>{
      firebase.auth().getRedirectResult().then((result) =>{
        alert(JSON.stringify(result));
        }).catch(function(error) {
          alert(JSON.stringify(error))
        });
      })
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
        if (error.code  == 'auth/ invalid-email') {
          toast.setMessage('O e-mail digitado não é valido!');
        } else if (error.code  == 'auth/user-disabled') {
          toast.setMessage('O usuário está desativado');
        } else if (error.code  == 'auth/user-not-found') {
          toast.setMessage('O usuário não existe');
        } else if (error.code  == 'auth/wrong-password') {
          toast.setMessage('A senha está incorreta');
        }
        toast.present(); 
      });
  }

  
 
  resetPassword(){
    this.navCtrl.push(ResetpasswordPage);
  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }




  // Login com usuario e senha / Login como administrador
  signIn(user: User){
    if ( this.authService.signInWithAdmin(this.user)) {
      this.authService.SignIn(this.user)
      .then(() => {
        this.navCtrl.setRoot(ExerciseListPage);
      })
      .catch((error: any) => {
        let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
        if (error.code  == 'auth/ invalid-email') {
          toast.setMessage('O e-mail digitado não é valido!');
        } else if (error.code  == 'auth/user-disabled') {
          toast.setMessage('O usuário está desativado');
        } else if (error.code  == 'auth/user-not-found') {
          toast.setMessage('O usuário não existe');
        } else if (error.code  == 'auth/wrong-password') {
          toast.setMessage('A senha está incorreta');
        }
        toast.present(); 
      });

    }else if (this.form.form.valid) {
      this.authService.SignIn(this.user)
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error: any) => {
        let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
        if (error.code  == 'auth/ invalid-email') {
          toast.setMessage('O e-mail digitado não é valido!');
        } else if (error.code  == 'auth/user-disabled') {
          toast.setMessage('O usuário está desativado');
        } else if (error.code  == 'auth/user-not-found') {
          toast.setMessage('O usuário não existe');
        } else if (error.code  == 'auth/wrong-password') {
          toast.setMessage('A senha está incorreta');
        }
        toast.present(); 
      });
  }

  
}

  

 
  
}
