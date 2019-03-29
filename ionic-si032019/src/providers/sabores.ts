
import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

/*
  Generated class for the SaboresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaboresProvider {

  constructor(public httpProvider: HttpProvider) {

    }
    public listaSabores(IdTam : string){
      this.httpProvider.url = 'http://104.196.102.231/sabores/'+IdTam;
      return this.httpProvider.get()
  }

}
