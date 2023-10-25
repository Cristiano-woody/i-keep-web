import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm!: FormGroup

  invalidCredentials: boolean = false;
  requiredInput = false
  classInput = 'input-form'

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }
  async submit() {
    this.classInput = 'input-form'
    this.invalidCredentials = false
    this.requiredInput = false
    if(this.userLoginForm.value.email === '' || this.userLoginForm.value.password === '') {
      this.classInput = 'input-form-error'
      this.requiredInput = true
      return
    }
      this.loginService.execute(this.userLoginForm.value).subscribe((result: { auth_token: any; }) => {
        window.localStorage.setItem('auth_token', `bearer ${result.auth_token}`)
        this.router.navigate(['']);
      }, (error: any) => {
        this.classInput = 'input-form-error'
        this.invalidCredentials = true
        this.userLoginForm = new FormGroup({
          email: new FormControl(''),
          password: new FormControl(''),
        })
      })
  }
}
