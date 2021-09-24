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
        sessionStorage.setItem('userid',data.user.UserId);
        sessionStorage.setItem('username',data.user.name);
        sessionStorage.setItem('preference',data.user.preference);
        sessionStorage.setItem('sex',data.user.sex);
        sessionStorage.setItem('age',data.user.birthday);
        sessionStorage.setItem('area',data.user.area);
        sessionStorage.setItem('minAge',data.user.minAge);
        sessionStorage.setItem('maxAge',data.user.maxAge);
        sessionStorage.setItem('intro',data.user.intro);
        this.Router.navigate([""]);
      }
})
  }

}
