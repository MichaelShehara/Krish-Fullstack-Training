import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { LoginComponent } from './components/login/login.component';
import { OrderSubmitComponent } from './components/order-submit/order-submit.component';
import { CheckOrderStatusComponent } from './components/check-order-status/check-order-status.component';
import { DispatchOrderComponent } from './components/dispatch-order/dispatch-order.component';
import { ClientReportComponent } from './components/client-report/client-report.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderSubmitComponent,
    LoginComponent,
    CheckOrderStatusComponent,
    DispatchOrderComponent,
    ClientReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
