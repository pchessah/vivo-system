import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackMessagesService {
  constructor( private snackBar: MatSnackBar) { }

  feedbackMsg =( msg: string ) =>{
    this.snackBar.open(msg,"close",{
      duration: 4000
    })
  }
}
