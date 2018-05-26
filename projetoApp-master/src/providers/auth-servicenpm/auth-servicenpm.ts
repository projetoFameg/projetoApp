import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServicenpmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServicenpmProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServicenpmProvider Provider');
  }

}
