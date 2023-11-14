import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { note } from 'src/app/entities/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private urlNote: string = 'http://localhost:8080/note'

  constructor(private http: HttpClient) { }

  findAll(): Observable<note[]> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem('authToken') ?? ''
    });
    return this.http.get<note[]>(this.urlNote + "/" + window.localStorage.getItem("userId"), {headers: headers})
  }
}
