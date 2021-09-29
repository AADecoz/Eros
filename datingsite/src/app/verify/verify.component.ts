import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

   routeSub!:Subscription;

   key:any;
  constructor(private route: ActivatedRoute, private UserService:UserService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.key=params["id"];
      this.UserService.verifyEmailf({"key":this.key}).subscribe(event => {
       
      });

    });

    
  }

}
