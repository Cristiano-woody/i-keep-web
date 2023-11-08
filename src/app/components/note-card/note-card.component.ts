import { Component, Input, OnInit } from '@angular/core';
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

  popupIsOpen: boolean = false

  togglePopup() {
    if (this.popupIsOpen === true) return this.popupIsOpen = false
    return this.popupIsOpen = true
  }
}
