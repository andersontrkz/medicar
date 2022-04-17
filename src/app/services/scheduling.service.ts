import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  base_url = 'http://localhost:3000';
  path = '/agendas';
  Authorization = "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.Authorization}` })
  }

  getSchedulings(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(`${this.base_url}${this.path}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
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
