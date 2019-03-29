import { Injectable } from '@angular/core';
import { HttpProvider } from './http';


@Injectable()
export class LoginProvider {

  constructor( public httpProvider : HttpProvider) {

  }
  public singIn(userName: string, password: string){
    let obj =  {
      userName : userName,
      password : password,
    };
    this.httpProvider.url = 'http://104.196.102.231/logon';
    return this.httpProvider.post(obj)
    
    
  }
}
