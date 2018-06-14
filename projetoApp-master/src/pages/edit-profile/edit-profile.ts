import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileProvider } from '../../providers/profile/profile';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  title: String;
  form: FormGroup;
  profile: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder: FormBuilder, private provider: ProfileProvider,
  private toast: ToastController) {
    
    this.profile = this.navParams.data.profile || {};
    this.createForm();
    this.setupPageTitle();
  
  }
  
  private setupPageTitle(){
    this.title = this.navParams.data.profile ? 'Atualizar Perfil' : 'Adicionar Informação'
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.profile.key],
      nome: [this.profile.nome],
      sobrenome: [this.profile.sobrenome],
      altura : [this.profile.altura],
      peso: [this.profile.peso],
      idade: [this.profile.equipamento],
      circuCintura: [this.profile.circuCintura],
      circuBracoEsquerdo: [this.profile.circuBracoEsquerdo],
      circuBracoDireito: [this.profile.circuBracoDireito],
    })
  }

  onSubmit() {
    if (this.form.valid){
      this.provider.save(this.form.value)
      .then(() =>{
        this.toast.create({ message: 'Perfil salvo com sucesso.', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar o alterações.', duration: 3000}).present();
        console.log(e);
      });
    }
  }

}
