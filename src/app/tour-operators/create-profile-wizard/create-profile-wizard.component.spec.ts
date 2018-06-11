import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileWizardComponent } from './create-profile-wizard.component';

describe('CreateProfileWizardComponent', () => {
  let component: CreateProfileWizardComponent;
  let fixture: ComponentFixture<CreateProfileWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfileWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
