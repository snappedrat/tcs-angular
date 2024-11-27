import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tcs-angular';
}
