import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donee-form',
  templateUrl: './donee-form.component.html',
  styleUrls: ['./donee-form.component.css']
})
export class DoneeFormComponent implements OnInit {

  constructor(public http:HttpClient) { }
  
  grp=""
  num=""
  count=""
  stat=""
  dist=""
  city=""
  date=""
  plasma=""
  
  Bg=["A+","A-","B+","B-","AB+","AB-","O+","O-"];
  
  //l_states=["ANDHRA PRADESH","ARUNACHAL PRADESH","ASSAM","BIHAR","CHANDIGARH","CHHATISGARH","DELHI","GOA","GUJARAT","HARYANA","J & K","KARNATAKA","KERALA","MADHYA PRADESH","MAHARASTRA","MANIPUR","MIZORAM","PUNJAB","TAMIL NADU","UP","WEST BENGAL"]
  
selectedDistrict = 0;
  selectedState = 0;
   
  districts = [];
  cities = [];
   
   
  onSelectState(state_id: any) {
  this.selectedState = state_id;
  //this.selectedState = 0;
  this.cities = [];
  this.districts = this.getDistricts().filter((item) => {
  return item.state_id === state_id
  });
  }
   
  onSelectDistrict(dist_id: any) {
  this.selectedDistrict = dist_id;
  this.cities = this.getCity().filter((item) => {
  return item.dist_id === dist_id
  });
  }
   
  
  states= [
    { id: 'ALL', name: 'ALL' },
  { id: 'ANDHRA PRADESH', name: 'ANDHRA PRADESH' },
  { id: 2, name: 'BIHAR' },
  { id: 3, name: 'KARNATAKA'},
  { id: 4, name: 'MAHARASTRA' },
  { id: 5, name: 'PUNJAB' },
  { id: 6, name: 'UP' }
  ];
  
   
getDistricts(){
  return [
    { id: 'ALL', state_id: 'ALL', name: 'ALL' },
  { id: 'GUNTUR', state_id: 'ANDHRA PRADESH', name: 'GUNTUR' },
  { id: 'KRISHNA', state_id: 'ANDHRA PRADESH', name: 'KRISHNA' },
  { id: 'NELLORE', state_id: 'ANDHRA PRADESH', name: 'NELLORE' },
  { id: 'AURANGABAD', state_id: 'BIHAR', name: 'AURANGABAD' },
  { id: 'BHOJPUR', state_id: 'BIHAR', name: 'BHOJPUR' },
  { id: 'GOPALGANJ', state_id: 'BIHAR', name: 'GOPALGANJ' },
  { id: 'JAMUL', state_id: 'BIHAR', name: 'JAMUL' },
  { id: 'NALANDA', state_id: 'BIHAR', name: 'NALANDA' },
  { id: 'BELAGAUM', state_id: 'KARNATAKA', name: 'BELAGAUM' },
  { id: 'BALLARI', state_id: 'KARNATAKA', name: 'BALLARI' },
  { id: 'HAVERI', state_id: 'KARNATAKA', name: 'HAVERI' },
  { id: 'MYSORE', state_id: 'KARNATAKA', name: 'MYSORE' },
  { id: 'UDUPI', state_id: 'KARNATAKA', name: 'UDUPI' },
  { id: 'AKOLA', state_id: 'MAHARASTRA', name: 'AKOLA' },
  { id: 'BEED', state_id: 'MAHARASTRA', name: 'BEED' },
  { id: 'CHANDRAPUR', state_id: 'MAHARASTRA', name: 'CHANDRAPUR' },
  { id: 'AMRITSAR', state_id: 'PUNJAB', name: 'AMRITSAR' },
  { id: 'KAPURTHALA', state_id: 'PUNJAB', name: 'KAPURTHALA' },
  { id: 'LUDHIANA', state_id: 'PUNJAB', name: 'LUDHIANA' },
  { id: 'AGRA', state_id: 'UP', name: 'AGRA' },
  { id: 'GORAKHPUR', state_id: 'UP', name: 'GORAKHPUR' },
  { id: 'JHANSI', state_id: 'UP', name: 'JHANSI' }
  ]
}
   
