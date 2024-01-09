import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { OnlyNumberDirective } from './Directives/only-number.directive';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { ConfirmationPOPComponent } from './Pages/ConfirmationPOP/ConfirmationPOP.component';
import { RightDashboardComponent } from './Pages/RightDashboard/RightDashboard.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoadingSpinnerComponent } from './Pages/loading-spinner/loading-spinner.component';
import { ModalContentsComponent } from './Pages/modal-contents/modal-contents.component';
import { ModelDialogComponent } from './Pages/model-dialog/model-dialog.component';
import { MyPagerComponent } from './Pages/pager/pager.component';
import { ServerPagerComponent } from './Pages/server-pager/server-pager.component';
import { SliderComponent } from './Pages/slider/slider.component';
import { SortByPipe } from './Pipes/OrderByPipe';
import { SafePipe } from './Pipes/SafePipe';
import { AuthService } from './Services/auth.service';
import { UsersFromServerService } from './Services/users-from-mawhiba.service';
const components = [
  ModelDialogComponent,
  LoadingSpinnerComponent,
  SafePipe,
  SortByPipe,
  OnlyNumberDirective,
  ModelDialogComponent,
  MyPagerComponent,
  ModalContentsComponent,
  ServerPagerComponent,
  HeaderComponent,
  SliderComponent,
  RightDashboardComponent,
  ConfirmationPOPComponent,

];

@NgModule({
  declarations: components,

  providers: [HttpClientModule,
    CookieService,
    AuthService,
    UsersFromServerService],

  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    NgxSpinnerModule,
    ProgressBarModule,
    ConfirmDialogModule,
    NgSelectModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    HttpClientModule,
    ToolbarModule,
    FileUploadModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })

  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SafePipe,
    SortByPipe,
    CalendarModule,
    NgxSpinnerModule,
    ConfirmDialogModule,
    NgSelectModule,
    ProgressBarModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    HttpClientModule,
    ToolbarModule,
    FileUploadModule,
    components,
    TranslateModule

  ]
})
export class SharedModule {

  constructor() {

  }
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [

        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
    };
  }
}




