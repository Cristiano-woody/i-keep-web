import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notes = [
    {
      title: 'Um titulo ',
      description:'Uma Descricao qualquer de uma task',
      id: '1'
    },
    {
      title: 'Um  qualquer',
      description:'Uma Descricao qualquer de uma task',
      id: '2'
    },
    {
      title: 'titulo qualquer',
      description:'Uma Descricao qualquer de uma task',
      id: '3'
    },
    {
      title: 'Um',
      description:'Uma Descricao qualquer de uma task',
      id: '4'
    },
    {
      title: 'titulo ',
      description:'Uma Descricao qualquer de uma task',
      id: '5'
    },
    {
      title: 'qualquer',
      description:'Uma Descricao qualquer de uma task',
      id: '6'
    },
    {
      title: 'Um titulo ',
      description:'Uma Descricao qualquer de uma task',
      id: '7'
    },
    {
      title: 'Um  qualquer',
      description:'Uma Descricao qualquer de uma task',
      id: '8'
    },
    {
      title: 'titulo qualquer',
      description:'Uma Descricao qualquer de uma task ',
      id: '9'
    },
    {
      title: 'Um',
      description:'Uma Descricao qualquer de uma task',
      id: '10'
    },
    {
      title: 'titulo ',
      description:'Uma Descricao qualquer de uma task',
      id: '11'
    },
    {
      title: 'qualquer',
      description:'Uma Descricao qualquer de uma task',
      id: '12'
    }
  ]

  deleteNote(noteId: string) {
    for (let i = 0; i < this.notes.length; i++) {
      if(this.notes[i].id === noteId) {
        this.notes.splice(i, 1);
      }      
    }
  }

  updateNote({noteId, description, title}:{noteId: string, description: string, title: string}) {
    for (let i = 0; i < this.notes.length; i++) {
      if(this.notes[i].id === noteId) {
        this.notes[i].title = title;
        this.notes[i].description = description;
      }      
    }
    console.log(noteId + description + title);
  }
}
