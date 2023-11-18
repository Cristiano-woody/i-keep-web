import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, switchMap, tap} from "rxjs";
import {IAppState, loadNotes, setNotes, successSetNotes} from "./app.state";
import {NoteService} from "../services/note/note.service";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class AppEffectsService {

  constructor(
    private actions$: Actions,
    private noteService: NoteService,
    private store: Store<{ app: IAppState }>
  ) {
  }

  public loadNote = createEffect(() => this.actions$.pipe(
      ofType(loadNotes),
      switchMap(() =>
        this.noteService.findAll()
      ),
      tap((notes) =>
        this.store.dispatch(setNotes({ notes: notes }))
      ),
      map( () => successSetNotes())
    ) )
}
