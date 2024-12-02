import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-vaccine-list',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vaccine-list.component.html',
  styleUrl: './vaccine-list.component.css'
})
export class VaccineListComponent {
  @ViewChild('modalElem') modalElem!:ElementRef;
  vaccineSchedule:any = new BehaviorSubject<any>([
    { name: 'Hepatitis B', dosage: '0.5 ml', daysFromBirth: 0 },
    { name: 'BCG (Bacillus Calmette-Guerin)', dosage: '0.1 ml', daysFromBirth: 1 },
    { name: 'Polio (OPV)', dosage: '2 drops', daysFromBirth: 15 },
    { name: 'DTaP (Diphtheria, Tetanus, Pertussis)', dosage: '0.5 ml', daysFromBirth: 42 },
    { name: 'Rotavirus', dosage: '1.5 ml', daysFromBirth: 70 },
  ]);
  vaccineSchedule$: Observable<any> = this.vaccineSchedule.asObservable()
  newVaccine = {
    name: '',
    dosage: '',
    daysFromBirth: 0,
  };

  addVaccine() {
    if (this.newVaccine.name && this.newVaccine.dosage && this.newVaccine.daysFromBirth !== null) {
      let currentData = this.vaccineSchedule.value;
      let updatedData = [...currentData, {...this.newVaccine}]
      this.vaccineSchedule.next(updatedData)
      this.modalElem.nativeElement.click()
      this.resetForm();
    }
  }

  resetForm() {
    this.newVaccine = {
      name: '',
      dosage: '',
      daysFromBirth: 0,
    };
  }
}