import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagridview',
  templateUrl: './datagridview.component.html',
  styleUrls: ['./datagridview.component.css']
})
export class DatagridviewComponent implements OnInit {

 customers = [];


  constructor() {
    this.loadData();
  console.log(this.customers);


  }

  ngOnInit() {
  }

  private loadData() {
    this.customers = [];
    this.customers.push({id: 1 , code: 'c001', firstname: 'pum', lastname: 'boo'});
    this.customers.push({id: 2 , code: 'c002', firstname: 'je', lastname: 'Bat'});
    this.customers.push({id: 1 , code: 'c001', firstname: 'Mos', lastname: 'Pichet'});

  }

}
