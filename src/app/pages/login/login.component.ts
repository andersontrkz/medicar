import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
  }
 
  saveForm(){
    console.log(this.login)
    console.log(this.password)
  }

  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  hidePassword = true;
}
