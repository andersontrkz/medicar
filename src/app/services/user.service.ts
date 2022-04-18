import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MedicarService } from '../apis/medicar.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MedicarService {
  path: string = '/users';
  url: string = `${this.base_url}${this.path}`;

  constructor(
    private httpClient: HttpClient,
    public authenticationService: AuthenticationService
  ) {
    super(authenticationService);
  }

  postUser(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.url, JSON.stringify({ username, password, email }), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
