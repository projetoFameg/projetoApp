import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class WorkoutProgramExerciseProvider {

  private PATH = 'WorkoutProgramExercise/';

  constructor(private db: AngularFireDatabase) { }

  getAll(keyProgram: any){
    return this.db.list(this.PATH  + keyProgram)
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()}));
    })
  }

  get(key: string, keyProgram: any){
  
    return this.db.object(this.PATH + keyProgram)
    .snapshotChanges()
    .map(c => {
      return { key: c.key, ...c.payload.val() };
    })
  }

  save(WorkoutProgramExercise: any, keyProgram: any){
    return new Promise((resolve,reject) => {
      if (WorkoutProgramExercise.key){
        this.db.list(this.PATH  + keyProgram)
        .update(WorkoutProgramExercise.key,
          {
            idExercicio: WorkoutProgramExercise.idExercicio,
            serie: WorkoutProgramExercise.serie,
            repeticao: WorkoutProgramExercise.repeticao,
            carga: WorkoutProgramExercise.carga
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH  + keyProgram)
        .push({
          idExercicio: WorkoutProgramExercise.idExercicio,
          serie: WorkoutProgramExercise.serie,
          repeticao: WorkoutProgramExercise.repeticao,
          carga: WorkoutProgramExercise.carga
        })
        .then(() => resolve());
      }
    })
  }

  remove(key: string, keyProgram: any){
    return this.db.list(this.PATH  + keyProgram).remove(key);
  }

}
