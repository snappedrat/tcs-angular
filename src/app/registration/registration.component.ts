import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms'
import { SharedModule } from '../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { provideToastr, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class registrationComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)])
  });

  constructor(private formbuilder: FormBuilder, private api:ApiService, private toastr: ToastrService){

  }
  routeData: any;
  ngOnInit(): void {
      this.routeData = this.api.getData()
      console.log(this.routeData);
      if(this.routeData.username != '' && this.routeData.password!=''){
        this.form.controls.username.setValue(this.routeData.username)
        this.form.controls.password.setValue(this.routeData.password)
        this.toastr.show("Please register as new user","Message", {positionClass: "toast-top-right"})
      }

  }
  onSubmit(){
    console.log(this.form.value)
    window.alert("Form submitted")
  }

  passwordMatchValidator(control: FormControl): {[key:string]: boolean} | null{
    if(this.form){
      let password = this.form.get('password')?.value;
      if(password !== control.value){
          // console.log(password !== control.value);
          // console.log(this.form.get('confirmpassword')?.errors?.['passwordMismatch']);
          
          return {passwordMismatch: true}
      }
    }
      return null
  }

}
