import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsFormComponent } from './user-contacts-form.component';

describe('UserContactsFormComponent', () => {
  let component: UserContactsFormComponent;
  let fixture: ComponentFixture<UserContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContactsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
