package com.example.BloodDonation;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BloodService 
{
	
	@Autowired
	LoginRepo log_r;
	@Autowired
	DonorRepo don_r;
	@Autowired
	DoneeRepo dne_r;
	
//Login functions
	
	//adding donor details
	public String signUp(Login log)
	{
		if(log_r.existsById(log.getEmail()))
		{
			return "User already Exist";
		}
		else
		{
			log_r.save(log);
			return "Sucessfully Signed Up";
		}
	}
	
	//validating for signing in
	/*public Optional<Login> signIn(Login log)
	{
		 Optional<Login> l = log_r.findById(log.getEmail());
		 if(l!=null)
		 {
			 if(l.get().getPassword().equals(log.getPassword()))
			 {
				 return l;
			 }
		 }
		 return null;
	}*/

	public String signIn(Login log)
	{
		try
		{
			 Optional<Login> l = log_r.findById(log.getEmail());
			 if(l!=null)
			 {
				 if(l.get().getPassword().equals(log.getPassword()))
				 {
					 return "Welcome Hero :)";
				 }
				else
				{
					return "Wrong Password Dude Try Again";
				}
			 }
		}
		catch(Exception e)
		{
			return "User Doesn't Exists";
		}
		return "";

		 
	}
	
	
//Donor's Functions
	
	//Donor details savings
	public String donor(Donor don)
	{
		try 
		{
			Login log = log_r.findById(don.getEmail()).get();
			log.setRegistered("yess");
			log_r.save(log);
			don_r.save(don);
			return "Successfully Saved The Data";
		}
		catch(Exception e)
		{
			return "Use email which you created in signup";
		}

	}
	
	//Donor details update
	public void donorUpdate(Donor don)
	{
		don_r.save(don);
	}
	
	
//Donee's Functions
	
	//Donee details savings
	public List<Donor> donee(Donee dne)
	{
		ArrayList<Donor> don = new ArrayList<Donor>();
		don_r.findAll().forEach(obj->don.add(obj));
		
		//dne_r.save(dne);
		if(dne.getState().equals("ALL"))
		{
			System.out.println(dne.getGrp() + dne.getPlasma_donor());
			return don.stream().filter(obj->
					obj.getGrp().equals(dne.getGrp())&&
					obj.getPlasma_donor().equals(dne.getPlasma_donor())
					).collect(Collectors.toList());
		}
		else if(dne.getDistrict().equals("ALL"))
		{
			return don.stream().filter(obj->
			obj.getGrp().equals(dne.getGrp())&&
			obj.getPlasma_donor().equals(dne.getPlasma_donor())&&
			obj.getState().equals(dne.getState())
			
					).collect(Collectors.toList());
		}
		else if(dne.getCity().equals("ALL"))
		{
			return don.stream().filter(obj->
					obj.getGrp().equals(dne.getGrp())&&
					obj.getPlasma_donor().equals(dne.getPlasma_donor())&&
					obj.getState().equals(dne.getState())&&
					obj.getDistrict().equals(dne.getDistrict())
					
					).collect(Collectors.toList());
		}
		else
		{
			return don.stream().filter(obj->
			obj.getGrp().equals(dne.getGrp())&&
			obj.getPlasma_donor().equals(dne.getPlasma_donor())&&
			obj.getState().equals(dne.getState())&&
			obj.getDistrict().equals(dne.getDistrict())&&
			obj.getCity().equals(dne.getCity())
			
			).collect(Collectors.toList());
		}
	}

}
