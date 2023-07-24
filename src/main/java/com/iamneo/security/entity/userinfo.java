package com.iamneo.security.entity;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class userinfo {
@Id
private String email;
private String username;
private String gender;
private String mobileno;
private String schedulerusername;
private LocalTime time;
private LocalDate bookingdate;
//@OneToMany(cascade=CascadeType.ALL)
//@JoinColumn(name="cl_fk" ,referencedColumnName="email")
//List<client_scheduled_meeting> sm=new ArrayList<>();
public userinfo() {
	super();
	// TODO Auto-generated constructor stub
}
public userinfo(String email, String username, String gender, String mobileno, String schedulerusername, LocalTime time,
		LocalDate bookingdate) {
	super();
	this.email = email;
	this.username = username;
	this.gender = gender;
	this.mobileno = mobileno;
	this.schedulerusername = schedulerusername;
	this.time = time;
	this.bookingdate = bookingdate;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getMobileno() {
	return mobileno;
}
public void setMobileno(String mobileno) {
	this.mobileno = mobileno;
}
public String getSchedulerusername() {
	return schedulerusername;
}
public void setSchedulerusername(String schedulerusername) {
	this.schedulerusername = schedulerusername;
}
public LocalTime getTime() {
	return time;
}
public void setTime(LocalTime time) {
	this.time = time;
}
public LocalDate getBookingdate() {
	return bookingdate;
}
public void setBookingdate(LocalDate bookingdate) {
	this.bookingdate = bookingdate;
}


}
