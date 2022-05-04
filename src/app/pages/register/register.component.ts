import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUnForm: FormGroup;
  userSignIn: any;
  passSignIn: any;
  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private api:ApiService,private auth:AuthenticationService
    ) {
    this.signUnForm = this._formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      pnumber: ['', [Validators.required]],
      type: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
    });
   } 

  ngOnInit(): void {
    if(localStorage.getItem('phone')){
      this.signUnForm.controls.pnumber.setValue(localStorage.getItem('phone'))
    }
  }

  signUp(){
    if(this.signUnForm.invalid){
      console.log("WRONG!")
    }
    else{
      this.api.signUp(this.signUnForm.value).subscribe((res: any)=>{
        this.userSignIn = this.signUnForm.controls.pnumber.value;
        this.passSignIn = this.signUnForm.controls.password.value;
        if(res["flag"]){
          this.auth.signIn({"user": this.userSignIn, "pass": this.passSignIn}).subscribe((result: any)=>{
            console.log(result);
            if (result.access){
              if(result["type"]){
                this.router.navigate(['/driver-dashboard']);
              }
              else{
                this.router.navigate(['/applicant-dashboard']);
              }
            }
          })
        }
      });
    }
  }


}
