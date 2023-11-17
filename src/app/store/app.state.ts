import { createAction, createReducer, on, props } from '@ngrx/store';
import { note } from '../entities/note';

export interface IAppState {
  userId: string;
  authToken: string;
  notes: note[]
}

export const appInitialState: IAppState = {
  userId: '',
  authToken: '',
  notes: [],
};

export const setUserId = createAction("[App] set user id", props<{id: string}>())

export const setAuthToken = createAction("[App] set auth token", props<{token: string}>())

export const loadNotes = createAction("[App] load notes")
export const setNotes = createAction("[App] set notes", props<{notes: note[]}>())
export const successSetNotes = createAction("[App] [notes] success set notes")

export const appReducer = createReducer(
  appInitialState,
  on(setUserId, (state, { id }) => ({ ...state, userId: id })),
  on(setAuthToken, (state, { token }) => ({ ...state, authToken: token })),
  on(setNotes, (state, { notes }) => ({ ...state, notes: notes}))
);
