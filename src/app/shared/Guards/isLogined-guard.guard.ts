import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoginedGuard implements CanActivate {
  constructor(
    private router: Router,
    private AuthService: AuthService,
    private cookie: CookieService
  ) {}

  UserLogind!: any;
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.AuthService.GetCurrentUser();
    this.UserLogind = JSON.parse(this.cookie.get('F_UR_453_X0')!);
    if (this.UserLogind) {
      return true;
    }
    this.router.navigate(['/accounts/Login']);
    return false;
  }
}
