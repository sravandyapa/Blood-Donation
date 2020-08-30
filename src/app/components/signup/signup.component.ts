import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public http:HttpClient) { }
  
  email=""
  name=""
  pass=""
  
  signup_click()
  {
	  var data=
	  {
		  "email":this.email,
		  "name":this.name,
		  "password":this.pass
	  }
	  
	  this.http.post<any>('http://localhost:8080/SignUp',data,{responseType: 'text'}).subscribe( data => alert(data));
	  
  }

  ngOnInit(): void {
  }

}
