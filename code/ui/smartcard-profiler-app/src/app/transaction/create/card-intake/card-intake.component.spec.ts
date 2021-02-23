import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntakeComponent } from './card-intake.component';

describe('CardIntakeComponent', () => {
  let component: CardIntakeComponent;
  let fixture: ComponentFixture<CardIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIntakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
