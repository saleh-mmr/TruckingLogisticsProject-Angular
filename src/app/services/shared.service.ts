import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  type :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  phone:string="";
  img:any=null;
  isLogin=new BehaviorSubject<boolean>((localStorage.getItem('login')=='yes'? true:false ));

  constructor() { }

  getType(){
    return this.type.value;
  }

  setIsLogin(flag:boolean){
    if (flag) {
      localStorage.setItem('login','yes');
      this.isLogin.next(flag);
      return;
    }
    this.isLogin.next(flag);
    
    localStorage.setItem('login','no');
    console.log(localStorage.getItem('login'));
  }

  getIsLogin(){
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  setPhone(phone:string){
      localStorage.setItem('phone',phone);
      this.phone=phone;
  }

  getPhone():any{
    return localStorage.getItem('phone');
  }
  setImg(img:any){
    if (img) {
      localStorage.setItem(this.getPhone(),JSON.stringify(img));
    }
  }

  getImg():any{
    let img!:any;
    img=localStorage.getItem(this.getPhone());
    if (img) {
      return  JSON.parse(img);
    }
    return "";
  }

}
