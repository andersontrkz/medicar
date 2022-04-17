import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {}

  submitLogin(): void {
    let success = false;
    const login = this.authenticationService.login(this.login.value, this.password.value, this.rememberMe.value);

    login.subscribe((response: any) => {
      const { token } = response;
      success = token;

      this.openAlert('Sucesso', 'Login efetuado com sucesso!');
      this.router.navigate(['/appointment']);
    });

    setTimeout(() => {
      if (!success){
        this.openAlert('Erro', 'Dados de acesso inválidos!');
      }
    }, 1000);
  }

  openAlert(title: string, text: string): void {
    this.dialog.open(AlertComponent, {
      data: { title, text },
    });
  }

  validateForm(): boolean {
    return this.login.valid && this.password.valid;
  }
}
