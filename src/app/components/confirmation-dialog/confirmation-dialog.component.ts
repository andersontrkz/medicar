import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  title = '';
  text = '';

  constructor(
    private readonly dialog: MatDialog,
    private appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
      this.title = data.title;
      this.text = data.text;
  }

  ngOnInit(): void {
  }


  confirm() {
    const { id } = this.data.appointment;
    this.appointmentService.deleteAppointment(id);
    this.dialogRef.close();

    this.dialog.open(AlertComponent, {
      data: {
        title: 'Sucesso!',
        text: 'Consulta desmarcada com sucesso.'
      }
    });  
  }
}
