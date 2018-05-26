import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ExerciciosProvider {
  private PATH = 'exercicios/';

  constructor(private db: AngularFireDatabase) { }
  
  getAll() {
      return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {    //Recebe mudanças
        return changes.map(c => ({  key: c.payload.key , ...c.payload.val()
        
        }));
      })
  }
  

  get(key: string) {
      return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(c => {     //mapeia o objeto para manipular
        return { key: c.key, ...c.payload.val() };
      })
  }

  save(exercicio: any) {
    return new Promise((resolve, reject) => {
      if (exercicio.key) {
        this.db.list(this.PATH)
        .update(exercicio.key, { name: exercicio.name, categoria: exercicio.categoria })
        .then(() => resolve())
        .catch((e) => reject(e));

        /* Acessa o objeto diretamente.
        this.db.object(this.PATH + exercicio.key)
        .update({ name: exercicio.name, categoria: exercicio.categoria })
        .then(() => resolve())
        .catch((e) => reject(e));
        */
      } else {
        this.db.list(this.PATH + exercicio.key)
        .push({ name: exercicio.name, categoria: exercicio.categoria })
        .then(() => resolve())

       // caso deseje pegar a key do objeto
       //.then((result: any) => resolve(result.key));
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
    
  }


}


