import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/entity/order';
import { DispatchService } from 'src/app/services/dispatch.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { OrderService } from 'src/app/services/order.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-dispatch-order',
  templateUrl: './dispatch-order.component.html',
  styleUrls: ['./dispatch-order.component.css']
})
export class DispatchOrderComponent implements OnInit {

  orderList : any;
  order: Order = {
    id: null,
    name: '',
    location: '',
    capacity: null,
    status: '',
    typeOfFuel: '',

  }
  constructor(
    private orderService: OrderService,
    private inventoryService: InventoryService,
    private dispatchService: DispatchService,
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit() {
    this.orderService.getOrderList().subscribe((data) => {
      this.orderList = data
    },
    (err) => {
      alert('Oops.. an error occured! \n'+ err.message);
    })
  }

  dispatchOrder(item){
    const data = {
      id: item.id,
      name: item.name,
      location: item.location,
      capacity: item.capacity,
      status: 'Scheduled',
      typeOfFuel: item.typeOfFuel,
    }
    this.dispatchService.dispatchOrder(data).subscribe(res => {
      alert('Order dispatched succesfully!')
    },(err) => {
      alert('Oops.. an error occured! \n'+ err.message)
    })
  }

  allocateFuel(item){
    const orderdata = {
      id: item.id,
      name: item.name,
      location: item.location,
      capacity: item.capacity,
      status: 'Allocated',
      typeOfFuel: item.typeOfFuel,
    }
    this.orderService.updateOrder(orderdata).subscribe(res => {
      alert('Order updated succesfully!')
    },(err) => {
      alert('Oops.. an error occured! \n'+ err.message)
    });


    this.inventoryService.createInventoryRecord(item).subscribe(res => {
      alert('Fuel allocated succesfully!');
    },(err) => {
      alert('Oops.. an error occured! \n'+ err.message);
    });

  }

  assignVehicle(item){
    const orderdata = {
      id: item.id,
      name: item.name,
      location: item.location,
      capacity: item.capacity,
      status: 'Scheduled',
      typeOfFuel: item.typeOfFuel,
    }
    
    this.scheduleService.assignTransport(orderdata).subscribe(res => {
      alert('Order scheduled succesfully!');
    },(err) => {
      alert('Oops.. an error occured! \n'+ err.message)
    });

    this.orderService.updateOrder(orderdata).subscribe(res => {
      alert('Order updated succesfully!')
    },(err) => {
      alert('Oops.. an error occured! \n'+ err.message)
    });
  }
}
