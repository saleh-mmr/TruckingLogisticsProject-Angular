import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DetailData {
  tripId: any;
  origin: any;
  destination: any;
  loadingDate: any;
  unloadingDate: any;
  loadType: any;
  weight: any;
  carrierClass: any;
  carrierModel: any;
  carrierTag: string;
  driverPhone: any;
  driverName: any;
  tripStatus: any;
  proposedPrice: any
}

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TripDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetailData,
  ) { }
  
  ngOnInit(): void {
  }

}
