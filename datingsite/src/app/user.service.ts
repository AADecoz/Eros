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
postUrl="http://localhost:8000/api/register";
loginUrl="http://localhost:8000/api/login";
feedUrl="http://localhost:8000/api/feed";
matchUrl="http://localhost:8000/api/match";
likeUrl="http://localhost:8000/api/like";
saveUrl="http://localhost:8000/api/upload";
updateUrl="http://localhost:8000/api/update";
verifyUrl ="http://localhost:8000/api/verify";
showChatUrl="http://localhost:8000/api/showChat";
sendChatUrl="http://localhost:8000/api/sendChat";
deleteMatchUrl="http://localhost:8000/api/deleteMatch";
alertUrl="http://localhost:8000/api/alert";
deleteProfileUrl="http://localhost:8000/api/deleteProfile"
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
    return this.http.post(this.loginUrl,data,{responseType:'json'});
  }
  feedf(data:object):Observable<any>{
      return this.http.post(this.feedUrl,data,{responseType:'json'});
  }
  matchesf(data:object):Observable<any>{
    return this.http.post(this.matchUrl,data,{responseType:'json'});
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
    return this.http.post(this.updateUrl,data,{responseType: 'json',});
  }
  showChatf(data:object):Observable<any>{
    return this.http.post(this.showChatUrl,data,{responseType:'json'});
  }

  sendChatf(data:object):Observable<any>{
    return this.http.post(this.sendChatUrl,data,{responseType:'json'});
  }

  deleteMatchf(data:object):Observable<any>{
    return this.http.post(this.deleteMatchUrl,data,{responseType:'json'});
  }

  alertf(data:object):Observable<any>{
    return this.http.post(this.alertUrl,data,{responseType:'json'});
  }
  
  deleteProfilef(data:object):Observable<any>{
    return this.http.post(this.deleteProfileUrl,data,{responseType:'json'});
  }


  private messageSource = new BehaviorSubject<object>({"id":"test" });
  currentMessage = this.messageSource.asObservable();

  
  changeData(message: object) {
    this.messageSource.next(message)
  }

 
}
