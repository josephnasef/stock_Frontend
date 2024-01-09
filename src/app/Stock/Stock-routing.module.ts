import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginedBeforeGuard } from '../shared/Guards/autehntication.guard';
import { StockComponent } from './Stock.component';
import { OrderComponent } from './Component/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [{ path: '', component: OrderComponent }],

    // , canActivate: [LoginedBeforeGuard]
  },
  {
    path: 'stock',
    component: StockComponent,
    // , canActivate: [LoginedBeforeGuard]
  },
  {
    path: 'Order',
    component: OrderComponent,
    // , canActivate: [LoginedBeforeGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
