import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  rememberMe = new FormControl('', [Validators.required]);

  hidePassword = true;

  constructor(
    private readonly dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router,
  ){}

  ngOnInit(): void {
  }

  submitLogin(){
    let success = false;
    const login = this.authenticationService.login(this.login.value, this.password.value, this.rememberMe.value);
    login.subscribe(({ token }) => {
      success = token
        this.dialog.open(AlertComponent, {
          data: {
            title: 'Sucesso',
            text: 'Login efetuado com sucesso!'
          }
        });


      this.router.navigate(['/appointment']);
    })
    setTimeout(() => {
      if (!success){
        this.dialog.open(AlertComponent, {
          data: {
            title: 'Erro!',
            text: 'Dados de acesso inválidos.'
          }
        });  
      }
    }, 1000)
  }

  validateForm() {
    let disable;
    
    disable = this.login.valid && this.password.valid;

    return disable;
  }
}
