package com.inventoryService.service;

import com.inventoryService.entity.Inventory;

import com.orderService.entity.Order;

public interface InventoryService {
	
	void checkAvailability(Order order);

}
