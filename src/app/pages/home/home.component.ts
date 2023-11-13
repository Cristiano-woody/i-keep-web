import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notes$ = this.store.select('app').pipe(
    map(e => e.notes)
  )

  constructor(private store: Store<{app: IAppState}>) {}

  updateNote({noteId, description, title}:{noteId: string, description: string, title: string}) {
    console.log(noteId + description + title);
  }

  deleteNote(noteId: string) {
    console.log(noteId);
  }
}
