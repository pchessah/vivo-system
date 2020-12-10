import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/libs/services/auth/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: any

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(10)]],
      password2: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  saveNewUser(): void {
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    const password2 = this.signUpForm.value.password2

    if(password === password2){
      this.authService.SignUp(email,password)
    } else {
      window.alert("Passwords Do not match")
    }     
  }

  signUpWithGoogle(){
    this.authService.GoogleAuth()
  }
}
