import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  type :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  getType(){
    return this.type.value;
  }

  setType(type:boolean){
    this.type.next(type);
  }
}
