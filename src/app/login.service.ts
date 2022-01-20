import { Injectable } from '@angular/core';
import { ILoginResult } from './ILoginResult';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: any, password: any) : Promise<ILoginResult> {
    var checkLogin: ILoginResult = {loginSuccessful: true};

    var loginPromise = new Promise<ILoginResult>((resolve, rejects) => {
      if (username && password) {
        checkLogin.loginSuccessful = true;
        resolve(checkLogin);
      }
      else {
        checkLogin.loginSuccessful = false;
        rejects(checkLogin);
      }
    });

    return loginPromise;
  }
}
