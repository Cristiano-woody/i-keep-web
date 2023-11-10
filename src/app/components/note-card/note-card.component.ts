import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input()
  noteTitle: string = ''
  @Input()
  noteDescription: string = ''
  @Input()
  noteId: string = ''

  @Output() deleteNoteOut = new EventEmitter<string>();
  @Output() updateNoteOut = new EventEmitter<{noteId: string, title: string, description: string}>();

  popupIsOpen: boolean = false

  togglePopup() {
    this.popupIsOpen = !this.popupIsOpen
  }

  deleteNote() {
    this.deleteNoteOut.emit(this.noteId);
    this.togglePopup()
  }

  updateNote({title, description}: {title: string, description:string}) {
    this.updateNoteOut.emit({noteId: this.noteId, description: description, title: title})
    this.togglePopup()
  }

}
