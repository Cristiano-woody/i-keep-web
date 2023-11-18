import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { NoteService } from 'src/app/services/note/note.service';
import {IAppState, loadNotes} from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  notes$ = this.store.select('app').pipe(
    map(e => e.notes)
  )

  constructor(private store: Store<{app: IAppState}>, private noteService: NoteService) {}

  updateNote({noteId, description, title}:{noteId: string, description: string, title: string}) {
    console.log(noteId + description + title);
  }


  ngOnInit() {
    this.store.dispatch(loadNotes())
  }

  deleteNote(noteId: string) {
    console.log(noteId);
  }
}
