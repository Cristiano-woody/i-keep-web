import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  IAppState
} from 'src/app/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm!: FormGroup;

  invalidCredentials: boolean = false;
  requiredInput = false;
  classInput = 'input-form';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store<{ app: IAppState }>
  ) {}

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  async submit() {
    this.classInput = 'input-form';
    this.invalidCredentials = false;
    this.requiredInput = false;
    if (
      this.userLoginForm.value.email === '' ||
      this.userLoginForm.value.password === ''
    ) {
      this.classInput = 'input-form-error';
      this.requiredInput = true;
      return;
    }
    this.loginService.execute(this.userLoginForm.value).subscribe(
      (result: { authToken: string; userId: string }) => {
        window.localStorage.setItem('authToken', `bearer ${result.authToken}`);
        window.localStorage.setItem('userId', result.userId);
        this.router.navigate(['']);
      },
      (error: any) => {
        this.classInput = 'input-form-error';
        this.invalidCredentials = true;
        this.userLoginForm = new FormGroup({
          email: new FormControl(''),
          password: new FormControl(''),
        });
      }
    );
  }
}
