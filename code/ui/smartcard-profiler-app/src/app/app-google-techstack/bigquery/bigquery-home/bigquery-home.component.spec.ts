import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigqueryHomeComponent } from './bigquery-home.component';

describe('BigqueryHomeComponent', () => {
  let component: BigqueryHomeComponent;
  let fixture: ComponentFixture<BigqueryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigqueryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigqueryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
