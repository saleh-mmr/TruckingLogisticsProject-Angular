import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mainAddress = 'http://127.0.0.1:8000'
  private messageSource = new BehaviorSubject<any>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {  }

  signUp(data: any) {
    return this.http.post(`${this.mainAddress}/signup/`, data);
  }

  getClassifications() {
    return this.http.get(`${this.mainAddress}/get-class/`);
  }

  getLoadType() {
    return this.http.get(`${this.mainAddress}/get-load/`);
  }

  getNumbers() {
    return this.http.get(`${this.mainAddress}/get-numbers/`);
  }

  // tslint:disable-next-line:typedef
  changeMessage(message: any){
    this.messageSource.next(message);
  }

  sendEmail() {
    return this.http.post(`${this.mainAddress}/usercheck/`, { name: "سامانه ماترو", replyto: "alinadirkhanlo.98@gmail.com", message: "365468 , 987663 , 456658 , 158323 , 998325" } );
  }


  
  usercheck(data: any) {
    return this.http.post(`${this.mainAddress}/usercheck/`, { pnumber: data } );
  }  


  codecheck(data: any) {
    return this.http.post(`${this.mainAddress}/codecheck/`, { code: data } );
  }




}
