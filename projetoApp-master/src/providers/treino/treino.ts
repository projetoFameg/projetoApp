import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExerciseProvider } from '../exercise/exercise';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class TreinoProvider {

  private PATH = 'treino/';

  constructor(private db: AngularFireDatabase, public auth: AngularFireAuth) { }

  getAll(){
    return this.db.list(this.PATH + this.auth.auth.currentUser.uid)
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()}));
    })
  }

  get(key: string){
    return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
    .snapshotChanges()
    .map(c => {
      return { key: c.key, ...c.payload.val() };
    })
  }

  save(treino: any, exercise: any){
    return new Promise((resolve,reject) => {
      if (treino.key){
        this.db.list(this.PATH + this.auth.auth.currentUser.uid)
        .update(treino.key,
          {
            diaSemana: treino.diaSemana,
            NomeExercicio: treino.NomeExercicio,
            descricao: treino.descricao,
            equipamento: treino.equipamento,
            grupoMuscular: treino.grupoMuscular,
            repeticoes: treino.repeticoes,
            //imagem: exercicse.imagem
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH + this.auth.auth.currentUser.uid)
        .push({
          diaSemana: treino.diaSemana,
          NomeExercicio: treino.NomeExercicio,
          descricao: treino.descricao,
          equipamento: treino.equipamento,
          grupoMuscular: treino.grupoMuscular,
          repeticoes: treino.repeticoes,
        })
        .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH + this.auth.auth.currentUser.uid ).remove(key);
  }

}
