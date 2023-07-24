package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.msregister;
import com.iamneo.security.service.ms_service;



@RestController
public class ms_register_controller {
	@Autowired
	ms_service registerservice;
//	@Autowired
//	private AuthenticationManager authenticationManager;
//	
//	@Autowired
//	private JwtUtil jwtUtil;
//	
//	
	@GetMapping("/getuserdetails")
	public List<msregister> getuserdetails(){
		return registerservice.findregisters();
	}
//	@GetMapping("/checkuserdetails/{username}/{password}")
//	public ResponseEntity<String> getuserdetailsbyid(@PathVariable String username,@PathVariable String password){
//		System.out.println("Data"+ username);
		
//		boolean authenticated = registerservice.findregisterbyid(username, password);
//        if (authenticated) {
//            // Generate JWT token
//            String token = JwtService.generateToken(username);
//            return ResponseEntity.ok(token);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//        }
//		
		
//		boolean authenticate=registerservice.findregisterbyid(username,password);
//		if(authenticate) {
//			return "Login Successful";
//		}
//		else {
//			return "Invalid credentials";
//		}
//	}
	@PostMapping("/postuserdetails")
	public String create(@RequestBody msregister msr) {
		registerservice.save(msr);
		return "Welcome";
	}

//	 @PostMapping("/login")
//	 public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//	     Authentication authentication = authenticationManager.authenticate(
//	             new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//
//	     UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//	     String jwtToken = jwtUtil.generateToken(userDetails.getUsername());
//
//	     return ResponseEntity.ok(new JwtResponse(jwtToken));
//	 }
}
