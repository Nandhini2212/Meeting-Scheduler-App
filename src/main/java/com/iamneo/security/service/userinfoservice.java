package com.iamneo.security.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.iamneo.security.entity.userinfo;
import com.iamneo.security.repository.userinforepo;


@Service
public class userinfoservice {

	@Autowired
	userinforepo uirepo;
		public void save(userinfo msr) {
			uirepo.save(msr);
		}
		public List<userinfo> finduserinfo() {
			// TODO Auto-generated method stub
			return uirepo.findAll();
		}
//		public boolean findregisterbyid(String username,String password) {
//			// TODO Auto-generated method stub
//			System.out.println("Data"+ username);
//			userinfo scheduler=uirepo.findById(username).orElse(null);
//			if(scheduler!=null && password.equals(scheduler.getPassword())) {
//				return true;
//			}
//			else {
//				return false;
//			}
//		}

	


}
