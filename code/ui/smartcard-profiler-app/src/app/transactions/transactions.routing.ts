import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustTransactionsHomeComponent } from './customer/cust-transactions-home/cust-transactions-home.component';

const routes: Routes = [
   {
     path: '', component: CustTransactionsHomeComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRouting { }
