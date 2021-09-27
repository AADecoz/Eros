import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


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

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.UserService.matchesf({"userid":localStorage.getItem('userid')}).subscribe((data)=>{ 
      this.matchesArray=data.user;
    
      if(this.matchesArray==null){
        this.noMatch=true;
      }else{
        this.noMatch=false;
      }
    })
  }
}
