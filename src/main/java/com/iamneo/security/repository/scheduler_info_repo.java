package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.meeting_scheduler_info;


public interface scheduler_info_repo extends JpaRepository<meeting_scheduler_info,String> {

}
