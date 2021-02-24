import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { MasterDataRouting } from './masterdata.routing';
import { ProfileViewComponent } from './customer/profile-view/profile-view.component';
import { ProfileCreateComponent } from './customer/profile-create/profile-create.component';



@NgModule({
  declarations: [CustomerHomeComponent, ProfileViewComponent, ProfileCreateComponent],
  imports: [
    CommonModule,
    MasterDataRouting
  ]
})
export class MasterdataModule { }
