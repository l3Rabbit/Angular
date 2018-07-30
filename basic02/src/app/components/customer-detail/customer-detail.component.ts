import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../shared/model/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input('customer')cust: Customer;
  @Input('title')title: string;

  constructor() {
    this.title = 'Customer Detail';
  }

  ngOnInit() {
  }
public get hasData(): boolean {
  return this.cust != null;
}
}
