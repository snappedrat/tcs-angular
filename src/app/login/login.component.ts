import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';
import { ApiService } from '../services/api-services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() flag:boolean = false;
  @Output() register = new EventEmitter();
  form:any;
  username:any = '';
  password:any = '';

  constructor(private api: ApiService, private router: Router){

  }

  ngOnInit(): void {
    // console.log(this.flag);
    let userData = this.api.getData()
    if(userData.username!='' && userData.password!=''){
      this.username = userData.username
      this.password = userData.password
    }
      
  }
  //********Used for login and registration component but its not used now */
  // onSubmitng(){
  //   if(this.flag==false){
  //     this.api.setData({username: this.username, password: this.password})
  //   }
  //   else{
  //     this.register.emit({message: "success", username: this.username, password: this.password})      
  //   }
  // }
  onSubmitng(){
      this.api.login({username: this.username, password: this.password})
      let auth = this.api.isLoggedIn()
      console.log(auth);
      
      if(!auth){
        this.api.setData({username: this.username, password: this.password})
      }
      else{
        this.api.setDataLogin({username: this.username, password: this.password})
      }
  }
}
