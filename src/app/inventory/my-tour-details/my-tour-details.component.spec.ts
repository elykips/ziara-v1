import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTourDetailsComponent } from './my-tour-details.component';

describe('MyTourDetailsComponent', () => {
  let component: MyTourDetailsComponent;
  let fixture: ComponentFixture<MyTourDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTourDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
