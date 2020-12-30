import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { AuthGuard } from './libs/guards/auth.guard'
import { BasicDetailsComponent } from './pages/basic-details/basic-details.component'
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component'
import { HomeComponent } from './pages/home/home.component'
import { LogInComponent } from './pages/log-in/log-in.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component'

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'user-details', component: BasicDetailsComponent },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
