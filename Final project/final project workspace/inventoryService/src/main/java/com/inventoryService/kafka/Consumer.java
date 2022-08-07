package com.inventoryService.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class Consumer {
	
	public static final Logger logger = LoggerFactory.getLogger(Consumer.class);
	
	@KafkaListener(topics="fdsTopic", groupId = "fdsGroup")
	public void consumeFromTopic(String message) {
		logger.info(String.format("$$---> Consummed message --> %s", message));
		System.out.println("$$---> Consummed message --> %s: "+message);
	}

}
