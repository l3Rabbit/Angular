import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { HomeComponent } from './pages/home/home.component';

import { FormsModule } from '@angular/forms';
import { DatagridviewComponent } from './components/datagridview/datagridview.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { AboutComponent } from './pages/about/about.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomeComponent,
    DatagridviewComponent,
    CustomerComponent,
    AboutComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
