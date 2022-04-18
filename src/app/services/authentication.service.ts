import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Storage {
  username: string,
  token: string,
  rememberMe: boolean,
  isLogged: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  base_url: string = environment.apiBaseUrl;
  path: string = '/users/login';

  storageKey: string = 'currentUser';

  storageValue: Storage = {
    username: '',
    token: '',
    rememberMe: false,
    isLogged: false,
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(public router: Router, private httpClient: HttpClient) {
    const storageValue = localStorage.getItem(this.storageKey) || sessionStorage.getItem(this.storageKey);

    if (storageValue) {
      this.storageValue = JSON.parse(storageValue);
    }
  }

  getUsername() {
    return this.storageValue.username;
  }

  getToken() {
    return this.storageValue.token;
  }

  getAuthenticationStatus(): boolean {
    if (this.storageValue.isLogged && this.storageValue.token) {
      return true;
    }
    return false;
  }

  postLogin(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.base_url}${this.path}`, JSON.stringify({ username, password }), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  login(username: string, password: string, rememberMe: boolean) {
    const loginRequest = this.postLogin(username, password);

    loginRequest.subscribe(({ token }) => {
      this.storageValue = {
        token,
        username,
        rememberMe,
        isLogged: true,
      }

      this.setStorageCredentials(rememberMe);
    });

    return loginRequest;
  }

  setStorageCredentials(isRememberMe: boolean) {
    if (isRememberMe) {
      this.resetStorageCredentials();
      localStorage.setItem(this.storageKey, JSON.stringify(this.storageValue));
    } else {
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.storageValue));
    }
  }

  resetStorageCredentials() {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.storageKey);
  }

  logout() {
    this.resetStorageCredentials();
    this.router.navigate(['/'], { replaceUrl: true });
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
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
