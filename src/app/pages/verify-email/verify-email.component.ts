import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/libs/interfaces/iuser';
import { AuthService } from 'src/app/libs/services/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor( public authService: AuthService) {  this.user = this.authService.userData}
  user: IUser

  ngOnInit(): void {
  }

  verifyEmail(){
    this.authService.SendVerificationMail()

  }

}
