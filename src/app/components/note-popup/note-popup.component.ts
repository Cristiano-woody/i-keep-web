import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'note-popup',
  templateUrl: './note-popup.component.html',
  styleUrls: ['./note-popup.component.css']
})
export class NotePopupComponent {

  popUpForm!: FormGroup
  
  @Input()
  contentTextArea = ""
  @Input()
  contentTitleInput = ""
  @Input()
  noteId = ""

  @Output() submitNote = new EventEmitter<any>();
  @Output() deleteNote = new EventEmitter<any>();
  @Output() closePopup = new EventEmitter<any>();


  ngOnInit(): void {
    this.popUpForm = new FormGroup({
      title: new FormControl(this.contentTitleInput),
      description: new FormControl(this.contentTextArea),
    })
  }

  submit(): void {
    console.log(this.popUpForm.value)
    this.submitNote.emit(this.popUpForm.value);
  }

  delete(): void {
    console.log('delete')
    this.deleteNote.emit(this.noteId);
  }

  close(): void {
    console.log('close')
    this.closePopup.emit(null);
  }
}
