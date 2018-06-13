import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class WorkoutProgramProvider {

  private PATH = 'workoutProgram/';

  constructor(private db: AngularFireDatabase, public auth: AngularFireAuth) { }

  getAll(){
    return this.db.list(this.PATH + this.auth.auth.currentUser.uid )
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

  save(workoutProgram: any){
    return new Promise((resolve,reject) => {
      if (workoutProgram.key){
        this.db.list(this.PATH + this.auth.auth.currentUser.uid)
        .update(workoutProgram.key,
          {
            titulo: workoutProgram.titulo,
            objetivo: workoutProgram.objetivo,
            grupoMuscular: workoutProgram.grupoMuscular
          })
        .then(() => resolve())
        .catch((e) => reject(e));
      }else{
        this.db.list(this.PATH + this.auth.auth.currentUser.uid)
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
    return this.db.list(this.PATH + this.auth.auth.currentUser.uid).remove(key);
  }
}
