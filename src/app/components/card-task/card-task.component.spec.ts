import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTaskComponent } from './card-task.component';

describe('CardTaskComponent', () => {
  let component: CardTaskComponent;
  let fixture: ComponentFixture<CardTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTaskComponent]
    });
    fixture = TestBed.createComponent(CardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
