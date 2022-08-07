import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/entity/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.css']
})
export class OrderSubmitComponent implements OnInit {

  orderForm: FormGroup;

  order: Order = {
    id: null,
    name: '',
    location: '',
    capacity: null,
    status: 'Pending',
    typeOfFuel: '',

  }

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      capacity: ['', Validators.required],
      status: ['', Validators.required],
      typeOfFuel: ['', Validators.required]
    });
  }

  submitOrder() {
    const data = {
      name: this.order.name,
      location: this.order.location,
      capacity: this.order.capacity,
      status: this.order.status,
      typeOfFuel: this.order.typeOfFuel,
    }

    this.orderService.createOrder(data).subscribe(res => {
      alert('Order submitted succesfully!')
    },(err) => {
      alert('Oops.. an error occured! \n'+ err.message)
    })
    
  }
}
