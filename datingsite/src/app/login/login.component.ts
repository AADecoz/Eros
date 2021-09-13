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
    this.UserService.signinf({"email":this.userSign,"password":this.passSign}).subscribe((data)=> {
      if(data.status_message=="user not found"){
        this.hide=false;
      } else if(data.user[3]!=this.passSign){
          this.hide2=false;
       } else{
         console.log(data.user)
        sessionStorage.setItem('userid',data.user[0]);
        sessionStorage.setItem('username',data.user[2]);
        sessionStorage.setItem('preference',data.user[4]);
        sessionStorage.setItem('sex',data.user[5]);
        sessionStorage.setItem('age',data.user[6]);
        sessionStorage.setItem('area',data.user[7]);
        sessionStorage.setItem('minAge',data.user[9]);
        sessionStorage.setItem('maxAge',data.user[10]);
        sessionStorage.setItem('intro',data.user[8]);
        this.Router.navigate([""]);
      } 
})
  }

}