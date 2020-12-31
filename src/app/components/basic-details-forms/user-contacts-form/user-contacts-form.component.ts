import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/libs/services/local-storage/local-storage.service';

@Component({
  selector: 'app-user-contacts-form',
  templateUrl: './user-contacts-form.component.html',
  styleUrls: ['./user-contacts-form.component.scss']
})
export class UserContactsFormComponent implements OnInit {
  userContactForm: any;

  constructor(private fb: FormBuilder, private LocalStorageService: LocalStorageService) { }

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
    this.LocalStorageService.setItem("candidate", JSON.stringify(this.userContactForm.value)); //SAVE INFORMATION ON LOCAL STORAGE FIRST
  }

}
