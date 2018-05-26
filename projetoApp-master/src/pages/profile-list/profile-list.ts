import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {  EditProfilePage } from '../edit-profile/edit-profile';
import { ProfileProvider } from '../../providers/profile/profile';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-profile-list',
  templateUrl: 'profile-list.html',
})
export class ProfileListPage {
  profile: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private provider: ProfileProvider,
  private toast: ToastController) {
  
    this.profile = this.provider.getAll();

  }

 
  navigateEditProfilePage(){
    // Navegar o usuário para a AddExercisePage
    this.navCtrl.push(EditProfilePage);
  }

  editProfile(profile: any){
    this.navCtrl.push(EditProfilePage, {profile: profile})
  }

  removeProfile(key: string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({message: 'Informação removido com sucesso.', duration: 3000}).present();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao remover o Informação.', duration: 3000}).present();
    });
  }

}
