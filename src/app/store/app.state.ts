import { createReducer } from '@ngrx/store';

interface note {
  title: string;
  description: string;
  id: string;
}

export interface IAppState {
  userId: string;
  authToken: string;
  notes: note[]
}

export const appInitialState: IAppState = {
  userId: '',
  authToken: '',
  notes: [{
    title: 'teste',
    description: 'teste',
    id: '1'
  }],
};

export const appReducer = createReducer(appInitialState);
