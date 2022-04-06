import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private messageSource = new BehaviorSubject<any>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {  }






  // tslint:disable-next-line:typedef
  changeMessage(message: any){
    this.messageSource.next(message);
  }

  sendEmail() {
    return this.http.post('https://mailthis.to/alinadirkhanlo.98@gmail.com', { name: "سامانه ماترو", replyto: "alinadirkhanlo.98@gmail.com", message: "365468 , 987663 , 456658 , 158323 , 998325" } );
  }



}
