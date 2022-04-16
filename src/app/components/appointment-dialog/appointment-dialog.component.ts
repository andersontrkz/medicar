import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {
  appointment = {} as Appointment;
  appointments = [] as Appointment[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Appointment,
    private appointmentService: AppointmentService
    ) {
  }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
      console.log('appointments');
      console.log(appointments);
    });
  }

  logAge(): void {
  console.log( this.data );
  }

  submitAppointment() {
    console.log('teste');
  }
}
