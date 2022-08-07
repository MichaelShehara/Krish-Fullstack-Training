package com.orderService.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.orderService.entity.Order;
import com.orderService.service.OrderService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/order")
public class OrderController {

	@Autowired
	OrderService orderService;
	
//	@Autowired
//	Producer kafkaProducer;


	@PostMapping
	public Order createOrder(@RequestBody Order order) {
//		kafkaProducer.publishStringToTopic("Order created");
//		String getResponse = kafkaConsumer.consumeFromTopic(null);
//		
//		if(getResponse.equals("Allocation complete")) {
//			
//		}else {
//			kafkaProducer.publishStringToTopic("Sorry..order can not be placed!");
//			return null;
//		}
		
		return orderService.create(order);
		
		
	}
	
//	public ResponseEntity<Order> createOrder(@RequestBody Order order) {
//		
//		Order submitOrder = orderService.create(order);
//
//		return new ResponseEntity<Order>(submitOrder, HttpStatus.OK);
//	}
	
	@PutMapping
	public Order changeOrderStatus(@RequestBody Order order) {

		return orderService.update(order);
		
	}

	@GetMapping(value = "/{id}")
	public Order getOrder(@PathVariable Long id) {

		return orderService.findById(id);
	}
	
	@GetMapping
	public List<Order> getOrderByStationName(@RequestParam(value="name") String name) {

		return orderService.getOrderByName(name);
	}

	@GetMapping(value = "/")
	public List<Order> getAllOrders() {
		return orderService.findAll();
	}

}
