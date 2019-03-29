
import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

/*
  Generated class for the BairrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BairrosProvider {

  constructor(public http : HttpProvider) {
  }
  public listaBairros(IdCid : string){
    this.http.url = 'http://104.196.102.231/bairros/'+IdCid;
    return this.http.get()

  }
}
