package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.userinfo;
import com.iamneo.security.service.userinfoservice;


@RestController
@CrossOrigin("*")
public class userinfo_controller {


	
		@Autowired
		userinfoservice userservice;

		@GetMapping("/getclientinfo")
		public List<userinfo> getuserdetails(){
			return userservice.finduserinfo();
		}
//		@GetMapping("/checkuserdetails/{username}/{password}")
//		public String getuserdetailsbyid(@PathVariable String username,@PathVariable String password){
////			System.out.println("Data"+ username);
//			boolean authenticate=userservice.findregisterbyid(username,password);
//			if(authenticate) {
//				return "Login Successful";
//			}
//			else {
//				return "Invalid credentials";
//			}
//		}
		@PostMapping("/postclientinfo")
		public String create(@RequestBody userinfo usr) {
//			client_scheduled_meeting meeting = new client_scheduled_meeting();
//			usr.getSm().add(meeting);
			userservice.save(usr);
			return "Welcome";
		
}
}
