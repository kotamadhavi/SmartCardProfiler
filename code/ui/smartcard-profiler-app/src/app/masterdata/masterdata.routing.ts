import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ProfileCreateComponent } from './customer/profile-create/profile-create.component';
import { ProfileViewComponent } from './customer/profile-view/profile-view.component';

const routes: Routes = [
   {
    path:'', component: CustomerHomeComponent,
    pathMatch: 'full',
   }, {
      path:'customer-profile-create', component: ProfileCreateComponent
    },{
      path:'customer-profile-view/:id', component: ProfileViewComponent
    },{
      path:'customer-profile', component: CustomerHomeComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRouting { }
