import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './Config/app-settings.service';
import { SpinnerModel } from './shared/Models/SpinnerModel';
import { User } from './shared/Models/User';
import { AuthService } from './shared/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  CurrentUser: User = new User();
  UserLoaded: boolean = false;
  SpinnerModel: SpinnerModel = new SpinnerModel();
  logOutUrl: string = '';
  loginUrl: string = '';
  CurrentSystemPeriod: string = '';
  lang?: string;

  constructor(
    public router: Router,
    private authService: AuthService, private configs: AppConfig,
    private translate: TranslateService) {
      debugger
    this.lang = localStorage.getItem('lang') || 'ar'
    this.translate.use(this.lang)
    if (!AppConfig.settings) {
      configs.load().then(x => {

        this.logOutUrl = AppConfig.settings.apiServerEndPoints.LogoutUrl;
        this.loginUrl = AppConfig.settings.apiServerEndPoints.LoginSSOPage;

      });
    }
    else {
      this.logOutUrl = AppConfig.settings.apiServerEndPoints.LogoutUrl;
      this.loginUrl = AppConfig.settings.apiServerEndPoints.LoginSSOPage;
    }

  }



  changeLang() {
    this.lang = this.lang == 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.lang);
    this.translate.use(this.lang)
    window.location.reload();
  }

  async ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    await this.authService.GetCurrentUser();
    try {

      this.SpinnerModel.Show = true;
      this.SpinnerModel.Message = "جاري الإتصال بالخدمة...";
debugger
      var tr = this.authService.isLogged();
      if (!tr) {
        this.login();
      }

      else {
        var user = await this.authService.isAuthenticated()

        if (user === null) {
          this.login();
        }
        else {
          this.CurrentUser = user;
          this.UserLoaded = true;
        }
      }
    }
    catch {

    }
    finally {
      this.SpinnerModel.Show = false;
      this.SpinnerModel.Message = "";
    }
  }

  logout() {

    this.authService.logout(this.logOutUrl);
  }

  login() {

    localStorage.clear();
    this.router.navigate(['/accounts/Login'])
  }

  logoutCheck() {

    this.authService.logout(this.logOutUrl);
  }
}
