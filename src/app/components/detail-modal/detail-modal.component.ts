import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  reqid: any;
  origin: any;
  destination: any;
  loadingDate: any;
  unloadingDate: any;
  loadType: any;
  weight: any;
  value: any;
  description: any;
  proposedPrice: any;
  receiverName: string;
  receiverPhone: any;
  senderPhone: any;
  senderName: any;
}
@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
