import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegistriationComponent } from './registriation/registriation.component';


@NgModule({
  declarations: [
    AccountsComponent,
    LoginComponent,
    RegistriationComponent
  ],
  imports: [
    SharedModule.forRoot(),
    SharedModule,
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule {
  constructor(){
  }
}
