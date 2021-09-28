import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matchesArray:Array<any>=['test'];
  username:string|null = localStorage.getItem('username');
  matchAge:any;
  matchGender:any;
  noMatch:any;

  message!:object;
  subscription!: Subscription;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.matchesf({"userid":localStorage.getItem('userid')}).subscribe((data)=>{ 
      this.matchesArray=data.user;
      this.UserService.changeData({"id":this.matchesArray[0].id})
      console.log(this.matchesArray[0].id)
      if(this.matchesArray==null){
        this.noMatch=true;
      }else{
        this.noMatch=false;
      }
     
    })
    this.subscription = this.UserService.currentMessage.subscribe(message => this.message = message)
    
  }
    
     newData(id:any) {
    
     this.UserService.changeData({"id":id})
     console.log(this.message); 
  }
}
