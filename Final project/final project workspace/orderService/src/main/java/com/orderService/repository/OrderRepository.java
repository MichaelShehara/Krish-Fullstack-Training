package com.orderService.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.orderService.entity.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	

	@Query(value = "SELECT o FROM Order o WHERE o.id=?1")
	Order getById(Long id);
	
	@Query(value = "SELECT o FROM Order o WHERE o.name=?1")
	List<Order> findOrderByName(String name);

}