  getCity() {
  return [
    { id: 'ALL', dist_id: 'ALL', name: 'ALL' },
  { id: 'GUNTUR', dist_id: 'GUNTUR', name: 'GUNTUR' },{ id: 'GORINTLA', dist_id: 'GUNTUR', name: 'GORINTLA' },{ id: 'AMARAVATI', dist_id: 'GUNTUR', name: 'AMARAVATI' },
  { id: 'VIJAYAWADA', dist_id: 'KRISHNA', name: 'VIJAYAWADA' },{ id: 'JIDUGU', dist_id: 'KRISHNA', name: 'JIDUGU' },{ id: 'REPALLE', dist_id: 'KRISHNA', name: 'REPALLE' },
  { id: 'NELLORE', dist_id: 'NELLORE', name: 'NELLORE' },{ id: 'KAVALI', dist_id: 'NELLORE', name: 'KAVALI' },{ id: 'NAIDUPETA', dist_id: 'NELLORE', name: 'NAIDUPETA' },
  { id: 'PAITHAN', dist_id: 'AURANGABAD', name: 'PAITHAN' },{ id: 'VAJIPUR', dist_id: 'AURANGABAD', name: 'VAJIPUR' },{ id: 'GANGAPUR', dist_id: 'AURANGABAD', name: 'GANGAPUR' },
  { id: 'ARRAH', dist_id: 'BHOJPUR', name: 'ARRAH' },{ id: 'JAGDISHPUR', dist_id: 'BHOJPUR', name: 'JAGDISHPUR' },{ id: 'KAKILA', dist_id: 'BHOJPUR', name: 'KAKILA' },
  { id: 'BARAULI', dist_id: 'GOPALGANJ', name: 'BARAULI' },{ id: 'MIRGANJ', dist_id: 'GOPALGANJ', name: 'MIRGANJ' },{ id: 'THAWE', dist_id: 'GOPALGANJ', name: 'THAWE' },
  { id: 'BALOD', dist_id: 'JAMUL', name: 'BALOD' },{ id: 'DONDI', dist_id: 'JAMUL', name: 'DONDI' },{ id: 'GURUR', dist_id: 'JAMUL', name: 'GURUR' },
  { id: 'HILSA', dist_id: 'NALANDA', name: 'HILSA' },{ id: 'ISLAMPUR', dist_id: 'NALANDA', name: 'ISLAMPUR' },{ id: 'RAJGIR', dist_id: 'NALANDA', name: 'RAJGIR' },
  { id: 'ATHANI', dist_id: 'BELAGAUM', name: 'ATHANI' },{ id: 'CHIKODI', dist_id: 'BELAGAUM', name: 'CHIKODI' },{ id: 'KHANAPUR', dist_id: 'BELAGAUM', name: 'KHANAPUR' },
  { id: 'HAMPI', dist_id: 'BALLARI', name: 'HAMPI' },{ id: 'KAMPLI', dist_id: 'BALLARI', name: 'KAMPLI' },{ id: 'KOTTURU', dist_id: 'BALLARI', name: 'KOTTURU' },
  { id: 'BANKAPURA', dist_id: 'HAVERI', name: 'BANKAPURA' },{ id: 'GUTTAL', dist_id: 'HAVERI', name: 'GUTTAL' },{ id: 'SAVANUR', dist_id: 'HAVERI', name: 'SAVANUR' },
  { id: 'BANNUR', dist_id: 'MYSORE', name: 'BANNUR' },{ id: 'HIMSPUR', dist_id: 'MYSORE', name: 'HIMSUR' },{ id: 'MYSORE', dist_id: 'MYSORE', name: 'MYSORE' },
  { id: 'BRAHMAGIRI', dist_id: 'UDUPI', name: 'BRAHMAGIRI' },{ id: 'KUNDAPURA', dist_id: 'UDUPI', name: 'KUNDAPURA' },{ id: 'MANIPAL', dist_id: 'UDUPI', name: 'MANIPAL' },
  { id: 'BALAPUR', dist_id: 'AKOLA', name: 'BALAPUR' },{ id: 'LOHARA', dist_id: 'AKOLA', name: 'LOHARA' },{ id: 'PATUR', dist_id: 'AKOLA', name: 'PATUR' },
  { id: 'ASHTI', dist_id: 'BEED', name: 'ASHTI' },{ id: 'KAIJ', dist_id: 'BEED', name: 'KAIJ' },{ id: 'MANUR', dist_id: 'BEED', name: 'MANUR' },
  { id: 'BHADRAVATI', dist_id: 'CHANDRAPUR', name: 'BHADRAVATI' },{ id: 'RAJURA', dist_id: 'CHANDRAPUR', name: 'RAJURA' },{ id: 'KORPANA', dist_id: 'CHANDRAPUR', name: 'KORPANA' },
  { id: 'ANJALA', dist_id: 'AMRITSAR', name: 'ANJALA' },{ id: 'BANDARA', dist_id: 'AMRITSAR', name: 'BANDARA' },{ id: 'BEAS', dist_id: 'AMRITSAR', name: 'BEAS' },
  { id: 'BHOLATH', dist_id: 'KAPURTHALA', name: 'BHOLATH' },{ id: 'NADALA', dist_id: 'KAPURTHALA', name: 'NADALA' },{ id: 'PHAGWARA', dist_id: 'KAPURTHALA', name: 'PHAGWARA' },
  { id: 'DORAHA', dist_id: 'LUDHIANA', name: 'DORAHA' },{ id: 'KHANNA', dist_id: 'LUDHIANA', name: 'KHANNA' },{ id: 'RAIKOT', dist_id: 'LUDHIANA', name: 'RAIKOT' },
  { id: 'BAH', dist_id: 'AGRA', name: 'BAH' },{ id: 'DHANOULI', dist_id: 'AGRA', name: 'DHANOULI' },{ id: 'KIROULI', dist_id: 'AGRA', name: 'KIROULI' },
  { id: 'PIPI GAJ', dist_id: 'GORAKHPUR', name: 'PIPI GAJ' },{ id: 'PIPIRAICH', dist_id: 'GORAKHPUR', name: 'PIPIRAICH' },{ id: 'MUNDERA BAZAAR', dist_id: 'GORAKHPUR', name: 'MUNDERA BAZAAR' },
  { id: 'BABINA', dist_id: 'JHANSI', name: 'BABINA' },{ id: 'CHIRGAON', dist_id: 'JHANSI', name: 'CHIRGAON' },{ id: 'JHANSI', dist_id: 'JHANSI', name: 'JHANSI' }
  ]
  }
  
