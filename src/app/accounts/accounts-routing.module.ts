import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginedBeforeGuard } from '../shared/Guards/autehntication.guard';
import { LoginComponent } from './login/login.component';
import { RegistriationComponent } from './registriation/registriation.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, canActivate: [LoginedBeforeGuard]
  },
  {
    path: 'Login', component: LoginComponent, canActivate: [LoginedBeforeGuard]
  },
  {
    path: 'CreateAccount', component: RegistriationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
