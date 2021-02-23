import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntakeListComponent } from './card-intake-list.component';

describe('CardIntakeListComponent', () => {
  let component: CardIntakeListComponent;
  let fixture: ComponentFixture<CardIntakeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIntakeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIntakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
