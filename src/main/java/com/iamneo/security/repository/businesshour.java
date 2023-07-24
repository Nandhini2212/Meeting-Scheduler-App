package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.scheduler_business_hours;

@Repository
public interface businesshour extends JpaRepository<scheduler_business_hours,String>{

}
