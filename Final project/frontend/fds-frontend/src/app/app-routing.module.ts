import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOrderStatusComponent } from './components/check-order-status/check-order-status.component';
import { ClientReportComponent } from './components/client-report/client-report.component';
import { DispatchOrderComponent } from './components/dispatch-order/dispatch-order.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSubmitComponent } from './components/order-submit/order-submit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'order-status',
    component: CheckOrderStatusComponent
  },
  {
    path: 'dispatch-order',
    component: DispatchOrderComponent
  },
  {
    path: 'report',
    component: ClientReportComponent
  },
  {
    path: 'create-order',
    component: OrderSubmitComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
