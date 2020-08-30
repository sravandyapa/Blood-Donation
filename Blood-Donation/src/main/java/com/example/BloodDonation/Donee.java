package com.example.BloodDonation;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Donee 
{
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	String donee_id;
	String grp, mobile_number, country, state, district, city, plasma_donor, need_date;
	
	public Donee()
	{
		
	}

	public Donee(String donee_id, String grp, String mobile_number, String country, String state, String district,
			String city, String plasma_donor, String need_date) {
		super();
		this.donee_id = donee_id;
		this.grp = grp;
		this.mobile_number = mobile_number;
		this.country = country;
		this.state = state;
		this.district = district;
		this.city = city;
		this.plasma_donor = plasma_donor;
		this.need_date = need_date;
	}

	public String getDonee_id() {
		return donee_id;
	}

	public void setDonee_id(String donee_id) {
		this.donee_id = donee_id;
	}

	public String getGrp() {
		return grp;
	}

	public void setGrp(String grp) {
		this.grp = grp;
	}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
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

	public String getPlasma_donor() {
		return plasma_donor;
	}

	public void setPlasma_donor(String plasma_donor) {
		this.plasma_donor = plasma_donor;
	}

	public String getNeed_date() {
		return need_date;
	}

	public void setNeed_date(String need_date) {
		this.need_date = need_date;
	}
	

	
	
	
	
	

}
