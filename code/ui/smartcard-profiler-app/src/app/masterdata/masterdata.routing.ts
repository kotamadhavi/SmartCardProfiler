import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';

const routes: Routes = [
   {
    path:'', component: CustomerHomeComponent,
    children: [
      {
        path:'', component: CustomerHomeComponent
      },{
        path:'customer-profile', component: CustomerHomeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRouting { }
