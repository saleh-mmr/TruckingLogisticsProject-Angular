import { ApiService } from './../../../services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  unamePattern = "[0-9]";
  signInForm: FormGroup;
  constructor(private router:Router,private _formBuilder: FormBuilder ,private api:ApiService) {
    this.signInForm = this._formBuilder.group({
      code: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['sign-in/info']);
  }

  sendCodeViaEmail(){
      this.api.sendEmail();
  }

}
