import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { LocalStorageService } from 'src/app/libs/services/local-storage/local-storage.service'
import { UserFeedbackMessagesService } from 'src/app/libs/services/user-feedback-messages/user-feedback-messages.service'

@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.scss'],
})
export class WorkExperienceFormComponent implements OnInit {
  @Output() nextSectionEvent = new EventEmitter<string>()
  workExperienceForm: any
  firstSectionInfo: any

  constructor(
    private fb: FormBuilder,
    private LocalStorageService: LocalStorageService,
    private userFeedBackMessageService: UserFeedbackMessagesService,
  ) {}

  ngOnInit(): void {
    this.workExperienceForm = this.fb.group({
      position: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      company: [null, Validators.required],
    })

   this.firstSectionInfo = JSON.parse(this.LocalStorageService.getItem("candidate") || "{}")
  }

  nextSection(value: any) {
    this.nextSectionEvent.emit(value)
    this.saveWorkExperienceInfo()
  }

  saveWorkExperienceInfo(){
    this.userFeedBackMessageService.feedbackMsg("Work Experience Saved")
    let candidateInfo = {...this.firstSectionInfo,...this.workExperienceForm.value} 
    this.LocalStorageService.setItem("candidate", JSON.stringify(candidateInfo)); //SAVE INFORMATION ON LOCAL STORAGE FIRST
  }

}
