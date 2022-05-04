import { SharedService } from 'src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
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
    cell: (element: PeriodicElement) => ``,
  }
]
imageSelected="";
imagePickerConf: ImagePickerConf = {
  borderRadius: '100px',
  language: 'en',
  width: '120px',
  height: '120px',
  hideDownloadBtn: true,
  hideAddBtn: true
};
phone="";
initialImage="";
  selected = 1;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.phone=this.shared.getPhone();
    this.initialImage=this.shared.getImg();
  }

  changeSelected(num:number){
    this.selected = num;
  }
  onImageChange($event:any){
    this.shared.setImg($event);
  }

}
