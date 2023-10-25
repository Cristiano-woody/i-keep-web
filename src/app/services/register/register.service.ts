import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private urlRegister: string = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  execute(data: {name: string, email: string, password: string}): Observable<void> {
    return this.http.post<void>(this.urlRegister, data)
  }
}
