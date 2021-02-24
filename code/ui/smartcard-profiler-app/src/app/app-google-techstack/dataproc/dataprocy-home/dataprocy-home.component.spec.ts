import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataprocyHomeComponent } from './dataprocy-home.component';

describe('DataprocyHomeComponent', () => {
  let component: DataprocyHomeComponent;
  let fixture: ComponentFixture<DataprocyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataprocyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataprocyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
