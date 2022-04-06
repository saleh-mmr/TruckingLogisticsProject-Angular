import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  unamePattern = "[09]{2}[0-9]{9}";
  signInForm: FormGroup;
  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private api:ApiService,private shared:SharedService
    ) {
    this.signInForm = this._formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      flag:false
    });
   }

  ngOnInit(): void {
    this.shared.setType(true);
  }
  signIn(){
    this.api.sendEmail().subscribe((res: any)=>{
      console.log(res); 
    });
    this.router.navigate(['sign-in/confirmation']);
  }


  get phoneNumber() {
    return this.signInForm.get('phoneNumber');
  }
  get phoneNumberValue():number {
    return this.signInForm.get('phoneNumber')?.value.length;
  }

  get flag() {
    return this.signInForm.get('flag')?.value;
  }

}
