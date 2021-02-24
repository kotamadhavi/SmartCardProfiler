import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPredictionsHomeComponent } from './cust-predictions-home.component';

describe('CustPredictionsHomeComponent', () => {
  let component: CustPredictionsHomeComponent;
  let fixture: ComponentFixture<CustPredictionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustPredictionsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPredictionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
