import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { TripDetailComponent } from 'src/app/components/trip-detail/trip-detail.component';
import { NewRequestComponent } from 'src/app/components/new-request/new-request.component';

interface PeriodicElement {
  Negotiation?: string;
  downloadDate?: string;
  submitDate?: string;
  typeOfLoad?: string;
  reciver?: string;
  carType?: string;
  source?: string;
  status?: string;
  deliveryDate?:string;
  averagePeyment?:number;
  cost?: number;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  truckList: any;
  phone="";
  fullName: any;
  initialImage="";
  selected: any;
  addTruckForm: FormGroup;
  detailResult: any;
  activeTrip: any;
  finishedTrip: any;
  tripStatus: any;
  notAcceptedRequestsList: any;
  notAcceptedRequestsListFlag: any;
  AcceptedRequestsList: any;
  AcceptedRequestsListFlag: any;
  FinishedRequestsList: any;
  FinishedRequestsListFlag: any;

  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private api:ApiService,
    private auth:AuthenticationService,
    public dialog: MatDialog
  ) {
    this.addTruckForm = this._formBuilder.group({
      model: ['', [Validators.required]],
      tag: ['', [Validators.required]],
      year: ['', [Validators.required]],
      classification: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.auth.notAcceptedRequestsList().subscribe((res: any)=>{
      this.notAcceptedRequestsList = res['list'];
      this.notAcceptedRequestsListFlag = res['flag'];
    });
    this.auth.AcceptedRequestsList().subscribe((res: any)=>{
      this.AcceptedRequestsList = res['list'];
      this.AcceptedRequestsListFlag = res['flag'];
    });
    this.auth.showApplicantFinishedTripList().subscribe((res: any)=>{
      this.FinishedRequestsList = res['list'];
      this.FinishedRequestsListFlag = res['flag'];
    });
  }

  showTripDetails(parameter:any){
    console.log({"trip_id": parameter});
    this.auth.showTripDetailsForApplicant({"trip_id": parameter}).subscribe((res: any)=>{
      const dialogRef = this.dialog.open(TripDetailComponent, {
        width: '850px',
        data: res['rsp']
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

  newRequest(){
      const dialogRef = this.dialog.open(NewRequestComponent, {
        width: '1100px',
        data: {origin: "",loadingDate: "",destination: "",unloadingDate: "",weight: "",loadType: ""}
      });
      dialogRef.afterClosed().subscribe(result => {
        location.reload();
      });
  }






























  tab1=[
    {
    columnDef: 'Negotiation',
    header: 'مذاکره',
    cell: (element: PeriodicElement) => `${element.Negotiation}`,
  },
  {
    columnDef: 'downloadDate',
    header: 'تاریخ بارگیری',
    cell: (element: PeriodicElement) => `${element.downloadDate}`,
  },
  {
    columnDef: 'submitDate',
    header: 'تاریخ ثبت بار',
    cell: (element: PeriodicElement) => `${element.submitDate}`,
  },
  {
    columnDef: 'typeOfLoad',
    header: 'نوع بار',
    cell: (element: PeriodicElement) => `${element.typeOfLoad}`,
  },
  {
    columnDef: 'reciver',
    header: 'گیرنده',
    cell: (element: PeriodicElement) => `${element.reciver}`,
  },
  {
    columnDef: 'carType',
    header: 'نوع ماشین',
    cell: (element: PeriodicElement) => `${element.carType}`,
  },
  {
    columnDef: 'source',
    header: 'مبدا - مقصد',
    cell: (element: PeriodicElement) => `${element.source}`,
  },
  {
    columnDef: 'status',
    header: 'وضعیت',
    cell: (element: PeriodicElement) => `${element.status}`,
  },
  {
    columnDef: 'cost',
    header: 'مبلغ پیشنهادی (تومان)',
    cell: (element: PeriodicElement) => `${element.cost}`,
  },
  {
    columnDef: 'delete',
    header: '',
    cell: (element: PeriodicElement) => `${element.cost}`,
  }
]
tab3=[
  {
  columnDef: 'Negotiation',
  header: 'مذاکره',
  cell: (element: PeriodicElement) => `${element.Negotiation}`,
},
{
  columnDef: 'downloadDate',
  header: 'تاریخ بارگیری',
  cell: (element: PeriodicElement) => `${element.downloadDate}`,
},
{
  columnDef: 'submitDate',
  header: 'تاریخ ثبت بار',
  cell: (element: PeriodicElement) => `${element.submitDate}`,
},
{
  columnDef: 'typeOfLoad',
  header: 'نوع بار',
  cell: (element: PeriodicElement) => `${element.typeOfLoad}`,
},
{
  columnDef: 'reciver',
  header: 'گیرنده',
  cell: (element: PeriodicElement) => `${element.reciver}`,
},
{
  columnDef: 'carType',
  header: 'نوع ماشین',
  cell: (element: PeriodicElement) => `${element.carType}`,
},
{
  columnDef: 'source',
  header: 'مبدا - مقصد',
  cell: (element: PeriodicElement) => `${element.source}`,
},
{
  columnDef: 'status',
  header: 'وضعیت',
  cell: (element: PeriodicElement) => `${element.status}`,
},
{
  columnDef: 'cost',
  header: 'مبلغ پیشنهادی (تومان)',
  cell: (element: PeriodicElement) => `${element.cost}`,
},
{
  columnDef: 'reject',
  header: '',
  cell: (element: PeriodicElement) => `${element.cost}`,
}
]
tab2=[
  {
  columnDef: 'Negotiation',
  header: 'مذاکره',
  cell: (element: PeriodicElement) => `${element.Negotiation}`,
},
{
  columnDef: 'downloadDate',
  header: 'تاریخ بارگیری',
  cell: (element: PeriodicElement) => `${element.downloadDate}`,
},
{
  columnDef: 'submitDate',
  header: 'تاریخ ثبت بار',
  cell: (element: PeriodicElement) => `${element.submitDate}`,
},
{
  columnDef: 'typeOfLoad',
  header: 'نوع بار',
  cell: (element: PeriodicElement) => `${element.typeOfLoad}`,
},
{
  columnDef: 'reciver',
  header: 'گیرنده',
  cell: (element: PeriodicElement) => `${element.reciver}`,
},
{
  columnDef: 'carType',
  header: 'نوع ماشین',
  cell: (element: PeriodicElement) => `${element.carType}`,
},
{
  columnDef: 'source',
  header: 'مبدا - مقصد',
  cell: (element: PeriodicElement) => `${element.source}`,
},
{
  columnDef: 'status',
  header: 'وضعیت',
  cell: (element: PeriodicElement) => `${element.status}`,
},
{
  columnDef: 'deliveryDate',
  header: 'تاریخ تحویل',
  cell: (element: PeriodicElement) => `${element.deliveryDate}`,
},
{
  columnDef: 'averagePeyment',
  header: 'میانگین پرداختی (تومان)',
  cell: (element: PeriodicElement) => `${element.averagePeyment}`,
},
{
  columnDef: 'cost',
  header: 'مبلغ پیشنهادی (تومان)',
  cell: (element: PeriodicElement) => `${element.cost}`,
}
]


}
