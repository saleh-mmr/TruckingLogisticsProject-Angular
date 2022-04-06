import { SharedService } from './../../../services/shared.service';
import { ApiService } from './../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dispatcher-sign-in',
  templateUrl: './dispatcher-sign-in.component.html',
  styleUrls: ['./dispatcher-sign-in.component.css']
})
export class DispatcherSignInComponent implements OnInit {
  unamePattern = "[09]{2}[0-9]{9}";
  signInForm: FormGroup;
  constructor(private shared:SharedService,private router:Router,private _formBuilder: FormBuilder,private api:ApiService) {
    this.signInForm = this._formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(this.unamePattern)]]
    });
   }

  ngOnInit(): void {
    this.shared.setType(false);
  }
  signIn(){
    this.router.navigate(['sign-in/info']);
  }

  sendCodeViaEmail(){
      this.api.sendEmail();
  }

}
