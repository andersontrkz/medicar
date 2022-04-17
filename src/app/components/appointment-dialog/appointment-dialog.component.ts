import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/models/schedule';
import { AppointmentService } from 'src/app/services/appointment.service';
import { SchedulingService } from 'src/app/services/scheduling.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit {
  schedules = [] as Schedule[];
  schedulesAccumulator = [] as Schedule[];

  specialty: FormControl = new FormControl('', [Validators.required]);
  doctor: FormControl = new FormControl('', [Validators.required]);
  date: FormControl = new FormControl('', [Validators.required]);
  hour: FormControl = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Schedule,
    private schedulingService: SchedulingService,
    private appointmentService: AppointmentService,
    private router: Router,
    private dialogRef: MatDialogRef<AppointmentDialogComponent>,
    private readonly dialog: MatDialog
  ) {
    this.schedulingService.getSchedulings().subscribe((schedules: Schedule[]) => {
      this.schedules = schedules;
    });
  }

  ngOnInit(): void {} 

  submitAppointments(): void {
    const { id } = this.schedulesAccumulator[0];
    const hour = this.hour.value;

    this.appointmentService.postAppointment(id, hour).subscribe();

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/appointment']);
    });

    this.openSuccessAlert();
    this.dialogRef.close();
  }

  filterBySpecialty(): void {
    this.doctor.setValue(null);
    this.date.setValue(null);
    this.hour.setValue(null);

    if (this.specialty.value) {
      this.schedulesAccumulator = this.schedules.filter((schedule: Schedule) => {
        return schedule.medico.especialidade.nome === this.specialty.value;
      });
    };
  }

  filterByDoctor(): void {
    this.date.setValue(null);
    this.hour.setValue(null);

    if (this.doctor.value) {
      this.schedulesAccumulator = this.schedulesAccumulator.filter((schedule: Schedule) => {
        return schedule.medico.nome === this.doctor.value;
      });
    };
  }

  filterByDay(): void {
    this.hour.setValue(null);

    if (this.date.value) {
      this.schedulesAccumulator = this.schedulesAccumulator.filter((schedule: Schedule) => {
        return schedule.dia === this.date.value;
      });
    };
  }

  openSuccessAlert(): void {
    this.dialog.open(AlertComponent, {
      data: {
        title: 'Sucesso',
        text: 'Consulta adicionada com sucesso!'
      }
    });  
  }
}
