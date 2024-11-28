import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { registrationComponent } from "../registration/registration.component";
import { SharedModule } from '../Shared/shared.module';
import { ApiService } from '../services/api-services/api.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-and-registration',
  imports: [SharedModule, LoginComponent],
  templateUrl: './login-and-registration.component.html',
  styleUrl: './login-and-registration.component.css'
})
export class LoginAndRegistrationComponent {
  // username:string = '';
  // password:string = '';
  flag:boolean = true
  loginHide:boolean = false
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)])
  });

  routeData: any;

  constructor(private api: ApiService, private router:Router, private formbuilder: FormBuilder, private toastr: ToastrService){
  }

  ngOnInit(): void {

  }
  submit(regData: {message:string, username:string, password:string}){
    if(regData.message == "success"){
      this.flag = false
    }
    this.form.controls.username.setValue(regData.username)
    this.form.controls.password.setValue(regData.password)
  }
  onSubmit(){
    console.log(this.form.value)
    window.alert("Form submitted")
  }

  passwordMatchValidator(control: FormControl): {[key:string]: boolean} | null{
    if(this.form){
      let password = this.form.get('password')?.value;
      if(password !== control.value){
          return {passwordMismatch: true}
      }
    }
      return null
  }
}
