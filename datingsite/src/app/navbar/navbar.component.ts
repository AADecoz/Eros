import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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
  matchCount!:number;
  public innerWidth: any;

  constructor(private UserService:UserService) { }

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
    
    if(localStorage.getItem("username")!=null){
      this.loggedIn=true;
      this.loggedOut=false;
    }else{
      this.loggedIn=false;
      this.loggedOut=true;
    }
    
    setInterval(() => {
      this.UserService.alertf({"userid":localStorage.getItem('userid')}).subscribe((data)=>{ 
        if(data.status_message=="Users found"){
          this.matchCount=data.unchecked
       }
        }
    );
    }, 2500);
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
