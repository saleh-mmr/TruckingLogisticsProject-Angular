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
  initialImage="";
  selected = 1;
  addTruckForm: FormGroup;
  detailResult: any;
  activeTrip: any;

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
    this.auth.showTrucks().subscribe((res: any)=>{
      this.truckList = res['list'];
    });
    this.auth.showRequestsForDriver().subscribe((result: any)=>{
      this.avaliableRequestsList = result['list'];
      console.log(this.avaliableRequestsList);
    });
    this.phone=this.shared.getPhone();
    this.initialImage=this.shared.getImg();
  }

  addTruck(){
    if(this.addTruckForm.valid){
      this.auth.addTruck(this.addTruckForm.value).subscribe((res: any)=>{
      });
    }

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
    this.changeSelected(2);
    this.auth.showActiveTrip().subscribe((res: any)=>{
      this.activeTrip = res['list'];
      console.log(this.activeTrip);
    });
  }


  loadAnnouncement(data: any){
    this.auth.loadAnnouncement({'tripId': data}).subscribe((res:any)=>{
      
    });
  }

  unloadAnnouncement(data: any){
    this.auth.unloadAnnouncement({'tripId': data}).subscribe((res:any)=>{
      
    });
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
