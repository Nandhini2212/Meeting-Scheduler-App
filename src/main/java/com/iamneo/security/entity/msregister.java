package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class msregister {
@Id
String Username;
String Email;
String Country;
String Password;

public msregister() {
	super();
	// TODO Auto-generated constructor stub
}
public msregister(String username, String email, String country, String password) {
	super();
	Username = username;
	Email = email;
	Country = country;
	Password = password;
}
public String getUsername() {
	return Username;
}
public void setUsername(String username) {
	Username = username;
}
public String getEmail() {
	return Email;
}
public void setEmail(String email) {
	Email = email;
}
public String getCountry() {
	return Country;
}
public void setCountry(String country) {
	Country = country;
}
public String getPassword() {
	return Password;
}
public void setPassword(String password) {
	Password = password;
}
public Object orElseThrow(Object object) {
	// TODO Auto-generated method stub
	return null;
}



}
