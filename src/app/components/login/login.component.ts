import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http:HttpClient) { }
  
  email=""
  pass=""
  data=""
  login_click()
  {
	  var credentials =
	  {
		  "email":this.email,
		  "password":this.pass
	  }
	  
	  
	  this.http.post('http://localhost:8080/SignIn',credentials,{responseType: 'text'}).subscribe(data => 
	  {
			alert(data)
	  
	  });
  }
  

  ngOnInit(): void {
  }

}
