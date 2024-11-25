import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms'
import { SharedModule } from '../Shared/shared.module';
@Component({
  selector: 'app-forms',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  form:any;
  firstname:String = '';
  lastname:String = '';
  constructor(private formbuilder: FormBuilder){
    this.form = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname : ['', Validators.required],
      // gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
      
  }
  onSubmit(){
    console.log(this.form.value)
  }
  onSubmitng(){
    console.log(this.firstname, this.lastname)
    console.log()
  }

}
