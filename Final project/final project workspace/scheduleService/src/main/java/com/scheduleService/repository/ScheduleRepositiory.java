package com.scheduleService.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scheduleService.entity.Schedule;



@Repository
public interface ScheduleRepositiory extends JpaRepository<Schedule, Long>{

}
