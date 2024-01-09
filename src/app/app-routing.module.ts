import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { IsLoginedGuard } from './shared/Guards/isLogined-guard.guard';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: 'stock',
    loadChildren: () => import('./Stock/Stock.module').then((m) => m.StockModule),
    // canActivate: [IsLoginedGuard],
  },

  // { path: 'secretary', loadChildren: () => import('./secretary/secretary.module').then(m => m.SecretaryModule) },
  // { path: 'Doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
];
const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
