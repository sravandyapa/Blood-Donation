package com.example.BloodDonation;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login 
{
	@Id
	String email;
	String name, password, registered, confirmation;
	
	public Login() 
	{
		
	}

	public Login(String email, String name, String password, String registered) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
		this.registered = registered;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRegistered() {
		return registered;
	}

	public void setRegistered(String registered) {
		this.registered = registered;
	}

	public String getConfirmation() {
		return confirmation;
	}

	public void setConfirmation(String confirmation) {
		this.confirmation = confirmation;
	}


	
	
	
	
	

}
