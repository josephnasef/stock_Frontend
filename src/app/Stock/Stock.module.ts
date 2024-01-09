import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './Stock.component';
import { StockRoutingModule } from './Stock-routing.module';
import { MarketComponent } from './Component/market/market.component';
import { OrderComponent } from './Component/order/order.component';

@NgModule({
  imports: [
    CommonModule,
    StockRoutingModule
  ],
  declarations: [StockComponent, MarketComponent, OrderComponent]
})
export class StockModule { }
