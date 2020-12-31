import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AuthGuard } from './libs/guards/auth.guard';
import { BasicDetailsComponent } from './pages/basic-details/basic-details.component';
import { UserContactsFormComponent } from './components/basic-details-forms/user-contacts-form/user-contacts-form.component';
import { WorkExperienceFormComponent } from './components/basic-details-forms/work-experience-form/work-experience-form.component';
import { EducationDetailsFormComponent } from './components/basic-details-forms/education-details-form/education-details-form.component';
import { RefereesDetailsFormComponent } from './components/basic-details-forms/referees-details-form/referees-details-form.component';
import { UploadsDetailsFormComponent } from './components/basic-details-forms/uploads-details-form/uploads-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    PageNotFoundComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    DashboardComponent,
    BasicDetailsComponent,
    UserContactsFormComponent,
    WorkExperienceFormComponent,
    EducationDetailsFormComponent,
    RefereesDetailsFormComponent,
    UploadsDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
