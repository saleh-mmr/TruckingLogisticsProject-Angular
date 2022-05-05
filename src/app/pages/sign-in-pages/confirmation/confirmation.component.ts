import { ApiService } from './../../../services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  unamePattern = "[0-9]";
  signInForm: FormGroup;
  constructor(private router:Router,private _formBuilder: FormBuilder ,private auth:AuthenticationService,private shared:SharedService) {
    this.signInForm = this._formBuilder.group({
      pass: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  submit(){
    this.auth.signIn({"user": localStorage.getItem('phone'), "pass": this.signInForm.controls.pass.value}).subscribe((res: any)=>{
      console.log(res);
      if (res["type"]) {
        this.router.navigate(['/driver-dashboard']);
      }
      else{
        this.router.navigate(['/applicant-dashboard']);
      } 
    });
  }

}