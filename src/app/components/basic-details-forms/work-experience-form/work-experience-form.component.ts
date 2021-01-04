import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/libs/services/local-storage/local-storage.service';
import { UserFeedbackMessagesService } from 'src/app/libs/services/user-feedback-messages/user-feedback-messages.service';


@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.scss']
})
export class WorkExperienceFormComponent implements OnInit {
  @Output() nextSectionEvent = new EventEmitter<string>();
  workExperienceForm: any

  constructor( private fb: FormBuilder, private LocalStorageService: LocalStorageService, private userFeedBackMessageService: UserFeedbackMessagesService) { }

  ngOnInit(): void {
    this.workExperienceForm = this.fb.group({
      position: [null,[Validators.required, Validators.email]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      company: [null, Validators.required]
    })
  }

}
