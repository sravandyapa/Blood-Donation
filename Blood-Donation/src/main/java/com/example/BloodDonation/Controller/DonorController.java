package com.example.BloodDonation.Controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.BloodDonation.*;



@RestController
public class DonorController 
{
	@Autowired
	BloodService bs;
	
//testing
	@RequestMapping("/Hello")
	public String work()
	{
		return "Working :)";
	}
	
//Login's
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/SignUp")
	public String signUp(@RequestBody Login log)
	{
		return bs.signUp(log);

	}
	
	/*
	 @CrossOrigin
	 @RequestMapping("/SignIn")
	public Optional<Login> signIn(@RequestBody Login log)
	{
		return bs.signIn(log);
	}*/
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/SignIn")
	public String signIn(@RequestBody Login log)
	{
		return bs.signIn(log);
	}

	
	
//Donor's
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/Donor")
	public String donor(@RequestBody Donor don)
	{
		return bs.donor(don);
		
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.PUT,value="/Donor")
	public String donarUpdate(@RequestBody Donor don)
	{
		bs.donorUpdate(don);
		return "Successfully Saved The Data";
	}
	
	
//Donee's
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST,value="/Donee")
	public List<Donor> donee(@RequestBody Donee dne)
	{
		return bs.donee(dne);
	}
	
	
	
	
}
