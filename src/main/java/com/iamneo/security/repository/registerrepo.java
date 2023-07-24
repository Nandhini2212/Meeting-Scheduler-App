package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.msregister;

@Repository
public interface registerrepo extends JpaRepository<msregister,String>{
//	msregister findByUsername(String username);
}
