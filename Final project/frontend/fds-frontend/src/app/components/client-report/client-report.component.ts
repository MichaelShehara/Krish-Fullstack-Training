import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.css']
})
export class ClientReportComponent implements OnInit {

  orderList: any;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getOrderList().subscribe((data) => {
      this.orderList = data
    },
      (err) => {
        alert('Oops.. an error occured! \n'+ err.message);
      })
  }

}
