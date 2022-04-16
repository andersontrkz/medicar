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

  specialty = new FormControl('', [Validators.required]);
  doctor = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  hour = new FormControl('', [Validators.required]);
  
  allSchedules = [] as Schedule[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Schedule,
    private schedulingService: SchedulingService,
    private appointmentService: AppointmentService,
    private router: Router,
    private dialogRef: MatDialogRef<AppointmentDialogComponent>,
    private readonly dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this.getSchedule();
  } 

  getSchedule(): void {
    this.schedulingService.getSchedulings().subscribe((schedules: Schedule[]) => {
      this.schedules = schedules;
    });
  }

  submitAppointments() {
    const { id } = this.allSchedules[0];
    const hour = this.hour.value;

    this.appointmentService.postAppointment(id, hour).subscribe((schedules: any) => {
      console.log(schedules);
    });

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/appointment']);
    });

    this.openAlertComponent();

    this.dialogRef.close();
  }

  filterBySpecialty(): void {
    this.doctor.setValue(null);
    this.date.setValue(null);
    this.hour.setValue(null);

    if (this.specialty.value) {
      this.allSchedules = this.schedules.filter((schedule: Schedule) => {
        return schedule.medico.especialidade.nome === this.specialty.value;
      });
    };
  }

  filterByDoctor(): void {
    this.date.setValue(null);
    this.hour.setValue(null);

    if (this.doctor.value) {
      this.allSchedules = this.allSchedules.filter((schedule: Schedule) => {
        return schedule.medico.nome === this.doctor.value;
      });
    };
  }

  filterByDay(): void {
    this.hour.setValue(null);

    if (this.date.value) {
      this.allSchedules = this.allSchedules.filter((schedule: Schedule) => {
        return schedule.dia === this.date.value;
      });
    };
  }

  openAlertComponent(): void {
    this.dialog.open(AlertComponent, {
      data: {
        title: 'Sucesso!',
        text: 'Consulta adicionada com sucesso.'
      }
    });  
  }
}
