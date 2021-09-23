import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
user = "";
path="";
postUrl="http://localhost:8000/api/register";
loginUrl="http://localhost:8000/api/login";
feedUrl="http://localhost/apis/feedAPI.php";
matchUrl="http://localhost/apis/matchAPI.php";
likeUrl="http://localhost/apis/likeAPI.php";
saveUrl="http://localhost/apis/save.php";
updateUrl="http://localhost/apis/updateAPI.php";
  header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

constructor(private http:HttpClient) { }
  registerf(data:object):Observable<any>{
    return this.http.post(this.postUrl,data,{headers: new HttpHeaders(this.header) ,responseType: 'json'});
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
    return this.http.post(this.likeUrl,data,{responseType:'json'});
  }
  savef(data:object):Observable<any>{
    return this.http.post(this.saveUrl,data,{responseType:'json'})
  }
  updatef(data:object):Observable<any>{
    return this.http.post(this.updateUrl,data,{responseType: 'json'});
  }
}
