import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';

const routes: Routes = [
   {
    path:'customer',
    children: [
      {
        path:'', component: CustomerHomeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRouting { }
