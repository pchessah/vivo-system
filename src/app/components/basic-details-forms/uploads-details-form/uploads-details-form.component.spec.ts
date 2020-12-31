import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsDetailsFormComponent } from './uploads-details-form.component';

describe('UploadsDetailsFormComponent', () => {
  let component: UploadsDetailsFormComponent;
  let fixture: ComponentFixture<UploadsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadsDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
