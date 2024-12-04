import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  tableData = signal([
    { id: 1, name: 'John Doe', dob: '1990-01-01', aadhar: '1234 5678 9012', mobile: '9876543210' },
    { id: 2, name: 'Jane Smith', dob: '1992-05-15', aadhar: '2345 6789 0123', mobile: '8765432109' },
  ]);

  tables: BehaviorSubject<any> = new BehaviorSubject([
    { id: 1, name: 'John Doe', dob: '1990-01-01', aadhar: '1234 5678 9012', mobile: '9876543210' },
    { id: 2, name: 'Jane Smith', dob: '1992-05-15', aadhar: '2345 6789 0123', mobile: '8765432109' },
  ])

  tables$: Observable<any> = this.tables.asObservable()


  addRow(row: { id: number; name: string; dob: string; aadhar: string; mobile: string }) {
    this.tableData.update((current) => [...current, row]);
  }

  deleteRow(id: number) {
    this.tableData.update((current) => current.filter((row) => row.id !== id));
  }
}
