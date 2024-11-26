import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms'
import { SharedModule } from '../Shared/shared.module';
import { ApiServiceService } from '../api-service.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-forms',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  var:String = "https://www.google.com"
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)])
  });
  fname:any;
  username:String = '';
  password:String = '';
  constructor(private formbuilder: FormBuilder, private api:ApiServiceService){

  }

  ngOnInit(): void {
    // this.form = this.formbuilder.group({
    //   username: ['', Validators.required],
    //   password : ['', Validators.required],
    // })
    // this.fname = this.formControl.value('')
  }
  onSubmit(){
    console.log(this.form.value)
    window.alert("Form submitted")
    this.api.complexCal(7);
  }
  onSubmitng(){
    console.log(this.username, this.password)
    console.log()
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
