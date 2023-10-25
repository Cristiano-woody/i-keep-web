import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface loginResponse {
  auth_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin: string = 'http://localhost:8080/auth/login'

  constructor(private http: HttpClient) { }

  execute(data: {email: string, password: string}): Observable<loginResponse> {
    return this.http.post<loginResponse>(this.urlLogin, data)
  }
}
