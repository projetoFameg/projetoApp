import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class WorkoutProgramProvider {

  private PATH = 'workoutProgram/';

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

  save(workoutProgram: any){
    return new Promise((resolve,reject) => {
      if (workoutProgram.key){
        this.db.list(this.PATH)
        .update(workoutProgram.key,
          {
            titulo: workoutProgram.titulo,
            objetivo: workoutProgram.objetivo,
            grupoMuscular: workoutProgram.grupoMuscular
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH)
        .push({
          titulo: workoutProgram.titulo,
          objetivo: workoutProgram.objetivo,
          grupoMuscular: workoutProgram.grupoMuscular
        })
        .then(() => resolve());
      }
    })
  }
  
  remove(key: string){
    this.db.list('WorkoutProgramExercise/').remove(key);
    return this.db.list(this.PATH).remove(key);
  }
}
