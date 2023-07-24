package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.meeting_scheduler_info;
import com.iamneo.security.service.scheduler_info_sesrvice;


@RestController
public class business_scheduler_info_controller {

			@Autowired
			scheduler_info_sesrvice siservice;

			@GetMapping("/getschedulerinfo")
			public List<meeting_scheduler_info> getuserdetails(){
				return siservice.findsiinfo();
			}

			@PostMapping("/postschedulerinfo")
			public String create(@RequestBody meeting_scheduler_info msi) {
//				scheduler_business_hours bhs=new scheduler_business_hours();
//				msi.getBh().add(bhs);
				
				siservice.save(msi);
				return "added successfully";
			}
	
}
