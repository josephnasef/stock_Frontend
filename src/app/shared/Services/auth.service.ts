import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { enc, lib } from 'crypto-js';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { EncryptionHelper } from '../Helpers/EncryptionHelper';
import { User } from '../Models/User';
import { UserRoot } from './../Models/UserRoot';
import { UsersFromServerService } from './users-from-mawhiba.service';

@Injectable()
export class AuthService {
  public UserData: UserRoot = new UserRoot();
  public LocalStorageUser!: User;
  public UserId!: number;
  public UserName!: number;
  iv: any = lib.WordArray.create([0x00, 0x00, 0x00, 0x00]);
  decPassword: any = enc.Utf8.parse('WmZq4t7w!z%C*F)J');

  constructor(
    public router: Router,
    private cookie: CookieService,
    private userService: UsersFromServerService,
    private toastr: ToastrService
  ) {}

  userProfile = (userProfileUrl: string) => {
    window.open(userProfileUrl, '_blank');
  };
  isLogged(): boolean {
    // stud_test
    //  this.cookie.set("F_UR_453_X0", "qFJYvCu15Yv47eozqaVlVduHwQKg6OXcfzc1Ta1w5c5dMylJet9J/DCzrI0QAM+7dl7ninZV5szQTnZ9ijOt0w==");
    // ghostship
    //  this.cookie.set("F_UR_453_X0", "dX58xiudAN+bhJW5bSHmaiE5xuv41RLbqRd6SGv4ziIoN4Ra8kyn1NZBuGO/BXItZavUXMH2UhQEHd7ticfg2g==");
    // this.cookie.set("F_UR_453_X0", "GnZtI1E222D7q6eyaGJqmq3M1ArZD44lNATrN4p7HjU7WhwQuQ9wOy6/gVmTUcOH");
    var trtt = this.cookie.get('F_UR_453_X0');
    let cheack: boolean =
      trtt.length == 0 || trtt === null || trtt === undefined ? false : true;
    return cheack;
    // return (localStorage.getItem("F_UR_453_X0") === null || localStorage.getItem("F_UR_453_X0") === undefined) ? false : true;
  }

  async isAuthenticated() {
    // this.cookie.set("F_UR_453_X0", "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJJZCI6IjQ3ZmRjZGQ1LWI0NGUtNGMyNy05ZjVhLTlhMDdkZjc1YzhkNCIsInN1YiI6InN0cmluZ2VAc3RyaWVuZy5jb20iLCJlbWFpbCI6InN0cmluZ2VAc3RyaWVuZy5jb20iLCJqdGkiOiJlNGFmYzUyNC0yYThhLTQ0NjYtOTVjYS01YzUyNTBkNDEyMDAiLCJuYmYiOjE2NzQwNjI2NTMsImV4cCI6MTY3NDA4NDI1MywiaWF0IjoxNjc0MDYyNjUzfQ.Ib7vBvvW7ZlIPNf0kxt_rDvzG-OuQR4fn6enT8xBidMJDW1OkkiBkFbsZww0JUlhwLpaW3T83j20h9TDkSzzMQ");
    // var systemUser = await firstValueFrom(this.userService.GetCurrentPeriodSystemUsers(`User.UserId=${this.UserData.UserId}`));

    // var systemUser = await firstValueFrom(this.userService.GetCurrentPeriodSystemUsers("47fdcdd5-b44e-4c27-9f5a-9a07df75c8d4"));

    var token2 = await this.cookie.get('F_UR_453_X0');
    this.UserData = this.Decrypt(token2 || '');
    var chk = sessionStorage.getItem('US_');
    this.LocalStorageUser = JSON.parse(sessionStorage.getItem('US_')!);

    if (
      this.LocalStorageUser !== null &&
      this.LocalStorageUser.Id == this.UserData.UserId
    ) {
      return JSON.parse(sessionStorage.getItem('US_')!);
    } else {
      sessionStorage.clear();
      this.UserData = this.Decrypt(this.cookie.get('F_UR_453_X0') || '');
      if (
        this.UserData === null ||
        this.UserData === undefined ||
        this.UserData.UserId == ''
      ) {
        return null!;
      } else {
        var token = this.cookie.get('F_UR_453_X0');
        if (token === null || token === undefined) {
          return null!;
        } else {
          // localStorage.setItem('TM_', token.ResultObject);
          var user = await firstValueFrom(
            this.userService.GetUSerById(this.UserData.UserId)
          ); //.subscribe(result => {
          if (user != null) {
            var _user = user;

            var systemUser = await firstValueFrom(
              this.userService.GetUSerById(this.UserData.UserId)
            );
            if (systemUser != null) {
              // localStorage.setItem('UR_', EncryptionHelper.Encrypt(systemUser.List[0].RuleId.toString()));
              // localStorage.setItem('AG_', EncryptionHelper.Encrypt(systemUser.List[0].IsAgreementApproved! ? 'true' : 'false'));
            }
            sessionStorage.setItem('US_', JSON.stringify(_user));
            sessionStorage.setItem('UN_', _user.FirstName);

            return _user;
          } else {
            return null!;
          }
        }
      }
    }
  }
  async GetCurrentUser() {
    var currentUser = await JSON.parse(sessionStorage.getItem('US_')!);

    if (!currentUser) return;

    return currentUser;
  }

  getCurrentRole(): number {
    var role = localStorage.getItem('UR_');

    return parseInt(EncryptionHelper.Decrypt(role!));
  }

  // Decrypt UserLogin Data
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  Decrypt(EncryptedText: string) {
    var result = this.getDecodedAccessToken(EncryptedText);
    // var Decrypted = AES.decrypt(EncryptedText, this.decPassword, { iv: this.iv }).toString(enc.Utf8);
    // var DecryptedArray = Decrypted.split(",");
    var Result: any = {
      UserId: result.Id,
      UserEmail: result.email,
      StartDate: result.iat,
    };
    return Result;
    //return null!;
  }

  // After clearing localStorage redirect to login screen
  logout(logoutUrl: string) {
    localStorage.clear();
    this.cookie.deleteAll('/', '.mawhiba.org');
    window.location.href = logoutUrl; //environment.loginSSOPage;
  }

  login(loginUrl: string) {
    localStorage.clear();
    this.router.navigate(['/accounts/Login']);
    // window.location.href = loginUrl //environment.loginSSOPage;
  }
}
