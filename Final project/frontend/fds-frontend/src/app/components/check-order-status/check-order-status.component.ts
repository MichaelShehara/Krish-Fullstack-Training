import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-check-order-status',
  templateUrl: './check-order-status.component.html',
  styleUrls: ['./check-order-status.component.css']
})
export class CheckOrderStatusComponent implements OnInit {

  fuelStation1Username: String;
  fuelStation2Username: String;
  cpcUsername: String;
  clientUsername: String;
  password: String;
  orderList: any;
  constructor(
    private orderService: OrderService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.fuelStation1.subscribe(f1 => {
      this.fuelStation1Username = f1;
    })
    this.sharedService.fuelStation2.subscribe(f2 => {
      this.fuelStation2Username = f2;
    })


    this.orderService.getOrderListByName(this.fuelStation1Username).subscribe(
      (data) => {
        if (data != null) {
          this.orderList = data
        } else {
          this.orderService.getOrderListByName(this.fuelStation2Username).subscribe(
            (data) => {
              this.orderList = data
            })
        }
      },
      (err) => {
        alert('Oops.. an error occured! \n' + err.message);
      })
  }

  completeOrder(item) {
    const data = {
      id: item.id,
      name: item.name,
      location: item.location,
      capacity: item.capacity,
      status: 'Order received',
      typeOfFuel: item.typeOfFuel,
    }
    this.orderService.updateOrder(data).subscribe(res => {
      alert('Order updated succesfully!')
    }, (err) => {
      alert('Oops.. an error occured! \n' + err.message)
    })
  }

}
