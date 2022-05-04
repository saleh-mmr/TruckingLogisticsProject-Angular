import { DetailModalComponent } from './../detail-modal/detail-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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
const ELEMENT_DATA: PeriodicElement[] = [
  {Negotiation: "قابل مذاکره", downloadDate: '1400/05/21', submitDate: '1400/05/22',
   typeOfLoad: 'شکستنی'
  , reciver: 'من', carType: 'خاور',
  source: 'زنجان - تهران', status: 'ثبت شده', deliveryDate: '1401/01/02'
  , averagePeyment: 20000, cost: 300000},
];
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @Input() columns !:any[];
  displayedColumns :any;
  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      this.displayedColumns =this.columns.map(c => c.columnDef);
    }, 500);
   }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData(){
    
  }

  openDetailModal(){
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '850px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

}
