import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/libs/services/auth/auth.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: any

  constructor( private fb: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  resetPassword(){
    const email =  this.forgotPasswordForm.value.email;
    this.authService.ForgotPassword(email)
  }

}
