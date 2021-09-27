import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
})
export class PreferencesComponent implements OnInit {
  userid = localStorage.getItem('userid');
  username:any = localStorage.getItem('username');
  password = localStorage.getItem('password');
  sex:any = localStorage.getItem('sex');
  preference:any = localStorage.getItem('preference');
  age:any = localStorage.getItem('age');
  area:any = localStorage.getItem('area');
  minage:any = "";
  maxage:any = "";
  min:any=localStorage.getItem('minAge');
  max:any=localStorage.getItem('maxAge');
  intro:any= localStorage.getItem('intro');
  checkboxFlag1 = false;
  checkboxFlag2 = false;
  checkboxFlag3 = false;
  source="assets/userprofiles/"+ localStorage.getItem('userid')+".jpg";

  hide = true;
  hideLogin = true;

  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('userid'));
    console.log(localStorage.getItem('minAge'));
    if (this.preference?.includes('m') == true) {
      this.checkboxFlag1 = true;
    }
    if (this.preference?.includes('f') == true) {
      this.checkboxFlag2 = true;
    }
    if (this.preference?.includes('o') == true) {
      this.checkboxFlag3 = true;
    }
  if(this.intro=="null"){
    this.intro="";
  } 
  
  this.minage=this.transformDate(this.min);
  this.maxage=this.transformDate(this.max);

  
    
  }
  transformDate(birthday: Date): number {
    birthday=new Date(birthday);
   var month_diff = Date.now() - birthday.getTime();  
   var age_dt = new Date(month_diff);       
   var year = age_dt.getUTCFullYear();  
   var age = Math.abs(year - 1970);  

   return age; 
 }

  update(form: NgForm) {
    switch (true) {
      case this.checkboxFlag1 && this.checkboxFlag2 && this.checkboxFlag3:
        this.preference = 'mfo';
        break;
      case this.checkboxFlag1 && this.checkboxFlag2:
        this.preference = 'mf';
        break;
      case this.checkboxFlag2 && this.checkboxFlag3:
        this.preference = 'fo';
        break;
      case this.checkboxFlag1 && this.checkboxFlag3:
        this.preference = 'mo';
        break;
      case this.checkboxFlag1:
        this.preference = 'm';
        break;
      case this.checkboxFlag2:
        this.preference = 'f';
        break;
      case this.checkboxFlag3:
        this.preference = 'o';
        break;
      default:
        this.preference = 'no entry';
    }
    
    if (form.status == 'VALID' && this.preference != 'no entry' && isNaN(this.minage)==false && isNaN(this.maxage)==false) {
      

      
      let year =new Date().getFullYear();
      let minAgeYear:any = year-this.minage;
      let minAgeString=minAgeYear+"-01-01";
      let maxAgeYear:any = year-this.maxage;
      let maxAgeString=maxAgeYear+"-01-01";

    console.log(this.age);
      this.UserService.updatef({
        userid: this.userid,
        username: this.username,
        password: this.password,
        preference: this.preference,
        sex: this.sex,
        age: this.age,
        minage: minAgeString,
        maxage: maxAgeString,
        area: this.area,
        intro: this.intro,
      }).subscribe();
      localStorage.setItem('username',this.username);
      localStorage.setItem('preference',this.preference);
      localStorage.setItem('sex',this.sex);
      localStorage.setItem('age',this.age);
      localStorage.setItem('area',this.area);
      localStorage.setItem('minAge',minAgeString);
      localStorage.setItem('maxAge',maxAgeString);
      localStorage.setItem('intro',this.intro);
      

    }
  }

 defaultimg(){
  this.source="assets/default.png"
  
 }
}
