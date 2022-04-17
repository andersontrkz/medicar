import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Schedule } from '../models/schedule';
import { MedicarService } from '../apis/medicar.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService extends MedicarService {
  path: string = '/agendas';
  url: string =`${this.base_url}${this.path}`;

  constructor(private httpClient: HttpClient,
    public authenticationService: AuthenticationService
  ) {
    super(authenticationService);
  }

  getSchedulings(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(this.url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}
