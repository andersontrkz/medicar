import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from 'src/app/components/appointment-dialog/appointment-dialog.component';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointment = {} as Appointment;
  appointments = [] as Appointment[];

  displayedColumns: string[] = ['especialidade', 'medico', 'dia', 'horario', 'actions'];

  constructor(
    private readonly dialog: MatDialog,
    private appointmentService: AppointmentService,
    private authenticationService: AuthenticationService
    ) {
  }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
    });
  }

  openAppointmentDialogComponent(): void {
    this.dialog.open(AppointmentDialogComponent, {
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      hasBackdrop: true,
      maxHeight: '700px',
    });  
  }

  logout() {
    this.authenticationService.logout();
  }
}