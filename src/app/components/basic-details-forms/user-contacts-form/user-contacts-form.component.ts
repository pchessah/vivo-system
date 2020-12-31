import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-contacts-form',
  templateUrl: './user-contacts-form.component.html',
  styleUrls: ['./user-contacts-form.component.scss']
})
export class UserContactsFormComponent implements OnInit {
  userContactForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userContactForm = this.fb.group({
      email: [null,[Validators.required, Validators.email]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      otherNames: [null],
      phoneNumber: [null, [Validators.required, Validators.minLength(10)]],
      address: [null, Validators.required],
      postalCode: [null, Validators.required],
    })
  }

  saveContactInfo(){
    console.log(this.userContactForm.value);
  }

}
