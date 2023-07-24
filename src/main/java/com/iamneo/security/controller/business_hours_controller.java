package com.iamneo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.scheduler_business_hours;
import com.iamneo.security.service.businesshoursservice;


@RestController
public class business_hours_controller {
			@Autowired
			businesshoursservice bhservice;

			@GetMapping("/getbusinesshours")
			public List<scheduler_business_hours> getuserdetails(){
				return bhservice.findbhinfo();
			}
//			@GetMapping("/checkuserdetails/{username}/{password}")
//			public String getuserdetailsbyid(@PathVariable String username,@PathVariable String password){
////				System.out.println("Data"+ username);
//				boolean authenticate=userservice.findregisterbyid(username,password);
//				if(authenticate) {
//					return "Login Successful";
//				}
//				else {
//					return "Invalid credentials";
//				}
//			}
			@PostMapping("/postbusinesshour")
			public String create(@RequestBody scheduler_business_hours sbh) {
				
				bhservice.save(sbh);
				return "Welcome";
			
	}
}
