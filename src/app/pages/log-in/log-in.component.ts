import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/libs/services/auth/auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  logInForm: any

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', Validators.required],
      password: ["", Validators.required]
    })
  }

  logIn(): void {
    const email = this.logInForm.value.email
    const password = this.logInForm.value.password
    this.authService.SignIn(email, password)
  }

  logInViaGoogle() {
    this.authService.GoogleAuth()
  }
}
