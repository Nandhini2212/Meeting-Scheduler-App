package com.iamneo.security.entity;

import java.time.LocalTime;
import java.util.Map;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
@Entity
public class scheduler_business_hours {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bhid;
	private String schedulername;
	private String dayofweek;           
	private LocalTime start;
	private LocalTime end;
	public scheduler_business_hours() {
		super();
		// TODO Auto-generated constructor stub
	}
	public scheduler_business_hours(String schedulername, String dayofweek, LocalTime start, LocalTime end) {
		super();
	
		this.schedulername = schedulername;
		this.dayofweek = dayofweek;
		this.start = start;
		this.end = end;
	}

	public String getSchedulername() {
		return schedulername;
	}
	public void setSchedulername(String schedulername) {
		this.schedulername = schedulername;
	}
	public String getDayofweek() {
		return dayofweek;
	}
	public void setDayofweek(String dayofweek) {
		this.dayofweek = dayofweek;
	}
	public LocalTime getStart() {
		return start;
	}
	public void setStart(LocalTime start) {
		this.start = start;
	}
	
	public LocalTime getEnd() {
		return end;
	}
	public void setEnd(LocalTime end) {
		this.end = end;
	}



}
