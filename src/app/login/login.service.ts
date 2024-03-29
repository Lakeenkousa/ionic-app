import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userIsAuthenticated = true;
  
    
  get userIsAuthenticated () {
    return this._userIsAuthenticated;
  }
  
  constructor() {}
  
  login() {
    this._userIsAuthenticated = true;
  }

  logout (){
    this._userIsAuthenticated = false;
  }
  }
