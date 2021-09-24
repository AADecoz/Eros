import { Component, OnInit } from '@angular/core';
import { UserService} from "../user.service";

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit {
  username = sessionStorage.getItem('username');
  userid = sessionStorage.getItem('userid');
  sex =sessionStorage.getItem('sex');
  preference=sessionStorage.getItem('preference');
  minAge=sessionStorage.getItem('minAge');
  maxAge=sessionStorage.getItem('maxAge');
  age:any;
  feedArray:any=[{}];
  test="test";
  noMatches=true;
  matches=true;
  ageMatch:any;
  sourceMatch:any;
  
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
   this.laadFeed();
   
   document.body.className = "test";
  
  }


 laadFeed(){ 
  this.UserService.feedf({"userid":this.userid,"sex":this.sex,"preference":this.preference,"minAge":this.minAge,"maxAge":this.maxAge}).subscribe((data)=> {
    if(data.status_message=="user not found"){
      this.matches=false;
      this.noMatches=false;
    }else{ 
      this.feedArray=data.user; 
      console.log(this.feedArray);
      this.sourceMatch="assets/userprofiles/"+this.feedArray[0].UserId+".jpg";
    }
 })
}

laadFeedLocal(){
  this.feedArray.shift();
  this.sourceMatch="assets/userprofiles/"+this.feedArray[0].UserId+".jpg";
  if(this.feedArray.length==0){
    this.feedArray=[{}];
    this.matches=false;
    this.noMatches=false;
  }

  
}

like(likedOrNot:number,index:number){
 let matchID=this.feedArray[index].UserId;
 console.log(matchID)
 let userID=sessionStorage.getItem('userid');
    this.UserService.likef({"userid":userID,"matchid":matchID,"matched":likedOrNot}).subscribe(()=> {
   this.laadFeedLocal();

})
 }

  
 defaultimg(){
  this.sourceMatch="assets/default.png"
  
 
 }


 
}



