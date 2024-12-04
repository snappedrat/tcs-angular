import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms'
import { SharedModule } from '../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api-services/api.service';
import { provideToastr, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StateService } from '../services/state-services/state.service';

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



  constructor(private formbuilder: FormBuilder, 
              private api:ApiService, 
              private toastr: ToastrService, 
              private router: Router,
              private state: StateService){

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
      /////////////////////////////////////////////////////////
      let newrow = { id: 3, name: 'Kun', dob: '1992-05-15', aadhar: '2805 6789 0123', mobile: '9476737564' }
      this.state.tableData.update((rows)=>[...rows, newrow])
      console.log(this.state.tableData())
      this.state.tables.next([...this.state.tables.value, newrow])
      console.log(this.state.tables.value); 
      
  }
  onSubmit(){
    console.log(this.form.value)
    window.alert("Form submitted")
    this.api.addUser(this.form.value)
    let x = this.form?.get('username')?.value as string
    localStorage.setItem("username", x)
    this.router.navigate(['/login'])
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
