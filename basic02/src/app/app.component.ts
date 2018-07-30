import { Component } from '@angular/core';

import {Page} from './shared/enum/page.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isShowDG = false;

  public swapshowDG() {
    this.isShowDG = !this.isShowDG ;
  }
  public currentPage : Page;

  constructor() {
    this.currentPage = Page.Home;
  }

  public goHome() {
    console.log('Home');
    this.currentPage = Page.Home;
  }

  public goAbout() {
    console.log('About');
    this.currentPage = Page.About;
  }

  public goCustomers() {
    console.log('Customers');
    this.currentPage = Page.Customer;
  }

  public get isHomePage() {
    return this.currentPage === Page.Home;
  }

  public get isAboutPage() {
    return this.currentPage === Page.About;
  }

  public get isCustomerPage() {
    return this.currentPage === Page.Customer;
  }
}
