import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCardNoteComponent } from './pop-up-card-note.component';

describe('PopUpCardNoteComponent', () => {
  let component: PopUpCardNoteComponent;
  let fixture: ComponentFixture<PopUpCardNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpCardNoteComponent]
    });
    fixture = TestBed.createComponent(PopUpCardNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
