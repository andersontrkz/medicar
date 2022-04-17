import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    private readonly dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router,
  ){}

  ngOnInit(): void {}

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);

  hidePassword = true;
  hideConfirmPasswordassword = true;

  submitCreateAccount(): void {
    let success = false;
    const account = this.authenticationService.postAccount(this.name.value, this.email.value, this.confirmPassword.value);

    account.subscribe(({ username }) => {
      success = username;

      this.openAlert('Sucesso', 'Conta cridada com sucesso!');
      this.router.navigate(['/']);
    });

    setTimeout(() => {
      if (!success){
        this.openAlert('Erro!', 'Dados de acesso inválidos.');
      }
    }, 1000);
  }

  openAlert(title: string, text: string) {
    this.dialog.open(AlertComponent, {
      data: { title, text },
    });
  }

  validateForm(): boolean {
    return this.name.valid && this.email.valid && this.password.valid && (this.password.value === this.confirmPassword.value);
  }
}
