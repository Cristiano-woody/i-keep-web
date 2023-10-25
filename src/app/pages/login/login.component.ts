import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm!: FormGroup

  invalidCredentials: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }
  async submit() {
      this.loginService.execute(this.userLoginForm.value).pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
          } else {
            this.invalidCredentials = true
          }
          return throwError('Something bad happened; please try again later.');
        })
      ).subscribe((result: { auth_token: any; }) => {
        console.log(result.auth_token)
        window.localStorage.setItem('auth_token', `bearer ${result.auth_token}`)
        this.router.navigate(['']);
      })
  }
}
