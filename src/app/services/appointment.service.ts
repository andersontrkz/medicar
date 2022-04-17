import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Appointment } from '../models/appointment';
import { MedicarService } from '../apis/medicar.service';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends MedicarService {
  path = '/consultas';

  constructor(
    private httpClient: HttpClient,
    public authenticationService: AuthenticationService
  ) {
    super(authenticationService);
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.base_url}${this.path}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  postAppointment(agenda_id: number, horario: string): Observable<any> {
    return this.httpClient.post<any>(`${this.base_url}${this.path}`, JSON.stringify({ agenda_id, horario}), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteAppointment(consulta_id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.base_url}${this.path}/${consulta_id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