  head=""
  table=""
	
  
  donee_click()
  {
	  if(this.grp==""||this.stat==""||this.dist==""||this.city==""||this.plasma=="")
	  {
		  alert("Please fill the blanks")
	  }
	  else
	  {
		 var donee =
		  {
			  "grp":this.grp,
			  "mobile_number":this.num,
			  "country":this.count,
			  "state":this.stat,
			  "district":this.dist,
			  "city":this.city,
			  "need_date":this.date,
			  "plasma_donor":this.plasma
		  }
		  
		   this.http.post<any>('http://localhost:8080/Donee',donee).subscribe(data => 
		  {
				this.head="Result"
				this.table="<table border='5px' class='table table-striped'><tr><th>Blood Group</th><th>Email</th><th>Number1</th><th>Number2</th><th>State</th><th>District</th><th>City</th><th>Available</th><th>Plasma Donor</th></tr>"
				//data = JSON.parse(data);
				for(var i in data)
				{
					this.table+="<tr>"+ "<td>"+data[i].grp+"</td>"+ "<td>"+data[i].email+"</td>"+ "<td>"+data[i].number1+"</td>"+ "<td>"+data[i].number2+"</td>"+ "<td>"+data[i].state+"</td>"+ "<td>"+data[i].district+"</td>"+ "<td>"+data[i].city+"</td>"+ "<td>"+data[i].available+"</td>"+"<td>"+data[i].plasma_donor+"</td>"+"</tr>"
				}
				this.table+="</table>"
		  
		  });
	  }

	  
  }
  ngOnInit(): void {
  }

}
