import { Injectable } from '@angular/core';

import {Customer} from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
    this.customers = new Array<Customer>();
    this.loadCustomer();
   }
  private customers: Array<Customer>;

public get getCustomer(): Array<Customer> {
  return this.customers;
}
// public loadCustomer(): Array<Customer> {
   public loadCustomer(){

    this.customers.length = 0;
    this.customers.push({id: 1, code: 'C01', firstname: 'bell', lastname: 'bangnue'});
    this.customers.push({id: 2, code: 'C02', firstname: 'bent', lastname: 'cs go'});
    this.customers.push({id: 3, code: 'C03', firstname: 'mean', lastname: 'code'});

     // return this.customers;

  }
  public saveNewCustomers(newCust: Customer):boolean {
    if (newCust.id === 0) {
      newCust.id = this.customers[this.customers.length - 1].id + 1;
      this.customers.push(newCust);
    }
    return true;
  }
}
