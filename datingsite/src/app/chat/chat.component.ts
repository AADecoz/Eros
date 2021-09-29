import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 message:any;
 messages:any=[];
 inputChat:string="";
 name = localStorage.getItem('username')
 id=localStorage.getItem('userid')
  subscription!: Subscription;
  constructor(private data:UserService) { }
 

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(
      message => {this.message = message;
     this.newMessage();  })
     
  setInterval(() => {
    this.newMessage(); 
  }, 2500);
  }

  newMessage() {
   
    this.data.showChatf({"userid":localStorage.getItem('userid'),"matchid":this.message.id}).subscribe((dataApi)=>
    {this.messages=dataApi.messages
    });
    
  }



  sendChat(){
    this.data.sendChatf({"userid":localStorage.getItem('userid'),"matchid":this.message.id,"body":this.inputChat}).subscribe((dataApi)=>
    {
      this.newMessage()
    });


  }
}