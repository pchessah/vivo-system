import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LocalStorageService } from 'src/app/libs/services/local-storage/local-storage.service'
import { UserFeedbackMessagesService } from 'src/app/libs/services/user-feedback-messages/user-feedback-messages.service'

@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.scss'],
})
export class WorkExperienceFormComponent implements OnInit {
  @Output() nextSectionEvent = new EventEmitter<string>()
  workExperienceForm: any;
  workExperienceForm2: any;
  firstSectionInfo: any;
  workExperienceArr: any[] =  []
 

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
      // otherCompany: this.fb.array([this.add()])
    })

    this.firstSectionInfo = JSON.parse(
      this.LocalStorageService.getItem('candidate') || '{}',
    )
  }

  nextSection(value: any) {
    this.nextSectionEvent.emit(value)
    this.saveWorkExperienceInfo()
  }

  saveWorkExperienceInfo() {
    this.userFeedBackMessageService.feedbackMsg('Work Experience Saved')
    this.workExperienceArr = [...this.workExperienceArr, this.workExperienceForm.value]
    let candidateInfo = {
      ...this.firstSectionInfo, workExperienceArr: this.workExperienceArr
     
    }
    this.LocalStorageService.setItem('candidate', JSON.stringify(candidateInfo)) //SAVE INFORMATION ON LOCAL STORAGE FIRST
  }

  // add(): FormGroup {  
  //   return this.fb.group({  
  //     position2: [null, Validators.required],
  //     startDate2: [null, Validators.required],
  //     endDate2: [null, Validators.required],
  //     company2: [null, Validators.required], 
  //   });  
  // }

  // addNewWorkExperience(): void{
  //   return (<FormArray>this.workExperienceForm.get("otherCompany")).push(this.add())
  // }
}
