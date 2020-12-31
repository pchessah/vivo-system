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
      email: ['', Validators.required],
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      otherNames: [""],
      phoneNumber: ["",Validators.required],
      address: ["",Validators.required],
      postalCode: ["",Validators.required],
    })
  }

  saveContactInfo(){
    console.log(this.userContactForm.value);
  }

}
