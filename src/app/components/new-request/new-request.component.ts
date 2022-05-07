import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

interface LoadTypeInter {
  value: string;
  viewValue: string;
}

export interface DialogData {
  origin: any,
  loadingDate: any,
  destination: any,
  unloadingDate: any,
  weight: any,
  loadType: any
}

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  newRequestForm: FormGroup;
  toppingList: any;
  loadTypeList: LoadTypeInter[]= [];

  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private api:ApiService,
    private auth:AuthenticationService,
    public dialogRef: MatDialogRef<NewRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.newRequestForm = this._formBuilder.group({
      origin: ['', [Validators.required]],
      loadingDate: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      unloadingDate: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      value: ['', [Validators.required]],
      description: ['', [Validators.required]],
      proposedPrice: ['', [Validators.required]],
      receiverName: ['', [Validators.required]],
      receiverPhone: ['', [Validators.required]],
      truckClassificationRequirement: ['', [Validators.required]],
      loadType: ['', [Validators.required]],
    });
   }
  
  ngOnInit(): void {
    this.api.getClassifications().subscribe((res: any)=>{
      this.toppingList = res['list']
    });

    
    this.api.getLoadType().subscribe((res: any)=>{
      for (let i of res['list']){
        this.loadTypeList.push({value: i, viewValue: i})
      }
      
    });
  }

  newRequest(){
    // this.auth.newRequest(this.newRequestForm.value).subscribe((res: any)=>{
      this.data = {origin: "fnfbrfbf",loadingDate: "gfgnfg",destination: "fgnfngn",unloadingDate: "bdbnfn",weight: ",jk,",loadType: "fgbb"};
      this.dialogRef.close();
    // });

  }

}
