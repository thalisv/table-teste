import { Component, Input, OnInit } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit {
  @Input() listHeader: any;
  @Input() tableContent: any = [];

  displayedColumns: any;

  dataSource = this.tableContent;
  constructor() { }

  ngOnInit() {
    this.generateHeader(this.listHeader);
    this.tableContent = [{
      nome: 'bem-te-vi', idade: 666, cidade: 'inferno'
    }];
    console.log(this.tableContent)
  }

  generateHeader(header: any): void {
    if (header) {
      if (header.length > 1) {
        const list = header.split(',').map((item: any) => item.trim());
        this.displayedColumns = list;
        console.log(list);
        return this.listHeader
      }
      else {
        return this.listHeader
      }
    }
  }

  clickItem(item: any) {
    console.log(item.target.value);
    // console.log(this.dataSource)
  }


}