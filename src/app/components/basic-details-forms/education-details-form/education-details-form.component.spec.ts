import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsFormComponent } from './education-details-form.component';

describe('EducationDetailsFormComponent', () => {
  let component: EducationDetailsFormComponent;
  let fixture: ComponentFixture<EducationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
