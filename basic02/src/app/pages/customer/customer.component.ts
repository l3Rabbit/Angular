import { Component, OnInit } from "@angular/core";

import { DataMode } from "../../shared/enum/data-mode.enum";
import { Customer } from "../../shared/model/customer";

import {CustomerService} from '../../shared/customer.service';
@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  // public customers = [];

  // public customers: Array<Customer>;
  public currentCustomer: Customer;

  public title: string;
  public displayCustomer(cust) {
    this.currentCustomer = cust;
  }

  // currentCustomerID: number = 0;
  // currentCustomerCode: string = '';
  // currentCustomerFirstname: string = '';
  // currentCustomerLastname: string = '';
  public mode = DataMode.View;
  constructor(private custService: CustomerService) {
    this.mode = DataMode.View;
    this.title = 'Customer Detail Title';
    // this.custService.loadCustomer();
  }
  ngOnInit() {}

  public get customers(): Array<Customer> {
    return this.custService.getCustomer;
  }
  // public loadCustomer() {
  //   //  this.customers = [];
  //   this.customers = new Array<Customer>();

  //      this.customers.push({id: 1, code: 'C01', firstname: 'bell', lastname: 'bangnue'});
  //      this.customers.push({id: 2, code: 'C02', firstname: 'bent', lastname: 'cs go'});
  //      this.customers.push({id: 3, code: 'C03', firstname: 'mean', lastname: 'code'});

  // }

  public addnew() {
    this.currentCustomer = new Customer();
    this.mode = DataMode.Add;
  }

  public get isEditMode() {
    // return (this.mode === DataMode.Add) || (this.mode === DataMode.Edit) ;
    return this.mode !== DataMode.View;
  }

  public cancelEdit() {
    this.mode = DataMode.View;

    // this.clearData();
  }
  public saveData() {
    // this.currentCustomerID = this.customers.length+1;
    // console.log(this.customers.length + 1);
    // console.log(this.customers[this.customers.length - 1].id + 1);
    // this.currentCustomerID = this.customers.length + 1;

    // if (this.mode === DataMode.Add) {
    //   this.currentCustomer.id = this.customers[this.customers.length - 1].id + 1;
    //   this.customers.push(this.currentCustomer);
    // }

    // this.customers.push({
    //   id: this.currentCustomerID,
    //   code: this.currentCustomerCode,
    //   firstname: this.currentCustomerFirstname,
    //   lastname: this.currentCustomerLastname
    // });
    // this.clearData();
    this.custService.saveNewCustomers(this.currentCustomer);
    this.mode = DataMode.View;
  }
  public clearData() {
    // this.currentCustomer = new Customer();
    // this.currentCustomerID = 0;
    // this.currentCustomerCode = '';
    // this.currentCustomerFirstname = '';
    // this.currentCustomerLastname = '';
  }
}
