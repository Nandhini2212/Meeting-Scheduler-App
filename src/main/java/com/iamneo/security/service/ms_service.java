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

import com.iamneo.security.entity.msregister;
import com.iamneo.security.repository.registerrepo;



@Service
public class ms_service {
@Autowired
registerrepo regrepo;
	public void save(msregister msr) {
		regrepo.save(msr);
	}
	public List<msregister> findregisters() {
		// TODO Auto-generated method stub
		return regrepo.findAll();
	}
	public boolean findregisterbyid(String username,String password) {
		// TODO Auto-generated method stub
//		System.out.println("Dat"+ username);
		msregister scheduler=regrepo.findById(username).orElse(null);
		if(scheduler!=null && password.equals(scheduler.getPassword())) {
			return true;
		}
		else {
			return false;
		}
	}

}

