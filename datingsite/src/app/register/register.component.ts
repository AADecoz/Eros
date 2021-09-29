import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username = localStorage.getItem('username');
  password = '';
  preference = 'man';
  sex = 'Man';
  birthday = '';
  area = 'limburg';
  email = '';
  checkboxFlag1 = false;
  checkboxFlag2 = false;
  checkboxFlag3 = false;
  hide = true;
  minAge:any;
  maxAge:any;
  hideEmail:boolean=true;

  hideLogin = true;
  constructor(private UserService: UserService, private router: Router) {}

  currentDate : Date =new Date();


  ngOnInit(): void {


  }


  register(form: NgForm) {
    switch (true) {
      case this.checkboxFlag1 && this.checkboxFlag2 && this.checkboxFlag3:
        this.preference = 'mfo';
        break;
      case this.checkboxFlag1 && this.checkboxFlag2:
        this.preference = 'mf';
        break;
      case this.checkboxFlag2 && this.checkboxFlag3:
        this.preference = 'fo';
        break;
      case this.checkboxFlag1 && this.checkboxFlag3:
        this.preference = 'mo';
        break;
      case this.checkboxFlag1:
        this.preference = 'm';
        break;
      case this.checkboxFlag2:
        this.preference = 'f';
        break;
      case this.checkboxFlag3:
        this.preference = 'o';
        break;
      default:
        this.preference = 'no entry';
    }

    function validateEmail(email:string) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    if(validateEmail(this.email)){
      if (form.status == 'VALID' && this.preference != 'no entry') {
        this.UserService.signinf({
          email: this.email,
          password: this.password,
        }).subscribe((data) => {
          console.log(data)
          if (data.status_message == 'user not found') {
            this.UserService.registerf({
              email: this.email,
              name: this.username,
              password: this.password,
              preference: this.preference,
              sex: this.sex,
              birthday: this.birthday,
              area: this.area,
              intro: 'hello world',
              minAge: this.birthday,
              maxAge: this.birthday,
            }).subscribe();
            this.router.navigate(['Login']);
          } else {
            this.hideLogin = false;
          }
        });
      } else {
        this.hide = false;
      }
  }else{
    this.hideEmail= false;
  }
}

}
