package com.example.BloodDonation;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Donor 
{

	@Id
	String email;
	String grp, number1,number2, country, state, district, city, available, plasma_donor;
	


	public Donor()
	{
		
	}



	public Donor(String email, String grp, String number1, String number2, String country, String state,
			String district, String city, String available, String plasma_donor) {
		super();
		this.email = email;
		this.grp = grp;
		this.number1 = number1;
		this.number2 = number2;
		this.country = country;
		this.state = state;
		this.district = district;
		this.city = city;
		this.available = available;
		this.plasma_donor = plasma_donor;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getGrp() {
		return grp;
	}



	public void setGrp(String grp) {
		this.grp = grp;
	}



	public String getNumber1() {
		return number1;
	}



	public void setNumber1(String number1) {
		this.number1 = number1;
	}



	public String getNumber2() {
		return number2;
	}



	public void setNumber2(String number2) {
		this.number2 = number2;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public String getDistrict() {
		return district;
	}



	public void setDistrict(String district) {
		this.district = district;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getAvailable() {
		return available;
	}



	public void setAvailable(String available) {
		this.available = available;
	}



	public String getPlasma_donor() {
		return plasma_donor;
	}



	public void setPlasma_donor(String plasma_donor) {
		this.plasma_donor = plasma_donor;
	}



	
	
	

}
