import { Component, OnInit } from '@angular/core';
import { StockService } from '../../Services/stock.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
})
export class MarketComponent implements OnInit {
  stocks: any[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getStocks().subscribe((stocks) => {
      this.stocks = stocks;
    });

    // TODO: Implement real-time updates using SignalR
  }
}
