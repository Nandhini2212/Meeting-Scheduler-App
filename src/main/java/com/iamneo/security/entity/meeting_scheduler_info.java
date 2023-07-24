package com.iamneo.security.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
@Entity
public class meeting_scheduler_info {
    @Id
    private String username; // Common key with scheduler_business_hours
    private String url;
    private String service;
    private int duration;
    private int capacity;
//    @OneToMany(cascade=CascadeType.ALL)
//    @JoinColumn(name="bh_fk" ,referencedColumnName="username")
//    List<scheduler_business_hours> bh=new ArrayList<>();
	public meeting_scheduler_info() {
		super();
		// TODO Auto-generated constructor stub
	}
	public meeting_scheduler_info(String username, String url, String service, int duration, int capacity) {
		super();
		this.username = username;
		this.url = url;
		this.service = service;
		this.duration = duration;
		this.capacity = capacity;
//		this.businessHoursByDay = businessHoursByDay;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public int getCapacity() {
		return capacity;
	}
//	public List<scheduler_business_hours> getBh() {
//		return bh;
//	}
//	public void setBh(List<scheduler_business_hours> bh) {
//		this.bh = bh;
//	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	
//	public Map<String, scheduler_business_hours> getBusinessHoursByDay() {
//		return businessHoursByDay;
//	}
//	public void setBusinessHoursByDay(Map<String, scheduler_business_hours> businessHoursByDay) {
//		this.businessHoursByDay = businessHoursByDay;
//	}

 
}
