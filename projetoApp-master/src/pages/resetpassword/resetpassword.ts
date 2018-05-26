import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth/auth-service';
import { NgModuleDefinitionFactory } from '@angular/core/src/view';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  userEmail: string ='';
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthServiceProvider) {
    }

  resetPassword() {
    if (this.form.form.valid) {
      
      let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'});
      this.authService.resetPassword(this.userEmail)
      .then(() => {
        toast.setMessage("Solicitação foi enviada para seu e-mail!")
        toast.present();

        this.navCtrl.pop();
      })
      .catch((error: any) => {
        if (error.code == 'auth/invalid-email') {
          toast.setMessage('O e-mail é inválido');
        }else if (error.code == 'auth/user-not-found') {
          toast.setMessage('O usuário não existe');
        }

        toast.present();
      });
  }

}
}


