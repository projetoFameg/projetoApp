import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ProfileProvider {

  private PATH = 'profile/';

  constructor(private db: AngularFireDatabase, public auth: AngularFireAuth) {
    //this.PATH += this.auth.auth.currentUser.uid;
}

// this.db.list('caminho' + this.auth.auth.currentUser.uid).push(data);
getAll() {
  return this.db.list(this.PATH + this.auth.auth.currentUser.uid)
    .snapshotChanges()
    .map(changes => {
      return changes.map(m => ({ key: m.key, ...m.payload.val() }));
    });
}

  get(key: string){
    return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
    .snapshotChanges()
    .map(c => {
      return { key: c.key, ...c.payload.val() };
    })
  }

  save(profile: any){
    return new Promise((resolve,reject) => {
      if (profile.key){
        this.db.list(this.PATH + this.auth.auth.currentUser.uid)
        .update(profile.key,
          {
            nome: profile.nome,
            sobrenome: profile.sobrenome,
            idade: profile.idade,
            altura: profile.altura,
            peso: profile.peso,
            circuCintura: profile.circuCintura,
            circuOmbro: profile.circuOmbro,
            circuBracoDireito: profile.circuBracoDireito,
            circuBracoEsquerdo: profile.circuBracoEsquerdo,
            circuCoxa: profile.circuCoxa,
            circupanturilha: profile.circupanturilha,
            //imagem: exercicse.imagem
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH + this.auth.auth.currentUser.uid)
        .push({
          nome: profile.nome,
          sobrenome: profile.sobrenome,
          altura: profile.altura,
          peso: profile.peso,
          idade: profile.idade,
          circuCintura: profile.circuCintura,
          circuOmbro: profile.circuOmbro,
          circuBracoEsquerdo: profile.circuBracoEsquerdo,
          circuBracoDireito: profile.circuBracoDireito,
          circuCoxa: profile.circuCoxa,
          circupanturilha: profile.circupanturilha,
        })
        .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH + this.auth.auth.currentUser.uid).remove(key);
  }

}
