import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/libs/services/local-storage/local-storage.service';
import { UserFeedbackMessagesService } from 'src/app/libs/services/user-feedback-messages/user-feedback-messages.service';

@Component({
  selector: 'app-user-contacts-form',
  templateUrl: './user-contacts-form.component.html',
  styleUrls: ['./user-contacts-form.component.scss']
})

export class UserContactsFormComponent implements OnInit {
  @Output() nextSectionEvent = new EventEmitter<string>();

  userContactForm: any;

  step = 0; 

  constructor(private fb: FormBuilder, private LocalStorageService: LocalStorageService, private userFeedBackMessageService: UserFeedbackMessagesService ) { }

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

  nextSection(value: any) {
    this.nextSectionEvent.emit(value)
    this.saveContactInfo()
  }

  saveContactInfo(){
    this.userFeedBackMessageService.feedbackMsg("Basic Details Saved")   
    this.LocalStorageService.setItem("candidate", JSON.stringify(this.userContactForm.value)); //SAVE INFORMATION ON LOCAL STORAGE FIRST
  }



}
