import { Injectable } from '@angular/core'
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../services/auth/auth.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
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
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true
  }
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true
  }
}
