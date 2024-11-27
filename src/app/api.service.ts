import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userData: {username: string, password: string} = {username: '', password: ''}
  constructor() {

   }

  setData(data:{username: string, password: string}){
    this.userData.username = data.username
    this.userData.password = data.password
    console.log(this.userData);
    
  }

  getData():{username:string, password:String}{
    return this.userData;
  }
}
