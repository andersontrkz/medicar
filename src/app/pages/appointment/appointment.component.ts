import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { AppointmentDialogComponent } from 'src/app/components/appointment-dialog/appointment-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  username = '';
  appointment = {} as Appointment;
  appointments = [] as Appointment[];

  displayedColumns: string[] = ['especialidade', 'medico', 'dia', 'horario', 'actions'];

  constructor(
    private readonly dialog: MatDialog,
    private appointmentService: AppointmentService,
    private authenticationService: AuthenticationService
    ) {
      this.username = authenticationService.getUsername();
  }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
    });
  }

  deleteAppointment(appointment: Appointment) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirmação',
        text: 'Tem certeza que deseja desmarcar está consulta?',
        appointment: appointment
      }
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
    this.dialog.open(AlertComponent, {
      data: {
        title: 'Sucesso',
        text: 'Usuário desconectado com sucesso!'
      }
    });  
  }
}