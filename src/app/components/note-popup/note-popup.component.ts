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

  @Output() updateNoteOut = new EventEmitter<{title: string, description: string}>();
  @Output() deleteNoteOut = new EventEmitter<null>();
  @Output() closePopupOut = new EventEmitter<null>();


  ngOnInit(): void {
    this.popUpForm = new FormGroup({
      title: new FormControl(this.contentTitleInput),
      description: new FormControl(this.contentTextArea),
    })
  }

  update(): void {
    this.updateNoteOut.emit(this.popUpForm.value);
  }

  delete(): void {
    this.deleteNoteOut.emit(null);
  }

  close(): void {
    this.closePopupOut.emit(null);
  }
}
