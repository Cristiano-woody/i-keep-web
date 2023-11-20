import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { NoteService } from 'src/app/services/note/note.service';
import {IAppState, deleteNoteAction, loadNotesAction, updateNoteAction} from 'src/app/store/app.state';

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
    this.store.dispatch(updateNoteAction({noteId: noteId, description: description, title: title}))
  }

  ngOnInit() {
    this.store.dispatch(loadNotesAction())
  }

  deleteNote(noteId: string) {
    this.store.dispatch(deleteNoteAction({noteId:noteId}))
  }
}
