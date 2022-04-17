import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Appointment } from '../models/appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  base_url = 'http://localhost:3000';
  path = '/consultas';
  Authorization = "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.Authorization}` })
  }

  getAppointments(): Observable<Appointment[]> {
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

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
