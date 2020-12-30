import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  currentUser: any
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '')
    this.currentUser = user.email
    if (this.currentUser !== this.authService.admin) {
      console.log(this.currentUser)
      this.router.navigate(['log-in'])
    }
    return true
  }
}
