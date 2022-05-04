import { SharedService } from './../../../services/shared.service';
import { ApiService } from './../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  unamePattern = "[09]{2}[0-9]{9}";
  signInForm: FormGroup;
  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private api:ApiService,private shared:SharedService) {
    this.signInForm = this._formBuilder.group({
      fullName: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.shared.getType());
    
    if (this.shared.getType()) 
      this.router.navigate(['user-dashboard']);
    else 
      this.router.navigate(['dispatcher-dashboard']);
    
    this.shared.setIsLogin(true);
  }

  sendCodeViaEmail(){
      this.api.sendEmail();
  }
}
