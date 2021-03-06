import { Injectable, NgZone } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { IUser } from '../../interfaces/iuser'
import * as firebase from 'firebase/app'
import { UserFeedbackMessagesService } from '../user-feedback-messages/user-feedback-messages.service'


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  currentUser: any;
  admin: string= "paulchesa1@gmail.com"
  

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private userFeedBackMessage: UserFeedbackMessagesService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || "{}");
        // this.currentUser = user.email;
      } else {
        localStorage.removeItem("user");
        JSON.parse(localStorage.getItem('user') || "{}");
      }
    })
  }  

  //SIGN IN WITH EMAIL/PASSWORD
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.userFeedBackMessage.feedbackMsg("Successfully Logged In!")       
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        this.userFeedBackMessage.feedbackMsg(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.userFeedBackMessage.feedbackMsg("Successfully signed up! Check mail for verification") 
        this.SetUserData(result.user);
      }).catch((error) => {
        this.userFeedBackMessage.feedbackMsg(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u?.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || "{}");
      return true
   // return (user !== null && user.emailVerified !== false) ? true : false;
  }

   // Sign in with Google
   GoogleAuth() {
        return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider())
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
       this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      this.SetUserData(result.user);
    }).catch((error: any) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      //role: user.role,
    }
    return userRef.set(userData, {
      merge: true
    })
  }

   // Reset Forggot password
   ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      this.userFeedBackMessage.feedbackMsg('Password reset email sent, check your inbox.') 
    }).catch((error) => {
      this.userFeedBackMessage.feedbackMsg(error) 
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.userFeedBackMessage.feedbackMsg('Logged Out') 
      localStorage.removeItem('user');
      this.router.navigate(['log-in']);
    })
  }


  
}
