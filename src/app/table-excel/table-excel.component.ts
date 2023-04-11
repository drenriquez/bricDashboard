import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-table-excel',
  templateUrl: './table-excel.component.html',
  styleUrls: ['./table-excel.component.scss']
})
export class TableExcelComponent implements OnInit {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  @Input() dataXlsx: any[]=[];


  // definisci la matrice di dati e l'intestazione
  data2 = [
    ['position', 'name', 'weight', 'symbol'],
    [1, 'Hydrogen', 1.0079, 'H'],
    [2, 'Helium', 4.0026, 'He'],
    [3, 'Lithium', 6.941, 'Li'],
    [4, 'Beryllium', 9.0122, 'Be'],
    [5, 'Boron', 10.81, 'B']
  ];
  data=this.dataService.getData()?this.dataService.getData():this.data2;
  saveData(data:string): void {
    this.dataService.setData(data);
  }

  loadData(): void {
    const data = this.dataService.getData();
    // usa i dati
    console.log(data[0]);
  }

}
