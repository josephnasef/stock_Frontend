import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  newOrder: any = { stockId: 0, price: 0, quantity: 0, personName: '' };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  createOrder() {
    this.orderService.createOrder(this.newOrder).subscribe((order) => {
      this.orders.push(order);
      // Clear the form or handle as needed
    });
  }
}
