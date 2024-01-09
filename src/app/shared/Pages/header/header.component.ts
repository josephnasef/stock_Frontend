import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../../Config/app-settings.service';
import { SpinnerModel } from '../../Models/SpinnerModel';
import { User } from '../../Models/User';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  CurrentUser: User = new User();
  UserLoaded: boolean = false;
  SpinnerModel: SpinnerModel = new SpinnerModel();
  logOutUrl: string = '';
  loginUrl: string = '';
  CurrentSystemPeriod: string = '';
  lang?: string;

  constructor(
    private authService: AuthService, private configs: AppConfig,
    private translate: TranslateService) {

    this.lang = localStorage.getItem('lang') || 'en'
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
  detectLanguage() {
    localStorage.setItem('Current_lang', 'ar');
  }


  changeLang() {
    debugger
    this.lang = this.lang == 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', this.lang);
    this.translate.use(this.lang)
    window.location.reload();
  }
  Current_lang: string = '';
  async ngOnInit() {
    this.detectLanguage()
    if (localStorage.getItem('Current_lang')) {
      debugger
      this.Current_lang = localStorage.getItem('Current_lang') || '';
    }
    else {
      this.detectLanguage()
    }
    var tr = this.Current_lang.includes('en');
    if (tr) {
      
      this.lang = localStorage.getItem('lang') || 'en';
    }
    else{
      this.lang = localStorage.getItem('lang') || 'ar';
    }
    
    await this.authService.GetCurrentUser();

    try {

      this.SpinnerModel.Show = true;
      this.SpinnerModel.Message = "جاري الإتصال بالخدمة...";
      if (!this.authService.isLogged()) {
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

    this.authService.login(this.loginUrl);
  }

  logoutCheck() {

    this.authService.logout(this.logOutUrl);
  }
}
