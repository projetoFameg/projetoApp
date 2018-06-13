import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ExerciseProvider {

  private PATH = 'exercise/';

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

  save(exercise: any){
    return new Promise((resolve,reject) => {
      if (exercise.key){
        this.db.list(this.PATH)
        .update(exercise.key,
          {
            NomeExercicio: exercise.NomeExercicio,
            //imagem: exercicse.imagem
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH)
        .push({
          NomeExercicio: exercise.NomeExercicio,
        })
        .then(() => resolve());
      }
    })
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }

}
