import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
dataChat:object={'data':'geen input'};
user = "";
path="";
postUrl="https://oedipusapi.tk/api/register";
loginUrl="https://oedipusapi.tk/api/login";
feedUrl="https://oedipusapi.tk/api/feed";
matchUrl="https://oedipusapi.tk/api/match";
likeUrl="https://oedipusapi.tk/api/like";
saveUrl="https://oedipusapi.tk/api/upload";
updateUrl="https://oedipusapi.tk/api/update";
verifyUrl ="https://oedipusapi.tk/api/verify";
showChatUrl="https://oedipusapi.tk/api/showChat";
sendChatUrl="https://oedipusapi.tk/api/sendChat";
deleteMatchUrl="https://oedipusapi.tk/api/deleteMatch";
alertUrl="https://oedipusapi.tk/api/alert";
deleteProfileUrl="https://oedipusapi.tk/api/deleteProfile";
verifyEmailUrl="https://oedipusapi.tk/api/verifyEmail"
header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type'
}



constructor(private http:HttpClient) { }
  registerf(data:object):Observable<any>{
    return this.http.post(this.postUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }

  verifyf(data:object):Observable<any>{
    return this.http.post(this.verifyUrl,data,{headers: new HttpHeaders(this.header),responseType:'json'})
  }

  signinf(data:object):Observable<any>{
    return this.http.post(this.loginUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }
  feedf(data:object):Observable<any>{
      return this.http.post(this.feedUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }
  matchesf(data:object):Observable<any>{
    return this.http.post(this.matchUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }
  likef(data:object):Observable<any>{
    return this.http.post(this.likeUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }
  savef(data:object):Observable<any>{
    return this.http.post(this.saveUrl,data,{headers: new HttpHeaders({
    'enctype': 'multipart/form-data'})});
  }
  
  // {headers:{ 'Content-Type':'file'},responseType:'json'});
  updatef(data:object):Observable<any>{
    return this.http.post(this.updateUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }
  showChatf(data:object):Observable<any>{
    return this.http.post(this.showChatUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }

  sendChatf(data:object):Observable<any>{
    return this.http.post(this.sendChatUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }

  deleteMatchf(data:object):Observable<any>{
    return this.http.post(this.deleteMatchUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }

  alertf(data:object):Observable<any>{
    return this.http.post(this.alertUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }
  
  deleteProfilef(data:object):Observable<any>{
    return this.http.post(this.deleteProfileUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }

  verifyEmailf(data:object):Observable<any>{
    return this.http.post(this.verifyEmailUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
  }


  private messageSource = new BehaviorSubject<object>({"id":"test","name":"placeholder" });
  currentMessage = this.messageSource.asObservable();

  
  changeData(message: object) {
    this.messageSource.next(message)
  }

 
}
