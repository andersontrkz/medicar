import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Appointment {
  especialidade: string;
  medico: string;
  data: string;
  hora: string;
}

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {
  appointments: Appointment[] = [
    {especialidade: 'Pediatria', medico: 'Dr. André', data: '01/01/2020', hora: '13:00'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Appointment,
    private matDialog: MatDialog
    ) {
  }

  ngOnInit(): void {
  }

  logAge(): void {
  console.log( this.data );
  }

  submitAppointment() {
    console.log('teste');
  }
}
