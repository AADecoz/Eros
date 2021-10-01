import { Component, OnInit } from '@angular/core';
import { UserService} from "../user.service";

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {
  username:string|null = localStorage.getItem('username');
  userid:string|null = localStorage.getItem('userid');
  sex:string|null =localStorage.getItem('sex');
  preference:string|null=localStorage.getItem('preference');
  minAge:string|null=localStorage.getItem('minAge');
  maxAge:string|null=localStorage.getItem('maxAge');
  age:any;
  feedArray:any[]=[{}];
  matches=true;
  ageMatch:any;
  sourceMatch:string="";
  loading:boolean=false;

  constructor(private UserService:UserService) {
    
   }

  ngOnInit(): void {
    
   this.laadFeed();

   

  }


 laadFeed(){
  this.UserService.feedf({"userid":this.userid,"sex":this.sex,"preference":this.preference,"minAge":this.minAge,"maxAge":this.maxAge}).subscribe((data)=> {
    if(data.status_message=="matches not found"){
      this.matches=false;
    }else{
      this.feedArray=data.user;
      this.sourceMatch="assets/userprofiles/"+this.feedArray[0].UserId+".jpg";
    }
    this.loading=true;
 })
}

laadFeedLocal(){
  this.feedArray.shift();
  if(this.feedArray.length==0){
    this.feedArray=[{}];
    this.matches=false;
  } else {this.sourceMatch="assets/userprofiles/"+this.feedArray[0].UserId+".jpg";}


}

like(likedOrNot:number){
  
 let matchID=this.feedArray[0].UserId;
 let userID=localStorage.getItem('userid');
    this.UserService.likef({"userid":userID,"matchid":matchID,"matched":likedOrNot}).subscribe((data)=> {
      this.laadFeedLocal();
    })
}


 defaultimg(){
  this.sourceMatch="assets/default.png"


 }



}



