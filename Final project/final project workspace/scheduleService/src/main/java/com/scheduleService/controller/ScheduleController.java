package com.scheduleService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orderService.entity.Order;
import com.scheduleService.service.ScheduleService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/assignVehicle")
public class ScheduleController {

	@Autowired
	ScheduleService scheduleService;

	@PostMapping
	public void assignVehicle(@RequestBody Order order) {

		scheduleService.assignVehicles(order);
	}

}
