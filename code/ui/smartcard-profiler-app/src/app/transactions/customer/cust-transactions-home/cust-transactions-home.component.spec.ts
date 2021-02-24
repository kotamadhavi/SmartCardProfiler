import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustTransactionsHomeComponent } from './cust-transactions-home.component';

describe('CustTransactionsHomeComponent', () => {
  let component: CustTransactionsHomeComponent;
  let fixture: ComponentFixture<CustTransactionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustTransactionsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustTransactionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
