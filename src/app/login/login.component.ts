import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';
import { ApiService } from '../api.service';
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
  username:string = '';
  password:string = '';

  constructor(private api: ApiService, private router: Router){

  }

  ngOnInit(): void {
    console.log(this.flag);
    
  }

  onSubmitng(){
    if(this.flag==false){
      this.api.setData({username: this.username, password: this.password})
      this.router.navigate(['/registration'])
    }
    else{
      this.register.emit({message: "success", username: this.username, password: this.password})      
    }

  }
}
