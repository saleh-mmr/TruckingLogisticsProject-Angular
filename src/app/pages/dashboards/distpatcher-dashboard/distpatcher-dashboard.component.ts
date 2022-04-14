import { Component, OnInit } from '@angular/core';
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
  },
  {
    columnDef: 'accept',
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
},
{
  columnDef: 'action',
  header: 'قبول درخواست',
  cell: (element: PeriodicElement) => `${element.cost}`,
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
