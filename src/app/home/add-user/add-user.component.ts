import { Component } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { StateService } from '../../services/state-services/state.service';

@Component({
  selector: 'app-add-user',
  standalone:true,
  imports: [SharedModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  newRow = { id: 0, name: '', dob: '', aadhar: '', mobile: '' };
  isModalOpen = false
  constructor(public appState: StateService) {}
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  addRow() {
    if (
      this.newRow.id &&
      this.newRow.name &&
      this.newRow.dob &&
      this.newRow.aadhar &&
      this.newRow.mobile
    ) {
      this.appState.addRow(this.newRow);
      this.newRow = { id: 0, name: '', dob: '', aadhar: '', mobile: '' }; 
      this.isModalOpen = false
    }
  }

  deleteRow(id: number) {
    this.appState.deleteRow(id);
  }
}
