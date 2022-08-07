package com.inventoryService.kafka;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;


@Service
public class Producer {
	public static final Logger logger = LoggerFactory.getLogger(Producer.class);
	public static final String topic = "fdsTopic";
	
	@Autowired
	private KafkaTemplate<String, String> kafkaTemp;
	
	public void publishStringToTopic(String message) {
		logger.info(String.format("$$---> Published to topic --> %s", message));
		System.out.println("$$---> Published to topic --> %s" + topic);
		this.kafkaTemp.send(topic, message);
	}

	
//	public void publishObjectToTopic(Object message) {
//		System.out.println("Published to topic: " + topic);
//		this.kafkaTemp.send(topic, (String) message);
//	}
}
