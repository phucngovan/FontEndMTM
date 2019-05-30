import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnrollmentComponent } from './list-enrollment.component';

describe('ListEnrollmentComponent', () => {
  let component: ListEnrollmentComponent;
  let fixture: ComponentFixture<ListEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
