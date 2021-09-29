import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userid = localStorage.getItem('userid');
  username:string|null = localStorage.getItem('username');
  sex:any = localStorage.getItem('sex');
  preference:any = localStorage.getItem('preference');
  age:any = localStorage.getItem('age');
  area:any = localStorage.getItem('area');
  intro:any= localStorage.getItem('intro');

  constructor() { }

  ngOnInit(): void {
  }

}
