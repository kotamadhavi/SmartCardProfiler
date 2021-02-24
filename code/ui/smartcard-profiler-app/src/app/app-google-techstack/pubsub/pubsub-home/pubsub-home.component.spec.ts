import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubsubHomeComponent } from './pubsub-home.component';

describe('PubsubHomeComponent', () => {
  let component: PubsubHomeComponent;
  let fixture: ComponentFixture<PubsubHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubsubHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubsubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
