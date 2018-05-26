import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**/

@Injectable()
export class AuthServiceProvider {
    user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,  private googlePlus: GooglePlus, private facebook: Facebook) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

 

  signInWithAdmin(user: User) {
    if (user.email == "cleverton_decker@hotmail.com") {
      return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    }
  }

  
  SignIn(user: User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
 /*
  signInWithFacebook() {
    return this.facebook.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        //https://developers.facebook.com/docs/graph-api/reference/user
        //Ao logar com o facebook o profile do usuario é automaticamente atualizado.
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
      });
}
*/
  signInWithGoogle() {
    return this.googlePlus.login({
      'webClientId': '543412652932-o9nu6t1b06b3enk5lriotemfqca0di0b.apps.googleusercontent.com',
      'offline': true
    })

      .then(res => {
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then((user: firebase.User) => {
            // atualizando o profile do usuario
            return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
          });
      });
}

  signOut() {
    if (this.angularFireAuth.auth.currentUser.providerData.length) {
      for(var i=0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++)
      var provider = this.angularFireAuth.auth.currentUser.providerData[i];
      //if Auth with Google
      if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
        return this.googlePlus.logout()
        // return this.googlePlus.disconnect();
        .then(() => {
          return this.signOutFirebase();
        });

      //if Auth with Facebook
      } else if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) {
        return this.facebook.logout()
        //        return this.googlePlus.disconnect();
        .then(() => {
          return this.signOutFirebase();
        });
      }
    }
  
    return this.signOutFirebase();
}

  signOutFirebase(){
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }
}
