import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  userid:any = localStorage.getItem('userid');
  matchesArray:Array<any>=['test'];
  username:string|null = localStorage.getItem('username');
  matchAge:any;
  matchGender:any;
  noMatch:any;
  loaded:boolean=false;

  message!:object;
  subscription!: Subscription;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.matchesf({"userid":localStorage.getItem('userid')}).subscribe((data)=>{ 
      this.matchesArray=data.user;
      if(this.matchesArray==null){
        this.noMatch=true;
      }else{
        this.noMatch=false;
        this.UserService.changeData({"id":this.matchesArray[0].id,"name":this.matchesArray[0].name})
      }
      this.loaded=true;
    });

    this.subscription = this.UserService.currentMessage.subscribe(message => this.message = message)
  }
    
  newData(id:any,name:any) {
     this.UserService.changeData({"id":id,"name":name})
  }

  deleteMatch(id:string){
    this.UserService.deleteMatchf({"userid":localStorage.getItem('userid'),"matchid":id}).subscribe(()=>{ 
      this.ngOnInit();
    });
    
  }
}