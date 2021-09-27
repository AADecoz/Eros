import { Component, OnInit } from '@angular/core';
import { UserService} from "../user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userSign="";
  passSign="";

  hide=true;
  hide2=true;
  constructor(private UserService:UserService,private Router:Router) {

  }

  ngOnInit(): void {

  }
  setUser(){
    this.UserService.user=this.userSign;
  }

  checkLogin(){
    this.hide=true;
    this.hide2=true;
    this.UserService.verifyf({"email":this.userSign,"password":this.passSign}).subscribe((data)=> {
      console.log(data.status_message)
     if(data.status_message=="Wrong password"){
          this.hide2=false;
       }else if(data.status_message=="Email not found"){
         this.hide=false;
       } else{
        localStorage.setItem('userid',data.user.UserId);
        localStorage.setItem('username',data.user.name);
        localStorage.setItem('preference',data.user.preference);
        localStorage.setItem('sex',data.user.sex);
        localStorage.setItem('age',data.user.birthday);
        localStorage.setItem('area',data.user.area);
        localStorage.setItem('minAge',data.user.minAge);
        localStorage.setItem('maxAge',data.user.maxAge);
        localStorage.setItem('intro',data.user.intro);
        this.Router.navigate([""]);
      }
})
  }

}
