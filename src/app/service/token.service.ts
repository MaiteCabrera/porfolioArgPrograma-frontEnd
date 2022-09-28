import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY ='AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<String> = [];

  constructor() { }

  public setToken(token: String): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }


}
