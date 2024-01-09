import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './Config/app-settings.service';
import { HeaderInterceptor } from './Interceptors/header.interceptor';
import { HeaderComponent } from './shared/Pages/header/header.component';
import { AuthService } from './shared/Services/auth.service';
import { UsersFromServerService } from './shared/Services/users-from-mawhiba.service';
import { SharedModule } from './shared/shared.module';


export function initializeApp(appConfig: AppConfig) {

  return () => appConfig.load();

}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // BrowserModule,
    SharedModule.forRoot(),
    SharedModule,
    AccountsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-left" }),
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  exports: [HeaderComponent],
  providers: [
    DatePipe,
    MessageService,
    ConfirmationService,
    AuthService,
    UsersFromServerService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
       multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

