import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userData: {username: string, password: string} = {username: '', password: ''}

  mockUsers:any = [
    { username: 'john_doe', password: 'password123', role: 'user' },
    { username: 'jane_doe', password: 'securePassword!', role: 'moderator' },
    { username: 'admin_user', password: 'admin@2024', role: 'admin' }, 
    { username: 'test1', password: 'test123', role: 'admin' }, 
  ];
  

  constructor(private router: Router) {

   }

   login(data:{username: string, password: string}){
      let user = this.mockUsers.find((u:any)=> u.username === data.username && u.password === data.password)
      return !!user
   }

  setData(data:{username: string, password: string}){
    this.userData.username = data.username
    this.userData.password = data.password
    this.setLocalStorage(data)
    this.router.navigate(['/registration']) 
  }

  setLocalStorage(data:{username: string, password: string}){
    localStorage.setItem("username", data.username)
    localStorage.setItem("password", data.password)
  }

  setDataLogin(data:{username: string, password: string}){
    this.setLocalStorage(data)
    console.log(localStorage.getItem("username"))
    this.router.navigate(['/home']) 
  }

  getData():{username:string, password:String}{
    return this.userData;
  }

  addUser(data:any){
    console.log(data)
    this.mockUsers.push({username: data.username, password: data.password})
    console.log(this.mockUsers)
  }
}
