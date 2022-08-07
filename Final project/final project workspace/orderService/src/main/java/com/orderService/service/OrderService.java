package com.orderService.service;

import java.util.List;

import com.orderService.entity.Order;

public interface OrderService {

	Order create(Order order);
	
	Order update(Order order);

	Order findById(Long id);

	List<Order> findAll();
	
	List<Order> getOrderByName(String name);
	
	

}
