import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExerciseProvider } from '../exercise/exercise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TreinoProvider {

  private PATH = 'treino/';

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()}));
    })
  }

  get(key: string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(c => {
      return { key: c.key, ...c.payload.val() };
    })
  }

  save(treino: any, exercise: any){
    return new Promise((resolve,reject) => {
      if (treino.key){
        this.db.list(this.PATH)
        .update(treino.key,
          {
            titulo: treino.titulo,
            descricao: treino.descricao,
            repeticoes: treino.repeticoes,
            equipamento: exercise.equipamento,
            grupoMuscular: exercise.grupoMuscular
            //imagem: exercicse.imagem
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH)
        .push({
          titulo: treino.titulo,
          descricao: treino.descricao,
          repeticoes: treino.repeticoes,
          equipamento: exercise.equipamento,
          grupoMuscular: exercise.grupoMuscular
        })
        .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }

}
