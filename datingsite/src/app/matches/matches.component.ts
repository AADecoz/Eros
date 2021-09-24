import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matchesArray=[];
  username = sessionStorage.getItem('username');
  matchAge:any;
  matchGender:any;
  noMatch:any;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.loadMatches();
     if(this.matchesArray.length==0){
       this.noMatch=true;
     }else{
       this.noMatch=false;
     }


  }

loadMatches(){
  this.UserService.matchesf({"userid":sessionStorage.getItem('userid')}).subscribe((data)=>
  { console.log(data)
    this.matchesArray=data.user;



  })
}
}
