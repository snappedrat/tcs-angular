import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    let username = localStorage.getItem('username')
    console.log(username)
    return true? (username!='' && username!=null) : false
  }
}
