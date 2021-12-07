import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  flag1 = false;
  flag2 = false;
  testFlag1 = false;
  testFlag2 = false;
  constructor() { }


  changFlagToHistory(): void{
    this.flag1 = false;
    this.flag2 = false;
  }
  changFlagToTarget(): void{
    this.flag1 = true;
    this.flag2 = false;
  }
  changFlagToMission(): void{
    this.flag1 = false;
    this.flag2 = true;
  }
  changTestFlagToNext(): void{
    if (!this.testFlag1 && !this.testFlag2){
      this.testFlag1 = true;
    }
    else if (this.testFlag1 && !this.testFlag2){
      this.testFlag1 = false;
      this.testFlag2 = true;
    }
    else {
      this.testFlag1 = false;
      this.testFlag2 = false;
    }
  }
  changTestFlagToPrevious(): void{
    if (!this.testFlag1 && !this.testFlag2){
      this.testFlag2 = true;
    }
    else if (this.testFlag1 && !this.testFlag2){
      this.testFlag1 = false;
    }
    else {
      this.testFlag1 = true;
      this.testFlag2 = false;
    }
  }

  ngOnInit(): void {
  }

}
