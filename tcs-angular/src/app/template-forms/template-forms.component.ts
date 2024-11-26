import { Component } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

@Component({
  selector: 'app-template-forms',
  imports: [SharedModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {

  form:any;
  username:String = '';
  password:String = '';

  constructor(){

  }

  ngOnInit(): void {
  }

  onSubmitng(){
    console.log(this.username, this.password)
    window.alert("Login Successfull!!!!!!!!!!!")
  }
}
