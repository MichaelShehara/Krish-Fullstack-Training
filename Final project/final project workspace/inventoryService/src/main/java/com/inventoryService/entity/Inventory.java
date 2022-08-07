package com.inventoryService.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Inventory")
public class Inventory {

	@Id
	@GeneratedValue
	Long id;
	
	@Column(name = "orderId")
	Long orderId;
	
	@Column(name = "typeOfFuel")
	String typeOfFuel;
	
	@Column(name = "allocatedAmount")
	int allocatedAmount;
	
	@Column(name = "availableAmount")
	int availableAmount;
	
	@Column(name = "fuelStationName")
	String fuelStationName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public String getTypeOfFuel() {
		return typeOfFuel;
	}

	public void setTypeOfFuel(String typeOfFuel) {
		this.typeOfFuel = typeOfFuel;
	}

	public int getAllocatedAmount() {
		return allocatedAmount;
	}

	public void setAllocatedAmount(int allocatedAmount) {
		this.allocatedAmount = allocatedAmount;
	}

	public int getAvailableAmount() {
		return availableAmount;
	}

	public void setAvailableAmount(int availableAmount) {
		this.availableAmount = availableAmount;
	}

	public String getFuelStationName() {
		return fuelStationName;
	}

	public void setFuelStationName(String fuelStationName) {
		this.fuelStationName = fuelStationName;
	}


}
