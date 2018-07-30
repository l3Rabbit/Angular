import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = '';

  constructor(private custService: CustomerService) {

  }
  private changeTitle() {
    this.title = 'new title';
  }


  ngOnInit() {}

  public get customerCount(): number {
    return this.custService.getCustomer.length;
  }
}
