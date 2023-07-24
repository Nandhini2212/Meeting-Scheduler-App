package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.userinfo;


public interface userinforepo extends JpaRepository<userinfo,String>{

}
