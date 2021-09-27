import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn:any;
  loggedOut:any;
  isNavbarCollapsed=true;
  color="transparent";
  sourceLogo="assets/logoDark.png";
  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>768){
      this.color="transparent"
       this.sourceLogo="assets/logo.png"
    }
    if(this.innerWidth<768&&this.isNavbarCollapsed==false){
      this.color="white"
      this.sourceLogo="assets/logoDark.png"
    }
    
    console.log(localStorage.getItem("username"));
    if(localStorage.getItem("username")!=null){
      this.loggedIn=true;
      this.loggedOut=false;
    }else{
      this.loggedIn=false;
      this.loggedOut=true;
    }
  }

  logout(){
    localStorage.clear(); 
   }
   openNav(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed
    
    if(this.color=="transparent"){
      this.color="white";
      this.sourceLogo="assets/logoDark.png"
   }else{
     this.color="transparent"
     this.sourceLogo="assets/logo.png"
   }
  }

  @HostListener('window:resize', ['$event'])
onResize(event:any) {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth>768){
    this.color="transparent"
     this.sourceLogo="assets/logo.png"
  }
  if(this.innerWidth<768&&this.isNavbarCollapsed==false){
    this.color="white"
    this.sourceLogo="assets/logoDark.png"
  }
}


  }
