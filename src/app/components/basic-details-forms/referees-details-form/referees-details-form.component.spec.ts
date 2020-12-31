import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereesDetailsFormComponent } from './referees-details-form.component';

describe('RefereesDetailsFormComponent', () => {
  let component: RefereesDetailsFormComponent;
  let fixture: ComponentFixture<RefereesDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefereesDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereesDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
