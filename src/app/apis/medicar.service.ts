// * BASED ON * https://stackoverflow.com/questions/68522223/typeerror-ctx-product-is-undefined

import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MedicarService {
  base_url: string = environment.apiBaseUrl;
  authorization: string = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.authorization}` })
  }

  constructor(protected authenticationService: AuthenticationService) {
    this.authorization = authenticationService.getToken();
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.authorization}` })
    };
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    };
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
