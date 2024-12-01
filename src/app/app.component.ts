import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registrationComponent } from './registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tcs-angular';
  x = signal('light')
  constructor(private http:HttpClient){
    effect(()=>console.log(this.x())

  )
  }
  // data : Observable<any> 
  ngOnInit(): void {
    let data$ = this.http.get('https://jsonplaceholder.typicode.com/comments')
    
  }

  change(){
    if(this.x()=='dark')
      this.x.set('light')
    else
      this.x.set('dark')
  }
  

}
