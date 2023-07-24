package com.iamneo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.scheduler_business_hours;
import com.iamneo.security.repository.businesshour;


@Service
public class businesshoursservice {
	@Autowired
	businesshour bhrepo;
		public void save(scheduler_business_hours sbh) {
			bhrepo.save(sbh);
		}
		public List<scheduler_business_hours> findregisters() {
			return bhrepo.findAll();
		}
//		public boolean findregisterbyid(String username,String password) {
//			// TODO Auto-generated method stub
////			System.out.println("Dat"+ username);
//			msregister scheduler=bhrepo.findById(username).orElse(null);
//			if(scheduler!=null && password.equals(scheduler.getPassword())) {
//				return true;
//			}
//			else {
//				return false;
//			}
//		}
		public List<scheduler_business_hours> findbhinfo() {
			// TODO Auto-generated method stub
			return bhrepo.findAll();
			
		}
}
