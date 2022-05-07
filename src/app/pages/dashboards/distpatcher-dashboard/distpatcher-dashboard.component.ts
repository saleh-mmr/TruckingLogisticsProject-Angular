import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailModalComponent } from 'src/app/components/detail-modal/detail-modal.component';

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
  selector: 'app-distpatcher-dashboard',
  templateUrl: './distpatcher-dashboard.component.html',
  styleUrls: ['./distpatcher-dashboard.component.css']
})
export class DistpatcherDashboardComponent implements OnInit {
  truckList: any;
  avaliableRequestsList: any;
  phone="";
  fullName: any;
  initialImage="";
  selected: any;
  addTruckForm: FormGroup;
  detailResult: any;
  activeTrip: any;
  finishedTrip: any;
  tripStatus: any;
  avaliableRequestsListFlag: any;
  activeTripListFlag: any;
  finishedTripFlag: any;

  constructor(
    private router:Router,
    private _formBuilder: FormBuilder,
    private api:ApiService,
    private shared:SharedService,
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
    this.auth.getDriverInfo().subscribe((res:any)=>{
      this.phone = res['list']['driverPhone']
      this.fullName = res['list']['driverName']
    });
    this.auth.showTrucks().subscribe((res: any)=>{
      if(res['flag']){
        this.selected = 1;
      }
      else{
        this.selected = 4;
      }
    });
    this.auth.showRequestsForDriver().subscribe((result: any)=>{
      this.avaliableRequestsList = result['list'];
      this.avaliableRequestsListFlag = result['flag'];
    });
    this.initialImage=this.shared.getImg();
  }

  showRequestsForDriver(){
    this.selected = 1;
    this.auth.showRequestsForDriver().subscribe((result: any)=>{
      this.avaliableRequestsList = result['list'];
      this.avaliableRequestsListFlag = result['flag'];
    });
  }

  openDetailModal(parameter:any){
    this.auth.showDetailRequestForDriver({"request_id": parameter}).subscribe((requestDetail: any)=>{
      if (requestDetail['flag']){
        const dialogRef = this.dialog.open(DetailModalComponent, {
          width: '850px',
          data: requestDetail['rsp']
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    });
  }

  acceptRequest(parameter:any){
    this.auth.acceptRequest({"request_id": parameter}).subscribe((res: any)=>{
      location.reload();
    });
  }

  showActiveTrip(){
    this.selected = 2;
    this.auth.showActiveTrip().subscribe((res: any)=>{
      this.activeTrip = res['list'];
      this.activeTripListFlag = res['flag'];
    });
  }

  loadAnnouncement(data: any){
    this.auth.loadAnnouncement({'tripId': data.tripid}).subscribe((res:any)=>{
      data.status = "بارگیری شده";
    });

  }

  unloadAnnouncement(data: any, list:any){
    this.auth.unloadAnnouncement({'tripId': data.tripid}).subscribe((res:any)=>{
      list.pop();
      this.activeTripListFlag = false;      
    });
  }

  showFinishedTrip(){
    this.selected = 3;
    this.auth.showFinishedTrip().subscribe((res: any)=>{
      this.finishedTrip = res['list'];
      this.finishedTripFlag = res['flag'];
    });
  }

  showTrucks(){
    this.selected = 4;
    this.auth.showTrucks().subscribe((res: any)=>{
      this.truckList = res['list'];
    });
  }

  addTruck(){
    if(this.addTruckForm.valid){
      this.auth.addTruck(this.addTruckForm.value).subscribe((res: any)=>{
        this.truckList.push(this.addTruckForm.value);
        this.addTruckForm.controls.modal.setValue('');
        this.addTruckForm.controls.tag.setValue('');
        this.addTruckForm.controls.year.setValue('');
        this.addTruckForm.controls.classification.setValue('');
      });
    }

  }






  changeSelected(num:number){
    this.selected = num;
  }

  onImageChange($event:any){
    this.shared.setImg($event);
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
  },{
    columnDef: 'detail',
    header: '',
    cell: (element: PeriodicElement) => ``,}
  ]
  imageSelected="";
  imagePickerConf: ImagePickerConf = {
  borderRadius: '100px',
  language: 'en',
  width: '120px',
  height: '120px',
  hideDownloadBtn: true,
  hideAddBtn: true};

}
