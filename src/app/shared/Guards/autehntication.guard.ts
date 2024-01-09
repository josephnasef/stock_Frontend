import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginedBeforeGuard implements CanActivate {
  constructor(
    private router: Router,
    public auth: AuthService,
    private cookie: CookieService
  ) {}
  UserLogind!: any;
  public canActivate() {
    var tr = this.cookie.get('F_UR_453_X0');
    let cheack: boolean =
      tr.length == 0 || tr === null || tr === undefined ? false : true;
    if (cheack) {
      this.UserLogind = JSON.parse(this.cookie.get('F_UR_453_X0')!);
      if (!this.UserLogind) {
        return true;
      } else {
        this.router.navigate(['/Admin']);
        return false;
      }
    } else {
      return true;
    }
  }
}
