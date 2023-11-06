import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pop-up-card-note',
  templateUrl: './pop-up-card-note.component.html',
  styleUrls: ['./pop-up-card-note.component.css']
})
export class PopUpCardNoteComponent {

  popUpForm!: FormGroup
  
  @Input()
  contentTextArea = ""
  @Input()
  contentTitleInput = ""

  ngOnInit(): void {
    this.popUpForm = new FormGroup({
      title: new FormControl(this.contentTextArea),
      description: new FormControl(this.contentTitleInput),
    })
  }

  submit(): void {
    console.log(this.popUpForm.value)
  }
}
