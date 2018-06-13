import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListTreinoPage } from '../list-treino/list-treino';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth/auth-service';

@IonicPage()
@Component({
  selector: 'page-list-menutreino',
  templateUrl: 'list-menutreino.html',
})
export class ListMenutreinoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMenutreinoPage');
  }

  
MenuTreinoRedirect() {
  this.navCtrl.push(ListTreinoPage);
}
}
