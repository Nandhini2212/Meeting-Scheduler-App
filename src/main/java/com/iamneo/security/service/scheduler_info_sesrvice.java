package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.meeting_scheduler_info;
import com.iamneo.security.repository.scheduler_info_repo;


@Service
public class scheduler_info_sesrvice {
	@Autowired
	scheduler_info_repo sirepo;
		public void save(meeting_scheduler_info msi) {
			sirepo.save(msi);
		}
		public List<meeting_scheduler_info> findsiinfo() {
			return sirepo.findAll();
		}
	
	
}
