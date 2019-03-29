import { Injectable } from '@angular/core';
import { HttpProvider } from './http';


@Injectable()
export class TamanhosProvider {

  constructor( public httpProvider : HttpProvider ) {

  }
  public listaTamanho(){
    this.httpProvider.url = 'http://104.196.102.231/tamanhos';
    return this.httpProvider.get()
  }

}
