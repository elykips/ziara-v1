import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOperatorDashboardComponent } from './tour-operator-dashboard.component';

describe('TourOperatorDashboardComponent', () => {
  let component: TourOperatorDashboardComponent;
  let fixture: ComponentFixture<TourOperatorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourOperatorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourOperatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
